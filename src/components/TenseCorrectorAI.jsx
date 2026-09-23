import React, { useState, useEffect, useRef } from 'react';
import { AI_MODELS, DEFAULT_MODEL_ID } from '../ai/models';
import {
  downloadId,
  getRegistration,
  isModelCached,
  startModelDownload,
} from '../ai/backgroundDownload';

const TENSES = [
  'Present Simple',
  'Present Continuous',
  'Present Perfect',
  'Present Perfect Continuous',
  'Past Simple',
  'Past Continuous',
  'Past Perfect',
  'Past Perfect Continuous',
  'Future Simple (will)',
  'Future (going to)',
  'Future Continuous',
  'Future Perfect',
  'Future Perfect Continuous',
  'First Conditional',
  'Second Conditional',
  'Third Conditional',
  'Mixed tenses',
];

const PROMPTS = {
  'Present Simple': 'Describe your daily routine.',
  'Present Continuous': 'What are you doing right now?',
  'Present Perfect': 'Talk about things you have done in your life.',
  'Present Perfect Continuous': 'What have you been doing lately?',
  'Past Simple': 'What did you do last weekend?',
  'Past Continuous': 'What were you doing yesterday at 8 pm?',
  'Past Perfect': 'What had happened before you arrived at work today?',
  'Past Perfect Continuous': 'What had you been doing before you started learning English?',
  'Future Simple (will)': 'What do you think the world will be like in 2050?',
  'Future (going to)': 'What are you going to do next holiday?',
  'Future Continuous': 'What will you be doing this time tomorrow?',
  'Future Perfect': 'What will you have achieved in five years?',
  'Future Perfect Continuous': 'How long will you have been working by next year?',
  'First Conditional': 'What will you do if it rains this weekend?',
  'Second Conditional': 'What would you do if you won the lottery?',
  'Third Conditional': 'What would you have done if you had been born in another country?',
  'Mixed tenses': 'Write a short paragraph about your life.',
};

const formatMB = (bytes) => `${Math.round(bytes / 1024 / 1024)} MB`;

const MODEL_STORAGE_KEY = 'aiCorrectorModel';

const getSavedModelId = () => {
  try {
    const saved = localStorage.getItem(MODEL_STORAGE_KEY);
    if (AI_MODELS.some((m) => m.id === saved)) return saved;
  } catch {
    // Sin localStorage: usar el modelo por defecto
  }
  return DEFAULT_MODEL_ID;
};

const TenseCorrectorAI = () => {
  const [modelId, setModelId] = useState(getSavedModelId);
  const [tense, setTense] = useState(TENSES[0]);
  const [text, setText] = useState('');
  // idle | downloading (en segundo plano) | loading | ready | working
  const [status, setStatus] = useState('idle');
  const [bgProgress, setBgProgress] = useState(null);
  const [bgSupported, setBgSupported] = useState(false);
  const [progress, setProgress] = useState({});
  const [device, setDevice] = useState(null);
  const [partial, setPartial] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const workerRef = useRef(null);
  const pendingRef = useRef(null);
  const readyRef = useRef(false);
  const modelIdRef = useRef(modelId);
  const bgFetchRef = useRef(null);

  const getWorker = () => {
    if (!workerRef.current) {
      const worker = new Worker(
        new URL('../ai/tenseCorrectorWorker.js', import.meta.url),
        { type: 'module' }
      );

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
          setPartial(data.text);
        } else if (data.type === 'result') {
          pendingRef.current = null;
          setResult({ corrected: data.corrected, explanation: data.explanation });
          setPartial('');
          setStatus('ready');
        } else if (data.type === 'error') {
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
    getWorker().postMessage({ type: 'load', modelId: modelIdRef.current });
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

  // Al cambiar de modelo se cierra el worker para liberar la memoria del anterior
  const changeModel = (id) => {
    if (id === modelId || status === 'loading' || status === 'working') return;
    // Una descarga en segundo plano sigue aunque cambies de modelo
    stopWatchingDownload();
    setBgProgress(null);
    try {
      localStorage.setItem(MODEL_STORAGE_KEY, id);
    } catch {
      // No se pudo guardar la preferencia; se usa solo en esta sesión
    }
    workerRef.current?.terminate();
    workerRef.current = null;
    readyRef.current = false;
    pendingRef.current = null;
    setModelId(id);
    setDevice(null);
    setProgress({});
    setPartial('');
    setResult(null);
    setError(null);
    setStatus('idle');
  };

  const selectedModel = AI_MODELS.find((m) => m.id === modelId);

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

  const correct = () => {
    if (!text.trim() || status === 'working' || status === 'loading') return;
    if (status === 'downloading') return;
    if (!readyRef.current && bgSupported) {
      // Primero hay que bajar el modelo (en segundo plano)
      loadModel();
      return;
    }
    setError(null);
    setResult(null);
    setPartial('');
    pendingRef.current = true;
    setStatus(device ? 'working' : 'loading');
    getWorker().postMessage({
      type: 'correct',
      modelId,
      tense,
      text: text.trim(),
    });
  };

  const files = Object.values(progress);
  const loaded = files.reduce((sum, f) => sum + (f.loaded || 0), 0);
  const total = files.reduce((sum, f) => sum + (f.total || 0), 0);
  const percent = total ? Math.round((loaded / total) * 100) : 0;

  const isUnchanged =
    result &&
    result.corrected.trim().toLowerCase() === text.trim().toLowerCase();

  return (
    <div className="min-h-screen bg-htb-bg p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          ✨ AI Tense Corrector
        </h1>
        <p className="text-htb-text-dim text-sm sm:text-base mb-6">
          Escribí oraciones en inglés con el tiempo verbal que quieras practicar
          y una IA que corre en tu navegador te las corrige. No se envía nada a
          ningún servidor.
        </p>

        <div className="mb-6">
          <p className="text-sm text-htb-text mb-2">Modelo de IA</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {AI_MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => changeModel(m.id)}
                disabled={status === 'loading' || status === 'working'}
                aria-pressed={m.id === modelId}
                className={`text-left p-3 rounded-md border transition-colors disabled:cursor-not-allowed ${
                  m.id === modelId
                    ? 'border-htb-green bg-htb-card'
                    : 'border-gray-700 bg-htb-sidebar hover:border-htb-green/50'
                }`}
              >
                <span className="flex items-center justify-between">
                  <span
                    className={`font-semibold ${
                      m.id === modelId ? 'text-htb-green' : 'text-white'
                    }`}
                  >
                    {m.id === modelId ? '● ' : '○ '}
                    {m.name}
                  </span>
                  <span className="text-xs text-htb-text-dim">{m.size}</span>
                </span>
                <span className="block text-xs text-htb-text-dim mt-1">
                  {m.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        {status === 'idle' && !device && (
          <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
            <p className="text-htb-text text-sm mb-3">
              La primera vez se descarga el modelo "{selectedModel.name}" (
              {selectedModel.size}). Después queda guardado en el dispositivo y
              funciona sin internet. Te recomendamos usar Wi-Fi.
            </p>
            <button
              onClick={loadModel}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-5 py-2 rounded-md font-semibold transition-colors"
            >
              Descargar / cargar IA
            </button>
          </div>
        )}

        {status === 'loading' && (
          <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
            <p className="text-htb-text text-sm mb-2">
              Cargando la IA... {total ? `${formatMB(loaded)} / ${formatMB(total)}` : ''}
            </p>
            {!bgSupported && percent < 100 && (
              <p className="text-xs text-yellow-400 mb-2">
                Tu navegador no permite descargar en segundo plano: no cambies
                de app ni bloquees la pantalla hasta que termine.
              </p>
            )}
            <div className="w-full h-2 bg-htb-sidebar rounded">
              <div
                className="h-2 bg-htb-green rounded transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        )}

        {status === 'downloading' && (
          <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
            <p className="text-htb-text text-sm mb-2">
              Descargando "{selectedModel.name}" en segundo plano...{' '}
              {bgProgress?.downloaded
                ? bgProgress.total
                  ? `${formatMB(bgProgress.downloaded)} / ${formatMB(
                      bgProgress.total
                    )}`
                  : formatMB(bgProgress.downloaded)
                : ''}
            </p>
            {bgProgress?.total > 0 && (
              <div className="w-full h-2 bg-htb-sidebar rounded mb-2">
                <div
                  className="h-2 bg-htb-green rounded transition-all"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.round((bgProgress.downloaded / bgProgress.total) * 100)
                    )}%`,
                  }}
                />
              </div>
            )}
            <p className="text-xs text-htb-text-dim">
              Podés cambiar de app o bloquear el celular: la descarga sigue y te
              avisa con una notificación. Cuando termine, la IA se carga sola.
            </p>
          </div>
        )}

        {device && (
          <p className="text-xs text-htb-text-dim mb-4">
            🟢 IA lista: {selectedModel.name} (
            {device === 'webgpu' ? 'GPU' : 'CPU, puede ser más lenta'})
          </p>
        )}

        <div className="bg-htb-card rounded-lg p-4 sm:p-6 border border-htb-sidebar">
          <label className="block text-sm text-htb-text mb-2">Tiempo verbal</label>
          <select
            value={tense}
            onChange={(e) => setTense(e.target.value)}
            className="w-full mb-4 bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-htb-green"
          >
            {TENSES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <p className="text-sm text-htb-text-dim mb-2">
            💡 Idea: <span className="text-htb-text">{PROMPTS[tense]}</span>
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                correct();
              }
            }}
            rows={5}
            placeholder="Write your sentences here..."
            className="w-full bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-htb-green"
          />

          <button
            onClick={correct}
            disabled={
              !text.trim() ||
              status === 'working' ||
              status === 'loading' ||
              status === 'downloading'
            }
            className="mt-4 bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 disabled:cursor-not-allowed text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
          >
            {status === 'working' ? 'Corrigiendo...' : 'Corregir con IA'}
          </button>
          <span className="hidden sm:inline ml-3 text-xs text-htb-text-dim">
            (Ctrl + Enter)
          </span>
        </div>

        {status === 'working' && partial && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-htb-green/30">
            <p className="text-sm text-htb-text-dim whitespace-pre-wrap">{partial}</p>
          </div>
        )}

        {result && (
          <div
            className={`mt-4 p-4 rounded-md bg-htb-sidebar border ${
              isUnchanged ? 'border-htb-green' : 'border-yellow-500'
            }`}
          >
            <p
              className={`font-semibold text-lg ${
                isUnchanged ? 'text-htb-green' : 'text-yellow-400'
              }`}
            >
              {isUnchanged ? '✓ ¡Todo correcto!' : '✎ Corrección'}
            </p>
            {!isUnchanged && (
              <p className="text-base text-white mt-2 whitespace-pre-wrap">
                {result.corrected}
              </p>
            )}
            {result.explanation && (
              <p className="text-sm text-htb-text mt-3 whitespace-pre-wrap">
                {result.explanation}
              </p>
            )}
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-red-500">
            <p className="text-red-500 text-sm">Error: {error}</p>
          </div>
        )}

        <p className="mt-6 text-xs text-htb-text-dim">
          Es una IA pequeña: puede equivocarse. Usala como ayuda, no como verdad
          absoluta.
        </p>
      </div>
    </div>
  );
};

export default TenseCorrectorAI;
