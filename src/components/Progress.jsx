import React, { useState } from 'react';
import { getProgress, resetProgress } from '../progress';

// Muestra el progreso guardado: racha de días, totales, precisión y el
// desglose por tema. Los datos viven en el dispositivo (localStorage).

const prettyTopic = (id) =>
  id
    .replace(/-(a1|a2|b1|b2|c1|c2)$/i, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

const pct = (correct, total) =>
  total > 0 ? Math.round((correct / total) * 100) : 0;

const Stat = ({ label, value, hint }) => (
  <div className="bg-htb-card rounded-lg p-4 border border-gray-800 text-center">
    <p className="text-3xl font-bold text-htb-green">{value}</p>
    <p className="text-xs text-htb-text-dim mt-1">{label}</p>
    {hint && <p className="text-[10px] text-htb-text-dim">{hint}</p>}
  </div>
);

const Progress = () => {
  const [data, setData] = useState(getProgress);

  const topics = Object.entries(data.byTopic)
    .map(([id, t]) => ({ id, ...t }))
    .sort((a, b) => b.answered - a.answered);

  const accuracy = pct(data.totalCorrect, data.totalAnswered);

  const reset = () => {
    if (
      window.confirm(
        '¿Seguro que querés borrar todo tu progreso? No se puede deshacer.'
      )
    ) {
      setData(resetProgress());
    }
  };

  return (
    <div className="min-h-screen bg-htb-bg p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          📊 Mi progreso
        </h1>
        <p className="text-htb-text-dim text-sm sm:text-base mb-6">
          Se guarda en este dispositivo. Practicá todos los días para mantener
          la racha. 🔥
        </p>

        {data.totalAnswered === 0 ? (
          <div className="p-4 rounded-md bg-htb-sidebar border border-htb-green/30 text-htb-text-dim text-sm">
            Todavía no hay progreso. Hacé algunos ejercicios y esta pantalla se
            va llenando sola.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <Stat
                label="Racha actual"
                value={`${data.streak} 🔥`}
                hint={`Mejor: ${data.bestStreak}`}
              />
              <Stat label="Respuestas" value={data.totalAnswered} />
              <Stat label="Correctas" value={data.totalCorrect} />
              <Stat label="Precisión" value={`${accuracy}%`} />
            </div>

            {/* Barra de precisión global */}
            <div className="mb-6">
              <div className="flex h-4 rounded-full overflow-hidden bg-htb-sidebar">
                <div
                  className="bg-htb-green transition-all"
                  style={{ width: `${accuracy}%` }}
                />
                <div
                  className="bg-red-500/70 transition-all"
                  style={{ width: `${100 - accuracy}%` }}
                />
              </div>
            </div>

            <h2 className="text-sm font-bold text-htb-green uppercase tracking-wide mb-2">
              Por tema
            </h2>
            <div className="space-y-2 mb-8">
              {topics.map((t) => {
                const p = pct(t.correct, t.answered);
                return (
                  <div
                    key={t.id}
                    className="bg-htb-sidebar border border-gray-800 rounded p-3"
                  >
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-htb-text">{prettyTopic(t.id)}</span>
                      <span className="text-htb-text-dim text-xs">
                        {t.correct}/{t.answered} · {p}%
                      </span>
                    </div>
                    <div className="flex h-2 rounded-full overflow-hidden bg-htb-card">
                      <div
                        className="bg-htb-green"
                        style={{ width: `${p}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={reset}
              className="text-sm px-4 py-2 rounded-md border border-red-500 text-red-400 hover:bg-htb-card transition-colors"
            >
              Borrar progreso
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Progress;
