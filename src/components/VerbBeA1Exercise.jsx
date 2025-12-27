import React, { useState } from 'react';

const VerbBeA1Exercise = () => {
  const [answers, setAnswers] = useState({
    question01: '',
    question02: '',
    question03: '',
    question04: '',
    question05: '',
    question06: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    {
      id: 'question01',
      text: 'Hello, I',
      afterText: 'Steven.',
      options: ['...', 'are', 'am'],
      correctAnswer: 'am'
    },
    {
      id: 'question02',
      text: 'You',
      afterText: 'a very good teacher.',
      options: ['...', 'are', 'am'],
      correctAnswer: 'are'
    },
    {
      id: 'question03',
      text: 'I',
      afterText: 'Sarah!',
      options: ['...', "'m not", "aren't"],
      correctAnswer: "'m not"
    },
    {
      id: 'question04',
      text: 'You',
      afterText: 'in room 4.',
      options: ['...', "'m not", "aren't"],
      correctAnswer: "aren't"
    },
    {
      id: 'question05',
      text: '',
      afterText: 'you Richard Walker?',
      options: ['...', 'Are', 'Am'],
      correctAnswer: 'Are'
    },
    {
      id: 'question06',
      text: 'Hi,',
      afterText: 'I in class 3?',
      options: ['...', 'are', 'am'],
      correctAnswer: 'am'
    }
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleScore = () => {
    setShowResults(true);
    setShowAnswers(false);
  };

  const handleStartAgain = () => {
    setAnswers({
      question01: '',
      question02: '',
      question03: '',
      question04: '',
      question05: '',
      question06: ''
    });
    setShowResults(false);
    setShowAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setShowResults(false);
  };

  const getAnswerStatus = (questionId) => {
    if (showAnswers) return 'show-answer';
    if (!showResults) return '';
    return answers[questionId] === questions.find(q => q.id === questionId).correctAnswer ? 'correct' : 'incorrect';
  };

  const score = showResults ? calculateScore() : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          1A Verb <em>be</em> (singular); <em>I</em> and <em>you</em> (1)
        </h1>

        {showResults && (
          <div className="mb-6 p-4 rounded-lg bg-blue-50 border-2 border-blue-300">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Score: {score}/6
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>0-5 Please try again.</li>
              <li>6/6 - Well done!</li>
            </ul>
          </div>
        )}

        <p className="text-gray-700 mb-6 font-medium">Choose the correct answer.</p>

        <ol className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const status = getAnswerStatus(question.id);
            const isCorrect = status === 'correct';
            const isIncorrect = status === 'incorrect';
            const shouldShowAnswer = status === 'show-answer';

            return (
              <li key={question.id} className="flex items-center gap-2 text-lg">
                <span className="text-gray-700">{question.text}</span>
                <select
                  id={question.id}
                  value={shouldShowAnswer ? question.correctAnswer : answers[question.id]}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  disabled={showAnswers}
                  className={`px-3 py-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isCorrect ? 'border-green-500 bg-green-50' :
                    isIncorrect ? 'border-red-500 bg-red-50' :
                    shouldShowAnswer ? 'border-blue-500 bg-blue-50' :
                    'border-gray-300'
                  }`}
                >
                  {question.options.map((option, idx) => (
                    <option key={idx} value={option === '...' ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
                {isCorrect && (
                  <span className="text-green-600 font-bold">✓</span>
                )}
                {isIncorrect && (
                  <span className="text-red-600 font-bold">✗</span>
                )}
                <span className="text-gray-700">{question.afterText}</span>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleScore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Score
          </button>
          <button
            onClick={handleStartAgain}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Start again
          </button>
          <button
            onClick={handleShowAnswers}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Show answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerbBeA1Exercise;
