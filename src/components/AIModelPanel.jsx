import React from 'react';

const formatMB = (bytes) => `${Math.round(bytes / 1024 / 1024)} MB`;

// Selector de modelo + estado de la descarga/carga de la IA local.
// Recibe el objeto que devuelve useLocalAI().
const AIModelPanel = ({ ai }) => (
  <>
    <div className="mb-6">
      <p className="text-sm text-htb-text mb-2">Modelo de IA</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {ai.models.map((m) => (
          <button
            key={m.id}
            onClick={() => ai.changeModel(m.id)}
            disabled={ai.isBusy}
            aria-pressed={m.id === ai.modelId}
            className={`text-left p-3 rounded-md border transition-colors disabled:cursor-not-allowed ${
              m.id === ai.modelId
                ? 'border-htb-green bg-htb-card'
                : 'border-gray-700 bg-htb-sidebar hover:border-htb-green/50'
            }`}
          >
            <span className="flex items-center justify-between">
              <span
                className={`font-semibold ${
                  m.id === ai.modelId ? 'text-htb-green' : 'text-white'
                }`}
              >
                {m.id === ai.modelId ? '● ' : '○ '}
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
      {ai.heavyModelOnMobile && (
        <p className="text-xs text-yellow-400 mt-2">
          ⚠️ En un celular, el modelo "Mejor calidad" (~1 GB) suele colgar el
          teléfono por falta de memoria. Elegí "Liviano" para que no se trabe.
        </p>
      )}
      {ai.lowPower && !ai.heavyModelOnMobile && (
        <p className="text-xs text-htb-text-dim mt-2">
          📱 Detectamos un celular: si se traba, dejá el modelo "Liviano" y el
          largo de respuesta en "Corta" (más abajo).
        </p>
      )}
    </div>

    <div className="mb-6">
      <p className="text-sm text-htb-text mb-2">Procesador</p>
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'auto', label: '⚡ Automático (GPU si hay)' },
          { id: 'wasm', label: '🐢 Solo CPU (más fluido)' },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => ai.changeDevicePreference(option.id)}
            disabled={ai.isBusy}
            aria-pressed={ai.devicePreference === option.id}
            className={`text-sm px-3 py-1.5 rounded-md border transition-colors disabled:cursor-not-allowed ${
              ai.devicePreference === option.id
                ? 'border-htb-green bg-htb-card text-htb-green'
                : 'border-gray-700 bg-htb-sidebar text-htb-text-dim hover:border-htb-green/50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-htb-text-dim mt-1">
        Si la página se traba mientras la IA trabaja, elegí "Solo CPU": tarda
        más, pero no congela el celular.
      </p>
    </div>

    <div className="mb-6">
      <p className="text-sm text-htb-text mb-2">Largo de la respuesta</p>
      <div className="flex flex-wrap gap-2">
        {ai.responseLengths.map((option) => (
          <button
            key={option.id}
            onClick={() => ai.changeResponseLength(option.id)}
            disabled={ai.isBusy}
            aria-pressed={ai.responseLength === option.id}
            className={`text-sm px-3 py-1.5 rounded-md border transition-colors disabled:cursor-not-allowed ${
              ai.responseLength === option.id
                ? 'border-htb-green bg-htb-card text-htb-green'
                : 'border-gray-700 bg-htb-sidebar text-htb-text-dim hover:border-htb-green/50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-htb-text-dim mt-1">
        {ai.responseLengths.find((l) => l.id === ai.responseLength)?.hint}
        {ai.lowPower && ai.responseLength === 'long' && (
          <span className="text-yellow-400">
            {' '}
            Con 4 GB de RAM o menos, "Larga" puede trabar el teléfono.
          </span>
        )}
      </p>
    </div>

    {ai.status === 'idle' && !ai.isReady && (
      <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
        <p className="text-htb-text text-sm mb-3">
          La primera vez se descarga el modelo "{ai.selectedModel.name}" (
          {ai.selectedModel.size}). Después queda guardado en el dispositivo y
          funciona sin internet. Te recomendamos usar Wi-Fi.
        </p>
        <button
          onClick={ai.loadModel}
          className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-5 py-2 rounded-md font-semibold transition-colors"
        >
          Descargar / cargar IA
        </button>
      </div>
    )}

    {ai.status === 'loading' && (
      <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
        <p className="text-htb-text text-sm mb-2">
          Cargando la IA...{' '}
          {ai.loadProgress.total
            ? `${formatMB(ai.loadProgress.loaded)} / ${formatMB(ai.loadProgress.total)}`
            : ''}
        </p>
        {!ai.bgSupported && ai.loadProgress.percent < 100 && (
          <p className="text-xs text-yellow-400 mb-2">
            Tu navegador no permite descargar en segundo plano: no cambies de
            app ni bloquees la pantalla hasta que termine.
          </p>
        )}
        <div className="w-full h-2 bg-htb-sidebar rounded">
          <div
            className="h-2 bg-htb-green rounded transition-all"
            style={{ width: `${ai.loadProgress.percent}%` }}
          />
        </div>
      </div>
    )}

    {ai.status === 'downloading' && (
      <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
        <p className="text-htb-text text-sm mb-2">
          Descargando "{ai.selectedModel.name}" en segundo plano...{' '}
          {ai.bgProgress?.downloaded
            ? ai.bgProgress.total
              ? `${formatMB(ai.bgProgress.downloaded)} / ${formatMB(
                  ai.bgProgress.total
                )}`
              : formatMB(ai.bgProgress.downloaded)
            : ''}
        </p>
        {ai.bgProgress?.total > 0 && (
          <div className="w-full h-2 bg-htb-sidebar rounded mb-2">
            <div
              className="h-2 bg-htb-green rounded transition-all"
              style={{
                width: `${Math.min(
                  100,
                  Math.round(
                    (ai.bgProgress.downloaded / ai.bgProgress.total) * 100
                  )
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

    {ai.isReady && (
      <p className="text-xs text-htb-text-dim mb-4">
        🟢 IA lista: {ai.selectedModel.name} (
        {ai.device === 'webgpu' ? 'GPU' : 'CPU, puede ser más lenta'})
      </p>
    )}
  </>
);

export default AIModelPanel;
