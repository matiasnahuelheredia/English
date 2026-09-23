// Se agrega al service worker de la PWA (ver workbox.importScripts en
// vite.config.js). Guarda los modelos de IA descargados con Background Fetch
// en la caché que usa transformers.js.

const AI_CACHE = 'transformers-cache';
const AI_PREFIX = 'ai-model:';

const saveRecords = async (registration) => {
  const cache = await caches.open(AI_CACHE);
  const records = await registration.matchAll();
  // De a uno: los modelos pesan cientos de MB
  for (const record of records) {
    try {
      const response = await record.responseReady;
      if (response.ok) await cache.put(record.request.url, response);
    } catch {
      // Ese archivo no se descargó; transformers.js lo bajará al cargar
    }
  }
};

const notifyPages = async (message) => {
  const pages = await self.clients.matchAll({ includeUncontrolled: true });
  pages.forEach((page) => page.postMessage(message));
};

self.addEventListener('backgroundfetchsuccess', (event) => {
  const { id } = event.registration;
  if (!id.startsWith(AI_PREFIX)) return;
  event.waitUntil(
    (async () => {
      await saveRecords(event.registration);
      await event.updateUI({ title: 'IA descargada ✓ Abrí la app para usarla' });
      await notifyPages({ type: 'ai-model-downloaded', id });
    })()
  );
});

self.addEventListener('backgroundfetchfail', (event) => {
  const { id, failureReason } = event.registration;
  if (!id.startsWith(AI_PREFIX)) return;
  event.waitUntil(
    (async () => {
      // Guardar lo que sí llegó, para no volver a bajarlo
      await saveRecords(event.registration);
      await event.updateUI({ title: 'La descarga de la IA falló' });
      await notifyPages({ type: 'ai-model-download-failed', id, failureReason });
    })()
  );
});

self.addEventListener('backgroundfetchabort', (event) => {
  const { id } = event.registration;
  if (!id.startsWith(AI_PREFIX)) return;
  event.waitUntil(
    notifyPages({ type: 'ai-model-download-failed', id, failureReason: 'aborted' })
  );
});

self.addEventListener('backgroundfetchclick', (event) => {
  if (!event.registration.id.startsWith(AI_PREFIX)) return;
  event.waitUntil(
    self.clients.openWindow(`${self.registration.scope}?page=ai-tense-corrector`)
  );
});
