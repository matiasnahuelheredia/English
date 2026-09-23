import React, { useState, useEffect, useCallback } from 'react';
import useLocalAI from '../ai/useLocalAI';
import { isModelCached } from '../ai/backgroundDownload';
import AIModelPanel from './AIModelPanel';
import {
  getImageList,
  countCachedImages,
  downloadImages,
} from '../offline/offlineImages';

// Página "Offline mode": muestra qué partes de la app ya están guardadas en el
// dispositivo y permite descargar lo que falta (fotos e IA).

const isAILibraryCached = async () => {
  try {
    const keys = await (await caches.open('ai-library')).keys();
    const urls = keys.map((request) => request.url);
    return (
      urls.some((url) => url.includes('transformers')) &&
      urls.some((url) => url.endsWith('.wasm'))
    );
  } catch {
    return false;
  }
};

const Check = ({ ok, children }) => (
  <span className={ok ? 'text-htb-green' : 'text-yellow-400'}>
    {ok ? '✓' : '○'} {children}
  </span>
);

const OfflineMode = () => {
  const ai = useLocalAI();
  const [online, setOnline] = useState(navigator.onLine);
  const [appSaved, setAppSaved] = useState(false);
  const [images, setImages] = useState({ cached: 0, total: 0 });
  const [downloading, setDownloading] = useState(false);
  const [failed, setFailed] = useState(0);
  const [aiState, setAIState] = useState({ model: false, library: false });
  const [error, setError] = useState(null);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  const refresh = useCallback(async () => {
    setAppSaved(Boolean(navigator.serviceWorker?.controller));
    try {
      const urls = await getImageList();
      setImages({ cached: await countCachedImages(urls), total: urls.length });
    } catch {
      // Sin la lista (p. ej. en desarrollo) no mostramos el conteo
    }
    setAIState({
      model: await isModelCached(ai.modelId),
      library: await isAILibraryCached(),
    });
  }, [ai.modelId]);

  useEffect(() => {
    refresh();
  }, [refresh, ai.status]);

  const download = async () => {
    setDownloading(true);
    setError(null);
    try {
      const urls = await getImageList();
      const result = await downloadImages(urls, (cached, total) =>
        setImages({ cached, total })
      );
      setFailed(result.failed);
    } catch (e) {
      setError(e.message);
    }
    setDownloading(false);
  };

  const imagesDone = images.total > 0 && images.cached === images.total;
  const aiDone = aiState.model && aiState.library;
  const percent = images.total
    ? Math.round((images.cached / images.total) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-htb-bg p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          📴 Offline mode
        </h1>
        <p className="text-htb-text-dim text-sm sm:text-base mb-4">
          Guardá todo en el dispositivo para usar la app sin internet. Hacelo
          una vez con Wi-Fi; después funciona aunque no tengas conexión.
        </p>

        <p
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 ${
            online
              ? 'bg-htb-green/20 text-htb-green'
              : 'bg-yellow-500/20 text-yellow-400'
          }`}
        >
          {online ? '🟢 Con conexión' : '📴 Sin conexión'}
        </p>

        {/* 1. App */}
        <div className="mb-4 p-4 rounded-lg bg-htb-card border border-gray-800">
          <h2 className="font-semibold text-white mb-1">
            <Check ok={appSaved}>1. La app</Check>
          </h2>
          <p className="text-sm text-htb-text-dim">
            {appSaved
              ? 'Todas las lecciones, ejercicios y exámenes están guardados en el dispositivo.'
              : 'Todavía no está guardada. Recargá la página con internet (o instalá la app) y volvé a entrar acá.'}
          </p>
        </div>

        {/* 2. Imágenes */}
        <div className="mb-4 p-4 rounded-lg bg-htb-card border border-gray-800">
          <h2 className="font-semibold text-white mb-1">
            <Check ok={imagesDone}>2. Fotos del vocabulario</Check>
          </h2>
          <p className="text-sm text-htb-text-dim mb-3">
            {images.total
              ? `${images.cached} de ${images.total} fotos guardadas (~7 MB en total).`
              : 'Calculando...'}
          </p>
          {images.total > 0 && (
            <div className="w-full h-2 bg-htb-sidebar rounded mb-3">
              <div
                className="h-2 bg-htb-green rounded transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
          )}
          {!imagesDone && (
            <button
              onClick={download}
              disabled={downloading || !online}
              className="bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 disabled:cursor-not-allowed text-htb-bg px-5 py-2 rounded-md font-semibold transition-colors"
            >
              {downloading ? 'Descargando fotos...' : 'Descargar fotos'}
            </button>
          )}
          {failed > 0 && !downloading && (
            <p className="text-xs text-yellow-400 mt-2">
              {failed} fotos no se pudieron guardar. Probá de nuevo más tarde;
              con conexión se siguen viendo igual.
            </p>
          )}
          {error && <p className="text-xs text-red-500 mt-2">Error: {error}</p>}
        </div>

        {/* 3. IA */}
        <div className="mb-4 p-4 rounded-lg bg-htb-card border border-gray-800">
          <h2 className="font-semibold text-white mb-1">
            <Check ok={aiDone}>3. IA (corrector y práctica de emails)</Check>
          </h2>
          <p className="text-sm text-htb-text-dim mb-4">
            {aiDone
              ? `El modelo "${ai.selectedModel.name}" está guardado y funciona sin conexión.`
              : 'Para usarla sin internet, descargá y cargá la IA una vez: cuando diga "IA lista", ya queda guardada.'}
          </p>
          <AIModelPanel ai={ai} />
          {ai.error && (
            <p className="text-xs text-red-500">Error: {ai.error}</p>
          )}
        </div>

        <p className="text-xs text-htb-text-dim mt-6">
          💡 En el celular, instalá la app (menú del navegador → "Instalar app"
          o "Agregar a pantalla de inicio") para abrirla sin conexión como
          cualquier otra app.
        </p>
      </div>
    </div>
  );
};

export default OfflineMode;
