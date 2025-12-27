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
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              1A Verb <em className="text-htb-green">be</em> (singular); <em className="text-htb-green">I</em> and <em className="text-htb-green">you</em> (1)
            </h2>
            <p className="text-sm sm:text-base text-htb-text-dim">Choose the correct answer.</p>
          </div>
        </div>

        {showResults && (
          <div className="mb-6 p-4 rounded-lg bg-htb-sidebar border-2 border-htb-green">
            <p className="text-xl font-semibold text-white mb-2">
              Score: {score}/6
            </p>
            <ul className="list-disc list-inside text-htb-text">
              <li>0-5 Please try again.</li>
              <li>6/6 - Well done!</li>
            </ul>
          </div>
        )}

        <div className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const status = getAnswerStatus(question.id);
            const isCorrect = status === 'correct';
            const isIncorrect = status === 'incorrect';
            const shouldShowAnswer = status === 'show-answer';

            return (
              <div key={question.id} className="flex items-center gap-2 text-base sm:text-lg bg-htb-sidebar p-3 rounded-lg border border-gray-800">
                <span className="text-htb-text font-medium">{index + 1}.</span>
                <span className="text-htb-text">{question.text}</span>
                <select
                  id={question.id}
                  value={shouldShowAnswer ? question.correctAnswer : answers[question.id]}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  disabled={showAnswers}
                  className={`px-3 py-1.5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green bg-htb-bg text-white transition-colors ${
                    isCorrect ? 'border-htb-green bg-htb-green/20' :
                    isIncorrect ? 'border-red-500 bg-red-500/20' :
                    shouldShowAnswer ? 'border-htb-green bg-htb-green/20' :
                    'border-gray-700 hover:border-htb-green/50'
                  }`}
                >
                  {question.options.map((option, idx) => (
                    <option key={idx} value={option === '...' ? '' : option} className="bg-htb-bg text-white">
                      {option}
                    </option>
                  ))}
                </select>
                {isCorrect && (
                  <span className="text-htb-green font-bold text-xl">✓</span>
                )}
                {isIncorrect && (
                  <span className="text-red-500 font-bold text-xl">✗</span>
                )}
                <span className="text-htb-text">{question.afterText}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleScore}
            className="px-6 py-2 bg-htb-green text-htb-bg rounded-lg font-medium hover:bg-htb-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg"
          >
            Score
          </button>
          <button
            onClick={handleStartAgain}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-htb-bg border border-gray-600"
          >
            Start again
          </button>
          <button
            onClick={handleShowAnswers}
            className="px-6 py-2 bg-htb-sidebar text-htb-green rounded-lg font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg border border-htb-green/30"
          >
            Show answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerbBeA1Exercise;
