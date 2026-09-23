// Descarga de las imágenes externas (fotos de vocabulario, Picture
// Description...) para usar la app sin conexión. La lista la genera el build
// (offline-images.json) y las fotos se guardan en la misma caché que usa el
// service worker para servirlas offline (ver vite.config.js).

export const IMAGE_CACHE = 'external-images';
const AUTO_DOWNLOAD_KEY = 'offlineImagesAutoDownloaded';

export const getImageList = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}offline-images.json`);
  if (!response.ok) throw new Error('No se pudo leer la lista de imágenes');
  return response.json();
};

export const countCachedImages = async (urls) => {
  const cache = await caches.open(IMAGE_CACHE);
  let cached = 0;
  for (const url of urls) {
    if (await cache.match(url)) cached += 1;
  }
  return cached;
};

// Solo guardamos respuestas CORS: Chrome cuenta cada respuesta opaca como
// ~7 MB de cuota. Si una foto no permite CORS, se sigue viendo con conexión.
const fetchImage = async (url) => {
  const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response;
};

// Descarga las que faltan (de a 4 en paralelo). onProgress(done, total)
export const downloadImages = async (urls, onProgress = () => {}) => {
  const cache = await caches.open(IMAGE_CACHE);
  const missing = [];
  for (const url of urls) {
    if (!(await cache.match(url))) missing.push(url);
  }
  let done = urls.length - missing.length;
  let failed = 0;
  onProgress(done, urls.length);

  const queue = [...missing];
  const worker = async () => {
    while (queue.length) {
      const url = queue.shift();
      try {
        const response = await fetchImage(url);
        await cache.put(url, response);
        done += 1;
      } catch {
        failed += 1;
      }
      onProgress(done, urls.length);
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);
  return { done, failed, total: urls.length };
};

// La primera vez que se abre la app con conexión, bajar las imágenes en
// segundo plano (una sola vez; después se puede repetir desde "Offline mode")
export const autoDownloadImagesOnce = async () => {
  try {
    if (!navigator.onLine || !('caches' in window)) return;
    if (navigator.connection?.saveData) return;
    if (localStorage.getItem(AUTO_DOWNLOAD_KEY)) return;
    const urls = await getImageList();
    const { failed } = await downloadImages(urls);
    if (failed === 0) localStorage.setItem(AUTO_DOWNLOAD_KEY, '1');
  } catch {
    // Se reintenta la próxima vez que se abra la app
  }
};
