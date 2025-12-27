import React, { useState } from 'react';

const PronounsC1Exercise = () => {
  const exercises = [
    {
      words: ['When', 'I', 'speak', 'to', 'someone,', 'they', 'never', 'understand', 'me.'],
      correctAnswer: ['When', 'I', 'speak', 'to', 'someone,', 'they', 'never', 'understand', 'me.']
    },
    {
      words: ["I'm", 'not', 'sure', 'what', 'one', 'can', 'do', 'to', 'improve.'],
      correctAnswer: ["I'm", 'not', 'sure', 'what', 'one', 'can', 'do', 'to', 'improve.']
    },
    {
      words: ['He', 'did', 'all', 'his', 'English', 'homework', 'himself.'],
      correctAnswer: ['He', 'did', 'all', 'his', 'English', 'homework', 'himself.']
    },
    {
      words: ['She', 'can', 'easily', 'learn', 'a', 'language', 'by', 'herself.'],
      correctAnswer: ['She', 'can', 'easily', 'learn', 'a', 'language', 'by', 'herself.']
    },
    {
      words: ['Ask', 'yourself', 'whether', 'you', 'could', 'cope', 'in', 'a', 'foreign', 'country.'],
      correctAnswer: ['Ask', 'yourself', 'whether', 'you', 'could', 'cope', 'in', 'a', 'foreign', 'country.']
    },
    {
      words: ['We', 'found', 'a', 'teacher', 'for', 'them', 'ourselves.'],
      correctAnswer: ['We', 'found', 'a', 'teacher', 'for', 'them', 'ourselves.']
    },
    {
      words: ['They', 'tested', 'each', 'other', 'on', 'their', 'grammar.'],
      correctAnswer: ['They', 'tested', 'each', 'other', 'on', 'their', 'grammar.']
    },
    {
      words: ['We', 'started', 'to', 'blame', 'one', 'another', 'about', 'it.'],
      correctAnswer: ['We', 'started', 'to', 'blame', 'one', 'another', 'about', 'it.']
    },
    {
      words: ['It', 'is', 'a', 'long', 'time', 'since', 'I', 'began', 'learning', 'English.'],
      correctAnswer: ['It', 'is', 'a', 'long', 'time', 'since', 'I', 'began', 'learning', 'English.']
    },
    {
      words: ['There', 'are', 'dictionaries', 'on', 'your', 'desks', 'so', 'check', 'the', 'pronunciation', 'yourselves.'],
      correctAnswer: ['There', 'are', 'dictionaries', 'on', 'your', 'desks', 'so', 'check', 'the', 'pronunciation', 'yourselves.']
    }
  ];

  const [reorderedSentences, setReorderedSentences] = useState(
    exercises.map(() => [])
  );
  const [availableWords, setAvailableWords] = useState(
    exercises.map((ex, idx) => shuffleArray([...ex.words]))
  );
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const addWord = (exerciseIndex, word) => {
    const newReordered = [...reorderedSentences];
    newReordered[exerciseIndex] = [...newReordered[exerciseIndex], word];
    setReorderedSentences(newReordered);

    const newAvailable = [...availableWords];
    const wordIndex = newAvailable[exerciseIndex].indexOf(word);
    newAvailable[exerciseIndex].splice(wordIndex, 1);
    setAvailableWords(newAvailable);

    setShowResults(false);
    setShowAnswers(false);
  };

  const removeWord = (exerciseIndex, wordIndex) => {
    const word = reorderedSentences[exerciseIndex][wordIndex];
    
    const newReordered = [...reorderedSentences];
    newReordered[exerciseIndex].splice(wordIndex, 1);
    setReorderedSentences(newReordered);

    const newAvailable = [...availableWords];
    newAvailable[exerciseIndex].push(word);
    setAvailableWords(newAvailable);

    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    exercises.forEach((exercise, idx) => {
      if (JSON.stringify(reorderedSentences[idx]) === JSON.stringify(exercise.correctAnswer)) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setReorderedSentences(exercises.map(() => []));
    setAvailableWords(exercises.map((ex) => shuffleArray([...ex.words])));
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setReorderedSentences(exercises.map(ex => [...ex.correctAnswer]));
    setAvailableWords(exercises.map(() => []));
    calculateScore();
  };

  const isCorrect = (exerciseIndex) => {
    if (!showAnswers) return null;
    return JSON.stringify(reorderedSentences[exerciseIndex]) === JSON.stringify(exercises[exerciseIndex].correctAnswer);
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-4">
            C1 Grammar: Pronouns
          </h1>

          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              <ul className="text-htb-text text-sm">
                <li>
                  {score < 5
                    ? '❌ Please try again.'
                    : score < 10
                    ? '⚠️ Good effort! Review and try again.'
                    : '✅ Well done!'}
                </li>
              </ul>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Click on the words in the correct order.
          </p>

          <div className="space-y-6">
            {exercises.map((exercise, exerciseIndex) => {
              const correct = isCorrect(exerciseIndex);
              return (
                <div
                  key={exerciseIndex}
                  className={`bg-htb-sidebar border-2 rounded-lg p-4 ${
                    correct === true
                      ? 'border-htb-green'
                      : correct === false
                      ? 'border-red-500'
                      : 'border-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-htb-green font-bold text-lg shrink-0">
                      {exerciseIndex + 1}.
                    </span>
                    {correct !== null && (
                      <span className={`text-lg ${correct ? 'text-htb-green' : 'text-red-500'}`}>
                        {correct ? '✓' : '✗'}
                      </span>
                    )}
                  </div>

                  {/* Answer area */}
                  <div className="bg-htb-card border-2 border-htb-green rounded-lg p-3 mb-3 min-h-[60px] flex flex-wrap gap-2 items-start">
                    {reorderedSentences[exerciseIndex].length === 0 ? (
                      <span className="text-htb-text-dim italic text-sm">
                        Click on words below to build your sentence...
                      </span>
                    ) : (
                      reorderedSentences[exerciseIndex].map((word, wordIndex) => (
                        <button
                          key={wordIndex}
                          onClick={() => !showAnswers && removeWord(exerciseIndex, wordIndex)}
                          disabled={showAnswers}
                          className="bg-htb-green text-htb-bg px-3 py-1.5 rounded-md font-semibold hover:bg-htb-green-hover transition-colors disabled:opacity-70 text-sm sm:text-base"
                        >
                          {word}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Available words */}
                  <div className="bg-htb-bg border border-gray-800 rounded-lg p-3">
                    <p className="text-htb-text-dim text-xs mb-2">Available words:</p>
                    <div className="flex flex-wrap gap-2">
                      {availableWords[exerciseIndex].map((word, wordIndex) => (
                        <button
                          key={wordIndex}
                          onClick={() => !showAnswers && addWord(exerciseIndex, word)}
                          disabled={showAnswers}
                          className="bg-htb-card text-white px-3 py-1.5 rounded-md border border-gray-700 hover:border-htb-green hover:text-htb-green transition-colors disabled:opacity-50 text-sm sm:text-base"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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

export default PronounsC1Exercise;
