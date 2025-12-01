import React, { useState, useEffect } from 'react';
import { getExercisesByTense } from '../data/exercises';

const MatchExercise = ({ tenseId }) => {
  const [exercise, setExercise] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [availableWords, setAvailableWords] = useState([]);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  useEffect(() => {
    loadNewExercise();
  }, [tenseId]);

  const loadNewExercise = () => {
    const exercises = getExercisesByTense(tenseId);
    if (exercises.length > 0 && exercises[0].type === 'match') {
      const ex = exercises[0];
      setExercise(ex);
      setAvailableWords([...ex.words].sort(() => Math.random() - 0.5));
      setUserAnswers({});
      setFeedback(null);
    }
  };

  const handleWordClick = (word, definitionId) => {
    if (feedback) return; // No permitir cambios después de verificar

    // Si la palabra ya está seleccionada en esta definición, deseleccionarla
    if (userAnswers[definitionId] === word) {
      const newAnswers = { ...userAnswers };
      delete newAnswers[definitionId];
      setUserAnswers(newAnswers);
      return;
    }

    // Asignar la palabra a esta definición
    setUserAnswers({
      ...userAnswers,
      [definitionId]: word
    });
  };

  const checkAnswers = () => {
    const totalDefinitions = exercise.definitions.length;
    const answeredCount = Object.keys(userAnswers).length;

    if (answeredCount < totalDefinitions) {
      alert('Por favor completa todas las respuestas antes de verificar.');
      return;
    }

    let correct = 0;
    let incorrect = 0;
    const results = {};

    exercise.definitions.forEach(def => {
      const isCorrect = userAnswers[def.id] === def.answer;
      results[def.id] = isCorrect;
      if (isCorrect) {
        correct++;
      } else {
        incorrect++;
      }
    });

    setFeedback({ results, correct, incorrect });
    setStats(prev => ({
      correct: prev.correct + correct,
      incorrect: prev.incorrect + incorrect
    }));
  };

  const nextExercise = () => {
    loadNewExercise();
  };

  if (!exercise) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Weather Exercise</h2>
        <p className="text-gray-600">Cargando ejercicio...</p>
      </div>
    );
  }

  const isWordUsed = (word) => {
    return Object.values(userAnswers).includes(word);
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Weather Exercise</h2>
            <p className="text-sm sm:text-base text-gray-600">{exercise.instruction}</p>
          </div>

          <div className="flex items-center gap-4 text-sm ml-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-semibold text-green-700">{stats.correct}</span>
              <span className="text-gray-600">Correctas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-semibold text-red-700">{stats.incorrect}</span>
              <span className="text-gray-600">Incorrectas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        {/* Available Words Bank */}
        <div className="mb-6 p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase">Available Words</h3>
          <div className="flex flex-wrap gap-2">
            {availableWords.map((word, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isWordUsed(word)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg transform hover:scale-105'
                }`}
                disabled={isWordUsed(word) || feedback}
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Definitions List */}
        <div className="space-y-4">
          {exercise.definitions.map((definition) => {
            const selectedWord = userAnswers[definition.id];
            const isCorrect = feedback?.results[definition.id];
            const showCorrectAnswer = feedback && !isCorrect;

            return (
              <div
                key={definition.id}
                className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                  feedback
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-bold text-lg text-gray-700 min-w-[30px]">{definition.id}.</span>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {/* Dropdown selector */}
                      <select
                        value={selectedWord || ''}
                        onChange={(e) => handleWordClick(e.target.value, definition.id)}
                        disabled={feedback !== null}
                        className={`px-4 py-2 border-2 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[180px] ${
                          selectedWord
                            ? 'bg-blue-100 border-blue-400 text-blue-700'
                            : 'bg-white border-gray-300'
                        }`}
                      >
                        <option value="">-- Select word --</option>
                        {availableWords.map((word) => (
                          <option 
                            key={word} 
                            value={word}
                            disabled={isWordUsed(word) && userAnswers[definition.id] !== word}
                          >
                            {word}
                          </option>
                        ))}
                      </select>

                      {feedback && (
                        <span className="text-2xl">
                          {isCorrect ? '✅' : '❌'}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 italic">({definition.text})</p>

                    {showCorrectAnswer && (
                      <p className="mt-2 text-sm text-green-700 font-semibold">
                        Correct answer: <span className="text-green-800">{definition.answer}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {!feedback ? (
            <button
              onClick={checkAnswers}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Check Answers
            </button>
          ) : (
            <button
              onClick={nextExercise}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Next Exercise
            </button>
          )}
        </div>

        {/* Feedback Summary */}
        {feedback && (
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Results</h3>
            <p className="text-gray-700">
              <span className="text-green-600 font-bold">{feedback.correct}</span> correct,{' '}
              <span className="text-red-600 font-bold">{feedback.incorrect}</span> incorrect out of {exercise.definitions.length}
            </p>
            <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-500"
                style={{ width: `${(feedback.correct / exercise.definitions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchExercise;
