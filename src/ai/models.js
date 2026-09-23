// Modelos disponibles para el corrector con IA (todos cuantizados a 4 bits)
export const AI_MODELS = [
  {
    id: 'onnx-community/Qwen2.5-0.5B-Instruct',
    name: 'Liviano',
    size: '~500 MB',
    description: 'Recomendado para el celular. Más rápido, pero se equivoca más.',
  },
  {
    id: 'onnx-community/Qwen2.5-1.5B-Instruct',
    name: 'Mejor calidad',
    size: '~1 GB',
    description:
      'Corrige y explica mejor. Para computadora o celulares nuevos con buena memoria.',
  },
];

export const DEFAULT_MODEL_ID = AI_MODELS[0].id;
