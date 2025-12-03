// Datos del examen con ejercicios organizados por secciones

export const examData = {
  sections: [
    {
      id: 'narrative-tenses',
      title: 'Complete with NARRATIVE TENSE',
      instruction: 'Complete the sentences with the correct narrative tense',
      exercises: [
        {
          id: 1,
          sentence: 'We _______ (have) dinner when the electricity suddenly went off.',
          correctAnswer: ['were having', 'were having dinner'],
          explanation: 'Usamos Past Continuous "were having" porque describe una acción en progreso que fue interrumpida por otra acción (when the electricity went off).'
        },
        {
          id: 2,
          sentence: 'I _______ (sit) in the departure lounge for ages when I realized I was at the wrong gate!',
          correctAnswer: ['had been sitting'],
          explanation: 'Usamos Past Perfect Continuous "had been sitting" porque enfatiza la duración de una acción que ocurrió antes de otra acción pasada (realized).'
        },
        {
          id: 3,
          sentence: 'The man came out of his house and _______ (run) down the road.',
          correctAnswer: ['ran'],
          explanation: 'Usamos Past Simple "ran" porque son dos acciones secuenciales completadas en el pasado (came... and ran).'
        },
        {
          id: 4,
          sentence: "He _______ (not be) at the meeting because Annie hadn't told him about it.",
          correctAnswer: ["wasn't", "was not"],
          explanation: 'Usamos Past Simple "wasn\'t" porque describe un estado en un momento específico del pasado.'
        },
        {
          id: 5,
          sentence: "When we got to the ski resort it _______ (snow) so heavily that we couldn't ski.",
          correctAnswer: ['was snowing'],
          explanation: 'Usamos Past Continuous "was snowing" porque describe una acción en progreso en un momento específico del pasado (when we got there).'
        },
        {
          id: 6,
          sentence: "We were surprised when the doorbell rang because we _______ (not expect) any visitors.",
          correctAnswer: ["weren't expecting", "were not expecting"],
          explanation: 'Usamos Past Continuous negativo "weren\'t expecting" porque describe una situación continua antes de la interrupción (doorbell rang).'
        },
        {
          id: 7,
          sentence: 'I was disappointed the show was cancelled – I _______ (look) forward to it for weeks.',
          correctAnswer: ['had been looking'],
          explanation: 'Usamos Past Perfect Continuous "had been looking" porque enfatiza la duración de una acción que ocurrió antes de otra acción pasada (was cancelled).'
        },
        {
          id: 8,
          sentence: 'When I opened my bag, I realized that I _______ (forget) to take the passports!',
          correctAnswer: ['had forgotten'],
          explanation: 'Usamos Past Perfect "had forgotten" porque la acción de olvidar ocurrió antes de darse cuenta (realized).'
        }
      ]
    },
    {
      id: 'present-perfect',
      title: 'PRESENT PERFECT SIMPLE or CONTINUOUS',
      instruction: 'Complete the sentences with the Present Perfect Simple or Continuous form',
      exercises: [
        {
          id: 1,
          sentence: 'We _______ (know) each other since we met in the first week of university.',
          correctAnswer: ['have known', "have known each other"],
          explanation: 'Usamos Present Perfect Simple "have known" porque "know" es un verbo de estado y no se usa normalmente en forma continua.'
        },
        {
          id: 2,
          sentence: 'How long _______ (you / wait) to see the dentist?',
          correctAnswer: ['have you been waiting'],
          explanation: 'Usamos Present Perfect Continuous "have you been waiting" porque enfatiza la duración de una acción temporal que aún continúa.'
        },
        {
          id: 3,
          sentence: '_______ (you / ever / break) a bone?',
          correctAnswer: ['Have you ever broken'],
          explanation: 'Usamos Present Perfect Simple "Have you ever broken" porque pregunta sobre una experiencia de vida sin enfatizar duración.'
        },
        {
          id: 4,
          sentence: "We're exhausted because we _______ (dance) all evening!",
          correctAnswer: ['have been dancing'],
          explanation: 'Usamos Present Perfect Continuous "have been dancing" porque enfatiza la actividad continua que causó el cansancio actual.'
        },
        {
          id: 5,
          sentence: 'How long _______ (your daughter / have) this stomach ache for?',
          correctAnswer: ['has your daughter had'],
          explanation: 'Usamos Present Perfect Simple "has your daughter had" porque aunque pregunta por duración, "have" (poseer) es un verbo de estado.'
        },
        {
          id: 6,
          sentence: "This is the first time I _______ (wear) these shoes. They're so uncomfortable!",
          correctAnswer: ['have worn'],
          explanation: 'Usamos Present Perfect Simple "have worn" porque se usa con "This is the first/second time...".'
        },
        {
          id: 7,
          sentence: 'Karen _______ (not post) much on social media recently.',
          correctAnswer: ["hasn't posted", "has not posted", "hasn't been posting", "has not been posting"],
          explanation: 'Ambas formas son correctas. "hasn\'t posted" enfatiza el resultado, mientras que "hasn\'t been posting" enfatiza la falta de actividad continua.'
        },
        {
          id: 8,
          sentence: 'I _______ (never / see) you wearing a suit before!',
          correctAnswer: ['have never seen'],
          explanation: 'Usamos Present Perfect Simple "have never seen" porque expresa una experiencia (o falta de ella) hasta el presente.'
        }
      ]
    },
    {
      id: 'future-forms',
      title: 'FUTURE FORMS',
      instruction: 'Circle the correct option',
      type: 'multiple-choice',
      exercises: [
        {
          id: 1,
          sentence: "This time tomorrow, I'll do / I'll be doing my first skydive!",
          options: ["I'll do", "I'll be doing"],
          correctAnswer: "I'll be doing",
          explanation: 'Usamos Future Continuous "I\'ll be doing" porque describe una acción en progreso en un momento específico del futuro (this time tomorrow).'
        },
        {
          id: 2,
          sentence: "You said the meeting would be a quick one. Will we have finished / be finishing by 3.00?",
          options: ['Will we have finished', 'be finishing'],
          correctAnswer: 'Will we have finished',
          explanation: 'Usamos Future Perfect "Will we have finished" porque pregunta si la acción estará completa antes de un tiempo específico (by 3.00).'
        },
        {
          id: 3,
          sentence: "We won't have gone / won't be going tomorrow – the weather forecast is for heavy rain.",
          options: ["won't have gone", "won't be going"],
          correctAnswer: "won't be going",
          explanation: 'Usamos Future Continuous negativo "won\'t be going" para expresar un plan o intención que no se realizará.'
        },
        {
          id: 4,
          sentence: "We usually eat breakfast at 7.30, but tomorrow we'll have eaten / I'll be eating it at 6.15 as we need to start climbing early.",
          options: ["we'll have eaten", "I'll be eating"],
          correctAnswer: "I'll be eating",
          explanation: 'Usamos Future Continuous "I\'ll be eating" porque describe una acción en progreso a una hora específica del futuro (at 6.15).'
        },
        {
          id: 5,
          sentence: "I hope we'll have solved / I'll be solving all our energy problems by 2050.",
          options: ["we'll have solved", "I'll be solving"],
          correctAnswer: "we'll have solved",
          explanation: 'Usamos Future Perfect "we\'ll have solved" porque expresa una acción que estará completa antes de un tiempo futuro (by 2050).'
        },
        {
          id: 6,
          sentence: "Good luck with the bungee jump! I'll be thinking / I'll have thought of you.",
          options: ["I'll be thinking", "I'll have thought"],
          correctAnswer: "I'll be thinking",
          explanation: 'Usamos Future Continuous "I\'ll be thinking" porque describe una acción que estará en progreso durante el evento futuro.'
        }
      ]
    },
    {
      id: 'word-order',
      title: 'WORD ORDER',
      instruction: 'Put the words in the correct order. Place the adverb in the correct place',
      type: 'reorder',
      exercises: [
        {
          id: 1,
          words: ['is', 'Fiona', 'for', 'late', 'class', 'often'],
          correctAnswer: 'Fiona is often late for class',
          explanation: 'El adverbio de frecuencia "often" va después del verbo "be" (is). Orden: Sujeto + be + adverb + complemento.'
        },
        {
          id: 2,
          words: ['we', 'had', 'map', 'taken', 'Luckily', 'a'],
          correctAnswer: 'Luckily we had taken a map',
          explanation: 'El adverbio de opinión "Luckily" va al principio de la oración. Luego: sujeto + verbo + objeto.'
        },
        {
          id: 3,
          words: ['angry', 'Our teacher', 'gets', 'rarely'],
          correctAnswer: 'Our teacher rarely gets angry',
          explanation: 'El adverbio de frecuencia "rarely" va antes del verbo principal "gets". Orden: Sujeto + adverb + verb + complemento.'
        },
        {
          id: 4,
          words: ['and', 'are', 'wife', 'very', 'married', 'My', 'happily'],
          correctAnswer: 'My wife and I are very happily married',
          explanation: 'El adverbio "happily" modifica al participio "married". "Very" intensifica a "happily". Orden: Sujeto + be + adverb + participio.'
        },
        {
          id: 5,
          words: ['next', 'October', "He's", 'to', 'going', 'university'],
          correctAnswer: "He's going to university next October",
          explanation: 'La expresión temporal "next October" va al final. Orden: Sujeto + verbo + complemento + expresión temporal.'
        },
        {
          id: 6,
          words: ['the', 'very', 'much', 'weekend', 'it', 'at', 'Fortunately', "didn't", 'rain'],
          correctAnswer: "Fortunately it didn't rain very much at the weekend",
          explanation: 'El adverbio "Fortunately" va al principio. "Very much" modifica al verbo "rain", y "at the weekend" va al final como expresión temporal.'
        }
      ]
    },
    {
      id: 'adverbs',
      title: 'ADVERBS',
      instruction: 'Choose the correct adverb',
      type: 'multiple-choice',
      exercises: [
        {
          id: 1,
          sentence: 'Have you ever / even tried eating a whole chilli?',
          options: ['ever', 'even'],
          correctAnswer: 'ever',
          explanation: '"Ever" se usa en preguntas para hablar sobre experiencias. "Even" significa "incluso" y no encaja aquí.'
        },
        {
          id: 2,
          sentence: 'These chairs were especially / specially made for this room to match the table and the wardrobe.',
          options: ['especially', 'specially'],
          correctAnswer: 'specially',
          explanation: '"Specially" significa "específicamente para un propósito". "Especially" significa "particularmente" o "sobre todo".'
        },
        {
          id: 3,
          sentence: "It's very noisy in here. I can hard / hardly hear a word you're saying.",
          options: ['hard', 'hardly'],
          correctAnswer: 'hardly',
          explanation: '"Hardly" significa "apenas, casi no". "Hard" significa "duro" o "con esfuerzo" y no encaja aquí.'
        },
        {
          id: 4,
          sentence: "It's almost midnight and she yet / still hasn't arrived home.",
          options: ['yet', 'still'],
          correctAnswer: 'still',
          explanation: '"Still" se usa en oraciones afirmativas y negativas para expresar que algo continúa. "Yet" se usa en preguntas y negativas al final.'
        },
        {
          id: 5,
          sentence: 'Jane agreed to help before the party but at the end / in the end she didn\'t turn up at all.',
          options: ['at the end', 'in the end'],
          correctAnswer: 'in the end',
          explanation: '"In the end" significa "finalmente, al final de todo". "At the end" se refiere al final de algo específico (at the end of the movie).'
        },
        {
          id: 6,
          sentence: 'She nearly / near hit the tree with the car but managed to stop at the last minute.',
          options: ['nearly', 'near'],
          correctAnswer: 'nearly',
          explanation: '"Nearly" significa "casi" (adverbio). "Near" significa "cerca" y puede ser preposición o adjetivo, pero no encaja aquí.'
        }
      ]
    },
    {
      id: 'mixed-grammar',
      title: 'MIXED GRAMMAR',
      instruction: 'Circle the correct option',
      type: 'multiple-choice',
      exercises: [
        {
          id: 1,
          sentence: 'The rich / The rich people should pay a lot more tax than they do.',
          options: ['The rich', 'The rich people'],
          correctAnswer: 'The rich',
          explanation: '"The + adjective" se usa para referirse a un grupo en general sin añadir "people". "The rich" = "las personas ricas en general".'
        },
        {
          id: 2,
          sentence: "Your brother doesn't do extreme sports, does / doesn't he?",
          options: ['does', "doesn't"],
          correctAnswer: 'does',
          explanation: 'En question tags, si la oración principal es negativa (doesn\'t do), el tag debe ser positivo (does he).'
        },
        {
          id: 3,
          sentence: "A: My parents went to Malaysia last year.\nB: Did / Have they? I'd love to go there!",
          options: ['Did', 'Have'],
          correctAnswer: 'Did',
          explanation: 'Usamos "Did they?" para responder a un verbo en Past Simple (went). "Have they?" se usaría con Present Perfect.'
        },
        {
          id: 4,
          sentence: 'We had such good / a good time paragliding that we booked another session for next month.',
          options: ['such good', 'a good'],
          correctAnswer: 'such a good',
          explanation: 'Con sustantivos contables singulares usamos "such + a/an + adjective + noun". Debería ser "such a good time".'
        },
        {
          id: 5,
          sentence: "Come round at 7.30 – we'll have had / be having dinner by then.",
          options: ["we'll have had", "be having"],
          correctAnswer: "we'll have had",
          explanation: 'Usamos Future Perfect "will have had" con "by then" para indicar que la acción estará completa antes de ese momento.'
        },
        {
          id: 6,
          sentence: 'The British / British are always talking about the weather.',
          options: ['The British', 'British'],
          correctAnswer: 'The British',
          explanation: 'Para referirse a la gente de un país usamos "The + nationality". "The British" = "los británicos".'
        },
        {
          id: 7,
          sentence: "Marco won't come to the meeting on time. He's late always / always late.",
          options: ["late always", "always late"],
          correctAnswer: 'always late',
          explanation: 'El adverbio de frecuencia "always" va antes del adjetivo "late". Orden correcto: adverb + adjective.'
        },
        {
          id: 8,
          sentence: "My sister doesn't eat meat, and neither will / does her husband.",
          options: ['will', 'does'],
          correctAnswer: 'does',
          explanation: 'Usamos "neither + auxiliary + subject" con el mismo tiempo verbal. Como la primera oración usa "doesn\'t" (presente), usamos "does".'
        },
        {
          id: 9,
          sentence: 'I did tell / told you I was going away for the weekend. I remember mentioning it.',
          options: ['did tell', 'told'],
          correctAnswer: 'did tell',
          explanation: 'Usamos "did + infinitive" para enfatizar que realmente hicimos algo. "I did tell you" = "Sí te lo dije" (énfasis).'
        },
        {
          id: 10,
          sentence: "I like reading mystery stories, but my sister does / doesn't.",
          options: ['does', "doesn't"],
          correctAnswer: "doesn't",
          explanation: '"But" indica contraste. Si a mí me gusta, a mi hermana NO le gusta. Usamos "doesn\'t" para mostrar el contraste.'
        }
      ]
    },
    {
      id: 'vocabulary',
      title: 'VOCABULARY',
      instruction: 'Complete the words. The first letter is given',
      type: 'fill-word',
      exercises: [
        {
          id: 1,
          sentence: "We're having another h_______ this month. It's been over 35 degrees for weeks.",
          firstLetter: 'h',
          correctAnswer: 'heatwave',
          explanation: '"Heatwave" (ola de calor) es un período prolongado de temperaturas muy altas.'
        },
        {
          id: 2,
          sentence: 'Antonia is a_______ to eggs. She comes out in a rash if she eats any.',
          firstLetter: 'a',
          correctAnswer: 'allergic',
          explanation: '"Allergic" significa alérgico/a. "Be allergic to" = ser alérgico a algo.'
        },
        {
          id: 3,
          sentence: 'Could everyone please f_______ in this form and return it to me as soon as possible?',
          firstLetter: 'f',
          correctAnswer: 'fill',
          explanation: '"Fill in" es un phrasal verb que significa "rellenar, completar" (un formulario).'
        },
        {
          id: 4,
          sentence: "I'm sure Jackie will like your ideas. She's really o_______-minded.",
          firstLetter: 'o',
          correctAnswer: 'open',
          explanation: '"Open-minded" significa de mente abierta, receptivo/a a nuevas ideas.'
        },
        {
          id: 5,
          sentence: 'The fog was so t_______ I could hardly see anything and I had to drive very slowly.',
          firstLetter: 't',
          correctAnswer: 'thick',
          explanation: '"Thick" (espeso/denso) se usa para describir niebla muy densa que reduce la visibilidad.'
        },
        {
          id: 6,
          sentence: "'Is your handbag made from real l_______?' 'No, it's vegan – it's made of plastic.'",
          firstLetter: 'l',
          correctAnswer: 'leather',
          explanation: '"Leather" significa cuero/piel. "Real leather" = cuero genuino.'
        },
        {
          id: 7,
          sentence: 'I prefer an a_______ seat to a window seat on planes. I need a lot of legroom.',
          firstLetter: 'a',
          correctAnswer: 'aisle',
          explanation: '"Aisle seat" es un asiento de pasillo en el avión (opuesto a "window seat").'
        },
        {
          id: 8,
          sentence: 'High blood p_______ can be a result of diet and / or lifestyle.',
          firstLetter: 'p',
          correctAnswer: 'pressure',
          explanation: '"Blood pressure" significa presión arterial. "High blood pressure" = hipertensión.'
        }
      ]
    }
  ]
};

export const getExam3Sections = () => {
  return examData.sections;
};

export const getExamSection = (sectionId) => {
  return examData.sections.find(section => section.id === sectionId);
};

export const getTotalExercises = () => {
  return examData.sections.reduce((total, section) => total + section.exercises.length, 0);
};
