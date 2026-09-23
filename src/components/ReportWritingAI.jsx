import React, { useState } from 'react';
import useLocalAI from '../ai/useLocalAI';
import AIModelPanel from './AIModelPanel';
import AIGenerationProgress from './AIGenerationProgress';
import { reportWritingTasks } from '../data/reportWritingTasks';
import AIWritingFeedback from './AIWritingFeedback';
import {
  MISTAKES_FORMAT_INSTRUCTIONS,
  parseMistakes,
} from '../ai/writingFeedback';

// Entrenador de escritura de informes de pentesting: el alumno escribe una
// sección de un finding y la IA local le corrige la gramática y el registro
// profesional, y le dice si cubre lo que debería.

const buildMessages = (task, text) => [
  {
    role: 'system',
    content:
      'You are a senior penetration tester coaching a Spanish-speaking analyst who is learning to write security reports in English. ' +
      `The analyst is writing the "${task.section}" of a finding for a ${task.audience} audience. ` +
      'It should read like a professional pentest report and cover these points: ' +
      task.checklist.join('; ') +
      '. ' +
      MISTAKES_FORMAT_INSTRUCTIONS +
      ' Also, if the text is missing any of those required points, add them as extra lines in the same shape, quoting nothing, e.g. - (falta) -> "..." (que debería incluir...).',
  },
  {
    role: 'user',
    content:
      `Section to write: ${task.section}\n` +
      `Scenario: ${task.scenario}\n\n` +
      `Analyst's text:\n${text}`,
  },
];

const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const ReportWritingAI = () => {
  const ai = useLocalAI();
  const [taskIndex, setTaskIndex] = useState(0);
  const [drafts, setDrafts] = useState({});
  const [results, setResults] = useState({});
  const [showModel, setShowModel] = useState({});

  const task = reportWritingTasks[taskIndex];
  const text = drafts[task.id] || '';
  const result = results[task.id];
  const words = countWords(text);

  const review = async () => {
    if (!text.trim()) return;
    setResults((prev) => ({ ...prev, [task.id]: null }));
    const answer = await ai.generate(buildMessages(task, text.trim()), {
      maxNewTokens: 400,
    });
    if (answer) {
      setResults((prev) => ({ ...prev, [task.id]: parseMistakes(answer) }));
    }
  };

  return (
    <div className="min-h-screen bg-htb-bg p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          📝 Report Writing Trainer
        </h1>
        <p className="text-htb-text-dim text-sm sm:text-base mb-6">
          Entrenate para escribir informes de pentesting en inglés. Elegí una
          tarea, escribí la sección y la IA (que corre en tu navegador) te marca
          los errores de gramática y de registro profesional, y te dice qué
          puntos te faltaron para que lo corrijas vos.
        </p>

        {/* Selector de tarea */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {reportWritingTasks.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setTaskIndex(index)}
              className={`text-left p-2 rounded-md border text-sm transition-colors ${
                index === taskIndex
                  ? 'border-htb-green bg-htb-card text-htb-green font-medium'
                  : 'border-gray-700 bg-htb-sidebar text-htb-text-dim hover:border-htb-green/50'
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wide text-htb-text-dim">
                {t.section}
              </span>
              {t.title}
            </button>
          ))}
        </div>

        {/* Escenario + checklist */}
        <div className="mb-4 p-4 rounded-md bg-htb-sidebar border border-gray-700">
          <p className="text-xs text-htb-green font-semibold mb-1">
            {task.section} · audiencia: {task.audience}
          </p>
          <p className="text-sm text-htb-text mb-3">{task.scenario}</p>
          <p className="text-xs text-htb-text-dim font-semibold mb-1">
            Tu sección debería incluir:
          </p>
          <ul className="text-xs text-htb-text-dim list-disc list-inside space-y-0.5">
            {task.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <AIModelPanel ai={ai} />

        <textarea
          value={text}
          onChange={(e) =>
            setDrafts((prev) => ({ ...prev, [task.id]: e.target.value }))
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              review();
            }
          }}
          rows={8}
          placeholder="Write this section of the report in English..."
          className="w-full bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-htb-green"
        />
        <p className="text-xs text-htb-text-dim mt-1">{words} words</p>

        <div className="mt-3 flex flex-wrap gap-3 items-center">
          <button
            onClick={review}
            disabled={!text.trim() || ai.isBusy || ai.status === 'downloading'}
            className="bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 disabled:cursor-not-allowed text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
          >
            {ai.status === 'working' ? 'Revisando...' : 'Revisar con IA'}
          </button>
          <span className="hidden sm:inline text-xs text-htb-text-dim">
            (Ctrl + Enter)
          </span>
          <button
            onClick={() =>
              setShowModel((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
            }
            className="text-sm px-3 py-1.5 rounded-md border border-gray-600 text-htb-text-dim hover:text-htb-text hover:border-htb-green/50 transition-colors"
          >
            {showModel[task.id] ? 'Ocultar modelo' : 'Ver ejemplo modelo'}
          </button>
        </div>

        <AIGenerationProgress ai={ai} />

        <AIWritingFeedback result={result} />

        {ai.error && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-red-500">
            <p className="text-red-500 text-sm">Error: {ai.error}</p>
          </div>
        )}

        {showModel[task.id] && (
          <div className="mt-4 p-4 rounded-md bg-htb-card border border-htb-green/30">
            <p className="font-semibold text-htb-green mb-2">
              📄 Ejemplo modelo ({task.section})
            </p>
            <p className="text-sm text-htb-text whitespace-pre-wrap">
              {task.model}
            </p>
            <p className="text-xs text-htb-text-dim mt-2">
              Es un ejemplo, no la única respuesta correcta. Compará tu versión
              con este modelo.
            </p>
          </div>
        )}

        <p className="mt-6 text-xs text-htb-text-dim">
          Es una IA pequeña: puede equivocarse. Usala como guía y comparala
          siempre con el ejemplo modelo.
        </p>
      </div>
    </div>
  );
};

export default ReportWritingAI;
