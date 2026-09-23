// Descarga de modelos con Background Fetch (Chrome en Android y escritorio):
// la descarga la hace el navegador, sigue aunque cambies de app o cierres la
// página y muestra una notificación con el progreso. El service worker
// (public/ai-background-fetch.js) guarda los archivos en la misma caché que usa
// transformers.js, así que al cargar la IA se leen de ahí sin volver a bajarlos.

const CACHE_NAME = 'transformers-cache';
const HF = 'https://huggingface.co';
const MODEL_FILE = 'onnx/model_q4.onnx';

// Archivos que usa el pipeline de text-generation con dtype q4
const FALLBACK_FILES = [
  'config.json',
  'generation_config.json',
  'tokenizer.json',
  'tokenizer_config.json',
  MODEL_FILE,
];

const isNeededFile = (name) =>
  /^[^/]+\.(json|jinja)$/.test(name) || name.startsWith(`${MODEL_FILE}`);

const fileUrl = (modelId, file) => `${HF}/${modelId}/resolve/main/${file}`;

export const downloadId = (modelId) => `ai-model:${modelId}`;

export const getRegistration = async () => {
  if (!('serviceWorker' in navigator) || !('BackgroundFetchManager' in window)) {
    return null;
  }
  const registration = await navigator.serviceWorker.getRegistration();
  return registration?.backgroundFetch ? registration : null;
};

export const isModelCached = async (modelId) => {
  try {
    const cache = await caches.open(CACHE_NAME);
    return Boolean(await cache.match(fileUrl(modelId, MODEL_FILE)));
  } catch {
    return false;
  }
};

// Lista de archivos (con tamaño) desde la API de Hugging Face
const getModelFiles = async (modelId) => {
  try {
    const response = await fetch(`${HF}/api/models/${modelId}?blobs=true`);
    if (!response.ok) throw new Error(response.statusText);
    const { siblings = [] } = await response.json();
    const files = siblings
      .filter((s) => isNeededFile(s.rfilename))
      .map((s) => ({ name: s.rfilename, size: s.lfs?.size ?? s.size }));
    if (files.some((f) => f.name === MODEL_FILE)) return files;
  } catch {
    // Sin la API usamos la lista fija (sin tamaños)
  }
  return FALLBACK_FILES.map((name) => ({ name, size: undefined }));
};

// Devuelve la descarga en curso o una nueva; null si ya está todo en caché
export const startModelDownload = async (registration, modelId, title) => {
  const id = downloadId(modelId);
  const existing = await registration.backgroundFetch.get(id);
  if (existing) return existing;

  const cache = await caches.open(CACHE_NAME);
  const files = [];
  for (const file of await getModelFiles(modelId)) {
    if (!(await cache.match(fileUrl(modelId, file.name)))) files.push(file);
  }
  if (files.length === 0) return null;

  const knownSizes = files.every((f) => Number.isFinite(f.size));
  return registration.backgroundFetch.fetch(
    id,
    files.map((f) => fileUrl(modelId, f.name)),
    {
      title,
      icons: [{ src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' }],
      downloadTotal: knownSizes ? files.reduce((sum, f) => sum + f.size, 0) : 0,
    }
  );
};
