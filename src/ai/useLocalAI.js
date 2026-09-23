import { useState, useEffect, useRef } from 'react';
import { AI_MODELS, DEFAULT_MODEL_ID } from './models';
import {
  downloadId,
  getRegistration,
  isModelCached,
  startModelDownload,
} from './backgroundDownload';

// Estado compartido de la IA local (elección de modelo, descarga en segundo
// plano, carga y generación). Lo usan el AI Tense Corrector y la práctica de
// emails con IA.

const MODEL_STORAGE_KEY = 'aiCorrectorModel';
const DEVICE_STORAGE_KEY = 'aiDevicePreference';

// 'auto' = GPU si hay (más rápido) | 'wasm' = solo CPU (más lento, más fluido)
const getSavedDevicePreference = () => {
  try {
    return localStorage.getItem(DEVICE_STORAGE_KEY) === 'wasm'
      ? 'wasm'
      : 'auto';
  } catch {
    return 'auto';
  }
};

const getSavedModelId = () => {
  try {
    const saved = localStorage.getItem(MODEL_STORAGE_KEY);
    if (AI_MODELS.some((m) => m.id === saved)) return saved;
  } catch {
    // Sin localStorage: usar el modelo por defecto
  }
  return DEFAULT_MODEL_ID;
};

const useLocalAI = () => {
  const [modelId, setModelId] = useState(getSavedModelId);
  const [devicePreference, setDevicePreference] = useState(
    getSavedDevicePreference
  );
  // idle | downloading (en segundo plano) | loading | ready | working
  const [status, setStatus] = useState('idle');
  const [bgProgress, setBgProgress] = useState(null);
  const [bgSupported, setBgSupported] = useState(false);
  const [progress, setProgress] = useState({});
  const [device, setDevice] = useState(null);
  const [partial, setPartial] = useState('');
  const [generation, setGeneration] = useState(null); // { startedAt, tokens }
  const [error, setError] = useState(null);

  const workerRef = useRef(null);
  const pendingRef = useRef(null); // { resolve, reject } de la generación en curso
  const readyRef = useRef(false);
  const modelIdRef = useRef(modelId);
  const devicePreferenceRef = useRef(devicePreference);
  const partialRef = useRef('');
  const stopTimerRef = useRef(null);
  const bgFetchRef = useRef(null);

  const getWorker = () => {
    if (!workerRef.current) {
      const worker = new Worker(new URL('./aiWorker.js', import.meta.url), {
        type: 'module',
      });

      worker.addEventListener('message', ({ data }) => {
        if (data.type === 'progress') {
          setProgress((prev) => ({
            ...prev,
            [data.file]: { loaded: data.loaded, total: data.total },
          }));
        } else if (data.type === 'ready') {
          readyRef.current = true;
          setDevice(data.device);
          setStatus(pendingRef.current ? 'working' : 'ready');
        } else if (data.type === 'partial') {
          partialRef.current = data.text;
          setPartial(data.text);
          setGeneration((prev) => prev && { ...prev, tokens: data.tokens });
        } else if (data.type === 'result') {
          clearTimeout(stopTimerRef.current);
          pendingRef.current?.resolve(data.text);
          pendingRef.current = null;
          setPartial('');
          setGeneration(null);
          setStatus('ready');
        } else if (data.type === 'error') {
          clearTimeout(stopTimerRef.current);
          setGeneration(null);
          pendingRef.current?.reject(new Error(data.message));
          pendingRef.current = null;
          setError(data.message);
          setStatus(readyRef.current ? 'ready' : 'idle');
        }
      });

      workerRef.current = worker;
    }
    return workerRef.current;
  };

  useEffect(() => {
    return () => workerRef.current?.terminate();
  }, []);

  const startWorkerLoad = () => {
    setBgProgress(null);
    setStatus('loading');
    getWorker().postMessage({
      type: 'load',
      modelId: modelIdRef.current,
      device: devicePreferenceRef.current,
    });
  };

  const stopWatchingDownload = () => {
    if (bgFetchRef.current) {
      bgFetchRef.current.onprogress = null;
      bgFetchRef.current = null;
    }
  };

  const watchDownload = (bgFetch) => {
    stopWatchingDownload();
    bgFetchRef.current = bgFetch;
    const update = () =>
      setBgProgress({
        downloaded: bgFetch.downloaded,
        total: bgFetch.downloadTotal,
      });
    update();
    bgFetch.onprogress = update;
    setStatus('downloading');
  };

  // Si hay una descarga en segundo plano de este modelo, seguir mostrándola
  useEffect(() => {
    modelIdRef.current = modelId;
    let cancelled = false;
    getRegistration()
      .then(async (registration) => {
        if (cancelled) return;
        setBgSupported(Boolean(registration));
        const bgFetch = await registration?.backgroundFetch.get(
          downloadId(modelId)
        );
        if (!cancelled && bgFetch && !readyRef.current) watchDownload(bgFetch);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      stopWatchingDownload();
    };
  }, [modelId]);

  // El service worker avisa cuando terminó (o falló) la descarga
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return undefined;
    const onMessage = ({ data }) => {
      if (data?.id !== downloadId(modelIdRef.current)) return;
      stopWatchingDownload();
      if (data.type === 'ai-model-downloaded') {
        startWorkerLoad();
      } else if (data.type === 'ai-model-download-failed') {
        setBgProgress(null);
        setError(
          data.failureReason === 'aborted'
            ? 'Se canceló la descarga.'
            : 'La descarga falló. Revisá la conexión y el espacio libre, y probá de nuevo.'
        );
        setStatus('idle');
      }
    };
    navigator.serviceWorker.addEventListener('message', onMessage);
    return () =>
      navigator.serviceWorker.removeEventListener('message', onMessage);
  }, []);

  const selectedModel = AI_MODELS.find((m) => m.id === modelId);
  const isBusy = status === 'loading' || status === 'working';

  // Cierra el worker (libera la memoria del modelo); hay que volver a cargarlo
  const resetWorker = () => {
    workerRef.current?.terminate();
    workerRef.current = null;
    readyRef.current = false;
    pendingRef.current = null;
    setDevice(null);
    setProgress({});
    setPartial('');
    setGeneration(null);
    setError(null);
    setStatus('idle');
  };

  const savePreference = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // No se pudo guardar la preferencia; se usa solo en esta sesión
    }
  };

  // Al cambiar de modelo se cierra el worker para liberar la memoria del anterior
  const changeModel = (id) => {
    if (id === modelId || isBusy) return;
    // Una descarga en segundo plano sigue aunque cambies de modelo
    stopWatchingDownload();
    setBgProgress(null);
    savePreference(MODEL_STORAGE_KEY, id);
    resetWorker();
    setModelId(id);
  };

  // GPU (auto) o solo CPU: hay que recargar el modelo con el otro procesador
  const changeDevicePreference = (preference) => {
    if (preference === devicePreference || isBusy) return;
    savePreference(DEVICE_STORAGE_KEY, preference);
    devicePreferenceRef.current = preference;
    setDevicePreference(preference);
    if (readyRef.current) {
      resetWorker();
      startWorkerLoad();
    }
  };

  const loadModel = async () => {
    setError(null);
    // Con Background Fetch la descarga sigue aunque cambies de app
    try {
      const registration = await getRegistration();
      if (registration && !(await isModelCached(modelId))) {
        const bgFetch = await startModelDownload(
          registration,
          modelId,
          `Descargando IA para inglés (${selectedModel.name})`
        );
        if (bgFetch) {
          watchDownload(bgFetch);
          return;
        }
      }
    } catch {
      // Si Background Fetch falla, se descarga desde la página
    }
    startWorkerLoad();
  };

  // Genera una respuesta. Si el modelo no está listo y se puede descargar en
  // segundo plano, arranca esa descarga y devuelve null (hay que volver a pedir).
  const generate = (messages, { maxNewTokens = 300 } = {}) => {
    if (isBusy || status === 'downloading') return Promise.resolve(null);
    if (!readyRef.current && bgSupported) {
      loadModel();
      return Promise.resolve(null);
    }
    setError(null);
    setPartial('');
    partialRef.current = '';
    setGeneration({ startedAt: Date.now(), tokens: 0 });
    setStatus(readyRef.current ? 'working' : 'loading');
    return new Promise((resolve, reject) => {
      pendingRef.current = { resolve, reject };
      getWorker().postMessage({
        type: 'generate',
        modelId: modelIdRef.current,
        device: devicePreferenceRef.current,
        messages,
        maxNewTokens,
      });
    }).catch(() => null);
  };

  // Detiene la generación y devuelve lo que se escribió hasta ahora. Si el
  // worker no responde (p. ej. con CPU no atiende mensajes mientras calcula),
  // se cierra y se usa el texto parcial; el modelo se recarga desde la caché.
  const stop = () => {
    if (status !== 'working' || !workerRef.current) return;
    workerRef.current.postMessage({ type: 'interrupt' });
    clearTimeout(stopTimerRef.current);
    stopTimerRef.current = setTimeout(() => {
      if (!pendingRef.current) return;
      const pending = pendingRef.current;
      const text = partialRef.current;
      resetWorker();
      pending.resolve(text || null);
      // Recargar el modelo (ya está en la caché, no se vuelve a descargar)
      startWorkerLoad();
    }, 1500);
  };

  const files = Object.values(progress);
  const loaded = files.reduce((sum, f) => sum + (f.loaded || 0), 0);
  const total = files.reduce((sum, f) => sum + (f.total || 0), 0);

  return {
    models: AI_MODELS,
    modelId,
    selectedModel,
    changeModel,
    status,
    isBusy,
    isReady: Boolean(device),
    device,
    bgSupported,
    bgProgress,
    loadProgress: {
      loaded,
      total,
      percent: total ? Math.round((loaded / total) * 100) : 0,
    },
    devicePreference,
    changeDevicePreference,
    partial,
    generation,
    error,
    loadModel,
    generate,
    stop,
  };
};

export default useLocalAI;
