import { pipeline, TextStreamer } from '@huggingface/transformers';

// Modelo pequeño (~500 MB) que corre 100% en el navegador.
// Se descarga una sola vez y queda guardado en la caché del navegador.
const MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct';

let generatorPromise = null;

const pickDevice = async () => {
  try {
    if (navigator.gpu && (await navigator.gpu.requestAdapter())) {
      return 'webgpu';
    }
  } catch {
    // Sin WebGPU: usamos WASM (CPU)
  }
  return 'wasm';
};

const loadGenerator = () => {
  if (!generatorPromise) {
    generatorPromise = (async () => {
      const device = await pickDevice();
      const generator = await pipeline('text-generation', MODEL_ID, {
        device,
        dtype: 'q4',
        progress_callback: (p) => {
          if (p.status === 'progress') {
            self.postMessage({
              type: 'progress',
              file: p.file,
              loaded: p.loaded,
              total: p.total,
            });
          }
        },
      });
      self.postMessage({ type: 'ready', device });
      return generator;
    })().catch((error) => {
      generatorPromise = null;
      throw error;
    });
  }
  return generatorPromise;
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
  const corrected = raw.match(/CORRECTED:\s*([\s\S]*?)(?:\n\s*EXPLANATION:|$)/i);
  const explanation = raw.match(/EXPLANATION:\s*([\s\S]*)$/i);
  return {
    corrected: corrected ? corrected[1].trim() : raw.trim(),
    explanation: explanation ? explanation[1].trim() : '',
  };
};

self.addEventListener('message', async ({ data }) => {
  try {
    if (data.type === 'load') {
      await loadGenerator();
      return;
    }

    if (data.type === 'correct') {
      const generator = await loadGenerator();
      let raw = '';
      const streamer = new TextStreamer(generator.tokenizer, {
        skip_prompt: true,
        skip_special_tokens: true,
        callback_function: (chunk) => {
          raw += chunk;
          self.postMessage({ type: 'partial', text: raw });
        },
      });

      const output = await generator(buildMessages(data.tense, data.text), {
        max_new_tokens: 300,
        do_sample: false,
        streamer,
      });

      const answer = output[0].generated_text.at(-1).content;
      self.postMessage({ type: 'result', ...parseAnswer(answer) });
    }
  } catch (error) {
    self.postMessage({ type: 'error', message: String(error?.message || error) });
  }
});
