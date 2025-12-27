// Complete Exam 4 - Preguntas similares al Exam 1

export const examData6 = {
  sections: [
    {
      id: 'narrative-tenses',
      title: 'Complete with NARRATIVE TENSE',
      instruction: 'Complete the sentences with the correct narrative tense',
      exercises: [
        {
          id: 1,
          sentence: 'She _______ (sleep) when the alarm clock went off.',
          correctAnswer: ['was sleeping'],
          explanation: 'Usamos Past Continuous porque describe acción en progreso interrumpida por otra.'
        },
        {
          id: 2,
          sentence: 'He _______ (wait) for the bus for ages when it finally arrived.',
          correctAnswer: ['had been waiting'],
          explanation: 'Usamos Past Perfect Continuous porque enfatiza duración antes de otra acción pasada.'
        },
        {
          id: 3,
          sentence: 'They packed their bags and _______ (leave) the hotel.',
          correctAnswer: ['left'],
          explanation: 'Usamos Past Simple porque son acciones secuenciales completadas.'
        },
        {
          id: 4,
          sentence: "She _______ (not recognize) him because he had changed so much.",
          correctAnswer: ["didn't recognize", "did not recognize"],
          explanation: 'Usamos Past Simple porque describe un estado en momento específico del pasado.'
        },
        {
          id: 5,
          sentence: "When the guests arrived, we _______ (prepare) the dinner.",
          correctAnswer: ['were preparing'],
          explanation: 'Usamos Past Continuous porque describe acción en progreso en momento específico.'
        },
        {
          id: 6,
          sentence: "They were angry because we _______ (not inform) them about the changes.",
          correctAnswer: ["hadn't informed", "had not informed"],
          explanation: 'Usamos Past Perfect porque la falta de información ocurrió antes del enojo.'
        },
        {
          id: 7,
          sentence: 'His legs ached because he _______ (run) all afternoon.',
          correctAnswer: ['had been running'],
          explanation: 'Usamos Past Perfect Continuous porque enfatiza duración que causó el dolor.'
        },
        {
          id: 8,
          sentence: 'When I got to the cinema, I realized I _______ (buy) the wrong tickets.',
          correctAnswer: ['had bought'],
          explanation: 'Usamos Past Perfect porque la compra incorrecta ocurrió antes de darse cuenta.'
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
          sentence: 'They _______ (work) together since 2015.',
          correctAnswer: ['have worked', 'have been working'],
          explanation: 'Ambas formas son correctas. Simple enfatiza el hecho, Continuous enfatiza la duración.'
        },
        {
          id: 2,
          sentence: 'How long _______ (he / play) the guitar?',
          correctAnswer: ['has he been playing'],
          explanation: 'Usamos Present Perfect Continuous porque enfatiza duración de actividad.'
        },
        {
          id: 3,
          sentence: '_______ (she / ever / travel) to Asia?',
          correctAnswer: ['Has she ever traveled', 'Has she ever travelled'],
          explanation: 'Usamos Present Perfect Simple porque pregunta sobre experiencia de vida.'
        },
        {
          id: 4,
          sentence: "My eyes are sore because I _______ (stare) at the screen all day!",
          correctAnswer: ['have been staring'],
          explanation: 'Usamos Present Perfect Continuous porque enfatiza actividad que causa el dolor.'
        },
        {
          id: 5,
          sentence: 'How long _______ (they / know) the password?',
          correctAnswer: ['have they known'],
          explanation: 'Usamos Present Perfect Simple porque "know" es verbo de estado.'
        },
        {
          id: 6,
          sentence: "This is the first time he _______ (cook) dinner for us.",
          correctAnswer: ['has cooked'],
          explanation: 'Usamos Present Perfect Simple con "This is the first/second time...".'
        },
        {
          id: 7,
          sentence: 'They _______ (not visit) their grandparents much this year.',
          correctAnswer: ["haven't visited", "have not visited", "haven't been visiting", "have not been visiting"],
          explanation: 'Ambas formas correctas. Simple = resultado, Continuous = falta de actividad.'
        },
        {
          id: 8,
          sentence: 'We _______ (never / stay) at a 5-star hotel before.',
          correctAnswer: ['have never stayed'],
          explanation: 'Usamos Present Perfect Simple porque expresa experiencia hasta el presente.'
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
          sentence: "This time next month, they'll open / they'll be opening their new restaurant!",
          options: ["they'll open", "they'll be opening"],
          correctAnswer: "they'll be opening",
          explanation: 'Future Continuous porque describe acción en progreso en momento específico futuro.'
        },
        {
          id: 2,
          sentence: "By Friday, will you have submitted / be submitting your assignment?",
          options: ['will you have submitted', 'be submitting'],
          correctAnswer: 'will you have submitted',
          explanation: 'Future Perfect con "by Friday" = acción completa antes de ese momento.'
        },
        {
          id: 3,
          sentence: "I won't have come / won't be coming to work tomorrow – I have a doctor's appointment.",
          options: ["won't have come", "won't be coming"],
          correctAnswer: "won't be coming",
          explanation: 'Future Continuous negativo expresa plan que no se realizará.'
        },
        {
          id: 4,
          sentence: "At midnight tonight, we'll have celebrated / we'll be celebrating New Year's Eve!",
          options: ["we'll have celebrated", "we'll be celebrating"],
          correctAnswer: "we'll be celebrating",
          explanation: 'Future Continuous describe acción en progreso en momento específico.'
        },
        {
          id: 5,
          sentence: "By the end of the year, they will have moved / will be moving to their new house.",
          options: ["will have moved", "will be moving"],
          correctAnswer: "will have moved",
          explanation: 'Future Perfect porque acción estará completa antes de fin de año.'
        },
        {
          id: 6,
          sentence: "Don't worry about the test! I'll be helping / I'll have helped you prepare.",
          options: ["I'll be helping", "I'll have helped"],
          correctAnswer: "I'll be helping",
          explanation: 'Future Continuous describe acción en progreso durante preparación.'
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
          words: ['is', 'Tom', 'busy', 'usually', 'weekends', 'on'],
          correctAnswer: 'Tom is usually busy on weekends',
          explanation: 'Adverbio "usually" después de "be".'
        },
        {
          id: 2,
          words: ['Thankfully', 'one', 'was', 'no', 'injured'],
          correctAnswer: 'Thankfully no one was injured',
          explanation: 'Adverbio de opinión "Thankfully" al principio.'
        },
        {
          id: 3,
          words: ['drinks', 'He', 'coffee', 'hardly', 'ever'],
          correctAnswer: 'He hardly ever drinks coffee',
          explanation: 'Adverbios de frecuencia "hardly ever" antes del verbo principal.'
        },
        {
          id: 4,
          words: ['was', 'carefully', 'The', 'planned', 'trip'],
          correctAnswer: 'The trip was carefully planned',
          explanation: 'Adverbio "carefully" modifica participio "planned".'
        },
        {
          id: 5,
          words: ['next', 'having', 'month', "We're", 'a', 'wedding'],
          correctAnswer: "We're having a wedding next month",
          explanation: 'Expresión temporal "next month" al final.'
        },
        {
          id: 6,
          words: ['late', 'arrive', 'Amazingly', 'the', 'all', "didn't", 'guests'],
          correctAnswer: "Amazingly all the guests didn't arrive late",
          explanation: '"Amazingly" al principio, resto en orden normal.'
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
          sentence: 'Have you ever / even been skydiving?',
          options: ['ever', 'even'],
          correctAnswer: 'ever',
          explanation: '"Ever" se usa en preguntas sobre experiencias.'
        },
        {
          id: 2,
          sentence: 'This tool was especially / specially developed for surgeons.',
          options: ['especially', 'specially'],
          correctAnswer: 'specially',
          explanation: '"Specially" = específicamente para un propósito.'
        },
        {
          id: 3,
          sentence: "She studied hard / hardly for the exam and got an A.",
          options: ['hard', 'hardly'],
          correctAnswer: 'hard',
          explanation: '"Hard" = con esfuerzo. "Hardly" = apenas.'
        },
        {
          id: 4,
          sentence: "It's past midnight and he yet / still hasn't called.",
          options: ['yet', 'still'],
          correctAnswer: 'still',
          explanation: '"Still" expresa que algo continúa.'
        },
        {
          id: 5,
          sentence: 'We had many setbacks but at the end / in the end we succeeded.',
          options: ['at the end', 'in the end'],
          correctAnswer: 'in the end',
          explanation: '"In the end" = finalmente.'
        },
        {
          id: 6,
          sentence: 'The train nearly / near derailed but the conductor regained control.',
          options: ['nearly', 'near'],
          correctAnswer: 'nearly',
          explanation: '"Nearly" = casi (adverbio).'
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
          sentence: 'The homeless / The homeless people need our help.',
          options: ['The homeless', 'The homeless people'],
          correctAnswer: 'The homeless',
          explanation: '"The + adjective" = grupo general.'
        },
        {
          id: 2,
          sentence: "Your friend doesn't like horror movies, does / doesn't he?",
          options: ['does', "doesn't"],
          correctAnswer: 'does',
          explanation: 'Oración negativa → tag positivo.'
        },
        {
          id: 3,
          sentence: "A: We saw that movie last week.\nB: Did / Have you? What did you think?",
          options: ['Did', 'Have'],
          correctAnswer: 'Did',
          explanation: 'Respuesta a Past Simple (saw) usa "Did".'
        },
        {
          id: 4,
          sentence: 'They had such wonderful / a wonderful experience in Japan.',
          options: ['such wonderful', 'a wonderful'],
          correctAnswer: 'such a wonderful',
          explanation: '"Such + a/an + adjective + noun" con contables singulares.'
        },
        {
          id: 5,
          sentence: "By next Monday, she'll have decided / be deciding what to do.",
          options: ["she'll have decided", "be deciding"],
          correctAnswer: "she'll have decided",
          explanation: 'Future Perfect con "by next Monday" = decisión completa antes.'
        },
        {
          id: 6,
          sentence: 'The Japanese / Japanese are famous for their technology.',
          options: ['The Japanese', 'Japanese'],
          correctAnswer: 'The Japanese',
          explanation: '"The + nationality" para referirse a gente de un país.'
        },
        {
          id: 7,
          sentence: "They won't finish on time. They're efficient rarely / rarely efficient.",
          options: ["efficient rarely", "rarely efficient"],
          correctAnswer: 'rarely efficient',
          explanation: 'Adverbio "rarely" antes de adjetivo "efficient".'
        },
        {
          id: 8,
          sentence: "Peter doesn't cook, and neither will / does his brother.",
          options: ['will', 'does'],
          correctAnswer: 'does',
          explanation: '"Neither + auxiliary" con mismo tiempo (doesn\'t = presente → does).'
        },
        {
          id: 9,
          sentence: 'I did call / called you three times yesterday!',
          options: ['did call', 'called'],
          correctAnswer: 'did call',
          explanation: '"Did + infinitive" para énfasis.'
        },
        {
          id: 10,
          sentence: "I hate running, but my sister does / doesn't.",
          options: ['does', "doesn't"],
          correctAnswer: "doesn't",
          explanation: '"But" indica contraste. Si yo odio, ella también (doesn\'t hate = le gusta o no odia).'
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
          sentence: "We're expecting a massive s_______ tonight with thunder and lightning.",
          firstLetter: 's',
          correctAnswer: 'storm',
          explanation: '"Storm" (tormenta) con truenos y relámpagos.'
        },
        {
          id: 2,
          sentence: 'His skin is very s_______ to sunlight. He burns easily.',
          firstLetter: 's',
          correctAnswer: 'sensitive',
          explanation: '"Sensitive" = sensible/delicado.'
        },
        {
          id: 3,
          sentence: 'You need to f_______ in your personal details on this application.',
          firstLetter: 'f',
          correctAnswer: 'fill',
          explanation: '"Fill in" = rellenar/completar.'
        },
        {
          id: 4,
          sentence: "He's very a_______-minded. He can never focus on one thing.",
          firstLetter: 'a',
          correctAnswer: 'absent',
          explanation: '"Absent-minded" = distraído, despistado.'
        },
        {
          id: 5,
          sentence: 'The smoke was so t_______ we could barely breathe.',
          firstLetter: 't',
          correctAnswer: 'thick',
          explanation: '"Thick" = espeso/denso.'
        },
        {
          id: 6,
          sentence: "'Is your jacket made of real l_______?' 'No, it's faux leather.'",
          firstLetter: 'l',
          correctAnswer: 'leather',
          explanation: '"Leather" = cuero.'
        },
        {
          id: 7,
          sentence: 'I prefer w_______ seats on planes so I can see the view.',
          firstLetter: 'w',
          correctAnswer: 'window',
          explanation: '"Window seat" = asiento junto a ventana.'
        },
        {
          id: 8,
          sentence: 'The nurse took my blood p_______ twice to make sure it was accurate.',
          firstLetter: 'p',
          correctAnswer: 'pressure',
          explanation: '"Blood pressure" = presión arterial.'
        }
      ]
    }
  ]
};

export const getExam6Sections = () => {
  return examData6.sections;
};

export const getExam6Section = (sectionId) => {
  return examData6.sections.find(section => section.id === sectionId);
};

export const getTotalExam6Exercises = () => {
  return examData6.sections.reduce((total, section) => total + section.exercises.length, 0);
};
