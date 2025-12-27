import React, { useState } from 'react';

const InversionC1Exercise = () => {
  const exercises = [
    {
      id: 1,
      words: ['Not', 'only', 'is', 'the', 'book', 'popular,', "it's", 'also', 'a', 'bestseller.'],
      correctOrder: ['Not', 'only', 'is', 'the', 'book', 'popular,', "it's", 'also', 'a', 'bestseller.'],
      startWord: 'Not'
    },
    {
      id: 2,
      words: ['Not', 'until', 'Brian', 'read', 'the', 'translation', 'did', 'he', 'understand', 'the', 'full', 'story.'],
      correctOrder: ['Not', 'until', 'Brian', 'read', 'the', 'translation', 'did', 'he', 'understand', 'the', 'full', 'story.'],
      startWord: 'Not'
    },
    {
      id: 3,
      words: ['Never', 'have', 'I', 'seen', 'so', 'many', 'spelling', 'mistakes.'],
      correctOrder: ['Never', 'have', 'I', 'seen', 'so', 'many', 'spelling', 'mistakes.'],
      startWord: 'Never'
    },
    {
      id: 4,
      words: ['No', 'sooner', 'had', 'I', 'arrived', 'than', 'it', 'was', 'time', 'to', 'go.'],
      correctOrder: ['No', 'sooner', 'had', 'I', 'arrived', 'than', 'it', 'was', 'time', 'to', 'go.'],
      startWord: 'No'
    },
    {
      id: 5,
      words: ['Only', 'when', 'the', 'police', 'caught', 'her', 'did', 'she', 'confess.'],
      correctOrder: ['Only', 'when', 'the', 'police', 'caught', 'her', 'did', 'she', 'confess.'],
      startWord: 'Only'
    },
    {
      id: 6,
      words: ['Rarely', 'can', 'writing', 'of', 'this', 'quality', 'be', 'found.'],
      correctOrder: ['Rarely', 'can', 'writing', 'of', 'this', 'quality', 'be', 'found.'],
      startWord: 'Rarely'
    },
    {
      id: 7,
      words: ['Never', 'would', 'she', 'agree', 'to', 'something', 'like', 'this.'],
      correctOrder: ['Never', 'would', 'she', 'agree', 'to', 'something', 'like', 'this.'],
      startWord: 'Never'
    },
    {
      id: 8,
      words: ['Scarcely', 'had', 'we', 'left', 'when', 'the', 'problems', 'began.'],
      correctOrder: ['Scarcely', 'had', 'we', 'left', 'when', 'the', 'problems', 'began.'],
      startWord: 'Scarcely'
    },
    {
      id: 9,
      words: ['Not', 'only', 'am', 'I', 'cold,', "I'm", 'absolutely', 'freezing.'],
      correctOrder: ['Not', 'only', 'am', 'I', 'cold,', "I'm", 'absolutely', 'freezing.'],
      startWord: 'Not'
    },
    {
      id: 10,
      words: ['Only', 'after', 'he', 'died', 'was', 'his', 'writing', 'really', 'appreciated.'],
      correctOrder: ['Only', 'after', 'he', 'died', 'was', 'his', 'writing', 'really', 'appreciated.'],
      startWord: 'Only'
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
            C1 Grammar: Adding Emphasis (1) - Inversion
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Click on the words in the correct order. Begin with the <u>underlined</u> word.
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
                          className={`px-3 py-1.5 rounded border-2 transition-colors ${
                            word === exercise.startWord && index === 0
                              ? 'bg-htb-green/20 border-htb-green text-htb-green'
                              : 'bg-htb-card border-gray-600 text-white hover:border-htb-green/50'
                          }`}
                        >
                          {word === exercise.startWord && index === 0 ? <u>{word}</u> : word}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Available words */}
                <div className="flex flex-wrap gap-2">
                  {availableWords[exercise.id].map((word, index) => (
                    <button
                      key={`available-${index}`}
                      onClick={() => addWord(exercise.id, word, index)}
                      className={`px-3 py-1.5 rounded border-2 bg-htb-card border-gray-600 text-white hover:bg-htb-green/10 hover:border-htb-green transition-colors ${
                        word === exercise.startWord ? 'font-bold' : ''
                      }`}
                    >
                      {word === exercise.startWord ? <u>{word}</u> : word}
                    </button>
                  ))}
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

export default InversionC1Exercise;
