import React, { useState } from 'react';

const IdiomsC1Exercise = () => {
  const exercises = [
    {
      id: 1,
      words: ['I', 'don\'t', 'like', 'my', 'sister\'s', 'best', 'friend,', 'she\'s', 'such', 'a', 'pain', 'in', 'the', 'neck.'],
      correctOrder: ['I', 'don\'t', 'like', 'my', 'sister\'s', 'best', 'friend,', 'she\'s', 'such', 'a', 'pain', 'in', 'the', 'neck.']
    },
    {
      id: 2,
      words: ['The', 'music', 'teacher', 'is', 'a', 'cold', 'fish,', 'he', 'never', 'smiles', 'at', 'his', 'students.'],
      correctOrder: ['The', 'music', 'teacher', 'is', 'a', 'cold', 'fish,', 'he', 'never', 'smiles', 'at', 'his', 'students.']
    },
    {
      id: 3,
      words: ['My', 'brother', 'is', 'such', 'a', 'soft', 'touch,', 'he\'ll', 'even', 'do', 'my', 'homework', 'for', 'me.'],
      correctOrder: ['My', 'brother', 'is', 'such', 'a', 'soft', 'touch,', 'he\'ll', 'even', 'do', 'my', 'homework', 'for', 'me.']
    },
    {
      id: 4,
      words: ['Jake\'s', 'dad', 'has', 'such', 'a', 'quick', 'temper,', 'we', 'are', 'all', 'afraid', 'of', 'him.'],
      correctOrder: ['Jake\'s', 'dad', 'has', 'such', 'a', 'quick', 'temper,', 'we', 'are', 'all', 'afraid', 'of', 'him.']
    },
    {
      id: 5,
      words: ['The', 'principal', 'is', 'quite', 'strict,', 'but', 'she\'s', 'a', 'very', 'down', 'to', 'earth', 'person.'],
      correctOrder: ['The', 'principal', 'is', 'quite', 'strict,', 'but', 'she\'s', 'a', 'very', 'down', 'to', 'earth', 'person.']
    },
    {
      id: 6,
      words: ['His', 'grandmother', 'is', 'so', 'kind,', 'she', 'really', 'has', 'a', 'heart', 'of', 'gold.'],
      correctOrder: ['His', 'grandmother', 'is', 'so', 'kind,', 'she', 'really', 'has', 'a', 'heart', 'of', 'gold.']
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
            C1 Vocabulary: Idioms
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/6
              </p>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Click on the words in the correct order.
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
                  {availableWords[exercise.id].map((word, index) => (
                    <button
                      key={`available-${index}`}
                      onClick={() => addWord(exercise.id, word, index)}
                      className="px-3 py-1.5 rounded border-2 bg-htb-card border-gray-600 text-white hover:bg-htb-green/10 hover:border-htb-green transition-colors"
                    >
                      {word}
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

export default IdiomsC1Exercise;
