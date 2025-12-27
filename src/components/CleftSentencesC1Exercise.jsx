import React, { useState } from 'react';

const CleftSentencesC1Exercise = () => {
  const exercises = [
    {
      id: 1,
      words: ['What', 'I', 'missed', 'was', 'all', 'my', 'old', 'friends.'],
      correctOrder: ['What', 'I', 'missed', 'was', 'all', 'my', 'old', 'friends.'],
      underlinedWord: 'What'
    },
    {
      id: 2,
      words: ['All', 'I', 'want', 'is', 'a', 'home', 'of', 'my', 'own', 'somewhere.'],
      correctOrder: ['All', 'I', 'want', 'is', 'a', 'home', 'of', 'my', 'own', 'somewhere.'],
      underlinedWord: 'All'
    },
    {
      id: 3,
      words: ['What', 'makes', 'me', 'angry', 'is', 'her', 'constant', 'complaining.'],
      correctOrder: ['What', 'makes', 'me', 'angry', 'is', 'her', 'constant', 'complaining.'],
      underlinedWord: 'What'
    },
    {
      id: 4,
      words: ['What', 'happened', 'was', 'that', 'I', 'lost', 'my', 'passport.'],
      correctOrder: ['What', 'happened', 'was', 'that', 'I', 'lost', 'my', 'passport.'],
      underlinedWord: 'What'
    },
    {
      id: 5,
      words: ['The', 'thing', 'that', 'surprised', 'me', 'most', 'was', 'the', 'price.'],
      correctOrder: ['The', 'thing', 'that', 'surprised', 'me', 'most', 'was', 'the', 'price.'],
      underlinedWord: 'The'
    },
    {
      id: 6,
      words: ['The', 'reason', 'why', 'they', 'emigrated', 'is', 'not', 'clear.'],
      correctOrder: ['The', 'reason', 'why', 'they', 'emigrated', 'is', 'not', 'clear.'],
      underlinedWord: 'The'
    },
    {
      id: 7,
      words: ['All', 'that', 'happened', 'was', 'I', 'had', 'to', 'apologise.'],
      correctOrder: ['All', 'that', 'happened', 'was', 'I', 'had', 'to', 'apologise.'],
      underlinedWord: 'All'
    },
    {
      id: 8,
      words: ['It', 'was', 'my', 'dad', 'who', 'first', 'had', 'the', 'idea.'],
      correctOrder: ['It', 'was', 'my', 'dad', 'who', 'first', 'had', 'the', 'idea.'],
      underlinedWord: 'It'
    },
    {
      id: 9,
      words: ['It', 'is', 'only', 'at', 'the', 'weekends', 'that', 'I', 'can', 'relax.'],
      correctOrder: ['It', 'is', 'only', 'at', 'the', 'weekends', 'that', 'I', 'can', 'relax.'],
      underlinedWord: 'It'
    },
    {
      id: 10,
      words: ['It', 'was', 'a', 'customs', 'officer', 'who', 'stopped', 'us.'],
      correctOrder: ['It', 'was', 'a', 'customs', 'officer', 'who', 'stopped', 'us.'],
      underlinedWord: 'It'
    }
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const [reorderedSentences, setReorderedSentences] = useState(
    exercises.reduce((acc, exercise) => {
      acc[exercise.id] = [];
      return acc;
    }, {})
  );

  const [availableWords, setAvailableWords] = useState(
    exercises.reduce((acc, exercise) => {
      acc[exercise.id] = shuffleArray(exercise.words);
      return acc;
    }, {})
  );

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const addWord = (exerciseId, word, index) => {
    setReorderedSentences(prev => ({
      ...prev,
      [exerciseId]: [...prev[exerciseId], word]
    }));
    setAvailableWords(prev => ({
      ...prev,
      [exerciseId]: prev[exerciseId].filter((_, i) => i !== index)
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const removeWord = (exerciseId, word, index) => {
    setReorderedSentences(prev => ({
      ...prev,
      [exerciseId]: prev[exerciseId].filter((_, i) => i !== index)
    }));
    setAvailableWords(prev => ({
      ...prev,
      [exerciseId]: [...prev[exerciseId], word]
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    exercises.forEach(exercise => {
      const userAnswer = reorderedSentences[exercise.id].join(' ');
      const correctAnswer = exercise.correctOrder.join(' ');
      if (userAnswer === correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setReorderedSentences(
      exercises.reduce((acc, exercise) => {
        acc[exercise.id] = [];
        return acc;
      }, {})
    );
    setAvailableWords(
      exercises.reduce((acc, exercise) => {
        acc[exercise.id] = shuffleArray(exercise.words);
        return acc;
      }, {})
    );
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  const isCorrect = (exerciseId) => {
    const userAnswer = reorderedSentences[exerciseId].join(' ');
    const correctAnswer = exercises.find(e => e.id === exerciseId).correctOrder.join(' ');
    return userAnswer === correctAnswer;
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: Adding Emphasis (2) - Cleft Sentences
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Click on the words in the correct order. Begin with the <span className="underline">underlined</span> word.
          </p>

          <div className="space-y-8">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-htb-green font-bold text-lg min-w-[2rem]">
                    {exercise.id}.
                  </span>
                  {showAnswers && (
                    <div className="flex-shrink-0">
                      {isCorrect(exercise.id) ? (
                        <span className="text-htb-green text-xl">✓</span>
                      ) : (
                        <span className="text-red-500 text-xl">✗</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Reordered sentence area */}
                <div className="mb-4 min-h-[60px] bg-htb-bg border-2 border-gray-700 rounded-lg p-3">
                  {reorderedSentences[exercise.id].length === 0 ? (
                    <p className="text-gray-500 italic">Click words below to build the sentence...</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {reorderedSentences[exercise.id].map((word, index) => (
                        <button
                          key={`ordered-${index}`}
                          onClick={() => removeWord(exercise.id, word, index)}
                          className="px-3 py-1.5 rounded border-2 bg-htb-card border-gray-600 text-white hover:border-htb-green/50 transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Available words */}
                <div className="flex flex-wrap gap-2">
                  {availableWords[exercise.id].map((word, index) => {
                    const isUnderlined = word === exercise.underlinedWord;
                    return (
                      <button
                        key={`available-${index}`}
                        onClick={() => addWord(exercise.id, word, index)}
                        className={`px-3 py-1.5 rounded border-2 bg-htb-card border-gray-600 text-white hover:bg-htb-green/10 hover:border-htb-green transition-colors ${
                          isUnderlined ? 'underline decoration-2 decoration-htb-green' : ''
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>

                {/* Show correct answer if wrong */}
                {showAnswers && !isCorrect(exercise.id) && (
                  <div className="mt-3 p-3 bg-htb-green/10 border border-htb-green/30 rounded">
                    <p className="text-htb-green text-sm">
                      <strong>Correct answer:</strong> {exercise.correctOrder.join(' ')}
                    </p>
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

export default CleftSentencesC1Exercise;
