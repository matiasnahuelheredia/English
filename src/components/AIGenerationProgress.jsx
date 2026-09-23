import React, { useState, useEffect } from 'react';

// Muestra que la IA está trabajando (tiempo, cuánto lleva escrito y el texto
// parcial) y permite detenerla. Recibe el objeto que devuelve useLocalAI().
const AIGenerationProgress = ({ ai }) => {
  const [now, setNow] = useState(Date.now());
  const working = ai.status === 'working' && ai.generation;

  useEffect(() => {
    if (!working) return undefined;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [working]);

  if (!working) return null;

  const seconds = Math.max(
    0,
    Math.round((now - ai.generation.startedAt) / 1000)
  );
  const words = ai.partial ? ai.partial.trim().split(/\s+/).length : 0;

  return (
    <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-htb-green/30">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <p className="text-sm text-htb-text">
          <span className="inline-block animate-pulse mr-1">⏳</span>
          {ai.partial
            ? `Escribiendo... ${words} palabras · ${seconds} s`
            : `Leyendo tu texto... ${seconds} s`}
        </p>
        <button
          onClick={ai.stop}
          className="text-sm px-3 py-1 rounded-md border border-red-500/60 text-red-400 hover:bg-red-500/10 transition-colors"
        >
          ■ Detener
        </button>
      </div>
      {!ai.partial && seconds >= 10 && (
        <p className="text-xs text-htb-text-dim mb-2">
          En el celular puede tardar 1–2 minutos. Si la página se traba, tocá
          "Detener" y elegí "Solo CPU" arriba.
        </p>
      )}
      {ai.partial && (
        <p className="text-sm text-htb-text-dim whitespace-pre-wrap">
          {ai.partial}
        </p>
      )}
    </div>
  );
};

export default AIGenerationProgress;
