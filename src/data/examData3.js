// Exam data with exercises organized by sections

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
          explanation: 'We use Past Continuous "were having" because it describes an action in progress that was interrupted by another action (when the electricity went off).'
        },
        {
          id: 2,
          sentence: 'I _______ (sit) in the departure lounge for ages when I realized I was at the wrong gate!',
          correctAnswer: ['had been sitting'],
          explanation: 'We use Past Perfect Continuous "had been sitting" because it emphasizes the duration of an action that occurred before another past action (realized).'
        },
        {
          id: 3,
          sentence: 'The man came out of his house and _______ (run) down the road.',
          correctAnswer: ['ran'],
          explanation: 'We use Past Simple "ran" because they are two sequential actions completed in the past (came... and ran).'
        },
        {
          id: 4,
          sentence: "He _______ (not be) at the meeting because Annie hadn't told him about it.",
          correctAnswer: ["wasn't", "was not"],
          explanation: 'We use Past Simple "wasn\'t" because it describes a state at a specific moment in the past.'
        },
        {
          id: 5,
          sentence: "When we got to the ski resort it _______ (snow) so heavily that we couldn't ski.",
          correctAnswer: ['was snowing'],
          explanation: 'We use Past Continuous "was snowing" because it describes an action in progress at a specific moment in the past (when we got there).'
        },
        {
          id: 6,
          sentence: "We were surprised when the doorbell rang because we _______ (not expect) any visitors.",
          correctAnswer: ["weren't expecting", "were not expecting"],
          explanation: 'We use Past Continuous negative "weren\'t expecting" because it describes a continuous situation before the interruption (doorbell rang).'
        },
        {
          id: 7,
          sentence: 'I was disappointed the show was cancelled – I _______ (look) forward to it for weeks.',
          correctAnswer: ['had been looking'],
          explanation: 'We use Past Perfect Continuous "had been looking" because it emphasizes the duration of an action that occurred before another past action (was cancelled).'
        },
        {
          id: 8,
          sentence: 'When I opened my bag, I realized that I _______ (forget) to take the passports!',
          correctAnswer: ['had forgotten'],
          explanation: 'We use Past Perfect "had forgotten" because the action of forgetting occurred before realizing it (realized).'
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
          explanation: 'We use Present Perfect Simple "have known" because "know" is a state verb and is not normally used in continuous form.'
        },
        {
          id: 2,
          sentence: 'How long _______ (you / wait) to see the dentist?',
          correctAnswer: ['have you been waiting'],
          explanation: 'We use Present Perfect Continuous "have you been waiting" because it emphasizes the duration of a temporary activity that is still continuing.'
        },
        {
          id: 3,
          sentence: '_______ (you / ever / break) a bone?',
          correctAnswer: ['Have you ever broken'],
          explanation: 'We use Present Perfect Simple "Have you ever broken" because it asks about a life experience without emphasizing duration.'
        },
        {
          id: 4,
          sentence: "We're exhausted because we _______ (dance) all evening!",
          correctAnswer: ['have been dancing'],
          explanation: 'We use Present Perfect Continuous "have been dancing" because it emphasizes the continuous activity that caused the current tiredness.'
        },
        {
          id: 5,
          sentence: 'How long _______ (your daughter / have) this stomach ache for?',
          correctAnswer: ['has your daughter had'],
          explanation: 'We use Present Perfect Simple "has your daughter had" because although it asks about duration, "have" (possess) is a state verb.'
        },
        {
          id: 6,
          sentence: "This is the first time I _______ (wear) these shoes. They're so uncomfortable!",
          correctAnswer: ['have worn'],
          explanation: 'We use Present Perfect Simple "have worn" because it is used with "This is the first/second time...".'
        },
        {
          id: 7,
          sentence: 'Karen _______ (not post) much on social media recently.',
          correctAnswer: ["hasn't posted", "has not posted", "hasn't been posting", "has not been posting"],
          explanation: 'Both forms are correct. "hasn\'t posted" emphasizes the result, while "hasn\'t been posting" emphasizes the lack of continuous activity.'
        },
        {
          id: 8,
          sentence: 'I _______ (never / see) you wearing a suit before!',
          correctAnswer: ['have never seen'],
          explanation: 'We use Present Perfect Simple "have never seen" because it expresses an experience (or lack of it) up to the present.'
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
          explanation: 'We use Future Continuous "I\'ll be doing" because it describes an action in progress at a specific moment in the future (this time tomorrow).'
        },
        {
          id: 2,
          sentence: "You said the meeting would be a quick one. Will we have finished / be finishing by 3.00?",
          options: ['Will we have finished', 'be finishing'],
          correctAnswer: 'Will we have finished',
          explanation: 'We use Future Perfect "Will we have finished" because it asks if the action will be complete before a specific time (by 3.00).'
        },
        {
          id: 3,
          sentence: "We won't have gone / won't be going tomorrow – the weather forecast is for heavy rain.",
          options: ["won't have gone", "won't be going"],
          correctAnswer: "won't be going",
          explanation: 'We use Future Continuous negative "won\'t be going" to express a plan or intention that will not be carried out.'
        },
        {
          id: 4,
          sentence: "We usually eat breakfast at 7.30, but tomorrow we'll have eaten / I'll be eating it at 6.15 as we need to start climbing early.",
          options: ["we'll have eaten", "I'll be eating"],
          correctAnswer: "I'll be eating",
          explanation: 'We use Future Continuous "I\'ll be eating" because it describes an action in progress at a specific time in the future (at 6.15).'
        },
        {
          id: 5,
          sentence: "I hope we'll have solved / I'll be solving all our energy problems by 2050.",
          options: ["we'll have solved", "I'll be solving"],
          correctAnswer: "we'll have solved",
          explanation: 'We use Future Perfect "we\'ll have solved" because it expresses an action that will be complete before a future time (by 2050).'
        },
        {
          id: 6,
          sentence: "Good luck with the bungee jump! I'll be thinking / I'll have thought of you.",
          options: ["I'll be thinking", "I'll have thought"],
          correctAnswer: "I'll be thinking",
          explanation: 'We use Future Continuous "I\'ll be thinking" because it describes an action that will be in progress during the future event.'
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
          explanation: 'The frequency adverb "often" goes after the verb "be" (is). Order: Subject + be + adverb + complement.'
        },
        {
          id: 2,
          words: ['we', 'had', 'map', 'taken', 'Luckily', 'a'],
          correctAnswer: 'Luckily we had taken a map',
          explanation: 'The opinion adverb "Luckily" goes at the beginning of the sentence. Then: subject + verb + object.'
        },
        {
          id: 3,
          words: ['angry', 'Our teacher', 'gets', 'rarely'],
          correctAnswer: 'Our teacher rarely gets angry',
          explanation: 'The frequency adverb "rarely" goes before the main verb "gets". Order: Subject + adverb + verb + complement.'
        },
        {
          id: 4,
          words: ['and', 'are', 'wife', 'very', 'married', 'My', 'happily'],
          correctAnswer: 'My wife and I are very happily married',
          explanation: 'The adverb "happily" modifies the participle "married". "Very" intensifies "happily". Order: Subject + be + adverb + participle.'
        },
        {
          id: 5,
          words: ['next', 'October', "He's", 'to', 'going', 'university'],
          correctAnswer: "He's going to university next October",
          explanation: 'The time expression "next October" goes at the end. Order: Subject + verb + complement + time expression.'
        },
        {
          id: 6,
          words: ['the', 'very', 'much', 'weekend', 'it', 'at', 'Fortunately', "didn't", 'rain'],
          correctAnswer: "Fortunately it didn't rain very much at the weekend",
          explanation: 'The adverb "Fortunately" goes at the beginning. "Very much" modifies the verb "rain", and "at the weekend" goes at the end as a time expression.'
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
          explanation: '"Ever" is used in questions to talk about experiences. "Even" means "even" and doesn\'t fit here.'
        },
        {
          id: 2,
          sentence: 'These chairs were especially / specially made for this room to match the table and the wardrobe.',
          options: ['especially', 'specially'],
          correctAnswer: 'specially',
          explanation: '"Specially" means "specifically for a purpose". "Especially" means "particularly" or "above all".'
        },
        {
          id: 3,
          sentence: "It's very noisy in here. I can hard / hardly hear a word you're saying.",
          options: ['hard', 'hardly'],
          correctAnswer: 'hardly',
          explanation: '"Hardly" means "barely, almost not". "Hard" means "tough" or "with effort" and doesn\'t fit here.'
        },
        {
          id: 4,
          sentence: "It's almost midnight and she yet / still hasn't arrived home.",
          options: ['yet', 'still'],
          correctAnswer: 'still',
          explanation: '"Still" is used in affirmative and negative sentences to express that something continues. "Yet" is used in questions and negatives at the end.'
        },
        {
          id: 5,
          sentence: 'Jane agreed to help before the party but at the end / in the end she didn\'t turn up at all.',
          options: ['at the end', 'in the end'],
          correctAnswer: 'in the end',
          explanation: '"In the end" means "finally, after everything". "At the end" refers to the end of something specific (at the end of the movie).'
        },
        {
          id: 6,
          sentence: 'She nearly / near hit the tree with the car but managed to stop at the last minute.',
          options: ['nearly', 'near'],
          correctAnswer: 'nearly',
          explanation: '"Nearly" means "almost" (adverb). "Near" means "close" and can be a preposition or adjective, but doesn\'t fit here.'
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
          explanation: '"The + adjective" is used to refer to a group in general without adding "people". "The rich" = "rich people in general".'
        },
        {
          id: 2,
          sentence: "Your brother doesn't do extreme sports, does / doesn't he?",
          options: ['does', "doesn't"],
          correctAnswer: 'does',
          explanation: 'In question tags, if the main sentence is negative (doesn\'t do), the tag must be positive (does he).'
        },
        {
          id: 3,
          sentence: "A: My parents went to Malaysia last year.\nB: Did / Have they? I'd love to go there!",
          options: ['Did', 'Have'],
          correctAnswer: 'Did',
          explanation: 'We use "Did they?" to respond to a verb in Past Simple (went). "Have they?" would be used with Present Perfect.'
        },
        {
          id: 4,
          sentence: 'We had such good / a good time paragliding that we booked another session for next month.',
          options: ['such good', 'a good'],
          correctAnswer: 'such a good',
          explanation: 'With countable singular nouns we use "such + a/an + adjective + noun". It should be "such a good time".'
        },
        {
          id: 5,
          sentence: "Come round at 7.30 – we'll have had / be having dinner by then.",
          options: ["we'll have had", "be having"],
          correctAnswer: "we'll have had",
          explanation: 'We use Future Perfect "will have had" with "by then" to indicate that the action will be complete before that moment.'
        },
        {
          id: 6,
          sentence: 'The British / British are always talking about the weather.',
          options: ['The British', 'British'],
          correctAnswer: 'The British',
          explanation: 'To refer to the people of a country we use "The + nationality". "The British" = "the British people".'
        },
        {
          id: 7,
          sentence: "Marco won't come to the meeting on time. He's late always / always late.",
          options: ["late always", "always late"],
          correctAnswer: 'always late',
          explanation: 'The frequency adverb "always" goes before the adjective "late". Correct order: adverb + adjective.'
        },
        {
          id: 8,
          sentence: "My sister doesn't eat meat, and neither will / does her husband.",
          options: ['will', 'does'],
          correctAnswer: 'does',
          explanation: 'We use "neither + auxiliary + subject" with the same verb tense. Since the first sentence uses "doesn\'t" (present), we use "does".'
        },
        {
          id: 9,
          sentence: 'I did tell / told you I was going away for the weekend. I remember mentioning it.',
          options: ['did tell', 'told'],
          correctAnswer: 'did tell',
          explanation: 'We use "did + infinitive" to emphasize that we really did something. "I did tell you" = "I really did tell you" (emphasis).'
        },
        {
          id: 10,
          sentence: "I like reading mystery stories, but my sister does / doesn't.",
          options: ['does', "doesn't"],
          correctAnswer: "doesn't",
          explanation: '"But" indicates contrast. If I like it, my sister does NOT like it. We use "doesn\'t" to show the contrast.'
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
          explanation: '"Heatwave" is a prolonged period of very high temperatures.'
        },
        {
          id: 2,
          sentence: 'Antonia is a_______ to eggs. She comes out in a rash if she eats any.',
          firstLetter: 'a',
          correctAnswer: 'allergic',
          explanation: '"Allergic" means having an allergy to something. "Be allergic to" = to be allergic to something.'
        },
        {
          id: 3,
          sentence: 'Could everyone please f_______ in this form and return it to me as soon as possible?',
          firstLetter: 'f',
          correctAnswer: 'fill',
          explanation: '"Fill in" is a phrasal verb that means "to complete" (a form).'
        },
        {
          id: 4,
          sentence: "I'm sure Jackie will like your ideas. She's really o_______-minded.",
          firstLetter: 'o',
          correctAnswer: 'open',
          explanation: '"Open-minded" means having an open mind, receptive to new ideas.'
        },
        {
          id: 5,
          sentence: 'The fog was so t_______ I could hardly see anything and I had to drive very slowly.',
          firstLetter: 't',
          correctAnswer: 'thick',
          explanation: '"Thick" (dense) is used to describe very dense fog that reduces visibility.'
        },
        {
          id: 6,
          sentence: "'Is your handbag made from real l_______?' 'No, it's vegan – it's made of plastic.'",
          firstLetter: 'l',
          correctAnswer: 'leather',
          explanation: '"Leather" means animal hide/skin material. "Real leather" = genuine leather.'
        },
        {
          id: 7,
          sentence: 'I prefer an a_______ seat to a window seat on planes. I need a lot of legroom.',
          firstLetter: 'a',
          correctAnswer: 'aisle',
          explanation: '"Aisle seat" is a seat next to the aisle on a plane (opposite of "window seat").'
        },
        {
          id: 8,
          sentence: 'High blood p_______ can be a result of diet and / or lifestyle.',
          firstLetter: 'p',
          correctAnswer: 'pressure',
          explanation: '"Blood pressure" means arterial pressure. "High blood pressure" = hypertension.'
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

export const getTotalExam3Exercises = () => {
  return examData.sections.reduce((total, section) => total + section.exercises.length, 0);
};
