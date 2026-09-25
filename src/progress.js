// Guarda el progreso del alumno en el dispositivo (localStorage). Funciona en
// el navegador y dentro del APK, y sobrevive al cerrar la app. No sincroniza
// entre dispositivos (eso necesitaría una cuenta / servidor).

const KEY = 'englishProgress';

const empty = () => ({
  totalAnswered: 0,
  totalCorrect: 0,
  byTopic: {}, // { [topicId]: { answered, correct } }
  streak: 0,
  bestStreak: 0,
  lastDay: null, // 'YYYY-MM-DD'
  updatedAt: null,
});

export const getProgress = () => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    return { ...empty(), ...JSON.parse(raw) };
  } catch {
    return empty();
  }
};

const save = (data) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // sin localStorage (modo privado, etc.): el progreso queda solo en memoria
  }
};

// Día local en formato YYYY-MM-DD
const today = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

const dayDiff = (a, b) => {
  if (!a || !b) return null;
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  const da = Date.UTC(ay, am - 1, ad);
  const db = Date.UTC(by, bm - 1, bd);
  return Math.round((db - da) / 86400000);
};

// Registra una respuesta (correcta o no) para un tema y actualiza la racha.
export const recordAnswer = (topicId, isCorrect) => {
  if (!topicId) return;
  const data = getProgress();

  data.totalAnswered += 1;
  if (isCorrect) data.totalCorrect += 1;

  const t = data.byTopic[topicId] || { answered: 0, correct: 0 };
  t.answered += 1;
  if (isCorrect) t.correct += 1;
  data.byTopic[topicId] = t;

  // Racha de días: +1 si es un día nuevo consecutivo, se reinicia si se saltó
  const day = today();
  if (data.lastDay !== day) {
    const diff = dayDiff(data.lastDay, day);
    if (diff === 1) data.streak += 1;
    else data.streak = 1;
    data.lastDay = day;
    if (data.streak > data.bestStreak) data.bestStreak = data.streak;
  }

  data.updatedAt = new Date().toISOString();
  save(data);
  return data;
};

export const resetProgress = () => {
  save(empty());
  return empty();
};
