import React, { useState } from 'react';

const AdjectivesExercise = () => {
  const questions = [
    {
      id: 1,
      text: "The security analyst is very",
      textAfter: "when it comes to analyzing malware behavior and finding vulnerabilities.",
      options: ['careless', 'meticulous', 'reckless'],
      correct: 'meticulous'
    },
    {
      id: 2,
      text: "A good penetration tester must be",
      textAfter: "to find creative solutions when standard attack vectors fail.",
      options: ['resourceful', 'predictable', 'rigid'],
      correct: 'resourceful'
    },
    {
      id: 3,
      text: "The firewall configuration should be",
      textAfter: "to prevent any unauthorized access attempts.",
      options: ['robust', 'vulnerable', 'weak'],
      correct: 'robust'
    },
    {
      id: 4,
      text: "Our incident response team is extremely",
      textAfter: "and can detect threats within minutes of intrusion.",
      options: ['vigilant', 'negligent', 'unaware'],
      correct: 'vigilant'
    },
    {
      id: 5,
      text: "The security protocol must be",
      textAfter: "enough to protect against sophisticated attacks.",
      options: ['comprehensive', 'incomplete', 'basic'],
      correct: 'comprehensive'
    },
    {
      id: 6,
      text: "Zero-day exploits are particularly",
      textAfter: "because no patch exists to fix the vulnerability.",
      options: ['harmless', 'trivial', 'critical'],
      correct: 'critical'
    },
    {
      id: 7,
      text: "The encryption algorithm is so",
      textAfter: "that even quantum computers would struggle to break it.",
      options: ['sophisticated', 'primitive', 'simple'],
      correct: 'sophisticated'
    },
    {
      id: 8,
      text: "Phishing attacks are becoming increasingly",
      textAfter: "making it harder for users to identify malicious emails.",
      options: ['obvious', 'deceptive', 'transparent'],
      correct: 'deceptive'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (value) => {
    if (!showFeedback) {
      setSelectedAnswer(value);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowFeedback(true);
      const isCorrect = selectedAnswer === questions[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      setAnsweredQuestions([...answeredQuestions, {
        questionId: questions[currentQuestion].id,
        answer: selectedAnswer,
        correct: isCorrect
      }]);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowFeedback(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions([]);
    setIsCompleted(false);
  };

  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];

  // Completion view
  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Advanced Vocabulary: Cybersecurity Adjectives</h1>
          <p className="text-htb-text">Exercise Completed!</p>
        </div>

        {/* Final Score */}
        <div className="bg-htb-card border border-htb-green/30 rounded-lg p-8 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {score === totalQuestions ? '🏆' : score >= totalQuestions * 0.7 ? '✅' : '📝'}
            </div>
            <p className="text-4xl font-bold text-htb-green mb-4">
              {score}/{totalQuestions}
            </p>
            <div className="w-full bg-htb-sidebar rounded-full h-6 mb-6 max-w-md mx-auto">
              <div
                className="bg-htb-green h-6 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${(score / totalQuestions) * 100}%` }}
              >
                <span className="text-xs font-bold text-htb-bg">
                  {Math.round((score / totalQuestions) * 100)}%
                </span>
              </div>
            </div>
            <p className={`text-xl font-semibold ${
              score === totalQuestions 
                ? 'text-htb-green' 
                : score >= totalQuestions * 0.7 
                ? 'text-blue-400' 
                : 'text-yellow-400'
            }`}>
              {score === totalQuestions 
                ? 'Perfect score! Excellent work!' 
                : score >= totalQuestions * 0.7 
                ? 'Great job! Keep practicing.' 
                : 'Good effort! Try again to improve your score.'}
            </p>
          </div>

          {/* Review Answers */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">📋 Review Your Answers:</h3>
            {answeredQuestions.map((item, index) => {
              const question = questions.find(q => q.id === item.questionId);
              return (
                <div key={item.questionId} className={`p-4 rounded-lg border-2 ${
                  item.correct ? 'border-htb-green/30 bg-htb-green/5' : 'border-red-500/30 bg-red-500/5'
                }`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.correct ? '✓' : '✗'}</span>
                    <div className="flex-1">
                      <p className="text-htb-text mb-2">
                        <span className="font-semibold">{index + 1}.</span> {question.text}{' '}
                        <span className={item.correct ? 'text-htb-green font-bold' : 'text-red-400 font-bold line-through'}>
                          {item.answer}
                        </span>
                        {question.textAfter && <span> {question.textAfter}</span>}
                      </p>
                      {!item.correct && (
                        <p className="text-sm">
                          <span className="text-htb-text-dim">Correct answer: </span>
                          <span className="text-htb-green font-semibold">{question.correct}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleReset}
            className="w-full mt-8 bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🔄 Try Again
          </button>
        </div>

        {/* Vocabulary Reference */}
        <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">📚 Cybersecurity Adjectives</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">meticulous:</span>{' '}
              <span className="text-htb-text text-sm">extremely careful and precise</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">resourceful:</span>{' '}
              <span className="text-htb-text text-sm">able to find clever solutions</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">robust:</span>{' '}
              <span className="text-htb-text text-sm">strong and secure</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">vigilant:</span>{' '}
              <span className="text-htb-text text-sm">always alert and watchful</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">comprehensive:</span>{' '}
              <span className="text-htb-text text-sm">complete and thorough</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">critical:</span>{' '}
              <span className="text-htb-text text-sm">extremely important or dangerous</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">sophisticated:</span>{' '}
              <span className="text-htb-text text-sm">advanced and complex</span>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-3">
              <span className="text-htb-green font-semibold">deceptive:</span>{' '}
              <span className="text-htb-text text-sm">misleading or designed to trick</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Advanced Vocabulary: Cybersecurity Adjectives</h1>
        <p className="text-htb-text">Choose the correct adjective to complete each sentence</p>
        
        {/* Progress Indicator */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-htb-text-dim text-sm">Question</span>
            <span className="text-htb-green font-bold text-lg">{currentQuestion + 1}</span>
            <span className="text-htb-text-dim text-sm">of {totalQuestions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-htb-text-dim text-sm">Score:</span>
            <span className="text-htb-green font-bold text-lg">{score}/{currentQuestion + (showFeedback ? 1 : 0)}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-htb-sidebar rounded-full h-2 mt-4">
          <div
            className="bg-htb-green h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + (showFeedback ? 1 : 0)) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
        <div className="mb-8">
          <p className="text-htb-text text-lg leading-relaxed">
            {currentQ.text}{' '}
            <span className="inline-block min-w-[150px]">
              <select
                value={selectedAnswer}
                onChange={(e) => handleAnswerSelect(e.target.value)}
                disabled={showFeedback}
                className={`px-4 py-2 rounded-lg border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all ${
                  showFeedback
                    ? selectedAnswer === currentQ.correct
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700 hover:border-htb-green/50'
                }`}
              >
                <option value="">...</option>
                {currentQ.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            {' '}{currentQ.textAfter}
          </p>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`p-4 rounded-lg border-2 mb-6 ${
            selectedAnswer === currentQ.correct
              ? 'border-htb-green/30 bg-htb-green/10'
              : 'border-red-500/30 bg-red-500/10'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                {selectedAnswer === currentQ.correct ? '✓' : '✗'}
              </span>
              <div>
                <p className={`font-bold text-lg ${
                  selectedAnswer === currentQ.correct ? 'text-htb-green' : 'text-red-400'
                }`}>
                  {selectedAnswer === currentQ.correct ? 'Correct!' : 'Incorrect'}
                </p>
                {selectedAnswer !== currentQ.correct && (
                  <p className="text-htb-text text-sm mt-1">
                    The correct answer is: <span className="text-htb-green font-semibold">{currentQ.correct}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`flex-1 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 ${
                selectedAnswer
                  ? 'bg-htb-green hover:bg-htb-green-hover text-htb-bg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              ✓ Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {currentQuestion < totalQuestions - 1 ? '→ Next Question' : '🏁 Finish'}
            </button>
          )}
        </div>
      </div>

      {/* Vocabulary Reference */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Cybersecurity Adjectives</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">meticulous:</span>{' '}
            <span className="text-htb-text text-sm">extremely careful and precise</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">resourceful:</span>{' '}
            <span className="text-htb-text text-sm">able to find clever solutions</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">robust:</span>{' '}
            <span className="text-htb-text text-sm">strong and secure</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">vigilant:</span>{' '}
            <span className="text-htb-text text-sm">always alert and watchful</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">comprehensive:</span>{' '}
            <span className="text-htb-text text-sm">complete and thorough</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">critical:</span>{' '}
            <span className="text-htb-text text-sm">extremely important or dangerous</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">sophisticated:</span>{' '}
            <span className="text-htb-text text-sm">advanced and complex</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">deceptive:</span>{' '}
            <span className="text-htb-text text-sm">misleading or designed to trick</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjectivesExercise;
