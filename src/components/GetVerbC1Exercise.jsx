import React, { useState } from 'react';

const GetVerbC1Exercise = () => {
  const [matches, setMatches] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const leftSide = [
    { id: 1, text: "If you're late one more time, you'll" },
    { id: 2, text: 'The cheapest way to get to the airport is to' },
    { id: 3, text: "If you're buying an ice-cream, please" },
    { id: 4, text: "We can set off now because it's" },
    { id: 5, text: "In a relationship it's easy to" },
    { id: 6, text: "I don't want the rest of my money to" },
    { id: 7, text: "I have a date tonight so I'm" },
    { id: 8, text: "I can't promise that I'll" },
    { id: 9, text: 'I know that all this crying is just to' },
    { id: 10, text: "I've been on my own for two years now and I'm still" }
  ];

  const rightSide = [
    { id: 7, text: 'getting my hair done this afternoon.' },
    { id: 6, text: 'get taken from me.' },
    { id: 5, text: 'get hurt.' },
    { id: 10, text: 'getting used to it.' },
    { id: 8, text: "get it done by 5 o'clock." },
    { id: 3, text: 'get me one.' },
    { id: 4, text: 'getting lighter out there.' },
    { id: 2, text: 'get the bus.' },
    { id: 9, text: 'get me to feel sorry for you.' },
    { id: 1, text: 'get sacked.' }
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

  const handleMatch = (leftId, rightId) => {
    setMatches(prev => ({
      ...prev,
      [leftId]: rightId
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(correctMatches).forEach(key => {
      if (matches[key] === correctMatches[key]) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setMatches({});
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    const correctMatchesObj = {};
    Object.keys(correctMatches).forEach(key => {
      correctMatchesObj[key] = correctMatches[key];
    });
    setMatches(correctMatchesObj);
    calculateScore();
  };

  const getMatchStatus = (leftId) => {
    if (!showAnswers) return null;
    if (matches[leftId] === correctMatches[leftId]) {
      return 'correct';
    }
    return 'incorrect';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-4">
            C1 Grammar: <em>Get</em>
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
            Match the beginning and the end of the sentences.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Left Side */}
            <div className="space-y-2">
              <h3 className="text-htb-green font-semibold mb-3 text-sm sm:text-base">
                Beginning of sentences:
              </h3>
              {leftSide.map((item) => {
                const status = getMatchStatus(item.id);
                return (
                  <div
                    key={item.id}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                      status === 'correct'
                        ? 'bg-htb-sidebar border-htb-green'
                        : status === 'incorrect'
                        ? 'bg-htb-sidebar border-red-500'
                        : matches[item.id]
                        ? 'bg-htb-sidebar border-htb-green/50'
                        : 'bg-htb-sidebar border-gray-800'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-htb-green font-bold text-sm sm:text-base shrink-0">
                        {item.id}.
                      </span>
                      <p className="text-white text-sm sm:text-base flex-1">{item.text}</p>
                      {matches[item.id] && (
                        <span className="text-htb-text text-xs sm:text-sm shrink-0">
                          → {matches[item.id]}
                        </span>
                      )}
                      {status === 'correct' && (
                        <span className="text-htb-green text-lg">✓</span>
                      )}
                      {status === 'incorrect' && (
                        <span className="text-red-500 text-lg">✗</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="space-y-2">
              <h3 className="text-htb-green font-semibold mb-3 text-sm sm:text-base">
                End of sentences (click to match):
              </h3>
              {rightSide.map((item, index) => {
                const isMatched = Object.values(matches).includes(item.id);
                return (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-1">
                      <button
                        onClick={() => {
                          const selectedLeft = Object.keys(matches).find(
                            key => !matches[key] || matches[key] === item.id
                          );
                          if (selectedLeft) {
                            handleMatch(parseInt(selectedLeft), item.id);
                          } else {
                            const firstLeft = leftSide[0].id;
                            handleMatch(firstLeft, item.id);
                          }
                        }}
                        disabled={showAnswers}
                        className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all ${
                          isMatched
                            ? 'bg-htb-card border-gray-700 opacity-50'
                            : 'bg-htb-card border-gray-800 hover:border-htb-green hover:bg-htb-sidebar'
                        } disabled:cursor-not-allowed`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-htb-green font-bold text-sm sm:text-base shrink-0">
                            {item.id}.
                          </span>
                          <p className="text-white text-sm sm:text-base">{item.text}</p>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
            <p className="text-htb-text text-xs sm:text-sm">
              <strong className="text-htb-green">How to match:</strong> The sentences on the right are automatically matched in order.
              Click on a sentence on the left (1-10), then click on the matching sentence on the right.
              The match will be recorded. Continue until all sentences are matched.
            </p>
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

export default GetVerbC1Exercise;
