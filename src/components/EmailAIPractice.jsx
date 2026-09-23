import React, { useState } from 'react';
import useLocalAI from '../ai/useLocalAI';
import AIModelPanel from './AIModelPanel';

// Práctica de escritura de emails con la IA local: el alumno escribe su propio
// email para la situación del ejemplo y la IA lo corrige y comenta.

const buildMessages = (example, text) => [
  {
    role: 'system',
    content:
      'You are an English teacher. A Spanish-speaking B1 student wrote an email for a writing task. ' +
      "Correct the grammar, spelling and vocabulary mistakes, keeping the student's ideas and a B1 level. " +
      `Check that the register is ${example.category.toLowerCase()} and that the email has a greeting, ` +
      'clear paragraphs and a suitable closing. ' +
      'Answer ONLY in this exact format:\n' +
      'CORRECTED:\n<the corrected email>\n' +
      'FEEDBACK:\n<3 to 5 short bullet points in Spanish about the mistakes, the register (formal/informal) and the structure, plus one tip to improve>',
  },
  {
    role: 'user',
    content:
      `Task (${example.category} email): ${example.situation}\n` +
      `Subject: ${example.subject}\n\n` +
      `Student email:\n${text}`,
  },
];

const parseAnswer = (raw) => {
  const corrected = raw.match(/CORRECTED:\s*([\s\S]*?)(?:\n\s*FEEDBACK:|$)/i);
  const feedback = raw.match(/FEEDBACK:\s*([\s\S]*)$/i);
  return {
    corrected: corrected ? corrected[1].trim() : raw.trim(),
    feedback: feedback ? feedback[1].trim() : '',
  };
};

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
      maxNewTokens: 700,
    });
    if (answer) {
      setResults((prev) => ({ ...prev, [example.id]: parseAnswer(answer) }));
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
            navegador) te lo corrige y te da consejos sobre gramática,
            formalidad y estructura.
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

      {ai.status === 'working' && ai.partial && (
        <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-htb-green/30">
          <p className="text-sm text-htb-text-dim whitespace-pre-wrap">
            {ai.partial}
          </p>
        </div>
      )}

      {result && (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="p-4 rounded-md bg-htb-sidebar border border-yellow-500">
            <p className="font-semibold text-yellow-400 mb-2">
              ✎ Email corregido
            </p>
            <p className="text-sm text-white whitespace-pre-wrap font-mono">
              {result.corrected}
            </p>
          </div>
          {result.feedback && (
            <div className="p-4 rounded-md bg-htb-sidebar border border-htb-green/40">
              <p className="font-semibold text-htb-green mb-2">
                💬 Comentarios
              </p>
              <p className="text-sm text-htb-text whitespace-pre-wrap">
                {result.feedback}
              </p>
            </div>
          )}
        </div>
      )}

      {ai.error && (
        <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-red-500">
          <p className="text-red-500 text-sm">Error: {ai.error}</p>
        </div>
      )}

      <p className="mt-4 text-xs text-htb-text-dim">
        Es una IA pequeña: puede equivocarse. Compará su corrección con el
        ejemplo de arriba y usala como ayuda, no como verdad absoluta.
      </p>
    </div>
  );
};

export default EmailAIPractice;
