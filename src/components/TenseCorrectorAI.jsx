import React, { useState } from 'react';
import useLocalAI from '../ai/useLocalAI';
import AIModelPanel from './AIModelPanel';

const TENSES = [
  'Present Simple',
  'Present Continuous',
  'Present Perfect',
  'Present Perfect Continuous',
  'Past Simple',
  'Past Continuous',
  'Past Perfect',
  'Past Perfect Continuous',
  'Future Simple (will)',
  'Future (going to)',
  'Future Continuous',
  'Future Perfect',
  'Future Perfect Continuous',
  'First Conditional',
  'Second Conditional',
  'Third Conditional',
  'Mixed tenses',
];

const PROMPTS = {
  'Present Simple': 'Describe your daily routine.',
  'Present Continuous': 'What are you doing right now?',
  'Present Perfect': 'Talk about things you have done in your life.',
  'Present Perfect Continuous': 'What have you been doing lately?',
  'Past Simple': 'What did you do last weekend?',
  'Past Continuous': 'What were you doing yesterday at 8 pm?',
  'Past Perfect': 'What had happened before you arrived at work today?',
  'Past Perfect Continuous':
    'What had you been doing before you started learning English?',
  'Future Simple (will)': 'What do you think the world will be like in 2050?',
  'Future (going to)': 'What are you going to do next holiday?',
  'Future Continuous': 'What will you be doing this time tomorrow?',
  'Future Perfect': 'What will you have achieved in five years?',
  'Future Perfect Continuous':
    'How long will you have been working by next year?',
  'First Conditional': 'What will you do if it rains this weekend?',
  'Second Conditional': 'What would you do if you won the lottery?',
  'Third Conditional':
    'What would you have done if you had been born in another country?',
  'Mixed tenses': 'Write a short paragraph about your life.',
};

const buildMessages = (tense, text) => [
  {
    role: 'system',
    content:
      'You are an English teacher correcting a Spanish-speaking student. ' +
      'Fix grammar mistakes in the student text, especially verb tense mistakes. ' +
      'Keep the meaning and change as little as possible. ' +
      'Answer ONLY in this exact format:\n' +
      'CORRECTED: <the corrected text in English>\n' +
      'EXPLANATION: <a short explanation in Spanish of each mistake, or "Todo correcto" if there are no mistakes>',
  },
  {
    role: 'user',
    content: `Target tense: ${tense}\nStudent text: ${text}`,
  },
];

const parseAnswer = (raw) => {
  const corrected = raw.match(
    /CORRECTED:\s*([\s\S]*?)(?:\n\s*EXPLANATION:|$)/i
  );
  const explanation = raw.match(/EXPLANATION:\s*([\s\S]*)$/i);
  return {
    corrected: corrected ? corrected[1].trim() : raw.trim(),
    explanation: explanation ? explanation[1].trim() : '',
  };
};

const TenseCorrectorAI = () => {
  const ai = useLocalAI();
  const [tense, setTense] = useState(TENSES[0]);
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const correct = async () => {
    if (!text.trim()) return;
    setResult(null);
    const answer = await ai.generate(buildMessages(tense, text.trim()));
    if (answer) setResult(parseAnswer(answer));
  };

  const isUnchanged =
    result &&
    result.corrected.trim().toLowerCase() === text.trim().toLowerCase();

  return (
    <div className="min-h-screen bg-htb-bg p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          ✨ AI Tense Corrector
        </h1>
        <p className="text-htb-text-dim text-sm sm:text-base mb-6">
          Escribí oraciones en inglés con el tiempo verbal que quieras practicar
          y una IA que corre en tu navegador te las corrige. No se envía nada a
          ningún servidor.
        </p>

        <AIModelPanel ai={ai} />

        <div className="bg-htb-card rounded-lg p-4 sm:p-6 border border-htb-sidebar">
          <label className="block text-sm text-htb-text mb-2">
            Tiempo verbal
          </label>
          <select
            value={tense}
            onChange={(e) => setTense(e.target.value)}
            className="w-full mb-4 bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-htb-green"
          >
            {TENSES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <p className="text-sm text-htb-text-dim mb-2">
            💡 Idea: <span className="text-htb-text">{PROMPTS[tense]}</span>
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                correct();
              }
            }}
            rows={5}
            placeholder="Write your sentences here..."
            className="w-full bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-htb-green"
          />

          <button
            onClick={correct}
            disabled={!text.trim() || ai.isBusy || ai.status === 'downloading'}
            className="mt-4 bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 disabled:cursor-not-allowed text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
          >
            {ai.status === 'working' ? 'Corrigiendo...' : 'Corregir con IA'}
          </button>
          <span className="hidden sm:inline ml-3 text-xs text-htb-text-dim">
            (Ctrl + Enter)
          </span>
        </div>

        {ai.status === 'working' && ai.partial && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-htb-green/30">
            <p className="text-sm text-htb-text-dim whitespace-pre-wrap">
              {ai.partial}
            </p>
          </div>
        )}

        {result && (
          <div
            className={`mt-4 p-4 rounded-md bg-htb-sidebar border ${
              isUnchanged ? 'border-htb-green' : 'border-yellow-500'
            }`}
          >
            <p
              className={`font-semibold text-lg ${
                isUnchanged ? 'text-htb-green' : 'text-yellow-400'
              }`}
            >
              {isUnchanged ? '✓ ¡Todo correcto!' : '✎ Corrección'}
            </p>
            {!isUnchanged && (
              <p className="text-base text-white mt-2 whitespace-pre-wrap">
                {result.corrected}
              </p>
            )}
            {result.explanation && (
              <p className="text-sm text-htb-text mt-3 whitespace-pre-wrap">
                {result.explanation}
              </p>
            )}
          </div>
        )}

        {ai.error && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-red-500">
            <p className="text-red-500 text-sm">Error: {ai.error}</p>
          </div>
        )}

        <p className="mt-6 text-xs text-htb-text-dim">
          Es una IA pequeña: puede equivocarse. Usala como ayuda, no como verdad
          absoluta.
        </p>
      </div>
    </div>
  );
};

export default TenseCorrectorAI;
