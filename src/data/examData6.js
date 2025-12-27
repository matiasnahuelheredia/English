// Complete Exam 6 - Questions similar to Exam 1

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
          explanation: 'We use Past Continuous because it describes an action in progress interrupted by another.'
        },
        {
          id: 2,
          sentence: 'He _______ (wait) for the bus for ages when it finally arrived.',
          correctAnswer: ['had been waiting'],
          explanation: 'We use Past Perfect Continuous because it emphasizes duration before another past action.'
        },
        {
          id: 3,
          sentence: 'They packed their bags and _______ (leave) the hotel.',
          correctAnswer: ['left'],
          explanation: 'We use Past Simple because they are sequential completed actions.'
        },
        {
          id: 4,
          sentence: "She _______ (not recognize) him because he had changed so much.",
          correctAnswer: ["didn't recognize", "did not recognize"],
          explanation: 'We use Past Simple because it describes a state at a specific moment in the past.'
        },
        {
          id: 5,
          sentence: "When the guests arrived, we _______ (prepare) the dinner.",
          correctAnswer: ['were preparing'],
          explanation: 'We use Past Continuous because it describes an action in progress at a specific moment.'
        },
        {
          id: 6,
          sentence: "They were angry because we _______ (not inform) them about the changes.",
          correctAnswer: ["hadn't informed", "had not informed"],
          explanation: 'We use Past Perfect because the lack of information occurred before the anger.'
        },
        {
          id: 7,
          sentence: 'His legs ached because he _______ (run) all afternoon.',
          correctAnswer: ['had been running'],
          explanation: 'We use Past Perfect Continuous because it emphasizes duration that caused the pain.'
        },
        {
          id: 8,
          sentence: 'When I got to the cinema, I realized I _______ (buy) the wrong tickets.',
          correctAnswer: ['had bought'],
          explanation: 'We use Past Perfect because the wrong purchase occurred before realizing it.'
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
          explanation: 'Both forms are correct. Simple emphasizes the fact, Continuous emphasizes duration.'
        },
        {
          id: 2,
          sentence: 'How long _______ (he / play) the guitar?',
          correctAnswer: ['has he been playing'],
          explanation: 'We use Present Perfect Continuous because it emphasizes duration of activity.'
        },
        {
          id: 3,
          sentence: '_______ (she / ever / travel) to Asia?',
          correctAnswer: ['Has she ever traveled', 'Has she ever travelled'],
          explanation: 'We use Present Perfect Simple because it asks about life experience.'
        },
        {
          id: 4,
          sentence: "My eyes are sore because I _______ (stare) at the screen all day!",
          correctAnswer: ['have been staring'],
          explanation: 'We use Present Perfect Continuous because it emphasizes activity that causes the pain.'
        },
        {
          id: 5,
          sentence: 'How long _______ (they / know) the password?',
          correctAnswer: ['have they known'],
          explanation: 'We use Present Perfect Simple because "know" is a state verb.'
        },
        {
          id: 6,
          sentence: "This is the first time he _______ (cook) dinner for us.",
          correctAnswer: ['has cooked'],
          explanation: 'We use Present Perfect Simple with "This is the first/second time...".'
        },
        {
          id: 7,
          sentence: 'They _______ (not visit) their grandparents much this year.',
          correctAnswer: ["haven't visited", "have not visited", "haven't been visiting", "have not been visiting"],
          explanation: 'Both forms correct. Simple = result, Continuous = lack of activity.'
        },
        {
          id: 8,
          sentence: 'We _______ (never / stay) at a 5-star hotel before.',
          correctAnswer: ['have never stayed'],
          explanation: 'We use Present Perfect Simple because it expresses experience until the present.'
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
          explanation: 'Future Continuous because it describes an action in progress at a specific future moment.'
        },
        {
          id: 2,
          sentence: "By Friday, will you have submitted / be submitting your assignment?",
          options: ['will you have submitted', 'be submitting'],
          correctAnswer: 'will you have submitted',
          explanation: 'Future Perfect with "by Friday" = action completed before that moment.'
        },
        {
          id: 3,
          sentence: "I won't have come / won't be coming to work tomorrow – I have a doctor's appointment.",
          options: ["won't have come", "won't be coming"],
          correctAnswer: "won't be coming",
          explanation: 'Negative Future Continuous expresses a plan that won\'t be carried out.'
        },
        {
          id: 4,
          sentence: "At midnight tonight, we'll have celebrated / we'll be celebrating New Year's Eve!",
          options: ["we'll have celebrated", "we'll be celebrating"],
          correctAnswer: "we'll be celebrating",
          explanation: 'Future Continuous describes an action in progress at a specific moment.'
        },
        {
          id: 5,
          sentence: "By the end of the year, they will have moved / will be moving to their new house.",
          options: ["will have moved", "will be moving"],
          correctAnswer: "will have moved",
          explanation: 'Future Perfect because the action will be completed before the end of the year.'
        },
        {
          id: 6,
          sentence: "Don't worry about the test! I'll be helping / I'll have helped you prepare.",
          options: ["I'll be helping", "I'll have helped"],
          correctAnswer: "I'll be helping",
          explanation: 'Future Continuous describes an action in progress during preparation.'
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
          explanation: 'Adverb "usually" after "be".'
        },
        {
          id: 2,
          words: ['Thankfully', 'one', 'was', 'no', 'injured'],
          correctAnswer: 'Thankfully no one was injured',
          explanation: 'Opinion adverb "Thankfully" at the beginning.'
        },
        {
          id: 3,
          words: ['drinks', 'He', 'coffee', 'hardly', 'ever'],
          correctAnswer: 'He hardly ever drinks coffee',
          explanation: 'Frequency adverbs "hardly ever" before the main verb.'
        },
        {
          id: 4,
          words: ['was', 'carefully', 'The', 'planned', 'trip'],
          correctAnswer: 'The trip was carefully planned',
          explanation: 'Adverb "carefully" modifies participle "planned".'
        },
        {
          id: 5,
          words: ['next', 'having', 'month', "We're", 'a', 'wedding'],
          correctAnswer: "We're having a wedding next month",
          explanation: 'Time expression "next month" at the end.'
        },
        {
          id: 6,
          words: ['late', 'arrive', 'Amazingly', 'the', 'all', "didn't", 'guests'],
          correctAnswer: "Amazingly all the guests didn't arrive late",
          explanation: '"Amazingly" at the beginning, rest in normal order.'
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
          explanation: '"Ever" is used in questions about experiences.'
        },
        {
          id: 2,
          sentence: 'This tool was especially / specially developed for surgeons.',
          options: ['especially', 'specially'],
          correctAnswer: 'specially',
          explanation: '"Specially" = specifically for a purpose.'
        },
        {
          id: 3,
          sentence: "She studied hard / hardly for the exam and got an A.",
          options: ['hard', 'hardly'],
          correctAnswer: 'hard',
          explanation: '"Hard" = with effort. "Hardly" = barely.'
        },
        {
          id: 4,
          sentence: "It's past midnight and he yet / still hasn't called.",
          options: ['yet', 'still'],
          correctAnswer: 'still',
          explanation: '"Still" expresses that something continues.'
        },
        {
          id: 5,
          sentence: 'We had many setbacks but at the end / in the end we succeeded.',
          options: ['at the end', 'in the end'],
          correctAnswer: 'in the end',
          explanation: '"In the end" = finally.'
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
