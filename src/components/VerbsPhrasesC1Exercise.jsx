import React, { useState } from 'react';

const VerbsPhrasesC1Exercise = () => {
  const [reorderedSentences, setReorderedSentences] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  });

  const [availableWords, setAvailableWords] = useState({
    0: ['We', 'love', 'to', 'sample', 'the', 'local', 'cuisine.'],
    1: ['My', 'sister', 'and', 'I', 'wandered', 'round', 'the', 'old', 'town.'],
    2: ['David', 'had', 'to', 'cancel', 'his', 'trip', 'because', 'of', 'illness.'],
    3: ['The', 'whole', 'class', 'went', 'on', 'an', 'outing', 'to', 'the', 'zoo.'],
    4: ['They', 'chilled', 'out', 'after', 'a', 'tiring', 'day.'],
    5: ['It', 'was', 'the', 'perfect', 'place', 'to', 'recharge', 'our', 'batteries.'],
    6: ['We', 'booked', 'a', 'holiday', 'to', 'get', 'away', 'from', 'it', 'all.'],
    7: ['She', 'grabbed', 'her', 'purse', 'and', 'hit', 'the', 'shops!'],
    8: ['Our', 'friends', 'decided', 'to', 'postpone', 'their', 'trip', 'until', 'spring.'],
    9: ['We', 'set', 'off', 'very', 'early', 'to', 'catch', 'our', 'flight.']
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctSentences = {
    0: 'We love to sample the local cuisine.',
    1: 'My sister and I wandered round the old town.',
    2: 'David had to cancel his trip because of illness.',
    3: 'The whole class went on an outing to the zoo.',
    4: 'They chilled out after a tiring day.',
    5: 'It was the perfect place to recharge our batteries.',
    6: 'We booked a holiday to get away from it all.',
    7: 'She grabbed her purse and hit the shops!',
    8: 'Our friends decided to postpone their trip until spring.',
    9: 'We set off very early to catch our flight.'
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const addWord = (sentenceIndex, word) => {
    setReorderedSentences(prev => ({
      ...prev,
      [sentenceIndex]: [...prev[sentenceIndex], word]
    }));
    setAvailableWords(prev => ({
      ...prev,
      [sentenceIndex]: prev[sentenceIndex].filter(w => w !== word)
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const removeWord = (sentenceIndex, word, wordIndex) => {
    setReorderedSentences(prev => ({
      ...prev,
      [sentenceIndex]: prev[sentenceIndex].filter((_, index) => index !== wordIndex)
    }));
    setAvailableWords(prev => ({
      ...prev,
      [sentenceIndex]: [...prev[sentenceIndex], word]
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(correctSentences).forEach(key => {
      const userSentence = reorderedSentences[key].join(' ');
      if (userSentence === correctSentences[key]) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    const initialWords = {
      0: shuffleArray(['We', 'love', 'to', 'sample', 'the', 'local', 'cuisine.']),
      1: shuffleArray(['My', 'sister', 'and', 'I', 'wandered', 'round', 'the', 'old', 'town.']),
      2: shuffleArray(['David', 'had', 'to', 'cancel', 'his', 'trip', 'because', 'of', 'illness.']),
      3: shuffleArray(['The', 'whole', 'class', 'went', 'on', 'an', 'outing', 'to', 'the', 'zoo.']),
      4: shuffleArray(['They', 'chilled', 'out', 'after', 'a', 'tiring', 'day.']),
      5: shuffleArray(['It', 'was', 'the', 'perfect', 'place', 'to', 'recharge', 'our', 'batteries.']),
      6: shuffleArray(['We', 'booked', 'a', 'holiday', 'to', 'get', 'away', 'from', 'it', 'all.']),
      7: shuffleArray(['She', 'grabbed', 'her', 'purse', 'and', 'hit', 'the', 'shops!']),
      8: shuffleArray(['Our', 'friends', 'decided', 'to', 'postpone', 'their', 'trip', 'until', 'spring.']),
      9: shuffleArray(['We', 'set', 'off', 'very', 'early', 'to', 'catch', 'our', 'flight.'])
    };
    
    setAvailableWords(initialWords);
    setReorderedSentences({
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    });
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  React.useEffect(() => {
    resetExercise();
  }, []);

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Vocabulary: Verbs and Verb Phrases
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              {score === 10 && <p className="text-htb-green">Perfect!</p>}
              {score >= 8 && score < 10 && <p className="text-htb-green">Well done!</p>}
              {score < 8 && <p className="text-htb-text-dim">Please try again.</p>}
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Click on the sentences in the correct order.
          </p>

          <div className="space-y-6">
            {Object.keys(correctSentences).map((key) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-htb-green font-bold">{parseInt(key) + 1}.</span>
                  <div className="flex-1 min-h-[2.5rem] bg-htb-sidebar border-2 border-gray-700 rounded-lg p-2 flex flex-wrap gap-1">
                    {reorderedSentences[key].map((word, index) => (
                      <button
                        key={index}
                        onClick={() => removeWord(key, word, index)}
                        className="bg-htb-green text-htb-bg px-2 py-1 rounded text-sm font-medium hover:bg-htb-green/80 transition-colors"
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 ml-8">
                  {availableWords[key].map((word, index) => (
                    <button
                      key={index}
                      onClick={() => addWord(key, word)}
                      className="bg-htb-bg border border-gray-700 text-htb-text px-2 py-1 rounded text-sm hover:bg-htb-sidebar transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                </div>
                {showAnswers && (
                  <div className="ml-8 text-sm">
                    {reorderedSentences[key].join(' ') === correctSentences[key] ? (
                      <span className="text-htb-green">✓ Correct</span>
                    ) : (
                      <span className="text-red-400">
                        ✗ Correct answer: {correctSentences[key]}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={calculateScore}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Score
            </button>
            <button
              onClick={resetExercise}
              className="bg-htb-sidebar hover:bg-gray-700 border border-gray-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Start again
            </button>
            <button
              onClick={handleShowAnswers}
              className="bg-htb-sidebar hover:bg-gray-700 border border-htb-green/30 text-htb-green px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Show answers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerbsPhrasesC1Exercise;
