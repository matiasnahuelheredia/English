import React, { useState } from 'react';

const LinkingWordsB2 = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const linkingWordsCategories = [
    {
      category: 'Adding Information',
      color: 'bg-green-900',
      explanation: 'Use these to add extra points or information to your argument.',
      words: [
        {
          word: 'Furthermore',
          meaning: 'Además, adicionalmente',
          example: 'The project was completed on time. Furthermore, it came in under budget.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Moreover',
          meaning: 'Además, es más',
          example: 'The hotel was expensive. Moreover, the service was terrible.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In addition',
          meaning: 'Además',
          example: 'In addition to being expensive, the course was very time-consuming.',
          formality: 'Formal/Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Additionally',
          meaning: 'Adicionalmente',
          example: 'The software is user-friendly. Additionally, it comes with free technical support.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Besides',
          meaning: 'Además',
          example: 'Besides being a great teacher, she\'s also an accomplished musician.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'What\'s more',
          meaning: 'Es más, además',
          example: 'The restaurant has excellent food. What\'s more, the prices are very reasonable.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Not only... but also',
          meaning: 'No solo... sino también',
          example: 'She not only speaks French fluently but also understands the culture deeply.',
          formality: 'Formal',
          position: 'Mid-sentence'
        }
      ]
    },
    {
      category: 'Contrasting Ideas',
      color: 'bg-red-900',
      explanation: 'Use these to show contrast or opposition between ideas.',
      words: [
        {
          word: 'However',
          meaning: 'Sin embargo',
          example: 'The weather forecast predicted rain. However, it turned out to be a beautiful day.',
          formality: 'Formal',
          position: 'Beginning of sentence (with comma)'
        },
        {
          word: 'Nevertheless',
          meaning: 'Sin embargo, no obstante',
          example: 'The task was extremely difficult. Nevertheless, we managed to complete it.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Nonetheless',
          meaning: 'No obstante, sin embargo',
          example: 'The evidence was inconclusive. Nonetheless, the jury reached a verdict.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'On the other hand',
          meaning: 'Por otro lado',
          example: 'Living in the city is convenient. On the other hand, it can be very noisy.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In contrast',
          meaning: 'En contraste',
          example: 'The north of the country is industrialized. In contrast, the south remains largely agricultural.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Conversely',
          meaning: 'Por el contrario',
          example: 'Some people prefer summer holidays. Conversely, others enjoy winter breaks.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Although / Though',
          meaning: 'Aunque',
          example: 'Although it was raining, we decided to go for a walk.',
          formality: 'Formal/Informal',
          position: 'Beginning or middle of sentence'
        },
        {
          word: 'Even though',
          meaning: 'Aunque, a pesar de que',
          example: 'Even though she studied hard, she didn\'t pass the exam.',
          formality: 'Informal',
          position: 'Beginning or middle of sentence'
        },
        {
          word: 'Despite / In spite of',
          meaning: 'A pesar de',
          example: 'Despite the heavy traffic, we arrived on time.',
          formality: 'Formal',
          position: 'Beginning or middle (+ noun/gerund)'
        },
        {
          word: 'Whereas',
          meaning: 'Mientras que',
          example: 'I prefer tea, whereas my sister loves coffee.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'While',
          meaning: 'Mientras que',
          example: 'While I understand your concerns, I believe we should proceed.',
          formality: 'Semi-formal',
          position: 'Beginning or middle'
        },
        {
          word: 'Yet',
          meaning: 'Sin embargo, aún así',
          example: 'The plan was risky, yet we decided to proceed.',
          formality: 'Formal',
          position: 'Mid-sentence (with comma before)'
        },
        {
          word: 'Still',
          meaning: 'Aún así, sin embargo',
          example: 'The weather was terrible. Still, we enjoyed the trip.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Even so',
          meaning: 'Aún así',
          example: 'The evidence was weak. Even so, the case went to trial.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'All the same',
          meaning: 'Aún así, de todos modos',
          example: 'I know you\'re busy. All the same, I\'d appreciate your help.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'That said',
          meaning: 'Dicho esto',
          example: 'The project was successful. That said, there were some challenges.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Having said that',
          meaning: 'Habiendo dicho eso',
          example: 'The course is expensive. Having said that, it\'s worth the investment.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'By contrast',
          meaning: 'En contraste',
          example: 'The previous model was slow. By contrast, this one is much faster.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In comparison',
          meaning: 'En comparación',
          example: 'In comparison to last year, sales have increased significantly.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Alternatively',
          meaning: 'Alternativamente',
          example: 'We could take the train. Alternatively, we could drive.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Instead',
          meaning: 'En cambio, en su lugar',
          example: 'I didn\'t go to the party. Instead, I stayed home and studied.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Rather',
          meaning: 'Más bien',
          example: 'The problem isn\'t the cost. Rather, it\'s the time required.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Showing Result / Consequence',
      color: 'bg-blue-900',
      explanation: 'Use these to show that something is a result or consequence of something else.',
      words: [
        {
          word: 'Therefore',
          meaning: 'Por lo tanto',
          example: 'The roads were icy. Therefore, we drove very carefully.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Consequently',
          meaning: 'Por consiguiente',
          example: 'He missed several training sessions. Consequently, he wasn\'t selected for the team.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'As a result',
          meaning: 'Como resultado',
          example: 'The company invested heavily in training. As a result, productivity increased significantly.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Thus',
          meaning: 'Así, de este modo',
          example: 'The experiment failed to produce expected results, thus requiring further investigation.',
          formality: 'Very formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'Hence',
          meaning: 'Por tanto, de ahí',
          example: 'The data was incomplete, hence the delay in publishing our findings.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Accordingly',
          meaning: 'En consecuencia',
          example: 'The budget has been reduced. Accordingly, we must cut costs.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'For this reason',
          meaning: 'Por esta razón',
          example: 'The system was outdated. For this reason, we decided to upgrade.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'So',
          meaning: 'Entonces, así que',
          example: 'I was feeling tired, so I went to bed early.',
          formality: 'Informal',
          position: 'Mid-sentence'
        },
        {
          word: 'As a consequence',
          meaning: 'Como consecuencia',
          example: 'As a consequence of the strike, all flights were cancelled.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'This means that',
          meaning: 'Esto significa que',
          example: 'The budget was cut. This means that we can\'t hire new staff.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'As such',
          meaning: 'Como tal, por lo tanto',
          example: 'He is the team leader. As such, he makes the final decisions.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'This being the case',
          meaning: 'Siendo este el caso',
          example: 'The deadline is approaching. This being the case, we need to work faster.',
          formality: 'Very formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In consequence',
          meaning: 'En consecuencia',
          example: 'The system failed. In consequence, we lost valuable data.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Due to this',
          meaning: 'Debido a esto',
          example: 'Sales dropped significantly. Due to this, several stores closed.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Because of this',
          meaning: 'Por esto, por esta razón',
          example: 'The weather was terrible. Because of this, the event was cancelled.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Giving Examples',
      color: 'bg-purple-900',
      explanation: 'Use these to introduce examples or illustrations of your point.',
      words: [
        {
          word: 'For example',
          meaning: 'Por ejemplo',
          example: 'Many cities are implementing green initiatives. For example, London has introduced a congestion charge.',
          formality: 'Formal/Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'For instance',
          meaning: 'Por ejemplo',
          example: 'Some fruits are rich in vitamin C. Oranges, for instance, contain high levels.',
          formality: 'Formal',
          position: 'Beginning or mid-sentence'
        },
        {
          word: 'Such as',
          meaning: 'Tales como',
          example: 'The course covers various topics such as grammar, vocabulary, and pronunciation.',
          formality: 'Formal/Semi-formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Namely',
          meaning: 'Es decir, a saber',
          example: 'Only one person knows the truth, namely the witness who was there.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'To illustrate',
          meaning: 'Para ilustrar',
          example: 'To illustrate this point, let me share a personal experience.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In particular',
          meaning: 'En particular',
          example: 'She enjoys all sports, but tennis in particular.',
          formality: 'Semi-formal',
          position: 'End of sentence or beginning'
        },
        {
          word: 'Like',
          meaning: 'Como',
          example: 'I enjoy outdoor activities like hiking, cycling, and camping.',
          formality: 'Informal',
          position: 'Mid-sentence'
        }
      ]
    },
    {
      category: 'Emphasizing',
      color: 'bg-yellow-900',
      explanation: 'Use these to emphasize or strengthen your point.',
      words: [
        {
          word: 'Indeed',
          meaning: 'De hecho, ciertamente',
          example: 'The results were remarkable. Indeed, they exceeded all expectations.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In fact',
          meaning: 'De hecho',
          example: 'I thought the exam would be difficult. In fact, it was quite straightforward.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Actually',
          meaning: 'En realidad',
          example: 'I thought he was American, but actually he\'s Canadian.',
          formality: 'Informal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'Clearly',
          meaning: 'Claramente',
          example: 'Clearly, we need to reconsider our strategy.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Obviously',
          meaning: 'Obviamente',
          example: 'Obviously, we can\'t proceed without proper authorization.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Undoubtedly',
          meaning: 'Indudablemente',
          example: 'This is undoubtedly the best solution to the problem.',
          formality: 'Formal',
          position: 'Beginning or mid-sentence'
        },
        {
          word: 'Certainly',
          meaning: 'Ciertamente',
          example: 'This will certainly improve our efficiency.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Above all',
          meaning: 'Sobre todo',
          example: 'Above all, we must ensure the safety of our employees.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Particularly',
          meaning: 'Particularmente',
          example: 'The results were impressive, particularly in the first quarter.',
          formality: 'Semi-formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'Especially',
          meaning: 'Especialmente',
          example: 'I enjoy all types of music, especially classical and jazz.',
          formality: 'Semi-formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Notably',
          meaning: 'Notablemente',
          example: 'Several countries have improved their economies, notably China and India.',
          formality: 'Formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'Specifically',
          meaning: 'Específicamente',
          example: 'We need to address this issue, specifically the lack of communication.',
          formality: 'Formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'Primarily',
          meaning: 'Principalmente',
          example: 'The project failed primarily due to poor planning.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Essentially',
          meaning: 'Esencialmente',
          example: 'The two proposals are essentially the same.',
          formality: 'Semi-formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'Fundamentally',
          meaning: 'Fundamentalmente',
          example: 'Fundamentally, we disagree on the approach to take.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Unquestionably',
          meaning: 'Incuestionablemente',
          example: 'She is unquestionably the best candidate for the position.',
          formality: 'Formal',
          position: 'Mid-sentence'
        }
      ]
    },
    {
      category: 'Sequencing / Ordering',
      color: 'bg-indigo-900',
      explanation: 'Use these to show the order of events or ideas.',
      words: [
        {
          word: 'Firstly / First of all',
          meaning: 'En primer lugar',
          example: 'Firstly, we need to identify the problem.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Secondly',
          meaning: 'En segundo lugar',
          example: 'Secondly, we must consider the financial implications.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Finally / Lastly',
          meaning: 'Finalmente, por último',
          example: 'Finally, we need to implement the changes.',
          formality: 'Formal/Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Subsequently',
          meaning: 'Posteriormente',
          example: 'The meeting was postponed. Subsequently, a new date was arranged.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Previously',
          meaning: 'Previamente',
          example: 'Previously, such behavior would have been unacceptable.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Meanwhile',
          meaning: 'Mientras tanto',
          example: 'The research continued for months. Meanwhile, funding was secured.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Afterwards',
          meaning: 'Después',
          example: 'We attended the conference. Afterwards, we went for dinner.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Initially',
          meaning: 'Inicialmente',
          example: 'Initially, the project seemed impossible, but we succeeded.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'At first',
          meaning: 'Al principio',
          example: 'At first, I didn\'t understand the concept, but now it makes sense.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To begin with',
          meaning: 'Para empezar',
          example: 'To begin with, let me explain the background.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In the first place',
          meaning: 'En primer lugar',
          example: 'We shouldn\'t have started this in the first place.',
          formality: 'Semi-formal',
          position: 'Beginning or end of sentence'
        },
        {
          word: 'Ultimately',
          meaning: 'En última instancia',
          example: 'Ultimately, the decision rests with the board of directors.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Eventually',
          meaning: 'Finalmente, eventualmente',
          example: 'We tried many approaches and eventually found the solution.',
          formality: 'Semi-formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'In the meantime',
          meaning: 'Mientras tanto',
          example: 'The repairs will take a week. In the meantime, use the temporary office.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Simultaneously',
          meaning: 'Simultáneamente',
          example: 'The two events occurred simultaneously.',
          formality: 'Formal',
          position: 'Mid-sentence or end'
        },
        {
          word: 'Concurrently',
          meaning: 'Concurrentemente',
          example: 'The projects ran concurrently over a six-month period.',
          formality: 'Very formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Following this',
          meaning: 'Tras esto',
          example: 'Following this, we implemented the new procedures.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Prior to this',
          meaning: 'Antes de esto',
          example: 'Prior to this development, such technology didn\'t exist.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Concluding / Summarizing',
      color: 'bg-orange-900',
      explanation: 'Use these to conclude or summarize your ideas.',
      words: [
        {
          word: 'In conclusion',
          meaning: 'En conclusión',
          example: 'In conclusion, the project was a success despite initial challenges.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To conclude',
          meaning: 'Para concluir',
          example: 'To conclude, I believe this approach offers the best solution.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To sum up',
          meaning: 'Para resumir',
          example: 'To sum up, there are three main advantages to this system.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In summary',
          meaning: 'En resumen',
          example: 'In summary, the findings support our initial hypothesis.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Overall',
          meaning: 'En general',
          example: 'Overall, the event was well-organized and successful.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'All in all',
          meaning: 'En general, en definitiva',
          example: 'All in all, it was a worthwhile experience.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'On the whole',
          meaning: 'En general',
          example: 'On the whole, the response has been positive.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In brief',
          meaning: 'En resumen',
          example: 'In brief, the proposal has both strengths and weaknesses.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To summarize',
          meaning: 'Para resumir',
          example: 'To summarize, there are three key points to remember.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Ultimately',
          meaning: 'En última instancia',
          example: 'Ultimately, the choice is yours.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In the end',
          meaning: 'Al final',
          example: 'In the end, everything worked out perfectly.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'After all',
          meaning: 'Después de todo',
          example: 'After all, we achieved our main objective.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In short',
          meaning: 'En resumen',
          example: 'In short, the experiment was a complete success.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Basically',
          meaning: 'Básicamente',
          example: 'Basically, we need to start from scratch.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Expressing Purpose',
      color: 'bg-teal-900',
      explanation: 'Use these to explain the purpose or intention behind an action.',
      words: [
        {
          word: 'In order to',
          meaning: 'Con el fin de',
          example: 'We hired more staff in order to meet the increased demand.',
          formality: 'Formal',
          position: 'Mid-sentence (+ infinitive)'
        },
        {
          word: 'So as to',
          meaning: 'Para, con el fin de',
          example: 'She arrived early so as to get a good seat.',
          formality: 'Formal',
          position: 'Mid-sentence (+ infinitive)'
        },
        {
          word: 'With a view to',
          meaning: 'Con vistas a',
          example: 'They invested heavily with a view to expanding internationally.',
          formality: 'Formal',
          position: 'Mid-sentence (+ gerund)'
        },
        {
          word: 'For the purpose of',
          meaning: 'Con el propósito de',
          example: 'The meeting was arranged for the purpose of discussing the new policy.',
          formality: 'Very formal',
          position: 'Mid-sentence (+ gerund)'
        },
        {
          word: 'So that',
          meaning: 'Para que',
          example: 'I left early so that I could avoid the traffic.',
          formality: 'Semi-formal',
          position: 'Mid-sentence (+ clause)'
        },
        {
          word: 'To',
          meaning: 'Para',
          example: 'I called to confirm the appointment.',
          formality: 'Neutral',
          position: 'Mid-sentence (+ infinitive)'
        }
      ]
    },
    {
      category: 'Expressing Condition',
      color: 'bg-pink-900',
      explanation: 'Use these to express conditions or requirements.',
      words: [
        {
          word: 'If',
          meaning: 'Si',
          example: 'If you study hard, you will pass the exam.',
          formality: 'Neutral',
          position: 'Beginning or mid-sentence'
        },
        {
          word: 'Unless',
          meaning: 'A menos que',
          example: 'Unless we act now, it will be too late.',
          formality: 'Formal',
          position: 'Beginning or mid-sentence'
        },
        {
          word: 'Provided that / Providing that',
          meaning: 'Siempre que, con tal de que',
          example: 'You can borrow my car provided that you drive carefully.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'On condition that',
          meaning: 'Con la condición de que',
          example: 'I\'ll lend you the money on condition that you pay me back next month.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'As long as',
          meaning: 'Siempre que, mientras',
          example: 'You can stay as long as you help with the housework.',
          formality: 'Informal',
          position: 'Mid-sentence'
        },
        {
          word: 'In case',
          meaning: 'En caso de que',
          example: 'Take an umbrella in case it rains.',
          formality: 'Semi-formal',
          position: 'Mid-sentence'
        },
        {
          word: 'Otherwise',
          meaning: 'De lo contrario',
          example: 'Hurry up, otherwise we\'ll miss the train.',
          formality: 'Semi-formal',
          position: 'Mid-sentence'
        }
      ]
    },
    {
      category: 'Expressing Opinion',
      color: 'bg-cyan-900',
      explanation: 'Use these to express your opinion or viewpoint.',
      words: [
        {
          word: 'In my opinion',
          meaning: 'En mi opinión',
          example: 'In my opinion, this is the best solution.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'From my point of view',
          meaning: 'Desde mi punto de vista',
          example: 'From my point of view, the decision was premature.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'As far as I\'m concerned',
          meaning: 'Por lo que a mí respecta',
          example: 'As far as I\'m concerned, the matter is closed.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'It seems to me that',
          meaning: 'Me parece que',
          example: 'It seems to me that we need more time.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'I would argue that',
          meaning: 'Yo argumentaría que',
          example: 'I would argue that the benefits outweigh the costs.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Personally',
          meaning: 'Personalmente',
          example: 'Personally, I prefer the alternative approach.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Clarifying & Explaining',
      color: 'bg-emerald-900',
      explanation: 'Use these to clarify, rephrase, or explain what you mean.',
      words: [
        {
          word: 'In other words',
          meaning: 'En otras palabras',
          example: 'The proposal was rejected. In other words, we need a new plan.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'That is to say',
          meaning: 'Es decir',
          example: 'We need to reduce costs, that is to say, we must cut expenses.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'What I mean is',
          meaning: 'Lo que quiero decir es',
          example: 'The system is inefficient. What I mean is, we\'re wasting resources.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To put it another way',
          meaning: 'Dicho de otra manera',
          example: 'To put it another way, we need to think outside the box.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To clarify',
          meaning: 'Para aclarar',
          example: 'To clarify, the deadline applies to all departments.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To put it simply',
          meaning: 'Para decirlo simplemente',
          example: 'To put it simply, we can\'t afford this project.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'To be more precise',
          meaning: 'Para ser más preciso',
          example: 'The meeting is next week, or to be more precise, next Tuesday.',
          formality: 'Formal',
          position: 'Mid-sentence or beginning'
        },
        {
          word: 'More specifically',
          meaning: 'Más específicamente',
          example: 'We need to improve communication, more specifically with clients.',
          formality: 'Formal',
          position: 'Mid-sentence'
        },
        {
          word: 'In fact',
          meaning: 'De hecho',
          example: 'He said he was busy. In fact, he was avoiding me.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Expressing Cause & Reason',
      color: 'bg-violet-900',
      explanation: 'Use these to explain why something happens or happened.',
      words: [
        {
          word: 'Because',
          meaning: 'Porque',
          example: 'I stayed home because I was feeling ill.',
          formality: 'Neutral',
          position: 'Mid-sentence (+ clause)'
        },
        {
          word: 'Since',
          meaning: 'Ya que, puesto que',
          example: 'Since you\'re already here, let me show you the new office.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'As',
          meaning: 'Como, ya que',
          example: 'As it was getting late, we decided to leave.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Due to',
          meaning: 'Debido a',
          example: 'The flight was cancelled due to bad weather.',
          formality: 'Formal',
          position: 'Mid-sentence (+ noun/gerund)'
        },
        {
          word: 'Because of',
          meaning: 'Debido a, por',
          example: 'Because of the rain, the match was postponed.',
          formality: 'Semi-formal',
          position: 'Beginning or mid-sentence (+ noun)'
        },
        {
          word: 'Owing to',
          meaning: 'Debido a',
          example: 'Owing to technical difficulties, the presentation was delayed.',
          formality: 'Formal',
          position: 'Beginning of sentence (+ noun/gerund)'
        },
        {
          word: 'On account of',
          meaning: 'A causa de',
          example: 'The event was cancelled on account of low ticket sales.',
          formality: 'Formal',
          position: 'Mid-sentence (+ noun/gerund)'
        },
        {
          word: 'Thanks to',
          meaning: 'Gracias a',
          example: 'Thanks to your help, we finished the project on time.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Given that',
          meaning: 'Dado que',
          example: 'Given that we have limited time, let\'s focus on priorities.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Seeing that / Seeing as',
          meaning: 'Visto que, ya que',
          example: 'Seeing that you\'re free tomorrow, shall we meet for lunch?',
          formality: 'Informal',
          position: 'Beginning of sentence'
        },
        {
          word: 'For',
          meaning: 'Pues, ya que',
          example: 'We must hurry, for time is running out.',
          formality: 'Very formal',
          position: 'Mid-sentence (literary)'
        }
      ]
    },
    {
      category: 'Making Concessions',
      color: 'bg-rose-900',
      explanation: 'Use these to acknowledge an opposing point before presenting your own.',
      words: [
        {
          word: 'Admittedly',
          meaning: 'Es cierto que, hay que admitir',
          example: 'Admittedly, the plan has some flaws, but it\'s the best option we have.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Granted',
          meaning: 'Es cierto, concedido',
          example: 'Granted, the cost is high, but the quality is excellent.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'It is true that',
          meaning: 'Es verdad que',
          example: 'It is true that mistakes were made, but we have learned from them.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Of course',
          meaning: 'Por supuesto',
          example: 'Of course, there are risks involved in any business venture.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Naturally',
          meaning: 'Naturalmente',
          example: 'Naturally, some people will disagree with this decision.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'No doubt',
          meaning: 'Sin duda',
          example: 'No doubt there will be challenges ahead.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'True',
          meaning: 'Es cierto',
          example: 'True, we made mistakes, but we also achieved our main goals.',
          formality: 'Informal',
          position: 'Beginning of sentence'
        }
      ]
    },
    {
      category: 'Expressing Similarity',
      color: 'bg-lime-900',
      explanation: 'Use these to show similarity or make comparisons.',
      words: [
        {
          word: 'Similarly',
          meaning: 'Similarmente, de manera similar',
          example: 'Spain has a strong tourism industry. Similarly, Greece depends heavily on tourism.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Likewise',
          meaning: 'Igualmente, del mismo modo',
          example: 'The first experiment was successful. Likewise, the second one produced positive results.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In the same way',
          meaning: 'De la misma manera',
          example: 'Children learn through play. In the same way, adults learn best through practice.',
          formality: 'Semi-formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'By the same token',
          meaning: 'Por la misma razón',
          example: 'We need to reduce costs. By the same token, we should increase revenue.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Equally',
          meaning: 'Igualmente',
          example: 'Price is important. Equally, quality must not be compromised.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Correspondingly',
          meaning: 'Correspondientemente',
          example: 'Demand increased. Correspondingly, prices rose.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'Just as',
          meaning: 'Así como',
          example: 'Just as summer follows spring, change follows innovation.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        },
        {
          word: 'In much the same way',
          meaning: 'De manera muy similar',
          example: 'In much the same way as plants need water, businesses need customers.',
          formality: 'Formal',
          position: 'Beginning of sentence'
        }
      ]
    }
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            B2 Linking Words & Connectors
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master these essential linking words to improve coherence and flow in your writing and speaking.
            These connectors will help you achieve a more sophisticated and natural B2 level of English.
          </p>
          <div className="mt-6 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-blue-200">
              💡 <strong>Tip:</strong> Pay attention to formality levels and position in the sentence. 
              Using the right connector in the right context is key to natural-sounding English!
            </p>
          </div>
        </div>

        {/* Categories */}
        {linkingWordsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className={`${category.color} p-6 rounded-t-lg border-b-4 border-green-500`}>
              <h2 className="text-3xl font-bold mb-2">{category.category}</h2>
              <p className="text-gray-200 text-lg">{category.explanation}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {category.words.map((item, wordIndex) => {
                const uniqueIndex = `${categoryIndex}-${wordIndex}`;
                return (
                  <div
                    key={wordIndex}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-green-400">{item.word}</h3>
                      <button
                        onClick={() => copyToClipboard(item.word, uniqueIndex)}
                        className="text-gray-400 hover:text-green-400 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === uniqueIndex ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-blue-300 italic text-sm mb-2">{item.meaning}</p>
                      <div className="flex gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          item.formality === 'Formal' ? 'bg-purple-900/50 text-purple-300' :
                          item.formality === 'Very formal' ? 'bg-purple-900 text-purple-200' :
                          item.formality === 'Semi-formal' ? 'bg-blue-900/50 text-blue-300' :
                          item.formality === 'Informal' ? 'bg-green-900/50 text-green-300' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {item.formality}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-gray-400 mb-1">Example:</p>
                      <p className="text-sm text-gray-200 italic bg-gray-900/50 p-3 rounded border-l-4 border-green-500">
                        "{item.example}"
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-400">
                        <span className="font-semibold">Position:</span> {item.position}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Usage Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-green-400">Important Usage Tips</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-200">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">✓ Do:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Use commas after linking words at the beginning of sentences</li>
                <li>Match formality to context (formal writing vs. casual email)</li>
                <li>Vary your linking words to avoid repetition</li>
                <li>Check if the connector requires a clause, noun, or gerund</li>
                <li>Practice using less common connectors to sound more sophisticated</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-300">✗ Don't:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Overuse linking words - it can sound unnatural</li>
                <li>Use "but" and "however" together in the same sentence</li>
                <li>Use informal connectors in academic writing</li>
                <li>Forget punctuation (especially commas)</li>
                <li>Use connectors when the relationship is already clear</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="mt-8 bg-red-900/20 border border-red-500/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-400">Common Mistakes to Avoid</h2>
          <div className="space-y-4 text-gray-200">
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="text-red-300 mb-2">❌ <span className="line-through">But however, the results were positive.</span></p>
              <p className="text-green-300">✓ However, the results were positive. / The results were positive, though.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="text-red-300 mb-2">❌ <span className="line-through">Despite of the rain, we went out.</span></p>
              <p className="text-green-300">✓ Despite the rain, we went out. / In spite of the rain, we went out.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="text-red-300 mb-2">❌ <span className="line-through">For example cycling, swimming, and running.</span></p>
              <p className="text-green-300">✓ I enjoy many sports, for example cycling, swimming, and running.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="text-red-300 mb-2">❌ <span className="line-through">Although she was tired but she continued working.</span></p>
              <p className="text-green-300">✓ Although she was tired, she continued working.</p>
            </div>
          </div>
        </div>

        {/* Practice Suggestion */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Ready to Practice?</h2>
          <p className="text-gray-200 mb-4">
            Try rewriting sentences from the B2 email examples using different linking words to see how they change the tone and formality!
          </p>
          <p className="text-sm text-gray-400 italic">
            Total linking words covered: {linkingWordsCategories.reduce((acc, cat) => acc + cat.words.length, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkingWordsB2;
