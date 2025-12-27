import React, { useState } from 'react';

const ConditionalSentencesC1Exercise = () => {
  const leftSide = [
    { id: 1, text: "If you can't understand the instructions," },
    { id: 2, text: "At that price, if I were you," },
    { id: 3, text: "If it hadn't been stopped sooner," },
    { id: 4, text: "If I didn't know you better," },
    { id: 5, text: "I know that if I don't finish it today," },
    { id: 6, text: "As long as it still works," },
    { id: 7, text: "Providing it's safe," },
    { id: 8, text: "Had I lied to the police at the questioning," },
    { id: 9, text: "Suppose I had some evidence," },
    { id: 10, text: "Even if the rollercoaster is now safe," }
  ];

  const rightSide = [
    { id: 1, text: "phone the special help line." },
    { id: 2, text: "I'd get one from somewhere else." },
    { id: 3, text: "the fire would have got out of control." },
    { id: 4, text: "I would say you did it on purpose." },
    { id: 5, text: "I'll regret it." },
    { id: 6, text: "I don't care how old it is." },
    { id: 7, text: "I'll do it." },
    { id: 8, text: "I would feel ashamed of myself now." },
    { id: 9, text: "would you believe me then?" },
    { id: 10, text: "we can't be sure accidents won't happen again." }
  ];

  const correctMatches = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10
  };

  const [matches, setMatches] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleLeftClick = (id) => {
    setSelectedLeft(id);
  };

  const handleRightClick = (id) => {
    if (selectedLeft !== null) {
      setMatches(prev => ({
        ...prev,
        [selectedLeft]: id
      }));
      setSelectedLeft(null);
      setShowResults(false);
      setShowAnswers(false);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(correctMatches).forEach(leftId => {
      if (matches[leftId] === correctMatches[leftId]) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setMatches({});
    setSelectedLeft(null);
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  const getMatchStatus = (leftId) => {
    if (!showAnswers) return null;
    const userMatch = matches[leftId];
    const correctMatch = correctMatches[leftId];
    if (userMatch === correctMatch) return 'correct';
    if (userMatch && userMatch !== correctMatch) return 'incorrect';
    return null;
  };

  const isRightMatched = (rightId) => {
    return Object.values(matches).includes(rightId);
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: Conditional Sentences
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Match the beginning and the end of the sentences.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {/* Left side */}
            <div className="space-y-3">
              <h3 className="text-htb-green font-semibold mb-3">Sentence beginnings:</h3>
              {leftSide.map((item) => {
                const status = getMatchStatus(item.id);
                const isSelected = selectedLeft === item.id;
                const matchedRight = matches[item.id];
                
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => handleLeftClick(item.id)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                        isSelected
                          ? 'border-htb-green bg-htb-green/20'
                          : matchedRight
                          ? 'border-gray-600 bg-htb-sidebar'
                          : 'border-gray-700 bg-htb-sidebar hover:border-htb-green/50'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-htb-green font-bold min-w-[1.5rem]">{item.id}.</span>
                        <span className="flex-1">{item.text}</span>
                        {showAnswers && status === 'correct' && (
                          <span className="text-htb-green text-xl">✓</span>
                        )}
                        {showAnswers && status === 'incorrect' && (
                          <span className="text-red-500 text-xl">✗</span>
                        )}
                      </div>
                    </button>
                    {matchedRight && (
                      <div className="mt-2 ml-8 p-2 bg-htb-bg rounded border border-gray-700">
                        <span className="text-gray-400 text-sm">
                          → {rightSide.find(r => r.id === matchedRight)?.text}
                        </span>
                      </div>
                    )}
                    {showAnswers && status === 'incorrect' && (
                      <div className="mt-2 ml-8 p-2 bg-htb-green/10 rounded border border-htb-green/30">
                        <span className="text-htb-green text-sm">
                          Correct: {rightSide.find(r => r.id === correctMatches[item.id])?.text}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right side */}
            <div className="space-y-3">
              <h3 className="text-htb-green font-semibold mb-3">Sentence endings:</h3>
              {rightSide.map((item) => {
                const isMatched = isRightMatched(item.id);
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleRightClick(item.id)}
                    disabled={isMatched}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      isMatched
                        ? 'border-gray-800 bg-htb-bg text-gray-600 cursor-not-allowed'
                        : selectedLeft
                        ? 'border-gray-700 bg-htb-sidebar hover:border-htb-green hover:bg-htb-green/10 cursor-pointer'
                        : 'border-gray-700 bg-htb-sidebar cursor-default'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="flex-1">{item.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
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

export default ConditionalSentencesC1Exercise;
