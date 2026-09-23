import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Fuente Inter incluida en la app (no depende de Google Fonts → funciona offline)
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import './index.css'
import { autoDownloadImagesOnce } from './offline/offlineImages'

// Con la app ya guardada (service worker), bajar las fotos en segundo plano
// para que el vocabulario también funcione sin conexión
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(() =>
    setTimeout(autoDownloadImagesOnce, 5000)
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
