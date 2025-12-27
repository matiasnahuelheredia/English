// Complete Exam 3 - Questions similares al Exam 1

export const examData5 = {
  sections: [
    {
      id: 'narrative-tenses',
      title: 'Complete with NARRATIVE TENSE',
      instruction: 'Complete the sentences with the correct narrative tense',
      exercises: [
        {
          id: 1,
          sentence: 'I _______ (read) a book when the phone started ringing.',
          correctAnswer: ['was reading', 'was reading a book'],
          explanation: 'We use Past Continuous "was reading" because it describes an action in progress interrupted by another (phone started ringing).'
        },
        {
          id: 2,
          sentence: 'They _______ (practice) for weeks when the competition was finally announced.',
          correctAnswer: ['had been practicing', 'had been practising'],
          explanation: 'We use Past Perfect Continuous because it emphasizes the duration before another past action.'
        },
        {
          id: 3,
          sentence: 'She closed the window and _______ (turn) off the lights.',
          correctAnswer: ['turned'],
          explanation: 'We use Past Simple because they are sequential completed actions (closed... and turned).'
        },
        {
          id: 4,
          sentence: "He _______ (not understand) the instructions because the teacher hadn't explained them clearly.",
          correctAnswer: ["didn't understand", "did not understand"],
          explanation: 'We use Past Simple because it describes a state at a specific moment in the past.'
        },
        {
          id: 5,
          sentence: "When I saw him yesterday, he _______ (wear) a strange hat.",
          correctAnswer: ['was wearing'],
          explanation: 'We use Past Continuous because it describes what was happening at that specific moment.'
        },
        {
          id: 6,
          sentence: "We were shocked when we heard the news because we _______ (not hear) anything about it before.",
          correctAnswer: ["hadn't heard", "had not heard"],
          explanation: 'We use Past Perfect because the lack of information occurred before the shock.'
        },
        {
          id: 7,
          sentence: 'She felt dizzy because she _______ (stand) in the sun for too long.',
          correctAnswer: ['had been standing'],
          explanation: 'We use Past Perfect Continuous because it emphasizes the duration that caused the dizziness.'
        },
        {
          id: 8,
          sentence: 'When the teacher entered the classroom, he noticed that someone _______ (break) the window.',
          correctAnswer: ['had broken'],
          explanation: 'We use Past Perfect because the break occurred before the teacher entered.'
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
          sentence: 'We _______ (be) friends since primary school.',
          correctAnswer: ['have been'],
          explanation: 'We use Present Perfect Simple because "be" is a state verb.'
        },
        {
          id: 2,
          sentence: 'How long _______ (she / learn) German?',
          correctAnswer: ['has she been learning'],
          explanation: 'We use Present Perfect Continuous because it emphasizes the duration of a temporary activity.'
        },
        {
          id: 3,
          sentence: '_______ (they / ever / climb) a mountain?',
          correctAnswer: ['Have they ever climbed'],
          explanation: 'We use Present Perfect Simple because it asks about life experience.'
        },
        {
          id: 4,
          sentence: "My hands hurt because I _______ (type) for hours!",
          correctAnswer: ['have been typing'],
          explanation: 'We use Present Perfect Continuous because it emphasizes the continuous activity that causes the pain.'
        },
        {
          id: 5,
          sentence: 'How long _______ (you / have) that phone?',
          correctAnswer: ['have you had'],
          explanation: 'We use Present Perfect Simple because "have" (possess) is a state verb.'
        },
        {
          id: 6,
          sentence: "This is the first time she _______ (drive) a manual car.",
          correctAnswer: ['has driven'],
          explanation: 'We use Present Perfect Simple with "This is the first/second time...".'
        },
        {
          id: 7,
          sentence: 'He _______ (not exercise) much lately.',
          correctAnswer: ["hasn't exercised", "has not exercised", "hasn't been exercising", "has not been exercising"],
          explanation: 'Both forms correct. Simple emphasizes result, Continuous emphasizes lack of activity.'
        },
        {
          id: 8,
          sentence: 'I _______ (never / fly) in a helicopter.',
          correctAnswer: ['have never flown'],
          explanation: 'We use Present Perfect Simple because it expresses experience (or lack) until the present.'
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
          sentence: "At 9 AM tomorrow, I'll meet / I'll be meeting with the clients.",
          options: ["I'll meet", "I'll be meeting"],
          correctAnswer: "I'll be meeting",
          explanation: 'Future Continuous because it describes an action in progress at a specific future moment.'
        },
        {
          id: 2,
          sentence: "Will they have arrived / be arriving by midnight?",
          options: ['Will they have arrived', 'be arriving'],
          correctAnswer: 'Will they have arrived',
          explanation: 'Future Perfect with "by midnight" indicates action completed before that moment.'
        },
        {
          id: 3,
          sentence: "She won't have gone / won't be going to the gym today – she's sick.",
          options: ["won't have gone", "won't be going"],
          correctAnswer: "won't be going",
          explanation: 'Future Continuous negative expresses plan that will not be carried out.'
        },
        {
          id: 4,
          sentence: "This time tomorrow, we'll have flown / we'll be flying over the Atlantic Ocean.",
          options: ["we'll have flown", "we'll be flying"],
          correctAnswer: "we'll be flying",
          explanation: 'Future Continuous describes an action in progress at a specific future moment.'
        },
        {
          id: 5,
          sentence: "By next year, I will have completed / will be completing my degree.",
          options: ["will have completed", "will be completing"],
          correctAnswer: "will have completed",
          explanation: 'Future Perfect because action will be complete before future time (by next year).'
        },
        {
          id: 6,
          sentence: "Good luck with your interview! I'll be thinking / I'll have thought about you.",
          options: ["I'll be thinking", "I'll have thought"],
          correctAnswer: "I'll be thinking",
          explanation: 'Future Continuous describe action in progress during future event.'
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
          words: ['Mike', 'is', 'helpful', 'very', 'always'],
          correctAnswer: 'Mike is always very helpful',
          explanation: 'Adverb "always" after "be", followed by "very helpful".'
        },
        {
          id: 2,
          words: ['Fortunately', 'umbrella', 'had', 'an', 'I', 'brought'],
          correctAnswer: 'Fortunately I had brought an umbrella',
          explanation: 'Opinion adverb "Fortunately" at the beginning.'
        },
        {
          id: 3,
          words: ['exercises', 'seldom', 'My', 'does', 'grandfather'],
          correctAnswer: 'My grandfather seldom does exercises',
          explanation: 'Adverb "seldom" before the main verb "does".'
        },
        {
          id: 4,
          words: ['The', 'perfectly', 'organized', 'was', 'event'],
          correctAnswer: 'The event was perfectly organized',
          explanation: 'Adverb "perfectly" modifies participle "organized".'
        },
        {
          id: 5,
          words: ['are', 'week', 'They', 'next', 'Paris', 'visiting'],
          correctAnswer: 'They are visiting Paris next week',
          explanation: 'Time expression "next week" at the end.'
        },
        {
          id: 6,
          words: ['rain', 'at', 'it', 'the', 'Thankfully', 'all', 'beach', "didn't"],
          correctAnswer: "Thankfully it didn't rain at all at the beach",
          explanation: '"Thankfully" at the beginning, "at all" after the verb, "at the beach" at the end.'
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
          sentence: 'Has anyone ever / even seen a ghost?',
          options: ['ever', 'even'],
          correctAnswer: 'ever',
          explanation: '"Ever" is used in questions about experiences.'
        },
        {
          id: 2,
          sentence: 'This app was especially / specially created for language learners.',
          options: ['especially', 'specially'],
          correctAnswer: 'specially',
          explanation: '"Specially" = specifically for a purpose.'
        },
        {
          id: 3,
          sentence: "I tried hard / hardly but I couldn't solve the puzzle.",
          options: ['hard', 'hardly'],
          correctAnswer: 'hard',
          explanation: '"Hard" = with effort. "Hardly" = barely.'
        },
        {
          id: 4,
          sentence: "It's almost dawn and they yet / still haven't returned.",
          options: ['yet', 'still'],
          correctAnswer: 'still',
          explanation: '"Still" expresses that something continues.'
        },
        {
          id: 5,
          sentence: 'After many attempts, at the end / in the end she succeeded.',
          options: ['at the end', 'in the end'],
          correctAnswer: 'in the end',
          explanation: '"In the end" = finally.'
        },
        {
          id: 6,
          sentence: 'The bullet nearly / near missed his head.',
          options: ['nearly', 'near'],
          correctAnswer: 'nearly',
          explanation: '"Nearly" = almost (adverb).'
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
          sentence: 'The elderly / The elderly people need better healthcare.',
          options: ['The elderly', 'The elderly people'],
          correctAnswer: 'The elderly',
          explanation: '"The + adjective" = general group.'
        },
        {
          id: 2,
          sentence: "Your parents don't travel much, do / don't they?",
          options: ['do', "don't"],
          correctAnswer: 'do',
          explanation: 'Negative sentence → positive tag.'
        },
        {
          id: 3,
          sentence: "A: She finished the report.\nB: Did / Has she? That was quick!",
          options: ['Did', 'Has'],
          correctAnswer: 'Did',
          explanation: 'Response to Past Simple (finished) uses "Did".'
        },
        {
          id: 4,
          sentence: 'We had such great / a great vacation in Italy.',
          options: ['such great', 'a great'],
          correctAnswer: 'such a great',
          explanation: '"Such + a/an + adjective + noun" with countable singulars.'
        },
        {
          id: 5,
          sentence: "By tomorrow evening, I'll have read / be reading the entire book.",
          options: ["I'll have read", "be reading"],
          correctAnswer: "I'll have read",
          explanation: 'Future Perfect with "by tomorrow" = action complete before.'
        },
        {
          id: 6,
          sentence: 'The Spanish / Spanish are known for their passion.',
          options: ['The Spanish', 'Spanish'],
          correctAnswer: 'The Spanish',
          explanation: '"The + nationality" to refer to people of a country.'
        },
        {
          id: 7,
          sentence: "John won't be on time. He's busy always / always busy.",
          options: ["busy always", "always busy"],
          correctAnswer: 'always busy',
          explanation: 'Adverb "always" before adjective "busy".'
        },
        {
          id: 8,
          sentence: "Maria doesn't smoke, and neither will / does her sister.",
          options: ['will', 'does'],
          correctAnswer: 'does',
          explanation: '"Neither + auxiliary" with same tense (doesn\'t = present → does).'
        },
        {
          id: 9,
          sentence: 'I did warn / warned you about the deadline!',
          options: ['did warn', 'warned'],
          correctAnswer: 'did warn',
          explanation: '"Did + infinitive" for emphasis.'
        },
        {
          id: 10,
          sentence: "I love classical music, but my brother does / doesn't.",
          options: ['does', "doesn't"],
          correctAnswer: "doesn't",
          explanation: '"But" indicates contrast → if I like it, he doesn\'t.'
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
          sentence: "There's a terrible d_______ this year. It hasn't rained in months.",
          firstLetter: 'd',
          correctAnswer: 'drought',
          explanation: '"Drought" is a prolonged period without rain.'
        },
        {
          id: 2,
          sentence: 'Some people are a_______ to dust mites, which can cause breathing problems.',
          firstLetter: 'a',
          correctAnswer: 'allergic',
          explanation: '"Allergic to" = allergic to.'
        },
        {
          id: 3,
          sentence: 'Could you c_______ out the invoice and send it to accounts?',
          firstLetter: 'f',
          correctAnswer: 'fill',
          explanation: '"Fill out" = complete/fill in form.'
        },
        {
          id: 4,
          sentence: "She's very s_______-minded. She never changes her opinion.",
          firstLetter: 's',
          correctAnswer: 'single',
          explanation: '"Single-minded" = determined, focused on a goal.'
        },
        {
          id: 5,
          sentence: 'The fog is becoming t_______ as we drive higher into the mountains.',
          firstLetter: 't',
          correctAnswer: 'thicker',
          explanation: '"Thicker" (denser) - comparative of "thick".'
        },
        {
          id: 6,
          sentence: "'Is this wallet made of genuine l_______?' 'No, it's synthetic.'",
          firstLetter: 'l',
          correctAnswer: 'leather',
          explanation: '"Leather" = leather material.'
        },
        {
          id: 7,
          sentence: 'I usually book an a_______ seat because I like to walk around during the flight.',
          firstLetter: 'a',
          correctAnswer: 'aisle',
          explanation: '"Aisle seat" = aisle seat on a plane.'
        },
        {
          id: 8,
          sentence: 'The doctor checked my blood p_______ and said it was normal.',
          firstLetter: 'p',
          correctAnswer: 'pressure',
          explanation: '"Blood pressure" = blood pressure/arterial pressure.'
        }
      ]
    }
  ]
};

export const getExam5Sections = () => {
  return examData5.sections;
};

export const getExam5Section = (sectionId) => {
  return examData5.sections.find(section => section.id === sectionId);
};

export const getTotalExam5Exercises = () => {
  return examData5.sections.reduce((total, section) => total + section.exercises.length, 0);
};
