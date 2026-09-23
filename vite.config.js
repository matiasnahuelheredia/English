import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
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
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        // Descarga de modelos de IA en segundo plano (Background Fetch)
        importScripts: ['ai-background-fetch.js'],
        // La librería de IA (transformers.js + su .wasm) se baja del CDN al
        // usarla por primera vez y queda guardada para funcionar sin internet
        runtimeCaching: [
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
    }),
  ],
  worker: {
    format: 'es',
  },
  base: process.env.NODE_ENV === 'production' ? '/English/' : '/',
})
