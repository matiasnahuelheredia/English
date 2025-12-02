// Base de datos de ejercicios para cada tiempo verbal

// Función para mezclar arrays aleatoriamente
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const exercisesData = {
  'present-perfect': [
    {
      sentenceParts: [
        { type: 'text', content: 'Have you ever' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'caviar?' }
      ],
      options: ['tried', 'tried OR been trying', 'been trying'],
      correctAnswer: 'tried',
      explanation: 'Usamos "tried" (Present Perfect Simple) porque estamos preguntando sobre una experiencia en la vida sin importar cuándo ocurrió. No necesitamos la forma continua porque no enfatizamos la duración de la acción.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "She's" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here since July.' }
      ],
      options: ['worked OR been working', 'been working', 'worked'],
      correctAnswer: 'worked OR been working',
      explanation: 'Ambas formas son correctas. "Has worked" enfatiza el resultado (sigue trabajando aquí), mientras que "has been working" enfatiza la continuidad de la acción desde julio hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Your mother has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'three times this morning!' }
      ],
      options: ['phoned', 'phoned OR been phoning', 'been phoning'],
      correctAnswer: 'phoned',
      explanation: 'Usamos "phoned" porque estamos contando acciones completas (tres llamadas). El Present Perfect Simple se usa para acciones repetidas y contables.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The kids are exhausted because they've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'around all day.' }
      ],
      options: ['run OR been running', 'run', 'been running'],
      correctAnswer: 'been running',
      explanation: 'Usamos "been running" (Present Perfect Continuous) porque enfatizamos la actividad continua que causó el cansancio. La duración de la acción es importante aquí.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Tim and Lucy haven't" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'our new house yet.' }
      ],
      options: ['seen OR been seeing', 'seen', 'been seeing'],
      correctAnswer: 'seen',
      explanation: 'Usamos "seen" porque se trata de una acción puntual (ver la casa). "See" en el sentido de "conocer/visitar un lugar" no se usa normalmente en forma continua.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've never" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her boyfriend. Have you?' }
      ],
      options: ['been meeting', 'met', 'met OR been meeting'],
      correctAnswer: 'met',
      explanation: 'Usamos "met" porque "meet" (conocer a alguien por primera vez) es una acción puntual que no se usa en forma continua en este contexto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "It's" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all morning.' }
      ],
      options: ['snowed OR been snowing', 'been snowing', 'snowed'],
      correctAnswer: 'been snowing',
      explanation: 'Usamos "been snowing" (Present Perfect Continuous) porque enfatizamos la actividad continua durante toda la mañana. La duración es importante aquí.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Bill has just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "to work. He won't be back till this evening." }
      ],
      options: ['been going', 'gone', 'gone OR been going'],
      correctAnswer: 'gone',
      explanation: 'Usamos "gone" porque Bill fue al trabajo y no está aquí ahora. "Gone" implica que la persona no está presente, mientras que "been" implicaría que ya regresó.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My niece has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'alone since her divorce.' }
      ],
      options: ['lived', 'been living', 'lived OR been living'],
      correctAnswer: 'lived OR been living',
      explanation: 'Ambas formas son correctas. "Has lived" enfatiza el estado/resultado (vive sola), mientras que "has been living" enfatiza la continuidad de la situación desde el divorcio.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "all morning. I'm on page 120 of my book." }
      ],
      options: ['read', 'read OR been reading', 'been reading'],
      correctAnswer: 'been reading',
      explanation: 'Usamos "been reading" (Present Perfect Continuous) porque enfatizamos la actividad continua de leer durante toda la mañana. Mencionamos el progreso (página 120) lo que indica duración.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(finish) my homework. Can I go out now?' }
      ],
      correctAnswer: ['have finished'],
      explanation: 'Present Perfect Simple: have/has + past participle. Usamos "have finished" porque la acción acaba de completarse y el resultado es importante ahora (puedo salir).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: '(work) here for five years.' }
      ],
      correctAnswer: ['has worked', 'has been working'],
      explanation: 'Ambas formas son correctas. "Has worked" o "has been working" porque la duración (cinco años) conecta el pasado con el presente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(never/visit) Paris before.' }
      ],
      correctAnswer: ['have never visited', "haven't visited"],
      explanation: 'Present Perfect con "never": have/has + never + past participle. Hablamos de una experiencia de vida hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Usamos "have" con "you" en Present Perfect para preguntar sobre la duración de una acción que comenzó en el pasado y continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my keys. Have you seen them?' }
      ],
      options: ['lost', 'losed', 'been losing'],
      correctAnswer: 'lost',
      explanation: 'Usamos "lost" (Present Perfect Simple) para indicar que las llaves están perdidas ahora. El resultado presente es importante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'married for 10 years.' }
      ],
      options: ['have been', 'are', 'were'],
      correctAnswer: 'have been',
      explanation: 'Usamos "have been" porque la duración (10 años) conecta el pasado con el presente. Todavía están casados.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'three cups of coffee this morning.' }
      ],
      options: ['has drunk', 'drank', 'has been drinking'],
      correctAnswer: 'has drunk',
      explanation: 'Usamos "has drunk" porque contamos acciones completas en un período que aún no ha terminado ("this morning").'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'each other since high school.' }
      ],
      options: ['have known', 'know', 'knew'],
      correctAnswer: 'have known',
      explanation: 'Usamos "have known" con "since" para indicar que la acción comenzó en el pasado (high school) y continúa hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Sarah' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the gym recently.' }
      ],
      options: ["hasn't been", "didn't go", 'is not going'],
      correctAnswer: "hasn't been",
      explanation: 'Usamos "hasn\'t been" con "recently" para hablar de un período reciente hasta el presente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How many countries' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Preguntamos sobre experiencias de vida usando Present Perfect con "How many".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The train' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'already' },
        { type: 'dropdown', content: '' }
      ],
      options: ['has', 'have'],
      correctAnswer: 'has',
      explanation: 'Usamos "has" con tercera persona singular. "Already" se usa con Present Perfect para indicar que algo sucedió antes de lo esperado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to Japan twice.' }
      ],
      options: ['been', 'gone', 'went'],
      correctAnswer: 'been',
      explanation: 'Usamos "been" (no "gone") porque regresamos de Japón. "Gone" implicaría que todavía estamos allí.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Someone' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all the cookies!' }
      ],
      options: ['has eaten', 'ate', 'eats'],
      correctAnswer: 'has eaten',
      explanation: 'Usamos Present Perfect porque el resultado presente es visible (no hay cookies) pero no sabemos exactamente cuándo pasó.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My brother' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'his own company.' }
      ],
      options: ['has started', 'started', 'starts'],
      correctAnswer: 'has started',
      explanation: 'Usamos Present Perfect para noticias recientes o logros cuando el tiempo exacto no es importante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'It' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours!' }
      ],
      options: ['has been raining', 'rained', 'rains'],
      correctAnswer: 'has been raining',
      explanation: 'Usamos Present Perfect Continuous con "for hours" para enfatizar la duración de una actividad que continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'so much progress!' }
      ],
      options: ['made', 'make', 'making'],
      correctAnswer: 'made',
      explanation: 'Usamos "made" en Present Perfect para hablar sobre un logro o cambio visible hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "They've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the bus for 30 minutes.' }
      ],
      options: ['been waiting', 'waited', 'wait'],
      correctAnswer: 'been waiting',
      explanation: 'Usamos Present Perfect Continuous con "for 30 minutes" para enfatizar la duración de una acción que continúa.'
    }
  ],
  
  'present-perfect-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for two hours.' }
      ],
      options: ['have been waiting', 'have waited', 'am waiting'],
      correctAnswer: 'have been waiting',
      explanation: 'Usamos Present Perfect Continuous "have been waiting" para enfatizar la duración de una acción que comenzó en el pasado y continúa hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English for five years.' }
      ],
      options: ['has been studying', 'has studied', 'is studying'],
      correctAnswer: 'has been studying',
      explanation: 'Usamos "has been studying" para enfatizar la actividad continua durante los cinco años.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Preguntamos con "How long have you been living" sobre la duración de vivir en este lugar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all day.' }
      ],
      options: ['have been working', 'have worked', 'are working'],
      correctAnswer: 'have been working',
      explanation: 'Usamos "have been working" para enfatizar la actividad continua durante todo el día.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "My eyes hurt. I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours.' }
      ],
      options: ['been reading', 'read', 'reading'],
      correctAnswer: 'been reading',
      explanation: 'Usamos Present Perfect Continuous para explicar la causa de ojos cansados (actividad reciente continua).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the gym regularly lately.' }
      ],
      options: ['has been going', 'has gone', 'goes'],
      correctAnswer: 'has been going',
      explanation: 'Usamos "has been going" con "lately" para una actividad repetida en el período reciente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/wait) for the bus?' }
      ],
      correctAnswer: ['have you been waiting'],
      explanation: 'Present Perfect Continuous question: How long + have/has + subject + been + verb-ing. Preguntamos por la duración de una acción que continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You're out of breath! What" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Preguntamos "What have you been doing?" para entender la causa del cansancio (actividad reciente).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this project for months.' }
      ],
      options: ['have been planning', 'have planned', 'are planning'],
      correctAnswer: 'have been planning',
      explanation: 'Usamos "have been planning" para enfatizar el proceso continuo de planificación durante meses.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The phone' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all morning!' }
      ],
      options: ['has been ringing', 'has rung', 'is ringing'],
      correctAnswer: 'has been ringing',
      explanation: 'Usamos "has been ringing" para enfatizar lo molesto de una acción repetida durante toda la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to call you all week.' }
      ],
      options: ['have been trying', 'have tried', 'am trying'],
      correctAnswer: 'have been trying',
      explanation: 'Usamos "have been trying" para enfatizar los intentos repetidos durante toda la semana.'
    }
  ],

  'past-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'TV when you called.' }
      ],
      options: ['was watching', 'watched', 'watch'],
      correctAnswer: 'was watching',
      explanation: 'Usamos Past Continuous "was watching" para una acción en progreso interrumpida por otra acción en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner at 7 PM yesterday.' }
      ],
      options: ['were having', 'had', 'have'],
      correctAnswer: 'were having',
      explanation: 'Usamos "were having" para describir una acción que estaba en progreso a una hora específica del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 10 PM last night?' }
      ],
      options: ['were', 'was'],
      correctAnswer: 'were',
      explanation: 'Preguntamos "What were you doing" sobre una acción en progreso en un momento específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'It' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we left the house.' }
      ],
      options: ['was raining', 'rained', 'rains'],
      correctAnswer: 'was raining',
      explanation: 'Usamos "was raining" para describir el clima que estaba en progreso cuando ocurrió otra acción.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'while I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner.' }
      ],
      options: ['was studying', 'studied'],
      correctAnswer: 'was studying',
      explanation: 'Usamos Past Continuous para dos acciones simultáneas en progreso en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a movie when the power went out.' }
      ],
      options: ['were watching', 'watched', 'watch'],
      correctAnswer: 'were watching',
      explanation: 'Usamos "were watching" para una acción en progreso que fue interrumpida (apagón).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to music all afternoon.' }
      ],
      options: ['was listening', 'listened', 'listens'],
      correctAnswer: 'was listening',
      explanation: 'Usamos "was listening" para una actividad continua durante un período específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 8 PM yesterday, we' },
        { type: 'input', content: '' },
        { type: 'text', content: '(have) dinner with friends.' }
      ],
      correctAnswer: ['were having'],
      explanation: 'Past Continuous: was/were + verb-ing. Usamos "were having" para describir una acción en progreso a una hora específica del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/do) when I called you?' }
      ],
      correctAnswer: ['were you doing'],
      explanation: 'Past Continuous question: What + was/were + subject + verb-ing. Preguntamos sobre una acción en progreso cuando ocurrió otra (la llamada).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the park this morning.' }
      ],
      options: ['were playing', 'played', 'play'],
      correctAnswer: 'were playing',
      explanation: 'Usamos "were playing" para describir una actividad en progreso durante la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'about you just now!' }
      ],
      options: ['was thinking', 'thought', 'think'],
      correctAnswer: 'was thinking',
      explanation: 'Usamos "was thinking" para una actividad mental que estaba en progreso justo antes de ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the radio when I arrived.' }
      ],
      options: ['were listening', 'listened', 'listen'],
      correctAnswer: 'were listening',
      explanation: 'Usamos "were listening" para una acción en progreso cuando llegué (otra acción).'
    }
  ],

  'past-perfect': [
    {
      sentenceParts: [
        { type: 'text', content: 'By the time I arrived, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'already' },
        { type: 'dropdown', content: '' }
      ],
      options: ['had', 'have'],
      correctAnswer: 'had',
      explanation: 'Usamos Past Perfect "had left" para una acción que ocurrió antes de otra acción en el pasado (antes de que yo llegara).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sushi before she visited Japan.' }
      ],
      options: ['had', 'has'],
      correctAnswer: 'had',
      explanation: 'Usamos "had never tried" para una experiencia (o falta de ella) antes de un momento específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when you called.' }
      ],
      options: ['had', 'have'],
      correctAnswer: 'had',
      explanation: 'Usamos "had just finished" para una acción recién completada antes de otra acción en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours before they found the place.' }
      ],
      options: ['had been driving', 'had driven', 'drove'],
      correctAnswer: 'had been driving',
      explanation: 'Usamos Past Perfect Continuous para enfatizar la duración de una acción antes de encontrar el lugar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He was tired because he' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'well.' }
      ],
      options: ["hadn't slept", "didn't sleep", "hasn't slept"],
      correctAnswer: "hadn't slept",
      explanation: 'Usamos "hadn\'t slept" para explicar la causa (en el pasado) de estar cansado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the movie before, so we watched it again.' }
      ],
      options: ['had seen', 'saw', 'have seen'],
      correctAnswer: 'had seen',
      explanation: 'Usamos "had seen" para una experiencia que ocurrió antes de verla de nuevo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'When I got home, I realized I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my keys at work.' }
      ],
      options: ['had left', 'left', 'have left'],
      correctAnswer: 'had left',
      explanation: 'Usamos "had left" porque dejar las llaves ocurrió antes de llegar a casa y darme cuenta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English before she moved to London.' }
      ],
      options: ['had studied', 'studied', 'has studied'],
      correctAnswer: 'had studied',
      explanation: 'Usamos "had studied" para una acción (estudiar) que ocurrió antes de otra acción (mudarse).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The train' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'already' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we arrived at the station.' }
      ],
      options: ['had', 'has'],
      correctAnswer: 'had',
      explanation: 'Usamos "had already left" porque el tren se fue antes de que llegáramos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my homework before I went out.' }
      ],
      options: ['had finished', 'finished', 'have finished'],
      correctAnswer: 'had finished',
      explanation: 'Usamos "had finished" porque terminar la tarea ocurrió antes de salir.'
    }
  ],

  'past-perfect-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for an hour when she finally arrived.' }
      ],
      options: ['had been waiting', 'had waited', 'was waiting'],
      correctAnswer: 'had been waiting',
      explanation: 'Usamos Past Perfect Continuous para enfatizar la duración de esperar antes de que ella llegara.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 5 years before they got married.' }
      ],
      options: ['had been dating', 'had dated', 'were dating'],
      correctAnswer: 'had been dating',
      explanation: 'Usamos "had been dating" para enfatizar la duración de 5 años antes del matrimonio.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She was exhausted because she' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all night.' }
      ],
      options: ['had been studying', 'had studied', 'was studying'],
      correctAnswer: 'had been studying',
      explanation: 'Usamos "had been studying" para explicar la causa del cansancio (actividad continua antes).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English before you moved here?' }
      ],
      options: ['had', 'have'],
      correctAnswer: 'had',
      explanation: 'Preguntamos sobre la duración de estudiar inglés antes de mudarse (Past Perfect Continuous).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours when it finally stopped.' }
      ],
      options: ['had been raining', 'had rained', 'was raining'],
      correctAnswer: 'had been raining',
      explanation: 'Usamos "had been raining" para enfatizar la duración de lluvia antes de que parara.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'there for months before we found out.' }
      ],
      options: ['had been living', 'had lived', 'were living'],
      correctAnswer: 'had been living',
      explanation: 'Usamos "had been living" para enfatizar la duración de vivir allí antes del descubrimiento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My legs ached because I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all day.' }
      ],
      options: ['had been walking', 'had walked', 'was walking'],
      correctAnswer: 'had been walking',
      explanation: 'Usamos "had been walking" para explicar la causa del dolor (caminar todo el día antes).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the test for weeks.' }
      ],
      options: ['had been preparing', 'had prepared', 'were preparing'],
      correctAnswer: 'had been preparing',
      explanation: 'Usamos "had been preparing" para enfatizar el proceso continuo de preparación durante semanas.'
    }
  ],

  'future-perfect-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'By next year, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here for 10 years.' }
      ],
      options: ['will have been working', 'will have worked', 'will be working'],
      correctAnswer: 'will have been working',
      explanation: 'Usamos Future Perfect Continuous para enfatizar la duración (10 años) que se completará en el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By the time you arrive, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 3 hours.' }
      ],
      options: ['will have been waiting', 'will have waited', 'will be waiting'],
      correctAnswer: 'will have been waiting',
      explanation: 'Usamos "will have been waiting" para enfatizar la duración de espera cuando llegues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English for 5 years by December.' }
      ],
      options: ['will have been studying', 'will have studied', 'will be studying'],
      correctAnswer: 'will have been studying',
      explanation: 'Usamos "will have been studying" para enfatizar la duración continua hasta diciembre.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 20 years next month.' }
      ],
      options: ['will have been married', 'will have married', 'will be married'],
      correctAnswer: 'will have been married',
      explanation: 'Usamos "will have been married" para un período de 20 años que se completará el próximo mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 6 PM, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 8 hours straight.' }
      ],
      options: ['will have been working', 'will have worked', 'will be working'],
      correctAnswer: 'will have been working',
      explanation: 'Usamos "will have been working" para enfatizar 8 horas continuas de trabajo hasta las 6 PM.'
    }
  ],

  'future-simple': [
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English every day.' }
      ],
      options: ['studies', 'study', 'studying'],
      correctAnswer: 'studies',
      explanation: 'Usamos "studies" porque es tercera persona singular (she) y el Present Simple requiere añadir -es/-s al verbo. Describe una rutina habitual.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in New York.' }
      ],
      options: ['lives', 'live', 'living'],
      correctAnswer: 'live',
      explanation: 'Usamos "live" porque "they" es plural y en Present Simple no se añade -s. Describe un estado permanente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Water' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 100 degrees Celsius.' }
      ],
      options: ['boil', 'boils', 'boiling'],
      correctAnswer: 'boils',
      explanation: 'Usamos "boils" porque "water" es tercera persona singular y describe una verdad universal o hecho científico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'coffee in the morning.' }
      ],
      options: ['drinks', 'drink', 'drinking'],
      correctAnswer: 'drink',
      explanation: 'Usamos "drink" porque "I" no requiere -s en Present Simple. Describe un hábito regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He usually' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to work by bus.' }
      ],
      options: ['go', 'goes', 'going'],
      correctAnswer: 'goes',
      explanation: 'Usamos "goes" porque "he" es tercera persona singular. "Usually" indica una acción habitual, típica del Present Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The sun' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the east.' }
      ],
      options: ['rise', 'rises', 'rising'],
      correctAnswer: 'rises',
      explanation: 'Usamos "rises" porque es una verdad universal. "The sun" es tercera persona singular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My parents' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the countryside.' }
      ],
      options: ['lives', 'live', 'living'],
      correctAnswer: 'live',
      explanation: 'Usamos "live" porque "my parents" es plural y describe un estado permanente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The store' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 9 AM every day.' }
      ],
      options: ['open', 'opens', 'opening'],
      correctAnswer: 'opens',
      explanation: 'Usamos "opens" porque "the store" es tercera persona singular y describe un horario regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Dogs' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'bones.' }
      ],
      options: ['like', 'likes', 'liking'],
      correctAnswer: 'like',
      explanation: 'Usamos "like" porque "dogs" es plural. Describe una verdad general sobre los perros.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My sister' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'as a doctor.' }
      ],
      options: ['work', 'works', 'working'],
      correctAnswer: 'works',
      explanation: 'Usamos "works" porque "my sister" es tercera persona singular y describe su profesión permanente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'pizza on Fridays.' }
      ],
      options: ['eat', 'eats', 'eating'],
      correctAnswer: 'eat',
      explanation: 'Usamos "eat" porque "we" es primera persona plural. Describe una rutina semanal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The Earth' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'around the Sun.' }
      ],
      options: ['revolve', 'revolves', 'revolving'],
      correctAnswer: 'revolves',
      explanation: 'Usamos "revolves" porque es un hecho científico y "the Earth" es tercera persona singular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'toys.' }
      ],
      options: ['love', 'loves', 'loving'],
      correctAnswer: 'love',
      explanation: 'Usamos "love" porque "children" es plural. Describe una característica general de los niños.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My cat' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a lot.' }
      ],
      options: ['sleep', 'sleeps', 'sleeping'],
      correctAnswer: 'sleeps',
      explanation: 'Usamos "sleeps" porque "my cat" es tercera persona singular. Describe un hábito del gato.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I always' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my teeth before bed.' }
      ],
      options: ['brush', 'brushes', 'brushing'],
      correctAnswer: 'brush',
      explanation: 'Usamos "brush" con "I" en Present Simple. "Always" indica un hábito regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sugar in her tea.' }
      ],
      options: ['put', 'puts', 'putting'],
      correctAnswer: 'puts',
      explanation: 'Usamos "puts" porque "she" es tercera persona singular. "Never" se usa con Present Simple para hábitos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The movie' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 8 PM tonight.' }
      ],
      options: ['start', 'starts', 'starting'],
      correctAnswer: 'starts',
      explanation: 'Usamos Present Simple "starts" para horarios fijos programados, incluso cuando hablan del futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'soccer every weekend.' }
      ],
      options: ['play', 'plays', 'playing'],
      correctAnswer: 'play',
      explanation: 'Usamos "play" porque "my friends" es plural. "Every weekend" indica una rutina regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'It often' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in winter here.' }
      ],
      options: ['snow', 'snows', 'snowing'],
      correctAnswer: 'snows',
      explanation: 'Usamos "snows" porque "it" es tercera persona singular. "Often" se usa con Present Simple para frecuencia.'
    }
  ],
  
  'present-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'TV right now.' }
      ],
      options: ['am watching', 'watch', 'watches'],
      correctAnswer: 'am watching',
      explanation: 'Usamos "am watching" (Present Continuous) porque "right now" indica una acción que está ocurriendo en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner at the moment.' }
      ],
      options: ['are cooking', 'cook', 'cooks'],
      correctAnswer: 'are cooking',
      explanation: 'Usamos "are cooking" porque "at the moment" indica que la acción está en progreso ahora mismo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for her exam these days.' }
      ],
      options: ['is studying', 'studies', 'study'],
      correctAnswer: 'is studying',
      explanation: 'Usamos "is studying" porque "these days" indica una acción temporal que está ocurriendo en el período actual.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Look! It' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'outside.' }
      ],
      options: ['is raining', 'rains', 'rain'],
      correctAnswer: 'is raining',
      explanation: 'Usamos "is raining" porque "Look!" indica que la acción está ocurriendo ahora y queremos que alguien la observe.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on a new project this month.' }
      ],
      options: ['are working', 'work', 'works'],
      correctAnswer: 'are working',
      explanation: 'Usamos "are working" porque "this month" indica una acción temporal en progreso durante este período.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Right now, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(study) for my English test.' }
      ],
      correctAnswer: ['am studying', "'m studying"],
      explanation: 'Present Continuous: am/is/are + verb-ing. Usamos "am studying" porque "right now" indica una acción en progreso en este momento exacto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/listen) to the teacher right now.' }
      ],
      correctAnswer: ['are not listening', "aren't listening", 'are not listening'],
      explanation: 'Present Continuous negativo: am/is/are + not + verb-ing. La acción está ocurriendo (o no está ocurriendo) en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/do) this weekend?' }
      ],
      correctAnswer: ['are you doing', "'re you doing"],
      explanation: 'Present Continuous para planes futuros: What + am/is/are + subject + verb-ing. Preguntamos por planes ya organizados.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Be quiet! The baby' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '.' }
      ],
      options: ['is sleeping', 'sleeps', 'sleep'],
      correctAnswer: 'is sleeping',
      explanation: 'Usamos "is sleeping" porque la acción está ocurriendo en este momento y pedimos silencio por esa razón.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I can't talk now. I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a shower.' }
      ],
      options: ['am taking', 'take', 'takes'],
      correctAnswer: 'am taking',
      explanation: 'Usamos "am taking" porque la acción está en progreso en este momento específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'me tomorrow.' }
      ],
      options: ['are visiting', 'visit', 'visits'],
      correctAnswer: 'are visiting',
      explanation: 'Usamos Present Continuous para planes futuros ya confirmados con "tomorrow".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Why' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '?' }
      ],
      options: ['are', 'is'],
      correctAnswer: 'are',
      explanation: 'Usamos "are" con "you" en Present Continuous para preguntar sobre una acción en progreso ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the garden now.' }
      ],
      options: ['are playing', 'play', 'plays'],
      correctAnswer: 'are playing',
      explanation: 'Usamos "are playing" porque "now" indica que la acción está ocurriendo en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "He's always" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'his phone!' }
      ],
      options: ['checking', 'check', 'checks'],
      correctAnswer: 'checking',
      explanation: 'Usamos Present Continuous con "always" para expresar una queja sobre un hábito molesto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The temperature' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rapidly.' }
      ],
      options: ['is rising', 'rises', 'rise'],
      correctAnswer: 'is rising',
      explanation: 'Usamos "is rising" para describir un cambio que está ocurriendo en este período.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to Italy this summer.' }
      ],
      options: ['are traveling', 'travel', 'travels'],
      correctAnswer: 'are traveling',
      explanation: 'Usamos Present Continuous para planes de futuro ya organizados con "this summer".'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Listen! Someone" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at the door.' }
      ],
      options: ['is knocking', 'knocks', 'knock'],
      correctAnswer: 'is knocking',
      explanation: 'Usamos "is knocking" porque "Listen!" indica que la acción está ocurriendo ahora mismo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My English' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'better and better.' }
      ],
      options: ['is getting', 'gets', 'get'],
      correctAnswer: 'is getting',
      explanation: 'Usamos Present Continuous para describir un cambio o desarrollo gradual que está en progreso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You're always" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'things!' }
      ],
      options: ['forgetting', 'forget', 'forgets'],
      correctAnswer: 'forgetting',
      explanation: 'Usamos Present Continuous con "always" para criticar un hábito repetitivo que nos molesta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'about?' }
      ],
      options: ['are', 'is'],
      correctAnswer: 'are',
      explanation: 'Usamos "are" con "you" para preguntar sobre pensamientos en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Scientists' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'new ways to fight cancer.' }
      ],
      options: ['are developing', 'develop', 'develops'],
      correctAnswer: 'are developing',
      explanation: 'Usamos Present Continuous para actividades en progreso en el período actual (aunque no en este momento exacto).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'new employees next week.' }
      ],
      options: ['is hiring', 'hires', 'hire'],
      correctAnswer: 'is hiring',
      explanation: 'Usamos Present Continuous para planes futuros ya organizados con "next week".'
    }
  ],

  'past-simple': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to Paris last year.' }
      ],
      options: ['went', 'go', 'gone'],
      correctAnswer: 'went',
      explanation: 'Usamos "went" (Past Simple) porque "last year" indica un tiempo específico en el pasado. La acción está completamente terminada.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her homework yesterday.' }
      ],
      options: ['finished', 'finish', 'finishes'],
      correctAnswer: 'finished',
      explanation: 'Usamos "finished" porque "yesterday" es un marcador temporal del pasado que requiere Past Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a new car in 2020.' }
      ],
      options: ['bought', 'buy', 'buys'],
      correctAnswer: 'bought',
      explanation: 'Usamos "bought" porque "in 2020" es un tiempo específico en el pasado y la acción está completa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Last night, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(watch) a great movie on TV.' }
      ],
      correctAnswer: ['watched'],
      explanation: 'Past Simple: verb + ed (regular verbs). Usamos "watched" porque "last night" es un tiempo específico y completado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Where' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/go) on vacation last summer?' }
      ],
      correctAnswer: ['did you go'],
      explanation: 'Past Simple question: Did + subject + verb (base form). "Did" ya indica el pasado, por eso el verbo va en forma base.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/come) to my party yesterday.' }
      ],
      correctAnswer: ["didn't come", 'did not come'],
      explanation: 'Past Simple negativo: did not (didn\'t) + verb (base form). La acción no ocurrió en un tiempo específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at that restaurant last week.' }
      ],
      options: ['ate', 'eat', 'eats'],
      correctAnswer: 'ate',
      explanation: 'Usamos "ate" (Past Simple irregular) porque "last week" indica un tiempo terminado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'very hard for his exam.' }
      ],
      options: ['studied', 'study', 'studies'],
      correctAnswer: 'studied',
      explanation: 'Usamos "studied" porque la acción de estudiar está completamente terminada en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Did you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the movie last night?' }
      ],
      options: ['watch', 'watched', 'watches'],
      correctAnswer: 'watch',
      explanation: 'Después de "Did" usamos el infinitivo del verbo sin "to". "Did" ya indica el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My grandmother' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in this house 50 years ago.' }
      ],
      options: ['lived', 'live', 'lives'],
      correctAnswer: 'lived',
      explanation: 'Usamos "lived" porque "50 years ago" es un tiempo específico terminado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The concert' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 9 PM.' }
      ],
      options: ['started', 'start', 'starts'],
      correctAnswer: 'started',
      explanation: 'Usamos Past Simple porque hablamos de un evento específico que ocurrió en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "see John at the party yesterday. He wasn't there." }
      ],
      options: ["didn't", "don't", "doesn't"],
      correctAnswer: "didn't",
      explanation: 'Usamos "didn\'t" para la forma negativa en Past Simple. "Yesterday" confirma que es pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Where' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'last summer?' }
      ],
      options: ['did', 'do'],
      correctAnswer: 'did',
      explanation: 'Usamos "did" para formar preguntas en Past Simple con "last summer".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her keys this morning.' }
      ],
      options: ['lost', 'lose', 'loses'],
      correctAnswer: 'lost',
      explanation: 'Usamos "lost" (Past Simple irregular) porque "this morning" (si ya pasó) es un tiempo terminado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the park all afternoon.' }
      ],
      options: ['played', 'play', 'plays'],
      correctAnswer: 'played',
      explanation: 'Usamos "played" porque la actividad de la tarde ya terminó (está en el pasado).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my best friend in college.' }
      ],
      options: ['met', 'meet', 'meets'],
      correctAnswer: 'met',
      explanation: 'Usamos "met" (Past Simple irregular) porque el encuentro ocurrió en un tiempo específico del pasado (college).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'married in 2015.' }
      ],
      options: ['got', 'get', 'gets'],
      correctAnswer: 'got',
      explanation: 'Usamos "got" porque "in 2015" es una fecha específica en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The train' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on time yesterday.' }
      ],
      options: ['arrived', 'arrive', 'arrives'],
      correctAnswer: 'arrived',
      explanation: 'Usamos "arrived" porque "yesterday" indica un momento específico y completado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My father' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'me how to drive when I was 18.' }
      ],
      options: ['taught', 'teach', 'teaches'],
      correctAnswer: 'taught',
      explanation: 'Usamos "taught" (Past Simple irregular) porque la acción ocurrió cuando tenía 18 años (pasado específico).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a great time at the wedding.' }
      ],
      options: ['had', 'have', 'has'],
      correctAnswer: 'had',
      explanation: 'Usamos "had" porque la boda es un evento del pasado que ya terminó.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a beautiful song at the concert.' }
      ],
      options: ['sang', 'sing', 'sings'],
      correctAnswer: 'sang',
      explanation: 'Usamos "sang" (Past Simple irregular) porque el concierto es un evento pasado completo.'
    }
  ],

  'future-simple': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you tomorrow.' }
      ],
      options: ['will call', 'call', 'called'],
      correctAnswer: 'will call',
      explanation: 'Usamos "will call" (Future Simple) porque "tomorrow" indica una acción futura. "Will" expresa una decisión o promesa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'arrive at 6 PM.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para expresar una predicción sobre el futuro basada en lo que creemos que va a pasar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the party next Friday.' }
      ],
      options: ['will come', 'come', 'came'],
      correctAnswer: 'will come',
      explanation: 'Usamos "will come" porque "next Friday" es un tiempo futuro específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'It' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rain later today.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hacer una predicción sobre el clima futuro basada en lo que creemos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Don't worry, I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'help you.' }
      ],
      options: ['will', "won't", 'am'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para expresar una promesa o ofrecimiento espontáneo de ayuda.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The meeting' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'start in 10 minutes.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hablar de un evento futuro programado o esperado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I think we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'win the game.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "I think" para expresar una opinión o predicción sobre el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be back before midnight.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hacer una predicción sobre cuándo regresarán.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'This homework' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'take long.' }
      ],
      options: ["won't", 'will', "isn't"],
      correctAnswer: "won't",
      explanation: 'Usamos "won\'t" (will not) para hacer una predicción negativa sobre la duración.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Maybe she' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'change her mind.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "maybe" para expresar una posibilidad futura incierta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be 30 next month.' }
      ],
      options: ['will', "won't", 'am'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hablar de una edad futura en una fecha específica.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The sun' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rise at 6 AM tomorrow.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hechos o certezas sobre el futuro (como eventos naturales predecibles).'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I'm sure you" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'pass the exam.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "I\'m sure" para expresar confianza sobre un resultado futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Tomorrow, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(visit) my grandmother.' }
      ],
      correctAnswer: ['will visit', "'ll visit"],
      explanation: 'Future Simple: will + verb (base form). Usamos "will visit" para una decisión o plan futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I think it' },
        { type: 'input', content: '' },
        { type: 'text', content: '(rain) tomorrow.' }
      ],
      correctAnswer: ['will rain', "'ll rain"],
      explanation: 'Future Simple con "I think": will + verb. Expresamos una predicción sobre el futuro basada en nuestra opinión.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/be) at home tonight.' }
      ],
      correctAnswer: ['will not be', "won't be", "will not be"],
      explanation: 'Future Simple negativo: will not (won\'t) + verb. Hacemos una predicción negativa sobre el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'have time to finish this today.' }
      ],
      options: ["won't", 'will', 'are'],
      correctAnswer: "won't",
      explanation: 'Usamos "won\'t" para hacer una predicción negativa sobre tener tiempo suficiente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'probably be late again.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "probably" para expresar una predicción con alta probabilidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The weather' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be nice this weekend.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hacer una predicción sobre el clima futuro.'
    }
  ],

  'future-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'This time tomorrow, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on the beach.' }
      ],
      options: ['will be lying', 'will lie', 'am lying'],
      correctAnswer: 'will be lying',
      explanation: 'Usamos "will be lying" (Future Continuous) porque indica una acción que estará en progreso en un momento específico del futuro (mañana a esta hora).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 8 PM tonight, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner with our friends.' }
      ],
      options: ['will be having', 'will have', 'are having'],
      correctAnswer: 'will be having',
      explanation: 'Usamos "will be having" porque describe una acción que estará en progreso a las 8 PM (un momento específico en el futuro).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the exam all weekend.' }
      ],
      options: ['will be studying', 'will study', 'studies'],
      correctAnswer: 'will be studying',
      explanation: 'Usamos "will be studying" porque indica una actividad continua que ocurrirá durante todo el fin de semana en el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Next month, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in their new house.' }
      ],
      options: ['will be living', 'will live', 'live'],
      correctAnswer: 'will be living',
      explanation: 'Usamos "will be living" para enfatizar que la acción de vivir estará en progreso durante el próximo mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Don't call me at 10 AM. I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in a meeting.' }
      ],
      options: ['will be', 'will', 'am'],
      correctAnswer: 'will be',
      explanation: 'Usamos "will be" (Future Continuous con verbo "be") porque indica que la reunión estará en progreso a las 10 AM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'This time next year, he' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in Paris.' }
      ],
      options: ['will be working', 'will work', 'works'],
      correctAnswer: 'will be working',
      explanation: 'Usamos "will be working" porque enfatiza que la acción estará en progreso en ese momento específico del futuro (el próximo año a esta hora).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the report when you arrive.' }
      ],
      options: ['will be finishing', 'will finish', 'finish'],
      correctAnswer: 'will be finishing',
      explanation: 'Usamos "will be finishing" porque la acción de terminar el informe estará en progreso cuando llegues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At midnight, people' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the New Year.' }
      ],
      options: ['will be celebrating', 'will celebrate', 'celebrate'],
      correctAnswer: 'will be celebrating',
      explanation: 'Usamos "will be celebrating" porque describe una acción que estará en progreso a medianoche.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Tomorrow afternoon, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to music and relaxing.' }
      ],
      options: ['will be listening', 'will listen', 'listen'],
      correctAnswer: 'will be listening',
      explanation: 'Usamos "will be listening" para enfatizar que estas acciones estarán en progreso mañana por la tarde.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for London at this time tomorrow.' }
      ],
      options: ['will be leaving', 'will leave', 'leave'],
      correctAnswer: 'will be leaving',
      explanation: 'Usamos "will be leaving" porque la partida estará en progreso mañana a esta hora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 5 PM, the kids' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their homework.' }
      ],
      options: ['will be doing', 'will do', 'do'],
      correctAnswer: 'will be doing',
      explanation: 'Usamos "will be doing" porque la tarea estará en progreso a las 5 PM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at the conference all day Friday.' }
      ],
      options: ['will be speaking', 'will speak', 'speaks'],
      correctAnswer: 'will be speaking',
      explanation: 'Usamos "will be speaking" porque describe una actividad continua durante todo el viernes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you at the airport when you land.' }
      ],
      options: ['will be waiting', 'will wait', 'wait'],
      correctAnswer: 'will be waiting',
      explanation: 'Usamos "will be waiting" porque estaré esperando cuando aterrices (acción en progreso en ese momento futuro).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Next week, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to our new apartment.' }
      ],
      options: ['will be moving', 'will move', 'move'],
      correctAnswer: 'will be moving',
      explanation: 'Usamos "will be moving" para enfatizar que la mudanza será un proceso en progreso la próxima semana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At noon, the chef' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lunch for the guests.' }
      ],
      options: ['will be preparing', 'will prepare', 'prepares'],
      correctAnswer: 'will be preparing',
      explanation: 'Usamos "will be preparing" porque la preparación estará en progreso al mediodía.'
    }
  ],

  'future-perfect': [
    {
      sentenceParts: [
        { type: 'text', content: 'By next June, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'from university.' }
      ],
      options: ['will have graduated', 'will graduate', 'graduate'],
      correctAnswer: 'will have graduated',
      explanation: 'Usamos "will have graduated" (Future Perfect) porque la acción estará completa antes de un momento específico en el futuro (junio próximo).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the book by the time you arrive.' }
      ],
      options: ['will have finished', 'will finish', 'finishes'],
      correctAnswer: 'will have finished',
      explanation: 'Usamos "will have finished" porque la acción de terminar el libro estará completa antes de que llegues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 2030, scientists' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a cure for the disease.' }
      ],
      options: ['will have found', 'will find', 'find'],
      correctAnswer: 'will have found',
      explanation: 'Usamos "will have found" porque predecimos que la acción estará completa antes del año 2030.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 10 years next month.' }
      ],
      options: ['will have been married', 'will be married', 'are married'],
      correctAnswer: 'will have been married',
      explanation: 'Usamos "will have been married" porque el período de 10 años se completará el próximo mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By the end of this year, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to five different countries.' }
      ],
      options: ['will have traveled', 'will travel', 'travel'],
      correctAnswer: 'will have traveled',
      explanation: 'Usamos "will have traveled" porque la acción de viajar a cinco países estará completa al final del año.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all my exams by Friday.' }
      ],
      options: ['will have completed', 'will complete', 'complete'],
      correctAnswer: 'will have completed',
      explanation: 'Usamos "will have completed" porque todos los exámenes estarán terminados antes del viernes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By tomorrow morning, the builders' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the wall.' }
      ],
      options: ['will have built', 'will build', 'build'],
      correctAnswer: 'will have built',
      explanation: 'Usamos "will have built" porque el muro estará construido antes de mañana por la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner by the time we get home.' }
      ],
      options: ['will have cooked', 'will cook', 'cooks'],
      correctAnswer: 'will have cooked',
      explanation: 'Usamos "will have cooked" porque la cena estará preparada antes de que lleguemos a casa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here for 20 years by December.' }
      ],
      options: ['will have worked', 'will work', 'works'],
      correctAnswer: 'will have worked',
      explanation: 'Usamos "will have worked" porque el período de 20 años se completará en diciembre.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By this time next year, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their new house.' }
      ],
      options: ['will have bought', 'will buy', 'buy'],
      correctAnswer: 'will have bought',
      explanation: 'Usamos "will have bought" porque la compra estará completa antes del próximo año a esta hora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the project by the deadline.' }
      ],
      options: ['will have finished', 'will finish', 'finish'],
      correctAnswer: 'will have finished',
      explanation: 'Usamos "will have finished" porque el proyecto estará terminado antes de la fecha límite.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 8 PM, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all the dishes.' }
      ],
      options: ['will have washed', 'will wash', 'wash'],
      correctAnswer: 'will have washed',
      explanation: 'Usamos "will have washed" porque los platos estarán lavados antes de las 8 PM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '1000 employees by next year.' }
      ],
      options: ['will have hired', 'will hire', 'hires'],
      correctAnswer: 'will have hired',
      explanation: 'Usamos "will have hired" porque la contratación de 1000 empleados estará completa antes del próximo año.'
    }
  ],

  'first-conditional': [
    {
      sentenceParts: [
        { type: 'text', content: 'If it' },
        { type: 'input', content: '' },
        { type: 'text', content: '(rain) tomorrow, we' },
        { type: 'input', content: '' },
        { type: 'text', content: "(stay) at home." }
      ],
      correctAnswer: ['rains', 'will stay'],
      explanation: 'First Conditional: If + Present Simple, will + infinitive. Usamos "rains" (presente simple) en la condición y "will stay" (futuro simple) en el resultado. Expresa una situación real y posible en el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: '(be) happy if you' },
        { type: 'input', content: '' },
        { type: 'text', content: "(call) her." }
      ],
      correctAnswer: ['will be', 'call'],
      explanation: 'First Conditional: resultado + if + condición. "Will be" es el resultado futuro y "call" es la condición en presente simple. La condición es posible y realista.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not study), they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(fail) the exam." }
      ],
      correctAnswer: ["don't study", 'will fail'],
      explanation: 'First Conditional negativo: If + don\'t/doesn\'t + verbo, will + infinitive. "Don\'t study" es presente simple negativo y "will fail" es el resultado futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If he' },
        { type: 'input', content: '' },
        { type: 'text', content: "(arrive) on time, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(can) start the meeting." }
      ],
      correctAnswer: ['arrives', 'can'],
      explanation: 'First Conditional con modal: If + presente simple, modal + infinitive. "Arrives" (tercera persona) + "can" (modal de posibilidad). Situación futura posible.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: "(you/do) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(win) the lottery?" }
      ],
      correctAnswer: ['will you do', 'win'],
      explanation: 'First Conditional en pregunta: What + will + sujeto + verbo + if + presente simple. "Will you do" es la pregunta sobre el futuro y "win" es la condición en presente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(see) John, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(tell) him about the party." }
      ],
      correctAnswer: ['see', 'will tell'],
      explanation: 'First Conditional: "see" (presente simple) describe una condición posible, y "will tell" es la acción futura que resultará de esa condición.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If you' },
        { type: 'input', content: '' },
        { type: 'text', content: "(work) hard, you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(succeed)." }
      ],
      correctAnswer: ['work', 'will succeed'],
      explanation: 'First Conditional: If + presente simple, will + infinitive. Expresa una consecuencia probable del trabajo duro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'input', content: '' },
        { type: 'text', content: "(go) to the beach if the weather" },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) nice." }
      ],
      correctAnswer: ['will go', 'is'],
      explanation: 'First Conditional: "will go" es el plan futuro e "is" (presente simple) es la condición que debe cumplirse.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If she' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not eat) breakfast, she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(feel) hungry later." }
      ],
      correctAnswer: ["doesn't eat", 'will feel'],
      explanation: 'First Conditional negativo: "doesn\'t eat" (tercera persona) + "will feel". Causa y efecto futuro probable.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(invite) us, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(attend) the party." }
      ],
      correctAnswer: ['invite', 'will attend'],
      explanation: 'First Conditional: condición posible "invite" (presente) + resultado futuro "will attend".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(have) time, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(help) you with your homework." }
      ],
      correctAnswer: ['have', 'will help'],
      explanation: 'First Conditional: "have" (presente) + "will help". Expresa una promesa condicional.'
    }
  ],

  'second-conditional': [
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) rich, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(travel) around the world." }
      ],
      correctAnswer: ['were', 'would travel'],
      explanation: 'Second Conditional: If + Past Simple, would + infinitive. Usamos "were" (no "was") para todas las personas en situaciones formales. Describe situaciones hipotéticas o poco probables en el presente/futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) a new car if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(have) enough money." }
      ],
      correctAnswer: ['would buy', 'had'],
      explanation: 'Second Conditional: resultado + if + condición. "Would buy" expresa el resultado hipotético y "had" (pasado simple) la condición irreal o improbable.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not live) so far away, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(visit) them more often." }
      ],
      correctAnswer: ["didn't live", 'would visit'],
      explanation: 'Second Conditional negativo: If + didn\'t + verbo, would + infinitive. "Didn\'t live" es la condición hipotética negativa y "would visit" es el resultado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: "(you/do) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(see) a ghost?" }
      ],
      correctAnswer: ['would you do', 'saw'],
      explanation: 'Second Conditional en pregunta: What + would + sujeto + verbo + if + pasado simple. Situación hipotética poco probable: "would you do" + "saw".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If he' },
        { type: 'input', content: '' },
        { type: 'text', content: "(study) harder, he" },
        { type: 'input', content: '' },
        { type: 'text', content: "(pass) his exams." }
      ],
      correctAnswer: ['studied', 'would pass'],
      explanation: 'Second Conditional: "studied" (pasado simple) + "would pass". Da consejo sobre una situación presente que probablemente no cambiará.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) very surprised if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(come) to the party." }
      ],
      correctAnswer: ['would be', 'came'],
      explanation: 'Second Conditional: "would be" + "came". Expresa que algo es poco probable que ocurra, por eso nos sorprendería.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If we' },
        { type: 'input', content: '' },
        { type: 'text', content: "(win) the lottery, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) a big house." }
      ],
      correctAnswer: ['won', 'would buy'],
      explanation: 'Second Conditional: "won" (pasado) + "would buy". Situación hipotética improbable sobre ganar la lotería.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) healthier if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(exercise) regularly." }
      ],
      correctAnswer: ['would be', 'exercised'],
      explanation: 'Second Conditional: "would be" + "exercised". Da consejo sobre un cambio de hábito poco probable.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(speak) Chinese, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(move) to Beijing." }
      ],
      correctAnswer: ['spoke', 'would move'],
      explanation: 'Second Conditional: "spoke" + "would move". Situación contraria a la realidad presente (no habla chino).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If it' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not be) so expensive, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) it." }
      ],
      correctAnswer: ["weren't", 'would buy'],
      explanation: 'Second Conditional negativo: "weren\'t" (forma correcta para todas las personas) + "would buy".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) happier if they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(change) jobs." }
      ],
      correctAnswer: ['would be', 'changed'],
      explanation: 'Second Conditional: "would be" + "changed". Sugiere un cambio hipotético que mejoraría su situación.'
    }
  ],

  'third-conditional': [
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(know) about the meeting, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(attend) it." }
      ],
      correctAnswer: ['had known', 'would have attended'],
      explanation: 'Third Conditional: If + Past Perfect, would have + past participle. "Had known" y "would have attended" hablan de una situación pasada que no ocurrió. Expresa arrepentimiento o situaciones imposibles de cambiar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not miss) the train if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(leave) home earlier." }
      ],
      correctAnswer: ["wouldn't have missed", 'had left'],
      explanation: 'Third Conditional negativo: "wouldn\'t have missed" (resultado que no pasó) + "had left" (condición que no se cumplió en el pasado).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(study) harder, they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(pass) the exam." }
      ],
      correctAnswer: ['had studied', 'would have passed'],
      explanation: 'Third Conditional: "had studied" + "would have passed". Habla de algo que no pasó en el pasado y su resultado (que tampoco ocurrió).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: "(you/do) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(see) the accident?" }
      ],
      correctAnswer: ['would you have done', 'had seen'],
      explanation: 'Third Conditional en pregunta: What + would + sujeto + have + past participle + if + past perfect. Situación hipotética en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If he' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not eat) that food, he" },
        { type: 'input', content: '' },
        { type: 'text', content: "(not get) sick." }
      ],
      correctAnswer: ["hadn't eaten", "wouldn't have gotten"],
      explanation: 'Third Conditional doble negativo: "hadn\'t eaten" (no comió, pero lo hizo) + "wouldn\'t have gotten" (no se habría enfermado, pero se enfermó).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) that house if I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(have) enough money." }
      ],
      correctAnswer: ['would have bought', 'had had'],
      explanation: 'Third Conditional: "would have bought" + "had had" (doble "had" porque es el pasado perfecto de "have"). Habla de una oportunidad perdida en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If you' },
        { type: 'input', content: '' },
        { type: 'text', content: "(tell) me earlier, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(help) you." }
      ],
      correctAnswer: ['had told', 'would have helped'],
      explanation: 'Third Conditional: "had told" + "would have helped". Expresa arrepentimiento por algo que no ocurrió en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not be) late if we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(take) a taxi." }
      ],
      correctAnswer: ["wouldn't have been", 'had taken'],
      explanation: 'Third Conditional negativo: "wouldn\'t have been" + "had taken". Lamenta una decisión pasada que causó llegar tarde.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If she' },
        { type: 'input', content: '' },
        { type: 'text', content: "(save) money, she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(afford) the trip." }
      ],
      correctAnswer: ['had saved', 'could have afforded'],
      explanation: 'Third Conditional con modal: "had saved" + "could have afforded". Usa "could" en lugar de "would" para expresar posibilidad perdida.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(listen) to my advice, they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(avoid) the problem." }
      ],
      correctAnswer: ['had listened', 'would have avoided'],
      explanation: 'Third Conditional: "had listened" + "would have avoided". Crítica a una decisión pasada que causó problemas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not forget) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(remind) me." }
      ],
      correctAnswer: ["wouldn't have forgotten", 'had reminded'],
      explanation: 'Third Conditional: "wouldn\'t have forgotten" + "had reminded". Implica que olvidó porque no le recordaron.'
    }
  ],

  'question-forms': [
    {
      sentenceParts: [
        { type: 'text', content: 'I Should her tell I feel how' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Should I tell her how I feel'],
      explanation: 'Modal question: Should + subject + verb + object + how + subject + verb. Las preguntas con modales ponen el modal antes del sujeto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'friend known long best have How you your' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How long have you known your best friend'],
      explanation: 'Present Perfect question: How long + have + subject + past participle. "How long" pregunta por duración.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'tell when you train next leaves the Could me' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Could you tell me when the next train leaves'],
      explanation: 'Indirect question: Could you tell me + when + subject + verb (sin inversión). En preguntas indirectas, el orden es afirmativo después de "when".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'are What about you thinking' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['What are you thinking about'],
      explanation: 'Present Continuous question: What + are + subject + verb-ing + preposition. "Think about" necesita la preposición al final.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'at do weekend you What doing the like' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['What do you like doing at the weekend'],
      explanation: 'Present Simple question: What + do + subject + like + verb-ing. "Like doing" expresa preferencias sobre actividades.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'music to does What Jane kind like listening of' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['What kind of music does Jane like listening to'],
      explanation: 'Present Simple question: What kind of + noun + does + subject + like + verb-ing + preposition. La preposición "to" va al final.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'you time film know finishes Do what the' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Do you know what time the film finishes'],
      explanation: 'Indirect question: Do you know + what time + subject + verb. El orden después de "what time" es afirmativo, no interrogativo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'class students yesterday to many came How' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How many students came to class yesterday'],
      explanation: 'Past Simple question: How many + noun + verb (past). "How many" pregunta por cantidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'you remember is where Do the restaurant' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Do you remember where the restaurant is'],
      explanation: 'Indirect question: Do you remember + where + subject + verb. El orden es afirmativo después de "where" en preguntas indirectas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'housework family in Who your the does' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Who does the housework in your family'],
      explanation: 'Question with "Who": Who + does + noun + preposition + possessive + noun. "Who" actúa como sujeto de la pregunta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'studying been How you English have long' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How long have you been studying English'],
      explanation: 'Present Perfect Continuous question: How long + have + subject + been + verb-ing. Pregunta por la duración de una acción continua.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'me know where you let Could is the station' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Could you let me know where the station is'],
      explanation: 'Indirect polite question: Could you let me know + where + subject + verb. Forma muy cortés de pedir información.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'cost How much new does car a' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How much does a new car cost'],
      explanation: 'Present Simple question: How much + does + subject + verb. "How much" pregunta por precio o cantidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Why crying you are' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Why are you crying'],
      explanation: 'Present Continuous question: Why + are + subject + verb-ing. Pregunta sobre la razón de una acción en progreso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'did When last you holiday on go' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['When did you last go on holiday'],
      explanation: 'Past Simple question: When + did + subject + adverb + verb. "Last" se coloca entre el sujeto y el verbo principal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How often' },
        { type: 'input', content: '' },
        { type: 'text', content: 'exercise? (you / usually do)' }
      ],
      correctAnswer: ['do you usually do'],
      explanation: 'Present Simple question with frequency: How often + do + subject + adverb + verb. "Usually" va entre el sujeto y el verbo principal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Who' },
        { type: 'input', content: '' },
        { type: 'text', content: 'Oliver Twist? (write)' }
      ],
      correctAnswer: ['wrote'],
      explanation: 'Question with "Who" as subject: Who + verb (past). No necesita auxiliar "did" porque "Who" es el sujeto de la pregunta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Could you tell me how much' },
        { type: 'input', content: '' },
        { type: 'text', content: '? (this book / cost)' }
      ],
      correctAnswer: ['this book costs'],
      explanation: 'Indirect question: how much + subject + verb. En preguntas indirectas, el orden es afirmativo sin auxiliar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I can't remember where" },
        { type: 'input', content: '' },
        { type: 'text', content: 'my car this morning. (I / park)' }
      ],
      correctAnswer: ['I parked'],
      explanation: 'Indirect question with "where": where + subject + verb (past). El orden es afirmativo en preguntas indirectas.'
    },
    {
      sentenceParts: [
        { type: 'input', content: '' },
        { type: 'text', content: 'your trip to Paris last weekend? (you / enjoy)' }
      ],
      correctAnswer: ['Did you enjoy'],
      explanation: 'Past Simple question: Did + subject + verb. "Did" es el auxiliar para preguntas en pasado simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What kind of work' },
        { type: 'input', content: '' },
        { type: 'text', content: '? (your sister / do)' }
      ],
      correctAnswer: ['does your sister do'],
      explanation: 'Present Simple question: does + subject + verb. Para tercera persona singular usamos "does".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Who' },
        { type: 'input', content: '' },
        { type: 'text', content: 'the last biscuit? (eat)' }
      ],
      correctAnswer: ['ate'],
      explanation: 'Question with "Who" as subject: Who + verb (past). No necesita auxiliar porque "Who" actúa como sujeto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Do you know what time' },
        { type: 'input', content: '' },
        { type: 'text', content: 'on Saturdays? (the swimming pool / open)' }
      ],
      correctAnswer: ['the swimming pool opens'],
      explanation: 'Indirect question: what time + subject + verb. El orden es afirmativo sin auxiliar en preguntas indirectas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Why' },
        { type: 'input', content: '' },
        { type: 'text', content: "the present you gave her? (your sister / not like)" }
      ],
      correctAnswer: ["didn't your sister like"],
      explanation: 'Negative question in past: Why + didn\'t + subject + verb. "Didn\'t" es la forma negativa del auxiliar en pasado.'
    },
    {
      sentenceParts: [
        { type: 'input', content: '' },
        { type: 'text', content: "play your music so loud? I can't concentrate. (you / have to)" }
      ],
      correctAnswer: ['Do you have to'],
      explanation: 'Question with "have to": Do + subject + have to + verb. "Have to" expresa obligación o necesidad.'
    }
  ],

  'weather-match': [
    {
      type: 'match',
      instruction: 'Match the words and definitions.',
      words: ['hail', 'drought', 'blizzard', 'heatwave', 'flood', 'monsoon', 'lightning', 'thunder', 'hurricane'],
      definitions: [
        { id: 1, text: 'a period of unusually hot weather', answer: 'heatwave' },
        { id: 2, text: 'a long, usually hot, dry period when there is little or no rain', answer: 'drought' },
        { id: 3, text: 'small balls of ice that fall like rain', answer: 'hail' },
        { id: 4, text: 'a flash of very bright light in the sky caused by electricity', answer: 'lightning' },
        { id: 5, text: 'the loud noise that you hear during a storm', answer: 'thunder' },
        { id: 6, text: 'a snow storm with very strong winds', answer: 'blizzard' },
        { id: 7, text: 'when everything becomes covered with water', answer: 'flood' },
        { id: 8, text: 'a violent storm with very strong winds (also cyclone, tornado, typhoon)', answer: 'hurricane' },
        { id: 9, text: 'the season when it rains a lot in southern Asia', answer: 'monsoon' }
      ]
    }
  ],

  'present-simple-continuous-mix': [
    {
      sentenceParts: [
        { type: 'text', content: "It's my sister's birthday today and she" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a party.' }
      ],
      options: ["'s having", "has", "'s have"],
      correctAnswer: "'s having",
      explanation: "Usamos Present Continuous ('s having) porque es una acción temporal que está sucediendo ahora (today). La fiesta está ocurriendo en este momento específico."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "round to her house at eight o'clock this evening." }
      ],
      options: ["'re going", "go", "'re go"],
      correctAnswer: "'re going",
      explanation: "Usamos Present Continuous ('re going) porque es un plan futuro definido. Tenemos una hora específica (eight o'clock this evening) para esta acción planificada."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her birthday, but this one is special because she\'s thirty!' }
      ],
      options: ["doesn't usually celebrate", "isn't usually celebrating", "don't usually celebrate"],
      correctAnswer: "doesn't usually celebrate",
      explanation: "Usamos Present Simple negativo (doesn't usually celebrate) porque hablamos de un hábito o rutina general. 'Usually' es una palabra clave que indica Present Simple."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'After class today I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'into town to buy her present.' }
      ],
      options: ["'m going", "go", "'m go"],
      correctAnswer: "'m going",
      explanation: "Usamos Present Continuous ('m going) porque es un plan futuro específico. 'After class today' indica una intención o plan concreto para el futuro cercano."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "I'll get her some CDs." }
      ],
      options: ["think", "'m thinking", "thinks"],
      correctAnswer: "think",
      explanation: "Usamos Present Simple (think) porque 'think' es un non-action verb (verbo de estado) cuando expresa opinión. Los verbos de estado no se usan en forma continua."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She really' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'music.' }
      ],
      options: ["loves", "'s loving", "love"],
      correctAnswer: "loves",
      explanation: "Usamos Present Simple (loves) porque 'love' es un non-action verb (verbo de emoción/sentimiento). Los verbos de estado como love, like, hate, etc. normalmente no se usan en forma continua."
    }
  ],

  'mixed-tenses': []
};

export const getExercisesByTense = (tenseId) => {
  // Si es mixed-tenses, mezclar todos los ejercicios de todos los tiempos
  if (tenseId === 'mixed-tenses') {
    const allExercises = [];
    Object.keys(exercisesData).forEach(key => {
      if (key !== 'mixed-tenses') {
        // Agregar el nombre del tiempo verbal a cada ejercicio
        const exercisesWithTense = exercisesData[key].map(exercise => ({
          ...exercise,
          tense: getTenseName(key)
        }));
        allExercises.push(...exercisesWithTense);
      }
    });
    return shuffleArray(allExercises);
  }
  
  const exercises = exercisesData[tenseId] || [];
  return shuffleArray(exercises);
};

// Función auxiliar para obtener el nombre del tiempo verbal en español
const getTenseName = (tenseId) => {
  const tenseNames = {
    'present-perfect': 'Present Perfect',
    'present-perfect-continuous': 'Present Perfect Continuous',
    'past-continuous': 'Past Continuous',
    'past-perfect': 'Past Perfect',
    'past-perfect-continuous': 'Past Perfect Continuous',
    'future-perfect-continuous': 'Future Perfect Continuous',
    'future-simple': 'Present Simple',
    'present-continuous': 'Present Continuous',
    'past-simple': 'Past Simple',
    'future-simple': 'Future Simple',
    'future-continuous': 'Future Continuous',
    'future-perfect': 'Future Perfect',
    'first-conditional': 'First Conditional',
    'second-conditional': 'Second Conditional',
    'third-conditional': 'Third Conditional',
    'question-forms': 'Question Forms'
  };
  return tenseNames[tenseId] || tenseId;
};

export const getAllTenses = () => {
  return Object.keys(exercisesData);
};
