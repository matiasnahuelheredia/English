// Worker genérico: carga un modelo de texto y genera respuestas en el navegador.

// transformers.js se carga desde el CDN en tiempo de ejecución (y el service
// worker lo guarda para usarlo sin internet). No se empaqueta en el build porque
// su código minificado dispara un falso positivo del secret scanning de GitHub
// ("Mistral AI API Key") y bloquea el deploy a gh-pages.
const TRANSFORMERS_URL =
  'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.0/dist/transformers.min.js';

let transformersPromise = null;
const loadTransformers = () => {
  if (!transformersPromise) {
    transformersPromise = import(/* @vite-ignore */ TRANSFORMERS_URL).catch(
      (error) => {
        transformersPromise = null;
        throw error;
      }
    );
  }
  return transformersPromise;
};

// El modelo lo elige la página (ver src/ai/models.js); cada worker carga uno solo
let generatorPromise = null;
let loadedModelId = null;

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

const loadGenerator = (modelId) => {
  if (!generatorPromise || loadedModelId !== modelId) {
    loadedModelId = modelId;
    generatorPromise = (async () => {
      const { pipeline } = await loadTransformers();
      const device = await pickDevice();
      const generator = await pipeline('text-generation', modelId, {
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

self.addEventListener('message', async ({ data }) => {
  try {
    if (data.type === 'load') {
      await loadGenerator(data.modelId);
      return;
    }

    // La página arma los mensajes (prompt) y recibe el texto generado
    if (data.type === 'generate') {
      const generator = await loadGenerator(data.modelId);
      const { TextStreamer } = await loadTransformers();
      let raw = '';
      const streamer = new TextStreamer(generator.tokenizer, {
        skip_prompt: true,
        skip_special_tokens: true,
        callback_function: (chunk) => {
          raw += chunk;
          self.postMessage({ type: 'partial', text: raw });
        },
      });

      const output = await generator(data.messages, {
        max_new_tokens: data.maxNewTokens ?? 300,
        do_sample: false,
        streamer,
      });

      const answer = output[0].generated_text.at(-1).content;
      self.postMessage({ type: 'result', text: answer });
    }
  } catch (error) {
    self.postMessage({ type: 'error', message: String(error?.message || error) });
  }
});
