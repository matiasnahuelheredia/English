import React from 'react';

// Muestra el feedback del entrenador: la lista de "qué corregir" y un consejo.
// No muestra el texto reescrito: el alumno corrige a partir de las marcas.
const AIWritingFeedback = ({ result }) => {
  if (!result) return null;
  return (
    <div className="mt-4 space-y-4">
      <div className="p-4 rounded-md bg-htb-sidebar border border-yellow-500">
        <p className="font-semibold text-yellow-400 mb-2">🔍 Qué corregir</p>
        <p className="text-sm text-htb-text whitespace-pre-wrap">
          {result.mistakes}
        </p>
        <p className="text-xs text-htb-text-dim mt-3">
          La IA marca los errores para que los corrijas vos. Reescribí tu texto
          arriba y volvé a revisarlo.
        </p>
      </div>
      {result.tip && (
        <div className="p-4 rounded-md bg-htb-sidebar border border-htb-green/40">
          <p className="font-semibold text-htb-green mb-1">💡 Consejo</p>
          <p className="text-sm text-htb-text whitespace-pre-wrap">
            {result.tip}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIWritingFeedback;
