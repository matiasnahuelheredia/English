import React, { useState, useEffect, useRef } from 'react';

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
  'Past Perfect Continuous': 'What had you been doing before you started learning English?',
  'Future Simple (will)': 'What do you think the world will be like in 2050?',
  'Future (going to)': 'What are you going to do next holiday?',
  'Future Continuous': 'What will you be doing this time tomorrow?',
  'Future Perfect': 'What will you have achieved in five years?',
  'Future Perfect Continuous': 'How long will you have been working by next year?',
  'First Conditional': 'What will you do if it rains this weekend?',
  'Second Conditional': 'What would you do if you won the lottery?',
  'Third Conditional': 'What would you have done if you had been born in another country?',
  'Mixed tenses': 'Write a short paragraph about your life.',
};

const formatMB = (bytes) => `${Math.round(bytes / 1024 / 1024)} MB`;

const TenseCorrectorAI = () => {
  const [tense, setTense] = useState(TENSES[0]);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | ready | working
  const [progress, setProgress] = useState({});
  const [device, setDevice] = useState(null);
  const [partial, setPartial] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const workerRef = useRef(null);
  const pendingRef = useRef(null);
  const readyRef = useRef(false);

  const getWorker = () => {
    if (!workerRef.current) {
      const worker = new Worker(
        new URL('../ai/tenseCorrectorWorker.js', import.meta.url),
        { type: 'module' }
      );

      worker.addEventListener('message', ({ data }) => {
        if (data.type === 'progress') {
          setProgress((prev) => ({
            ...prev,
            [data.file]: { loaded: data.loaded, total: data.total },
          }));
        } else if (data.type === 'ready') {
          readyRef.current = true;
          setDevice(data.device);
          setStatus(pendingRef.current ? 'working' : 'ready');
        } else if (data.type === 'partial') {
          setPartial(data.text);
        } else if (data.type === 'result') {
          pendingRef.current = null;
          setResult({ corrected: data.corrected, explanation: data.explanation });
          setPartial('');
          setStatus('ready');
        } else if (data.type === 'error') {
          pendingRef.current = null;
          setError(data.message);
          setStatus(readyRef.current ? 'ready' : 'idle');
        }
      });

      workerRef.current = worker;
    }
    return workerRef.current;
  };

  useEffect(() => {
    return () => workerRef.current?.terminate();
  }, []);

  const loadModel = () => {
    setError(null);
    setStatus('loading');
    getWorker().postMessage({ type: 'load' });
  };

  const correct = () => {
    if (!text.trim() || status === 'working' || status === 'loading') return;
    setError(null);
    setResult(null);
    setPartial('');
    pendingRef.current = true;
    setStatus(device ? 'working' : 'loading');
    getWorker().postMessage({ type: 'correct', tense, text: text.trim() });
  };

  const files = Object.values(progress);
  const loaded = files.reduce((sum, f) => sum + (f.loaded || 0), 0);
  const total = files.reduce((sum, f) => sum + (f.total || 0), 0);
  const percent = total ? Math.round((loaded / total) * 100) : 0;

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

        {status === 'idle' && !device && (
          <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
            <p className="text-htb-text text-sm mb-3">
              La primera vez se descarga el modelo de IA (~500 MB). Después
              queda guardado en el dispositivo y funciona sin internet. Te
              recomendamos usar Wi-Fi.
            </p>
            <button
              onClick={loadModel}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-5 py-2 rounded-md font-semibold transition-colors"
            >
              Descargar / cargar IA
            </button>
          </div>
        )}

        {status === 'loading' && (
          <div className="mb-6 p-4 rounded-md bg-htb-card border border-htb-green/30">
            <p className="text-htb-text text-sm mb-2">
              Cargando la IA... {total ? `${formatMB(loaded)} / ${formatMB(total)}` : ''}
            </p>
            <div className="w-full h-2 bg-htb-sidebar rounded">
              <div
                className="h-2 bg-htb-green rounded transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        )}

        {device && (
          <p className="text-xs text-htb-text-dim mb-4">
            🟢 IA lista ({device === 'webgpu' ? 'GPU' : 'CPU, puede ser más lenta'})
          </p>
        )}

        <div className="bg-htb-card rounded-lg p-4 sm:p-6 border border-htb-sidebar">
          <label className="block text-sm text-htb-text mb-2">Tiempo verbal</label>
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
            disabled={!text.trim() || status === 'working' || status === 'loading'}
            className="mt-4 bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 disabled:cursor-not-allowed text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
          >
            {status === 'working' ? 'Corrigiendo...' : 'Corregir con IA'}
          </button>
          <span className="hidden sm:inline ml-3 text-xs text-htb-text-dim">
            (Ctrl + Enter)
          </span>
        </div>

        {status === 'working' && partial && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-htb-green/30">
            <p className="text-sm text-htb-text-dim whitespace-pre-wrap">{partial}</p>
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

        {error && (
          <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-red-500">
            <p className="text-red-500 text-sm">Error: {error}</p>
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
