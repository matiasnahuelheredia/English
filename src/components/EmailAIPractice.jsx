import React, { useState } from 'react';
import useLocalAI from '../ai/useLocalAI';
import AIModelPanel from './AIModelPanel';
import AIGenerationProgress from './AIGenerationProgress';
import AIWritingFeedback from './AIWritingFeedback';
import {
  MISTAKES_FORMAT_INSTRUCTIONS,
  parseMistakes,
} from '../ai/writingFeedback';

// Práctica de escritura de emails con la IA local: el alumno escribe su propio
// email para la situación del ejemplo y la IA lo corrige y comenta.

const buildMessages = (example, text) => [
  {
    role: 'system',
    content:
      'You are an English teacher. A Spanish-speaking B1 student wrote an email for a writing task. ' +
      `The register should be ${example.category.toLowerCase()} and the email should have a greeting, ` +
      'clear paragraphs and a suitable closing. ' +
      MISTAKES_FORMAT_INSTRUCTIONS,
  },
  {
    role: 'user',
    content:
      `Task (${example.category} email): ${example.situation}\n` +
      `Subject: ${example.subject}\n\n` +
      `Student email:\n${text}`,
  },
];

const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const EmailAIPractice = ({ example }) => {
  const ai = useLocalAI();
  // Borrador y resultado por ejemplo, para no perderlos al cambiar de ejemplo
  const [drafts, setDrafts] = useState({});
  const [results, setResults] = useState({});

  const text = drafts[example.id] || '';
  const result = results[example.id];
  const words = countWords(text);

  const review = async () => {
    if (!text.trim()) return;
    setResults((prev) => ({ ...prev, [example.id]: null }));
    const answer = await ai.generate(buildMessages(example, text.trim()), {
      maxNewTokens: 350,
    });
    if (answer) {
      setResults((prev) => ({ ...prev, [example.id]: parseMistakes(answer) }));
    }
  };

  return (
    <div className="mt-6 bg-htb-card border border-htb-green/40 rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-2xl">✍️</span>
        <div>
          <h2 className="text-xl font-bold text-white">Practice with AI</h2>
          <p className="text-sm text-htb-text-dim">
            Escribí tu propio email para esta situación y la IA (que corre en tu
            navegador) te marca los errores de gramática, formalidad y
            estructura para que los corrijas vos.
          </p>
        </div>
      </div>

      <div className="my-4 p-3 rounded-md bg-htb-sidebar border border-gray-700">
        <p className="text-xs text-htb-green font-semibold mb-1">
          {example.category} · {example.title}
        </p>
        <p className="text-sm text-htb-text">{example.situation}</p>
      </div>

      <AIModelPanel ai={ai} />

      <textarea
        value={text}
        onChange={(e) =>
          setDrafts((prev) => ({ ...prev, [example.id]: e.target.value }))
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            review();
          }
        }}
        rows={10}
        placeholder={
          example.category === 'Informal' ? 'Hi ...,\n\n' : 'Dear ...,\n\n'
        }
        className="w-full bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-htb-green"
      />
      <p
        className={`text-xs mt-1 ${
          words >= 80 && words <= 180 ? 'text-htb-green' : 'text-htb-text-dim'
        }`}
      >
        {words} words (a B1 email usually has 100–150)
      </p>

      <button
        onClick={review}
        disabled={!text.trim() || ai.isBusy || ai.status === 'downloading'}
        className="mt-3 bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 disabled:cursor-not-allowed text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
      >
        {ai.status === 'working' ? 'Revisando...' : 'Revisar mi email con IA'}
      </button>
      <span className="hidden sm:inline ml-3 text-xs text-htb-text-dim">
        (Ctrl + Enter)
      </span>

      <AIGenerationProgress ai={ai} />

      <AIWritingFeedback result={result} />

      {ai.error && (
        <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-red-500">
          <p className="text-red-500 text-sm">Error: {ai.error}</p>
        </div>
      )}

      <p className="mt-4 text-xs text-htb-text-dim">
        Es una IA pequeña: puede equivocarse. Usala como guía para corregir tu
        texto, no como verdad absoluta.
      </p>
    </div>
  );
};

export default EmailAIPractice;
