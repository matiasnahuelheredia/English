// Modelos disponibles para el corrector con IA (todos cuantizados a 4 bits)
export const AI_MODELS = [
  {
    id: 'HuggingFaceTB/SmolLM2-360M-Instruct',
    name: 'Ultra liviano',
    size: '~270 MB',
    description:
      'La más chica: la que menos memoria usa. Para celulares con poca RAM (si los otros modelos cierran la pestaña con "¡Oh, no!"). Se equivoca más.',
  },
  {
    id: 'onnx-community/Qwen2.5-0.5B-Instruct',
    name: 'Liviano',
    size: '~500 MB',
    description: 'Buen equilibrio. Para celulares nuevos o computadora.',
  },
  {
    id: 'onnx-community/Qwen2.5-1.5B-Instruct',
    name: 'Mejor calidad',
    size: '~1 GB',
    description:
      'Corrige y explica mejor. Solo para computadora o celulares con mucha memoria.',
  },
];

// El más chico (el que más chances tiene de cargar en un celular con poca RAM)
export const LIGHTEST_MODEL_ID = AI_MODELS[0].id;

// En la computadora arrancamos con el equilibrado; en el celular, con el más
// chico (ver useLocalAI). Este es el valor por defecto para equipos normales.
export const DEFAULT_MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct';
