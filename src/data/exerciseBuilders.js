// Helpers para armar ejercicios de gramática (desplegable, completar y ordenar)

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const withText = (before, gap, after) =>
  [
    before && { type: 'text', content: before },
    { type: gap, content: '' },
    after && { type: 'text', content: after },
  ].filter(Boolean);

// Oración con un desplegable de opciones
export const dd = (before, after, options, correctAnswer, explanation) => ({
  sentenceParts: withText(before, 'dropdown', after),
  options,
  correctAnswer,
  explanation,
});

// Oración para completar escribiendo el verbo
export const inp = (before, after, answer, explanation) => ({
  sentenceParts: withText(before, 'input', after),
  correctAnswer: [answer],
  explanation,
});

// Ordenar las palabras de la oración
export const ro = (sentence, explanation) => {
  const correctAnswer = sentence.split(' ');
  return {
    sentenceParts: [{ type: 'reorder', content: '' }],
    words: shuffleArray(correctAnswer),
    correctAnswer,
    explanation,
  };
};
