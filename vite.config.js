import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

// Caché de las imágenes externas (fotos de vocabulario, etc.). La usan el
// service worker y la página "Offline mode" (src/offline/offlineImages.js).
const IMAGE_CACHE = 'external-images'

// Genera offline-images.json con todas las imágenes externas que usa la app,
// para poder descargarlas y usar la app sin conexión.
const offlineImagesPlugin = () => ({
  name: 'offline-images',
  generateBundle() {
    const urls = new Set()
    const walk = (dir) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name)
        if (statSync(path).isDirectory()) walk(path)
        else if (/\.(jsx?|tsx?)$/.test(name)) {
          const text = readFileSync(path, 'utf8')
          for (const [url] of text.matchAll(/https:\/\/images\.unsplash\.com\/[^'"`\s)]+/g)) {
            urls.add(url)
          }
        }
      }
    }
    walk('src')
    this.emitFile({
      type: 'asset',
      fileName: 'offline-images.json',
      source: JSON.stringify([...urls].sort()),
    })
  },
})

// Cuando se compila para el APK (Capacitor), la app se sirve desde el propio
// dispositivo: el base tiene que ser '/' y no hace falta el service worker
// (los archivos ya están dentro del APK).
const isCapacitor = process.env.CAPACITOR === '1'

export default defineConfig({
  plugins: [
    react(),
    offlineImagesPlugin(),
    ...(isCapacitor ? [] : [VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'English Learning Platform',
        short_name: 'English',
        description: 'Practica gramática y vocabulario en inglés',
        lang: 'es',
        theme_color: '#141d2b',
        background_color: '#141d2b',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2,json}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        // Descarga de modelos de IA en segundo plano (Background Fetch)
        importScripts: ['ai-background-fetch.js'],
        // La librería de IA (transformers.js + su .wasm) se baja del CDN al
        // usarla por primera vez y queda guardada para funcionar sin internet
        runtimeCaching: [
          // Fotos externas: se guardan al verlas o al descargarlas desde
          // "Offline mode", y después se sirven sin conexión
          {
            urlPattern: ({ url }) => url.hostname === 'images.unsplash.com',
            handler: 'CacheFirst',
            options: {
              cacheName: IMAGE_CACHE,
              // Solo respuestas CORS (200): Chrome cuenta cada respuesta opaca
              // (status 0) como ~7 MB de cuota, y son 160+ fotos
              cacheableResponse: { statuses: [200] },
            },
          },
          {
            urlPattern: ({ url }) => url.hostname === 'cdn.jsdelivr.net',
            handler: 'CacheFirst',
            options: {
              cacheName: 'ai-library',
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    })]),
  ],
  worker: {
    format: 'es',
  },
  // APK (Capacitor): raíz | gh-pages: subcarpeta | dev: raíz
  base: isCapacitor
    ? '/'
    : process.env.NODE_ENV === 'production'
      ? '/English/'
      : '/',
})
