import React, { useState } from 'react';

const AdjectivesExercise = () => {
  const questions = [
    {
      id: 1,
      text: "I'm sure Hannah will know the answer because she's very",
      options: ['gentle', 'steady', 'bright'],
      correct: 'bright'
    },
    {
      id: 2,
      text: "He's very",
      textAfter: ", so don't be afraid to tell him why you're upset.",
      options: ['sympathetic', 'annoying', 'sarcastic'],
      correct: 'sympathetic'
    },
    {
      id: 3,
      text: "People say Chloe is very",
      textAfter: "and I'd agree that she's careful and works hard.",
      options: ['straightforward', 'conscientious', 'sarcastic'],
      correct: 'conscientious'
    },
    {
      id: 4,
      text: "Any Olympic athlete has to be",
      textAfter: "because the one thing you can't do is give up.",
      options: ['determined', 'sympathetic', 'gentle'],
      correct: 'determined'
    },
    {
      id: 5,
      text: "She's perfectly happy to do the project on her own so I think you'd say she's",
      options: ['self-sufficient', 'steady', 'spontaneous'],
      correct: 'self-sufficient'
    },
    {
      id: 6,
      text: "Jamie is very aggressive but his twin brother is almost the opposite – so",
      textAfter: "and caring.",
      options: ['bright', 'gentle', 'thorough'],
      correct: 'gentle'
    },
    {
      id: 7,
      text: "I don't like it when Alex is",
      textAfter: "because, though he thinks he's funny, he is actually being mean.",
      options: ['resourceful', 'sympathetic', 'sarcastic'],
      correct: 'sarcastic'
    },
    {
      id: 8,
      text: "My relationship with my aunt is very complicated but my uncle is more",
      options: ['sarcastic', 'straightforward', 'determined'],
      correct: 'straightforward'
    }
  ];

  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    setShowScore(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const handleScore = () => {
    setShowScore(true);
    setShowAnswers(false);
  };

  const handleReset = () => {
    setAnswers({});
    setShowScore(false);
    setShowAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setShowScore(false);
  };

  const score = calculateScore();
  const totalQuestions = questions.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Advanced Vocabulary: Adjectives</h1>
        <p className="text-htb-text">Choose the correct adjective to complete each sentence</p>
      </div>

      {/* Feedback Score */}
      {showScore && (
        <div className="bg-htb-card border border-gray-800 rounded-lg p-6 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-htb-green mb-4">
              Score: {score}/{totalQuestions}
            </p>
            <div className="w-full bg-htb-sidebar rounded-full h-4 mb-4">
              <div
                className="bg-htb-green h-4 rounded-full transition-all duration-500"
                style={{ width: `${(score / totalQuestions) * 100}%` }}
              ></div>
            </div>
            <p className={`text-lg font-semibold ${score === totalQuestions ? 'text-htb-green' : 'text-htb-text'}`}>
              {score < 8 ? '0-7 Please try again.' : '8/8 - Well done!'}
            </p>
          </div>
        </div>
      )}

      {/* Exercise */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-6 mb-6">
        <p className="text-htb-green font-semibold mb-6">Choose the correct answer.</p>

        <ol className="space-y-6">
          {questions.map((question, index) => {
            const isAnswered = answers[question.id];
            const isCorrect = answers[question.id] === question.correct;
            const showFeedback = showScore || showAnswers;

            return (
              <li key={question.id} className="flex items-start gap-3">
                <span className="text-htb-text font-semibold mt-2">{index + 1}.</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-htb-text">
                    <span>{question.text}</span>
                    
                    <div className="relative inline-block">
                      <select
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className={`px-4 py-2 rounded-lg border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all ${
                          showFeedback
                            ? isCorrect
                              ? 'border-htb-green'
                              : isAnswered
                              ? 'border-red-500'
                              : 'border-gray-700'
                            : 'border-gray-700 hover:border-htb-green/50'
                        }`}
                      >
                        <option value="">...</option>
                        {question.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      
                      {/* Feedback icon */}
                      {showFeedback && isAnswered && (
                        <span className={`ml-2 text-xl ${isCorrect ? 'text-htb-green' : 'text-red-500'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                    </div>

                    {question.textAfter && <span>{question.textAfter}</span>}
                    {!question.textAfter && <span>.</span>}
                  </div>

                  {/* Show correct answer if needed */}
                  {showAnswers && !isCorrect && isAnswered && (
                    <div className="mt-2 text-sm">
                      <span className="text-htb-text">Correct answer: </span>
                      <span className="text-htb-green font-semibold">{question.correct}</span>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={handleScore}
            className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            📊 Score
          </button>
          <button
            onClick={handleReset}
            className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🔄 Start again
          </button>
          <button
            onClick={handleShowAnswers}
            className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            👁️ Show answers
          </button>
        </div>
      </div>

      {/* Vocabulary Reference */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Adjective Definitions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">bright:</span>{' '}
            <span className="text-htb-text text-sm">intelligent and quick to learn</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">sympathetic:</span>{' '}
            <span className="text-htb-text text-sm">showing understanding and care</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">conscientious:</span>{' '}
            <span className="text-htb-text text-sm">careful and thorough in work</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">determined:</span>{' '}
            <span className="text-htb-text text-sm">having strong will to succeed</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">self-sufficient:</span>{' '}
            <span className="text-htb-text text-sm">able to do things independently</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">gentle:</span>{' '}
            <span className="text-htb-text text-sm">kind, mild, and soft in manner</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">sarcastic:</span>{' '}
            <span className="text-htb-text text-sm">using irony to mock or convey contempt</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">straightforward:</span>{' '}
            <span className="text-htb-text text-sm">honest, direct, and easy to understand</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">resourceful:</span>{' '}
            <span className="text-htb-text text-sm">able to find clever solutions</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">thorough:</span>{' '}
            <span className="text-htb-text text-sm">complete and careful in detail</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">spontaneous:</span>{' '}
            <span className="text-htb-text text-sm">acting without planning</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">steady:</span>{' '}
            <span className="text-htb-text text-sm">reliable and consistent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjectivesExercise;
