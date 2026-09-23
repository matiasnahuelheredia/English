// Formato de feedback para los entrenadores de escritura: la IA NO reescribe el
// texto, sino que marca los errores para que el alumno los corrija.

// Instrucción común para el prompt: pedir una lista de errores + un consejo.
export const MISTAKES_FORMAT_INSTRUCTIONS =
  'Do NOT rewrite the text. Instead, point out the specific mistakes so the ' +
  'student can fix them. List each mistake on its own line, most important ' +
  'first, in this exact shape:\n' +
  '- "<exact wrong words copied from the text>" -> "<correction>" (<short ' +
  'reason in Spanish>)\n' +
  'Cover grammar, spelling, vocabulary and wrong register. List at most 6 ' +
  'mistakes. If the text has no real mistakes, write exactly: ' +
  '- Sin errores importantes.\n' +
  'After the list, add one final line that starts with "TIP:" and gives, in ' +
  'Spanish, the single most useful thing to improve.';

// Separa la lista de errores del consejo final (TIP:).
export const parseMistakes = (raw) => {
  const text = raw.trim();
  const tipMatch = text.match(/\n?\s*TIP:\s*([\s\S]*)$/i);
  const tip = tipMatch ? tipMatch[1].trim() : '';
  const mistakes = (tipMatch ? text.slice(0, tipMatch.index) : text).trim();
  return { mistakes, tip };
};
