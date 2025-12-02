import React, { useState } from 'react';

const PhonesTechnologyExercise = () => {
  // Exercise 1: Phrasal Verbs
  const phrasalVerbQuestions = [
    {
      id: 1,
      text: "She couldn't use her phone because she forgot to",
      textAfter: "her credit.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'top up'
    },
    {
      id: 2,
      text: "To find the information, just",
      textAfter: "to the bottom of the page.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'scroll down'
    },
    {
      id: 3,
      text: "It's rude to",
      textAfter: "the phone without saying goodbye.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'hang up'
    },
    {
      id: 4,
      text: "You need to remember your password so that you can",
      textAfter: "to the website.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'log in'
    },
    {
      id: 5,
      text: "I've been trying to",
      textAfter: "to him all day but his phone just goes to voicemail.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'get through'
    },
    {
      id: 6,
      text: "It's really noisy and I can't hear you. You'll have to",
      textAfter: ".",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'speak up'
    },
    {
      id: 7,
      text: "When you call, ask to be",
      textAfter: "to Customer Service.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'put through'
    },
    {
      id: 8,
      text: "Hello it's me again. Sorry we were",
      textAfter: ".",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'cut off'
    },
    {
      id: 9,
      text: "If you delete some of these old apps, it will",
      textAfter: "space for new ones.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'run out', 'scroll down', 'speak up', 'top up'],
      correct: 'free up'
    },
    {
      id: 10,
      text: "The ink",
      textAfter: "too fast in this printer and it's very expensive.",
      options: ['cut off', 'free up', 'get through', 'hang up', 'log in', 'put through', 'runs out', 'scroll down', 'speak up', 'top up'],
      correct: 'runs out'
    }
  ];

  // Exercise 2: Vocabulary
  const vocabularyQuestions = [
    {
      id: 1,
      text: "If you want to delete his number, go into your",
      options: ['contacts', 'messages', 'settings', 'apps'],
      correct: 'contacts'
    },
    {
      id: 2,
      text: "I've got three",
      textAfter: "calls from an unknown number.",
      options: ['lost', 'missed', 'failed', 'dropped'],
      correct: 'missed'
    },
    {
      id: 3,
      text: "It's difficult to get a good",
      textAfter: "in my parent's village.",
      options: ['connection', 'signal', 'network', 'coverage'],
      correct: 'signal'
    },
    {
      id: 4,
      text: "My computer's been infected with a",
      textAfter: "and I can't access my email.",
      options: ['bug', 'virus', 'malware', 'trojan'],
      correct: 'virus'
    },
    {
      id: 5,
      text: "This smart phone has more features and the",
      textAfter: "is bigger too.",
      options: ['screen', 'keypad', 'display', 'keyboard'],
      correct: 'keypad'
    },
    {
      id: 6,
      text: "Most internet businesses use",
      textAfter: "because it's a good way for them to collect information about your online habits.",
      options: ['trackers', 'cookies', 'pixels', 'scripts'],
      correct: 'cookies'
    },
    {
      id: 7,
      text: "She's got very poor reception so if I were you, I'd call her",
      options: ['mobile', 'landline', 'cellphone', 'smartphone'],
      correct: 'landline'
    },
    {
      id: 8,
      text: "Ben asked me to",
      textAfter: "him a call this afternoon.",
      options: ['make', 'give', 'send', 'place'],
      correct: 'give'
    }
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [currentQuestion1, setCurrentQuestion1] = useState(0);
  const [selectedAnswer1, setSelectedAnswer1] = useState('');
  const [showFeedback1, setShowFeedback1] = useState(false);
  const [score1, setScore1] = useState(0);
  const [answeredQuestions1, setAnsweredQuestions1] = useState([]);
  const [isCompleted1, setIsCompleted1] = useState(false);

  const [currentQuestion2, setCurrentQuestion2] = useState(0);
  const [selectedAnswer2, setSelectedAnswer2] = useState('');
  const [showFeedback2, setShowFeedback2] = useState(false);
  const [score2, setScore2] = useState(0);
  const [answeredQuestions2, setAnsweredQuestions2] = useState([]);
  const [isCompleted2, setIsCompleted2] = useState(false);

  // Exercise 1 handlers
  const handleAnswerSelect1 = (value) => {
    if (!showFeedback1) {
      setSelectedAnswer1(value);
    }
  };

  const handleSubmit1 = () => {
    if (selectedAnswer1) {
      setShowFeedback1(true);
      const isCorrect = selectedAnswer1 === phrasalVerbQuestions[currentQuestion1].correct;
      if (isCorrect) {
        setScore1(score1 + 1);
      }
      setAnsweredQuestions1([...answeredQuestions1, {
        questionId: phrasalVerbQuestions[currentQuestion1].id,
        answer: selectedAnswer1,
        correct: isCorrect
      }]);
    }
  };

  const handleNext1 = () => {
    if (currentQuestion1 < phrasalVerbQuestions.length - 1) {
      setCurrentQuestion1(currentQuestion1 + 1);
      setSelectedAnswer1('');
      setShowFeedback1(false);
    } else {
      setIsCompleted1(true);
    }
  };

  const handleReset1 = () => {
    setCurrentQuestion1(0);
    setSelectedAnswer1('');
    setShowFeedback1(false);
    setScore1(0);
    setAnsweredQuestions1([]);
    setIsCompleted1(false);
  };

  // Exercise 2 handlers
  const handleAnswerSelect2 = (value) => {
    if (!showFeedback2) {
      setSelectedAnswer2(value);
    }
  };

  const handleSubmit2 = () => {
    if (selectedAnswer2) {
      setShowFeedback2(true);
      const isCorrect = selectedAnswer2 === vocabularyQuestions[currentQuestion2].correct;
      if (isCorrect) {
        setScore2(score2 + 1);
      }
      setAnsweredQuestions2([...answeredQuestions2, {
        questionId: vocabularyQuestions[currentQuestion2].id,
        answer: selectedAnswer2,
        correct: isCorrect
      }]);
    }
  };

  const handleNext2 = () => {
    if (currentQuestion2 < vocabularyQuestions.length - 1) {
      setCurrentQuestion2(currentQuestion2 + 1);
      setSelectedAnswer2('');
      setShowFeedback2(false);
    } else {
      setIsCompleted2(true);
    }
  };

  const handleReset2 = () => {
    setCurrentQuestion2(0);
    setSelectedAnswer2('');
    setShowFeedback2(false);
    setScore2(0);
    setAnsweredQuestions2([]);
    setIsCompleted2(false);
  };

  const totalQuestions1 = phrasalVerbQuestions.length;
  const currentQ1 = phrasalVerbQuestions[currentQuestion1];
  const totalQuestions2 = vocabularyQuestions.length;
  const currentQ2 = vocabularyQuestions[currentQuestion2];

  // Exercise 1 Completion View
  if (activeTab === 1 && isCompleted1) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Phones and Technology - Exercise 1</h1>
          <p className="text-htb-text">Phrasal Verbs - Completed!</p>
        </div>

        <div className="bg-htb-card border border-htb-green/30 rounded-lg p-8 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {score1 === totalQuestions1 ? '🏆' : score1 >= totalQuestions1 * 0.7 ? '✅' : '📝'}
            </div>
            <p className="text-4xl font-bold text-htb-green mb-4">
              {score1}/{totalQuestions1}
            </p>
            <div className="w-full bg-htb-sidebar rounded-full h-6 mb-6 max-w-md mx-auto">
              <div
                className="bg-htb-green h-6 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${(score1 / totalQuestions1) * 100}%` }}
              >
                <span className="text-xs font-bold text-htb-bg">
                  {Math.round((score1 / totalQuestions1) * 100)}%
                </span>
              </div>
            </div>
            <p className={`text-xl font-semibold ${
              score1 === totalQuestions1 ? 'text-htb-green' : score1 >= totalQuestions1 * 0.7 ? 'text-blue-400' : 'text-yellow-400'
            }`}>
              {score1 === totalQuestions1 ? 'Perfect score! Excellent work!' : score1 >= totalQuestions1 * 0.7 ? 'Great job! Keep practicing.' : 'Good effort! Try again to improve your score.'}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">📋 Review Your Answers:</h3>
            {answeredQuestions1.map((item, index) => {
              const question = phrasalVerbQuestions.find(q => q.id === item.questionId);
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

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleReset1}
              className="flex-1 bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🔄 Try Again
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className="flex-1 bg-htb-sidebar border border-htb-green hover:border-htb-green text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              → Exercise 2
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exercise 2 Completion View
  if (activeTab === 2 && isCompleted2) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Phones and Technology - Exercise 2</h1>
          <p className="text-htb-text">Vocabulary - Completed!</p>
        </div>

        <div className="bg-htb-card border border-htb-green/30 rounded-lg p-8 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {score2 === totalQuestions2 ? '🏆' : score2 >= totalQuestions2 * 0.7 ? '✅' : '📝'}
            </div>
            <p className="text-4xl font-bold text-htb-green mb-4">
              {score2}/{totalQuestions2}
            </p>
            <div className="w-full bg-htb-sidebar rounded-full h-6 mb-6 max-w-md mx-auto">
              <div
                className="bg-htb-green h-6 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${(score2 / totalQuestions2) * 100}%` }}
              >
                <span className="text-xs font-bold text-htb-bg">
                  {Math.round((score2 / totalQuestions2) * 100)}%
                </span>
              </div>
            </div>
            <p className={`text-xl font-semibold ${
              score2 === totalQuestions2 ? 'text-htb-green' : score2 >= totalQuestions2 * 0.7 ? 'text-blue-400' : 'text-yellow-400'
            }`}>
              {score2 === totalQuestions2 ? 'Perfect score! Excellent work!' : score2 >= totalQuestions2 * 0.7 ? 'Great job! Keep practicing.' : 'Good effort! Try again to improve your score.'}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">📋 Review Your Answers:</h3>
            {answeredQuestions2.map((item, index) => {
              const question = vocabularyQuestions.find(q => q.id === item.questionId);
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
            onClick={handleReset2}
            className="w-full mt-8 bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Phones and Technology</h1>
        <p className="text-htb-text">Master technology-related vocabulary and phrasal verbs</p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab(1)}
          className={`flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
            activeTab === 1
              ? 'bg-htb-green text-htb-bg shadow-lg'
              : 'bg-htb-card border border-gray-700 text-htb-text hover:border-htb-green/50'
          }`}
        >
          Exercise 1: Phrasal Verbs
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
            activeTab === 2
              ? 'bg-htb-green text-htb-bg shadow-lg'
              : 'bg-htb-card border border-gray-700 text-htb-text hover:border-htb-green/50'
          }`}
        >
          Exercise 2: Vocabulary
        </button>
      </div>

      {/* Exercise 1: Phrasal Verbs */}
      {activeTab === 1 && (
        <>
          <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
            <p className="text-htb-text mb-4">Complete the sentences with the correct phrasal verb</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-htb-text-dim text-sm">Question</span>
                <span className="text-htb-green font-bold text-lg">{currentQuestion1 + 1}</span>
                <span className="text-htb-text-dim text-sm">of {totalQuestions1}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-htb-text-dim text-sm">Score:</span>
                <span className="text-htb-green font-bold text-lg">{score1}/{currentQuestion1 + (showFeedback1 ? 1 : 0)}</span>
              </div>
            </div>
            
            <div className="w-full bg-htb-sidebar rounded-full h-2 mt-4">
              <div
                className="bg-htb-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion1 + (showFeedback1 ? 1 : 0)) / totalQuestions1) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
            <div className="mb-8">
              <p className="text-htb-text text-lg leading-relaxed">
                {currentQ1.text}{' '}
                <span className="inline-block min-w-[150px]">
                  <select
                    value={selectedAnswer1}
                    onChange={(e) => handleAnswerSelect1(e.target.value)}
                    disabled={showFeedback1}
                    className={`px-4 py-2 rounded-lg border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all ${
                      showFeedback1
                        ? selectedAnswer1 === currentQ1.correct
                          ? 'border-htb-green'
                          : 'border-red-500'
                        : 'border-gray-700 hover:border-htb-green/50'
                    }`}
                  >
                    <option value="">...</option>
                    {currentQ1.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </span>
                {' '}{currentQ1.textAfter}
              </p>
            </div>

            {showFeedback1 && (
              <div className={`p-4 rounded-lg border-2 mb-6 ${
                selectedAnswer1 === currentQ1.correct
                  ? 'border-htb-green/30 bg-htb-green/10'
                  : 'border-red-500/30 bg-red-500/10'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {selectedAnswer1 === currentQ1.correct ? '✓' : '✗'}
                  </span>
                  <div>
                    <p className={`font-bold text-lg ${
                      selectedAnswer1 === currentQ1.correct ? 'text-htb-green' : 'text-red-400'
                    }`}>
                      {selectedAnswer1 === currentQ1.correct ? 'Correct!' : 'Incorrect'}
                    </p>
                    {selectedAnswer1 !== currentQ1.correct && (
                      <p className="text-htb-text text-sm mt-1">
                        The correct answer is: <span className="text-htb-green font-semibold">{currentQ1.correct}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {!showFeedback1 ? (
                <button
                  onClick={handleSubmit1}
                  disabled={!selectedAnswer1}
                  className={`flex-1 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 ${
                    selectedAnswer1
                      ? 'bg-htb-green hover:bg-htb-green-hover text-htb-bg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  ✓ Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNext1}
                  className="flex-1 bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  {currentQuestion1 < totalQuestions1 - 1 ? '→ Next Question' : '🏁 Finish'}
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* Exercise 2: Vocabulary */}
      {activeTab === 2 && (
        <>
          <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
            <p className="text-htb-text mb-4">Choose the correct word to complete each sentence</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-htb-text-dim text-sm">Question</span>
                <span className="text-htb-green font-bold text-lg">{currentQuestion2 + 1}</span>
                <span className="text-htb-text-dim text-sm">of {totalQuestions2}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-htb-text-dim text-sm">Score:</span>
                <span className="text-htb-green font-bold text-lg">{score2}/{currentQuestion2 + (showFeedback2 ? 1 : 0)}</span>
              </div>
            </div>
            
            <div className="w-full bg-htb-sidebar rounded-full h-2 mt-4">
              <div
                className="bg-htb-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion2 + (showFeedback2 ? 1 : 0)) / totalQuestions2) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
            <div className="mb-8">
              <p className="text-htb-text text-lg leading-relaxed">
                {currentQ2.text}{' '}
                <span className="inline-block min-w-[150px]">
                  <select
                    value={selectedAnswer2}
                    onChange={(e) => handleAnswerSelect2(e.target.value)}
                    disabled={showFeedback2}
                    className={`px-4 py-2 rounded-lg border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all ${
                      showFeedback2
                        ? selectedAnswer2 === currentQ2.correct
                          ? 'border-htb-green'
                          : 'border-red-500'
                        : 'border-gray-700 hover:border-htb-green/50'
                    }`}
                  >
                    <option value="">...</option>
                    {currentQ2.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </span>
                {currentQ2.textAfter && <span> {currentQ2.textAfter}</span>}
                {!currentQ2.textAfter && <span>.</span>}
              </p>
            </div>

            {showFeedback2 && (
              <div className={`p-4 rounded-lg border-2 mb-6 ${
                selectedAnswer2 === currentQ2.correct
                  ? 'border-htb-green/30 bg-htb-green/10'
                  : 'border-red-500/30 bg-red-500/10'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {selectedAnswer2 === currentQ2.correct ? '✓' : '✗'}
                  </span>
                  <div>
                    <p className={`font-bold text-lg ${
                      selectedAnswer2 === currentQ2.correct ? 'text-htb-green' : 'text-red-400'
                    }`}>
                      {selectedAnswer2 === currentQ2.correct ? 'Correct!' : 'Incorrect'}
                    </p>
                    {selectedAnswer2 !== currentQ2.correct && (
                      <p className="text-htb-text text-sm mt-1">
                        The correct answer is: <span className="text-htb-green font-semibold">{currentQ2.correct}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {!showFeedback2 ? (
                <button
                  onClick={handleSubmit2}
                  disabled={!selectedAnswer2}
                  className={`flex-1 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 ${
                    selectedAnswer2
                      ? 'bg-htb-green hover:bg-htb-green-hover text-htb-bg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  ✓ Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNext2}
                  className="flex-1 bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  {currentQuestion2 < totalQuestions2 - 1 ? '→ Next Question' : '🏁 Finish'}
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* Vocabulary Reference */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Phrasal Verbs Reference</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">cut off:</span>{' '}
            <span className="text-htb-text text-sm">disconnect suddenly</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">free up:</span>{' '}
            <span className="text-htb-text text-sm">make available</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">get through:</span>{' '}
            <span className="text-htb-text text-sm">make contact successfully</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">hang up:</span>{' '}
            <span className="text-htb-text text-sm">end a phone call</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">log in:</span>{' '}
            <span className="text-htb-text text-sm">access a system with credentials</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">put through:</span>{' '}
            <span className="text-htb-text text-sm">connect to someone by phone</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">run out:</span>{' '}
            <span className="text-htb-text text-sm">use up completely</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">scroll down:</span>{' '}
            <span className="text-htb-text text-sm">move down a page</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">speak up:</span>{' '}
            <span className="text-htb-text text-sm">talk louder</span>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-3">
            <span className="text-htb-green font-semibold">top up:</span>{' '}
            <span className="text-htb-text text-sm">add credit/money</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesTechnologyExercise;
