import React, { useState } from 'react';

const TimeExpressionsC1Exercise = () => {
  const [matches, setMatches] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const leftItems = [
    { id: 1, text: "Since I changed to a part-time contract I have" },
    { id: 2, text: "Keep searching for that car key. There isn't" },
    { id: 3, text: "I'm glad he bought a new pair of jeans. It's about" },
    { id: 4, text: "Counting up all the pennies in the money box was very" },
    { id: 5, text: "I think Bill is happy in his small flat for" },
    { id: 6, text: "Natalia said she'd love a coffee and a chat but she's" },
    { id: 7, text: "Their date didn't go well because she spent" },
    { id: 8, text: "He hadn't finished yet when the examiner announced that" },
    { id: 9, text: "It's only a matter of" },
    { id: 10, text: "We'll be driving to the airport this" }
  ];

  const rightItems = [
    { id: 1, text: "short of time today." },
    { id: 2, text: "time was up." },
    { id: 3, text: "time-consuming." },
    { id: 4, text: "the time-being." },
    { id: 5, text: "much time left before your parents get home!" },
    { id: 6, text: "time he threw those old ones away." },
    { id: 7, text: "time next week." },
    { id: 8, text: "the whole time talking about her ex-boyfriend." },
    { id: 9, text: "more time on my hands." },
    { id: 10, text: "time before Adam finds out the truth." }
  ];

  const correctMatches = {
    1: 9,  // more time on my hands
    2: 5,  // much time left
    3: 6,  // time he threw those old ones away
    4: 3,  // time-consuming
    5: 4,  // the time-being
    6: 1,  // short of time today
    7: 8,  // the whole time talking
    8: 2,  // time was up
    9: 10, // time before Adam finds out
    10: 7  // time next week
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
    setMatches({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null
    });
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
    return matches[leftId] === correctMatches[leftId];
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Vocabulary: Time Expressions
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              {score === 10 && <p className="text-htb-green">Well done!</p>}
              {score < 10 && <p className="text-htb-text-dim">Keep trying!</p>}
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Match the two halves of the sentences.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Left column */}
            <div className="space-y-2">
              {leftItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    showAnswers
                      ? getMatchStatus(item.id)
                        ? 'bg-htb-green/10 border-htb-green'
                        : 'bg-red-500/10 border-red-500'
                      : 'bg-htb-sidebar border-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-htb-green min-w-[1.5rem]">
                      {item.id}.
                    </span>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base mb-2">{item.text}</p>
                      <select
                        value={matches[item.id] || ''}
                        onChange={(e) => handleMatch(item.id, parseInt(e.target.value))}
                        className="w-full bg-htb-bg border border-gray-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-htb-green"
                      >
                        <option value="">Select ending...</option>
                        {rightItems.map((right) => (
                          <option key={right.id} value={right.id}>
                            {right.text}
                          </option>
                        ))}
                      </select>
                      {showAnswers && (
                        <div className="mt-2 text-xs">
                          {matches[item.id] === correctMatches[item.id] ? (
                            <span className="text-htb-green">✓ Correct</span>
                          ) : (
                            <span className="text-red-400">
                              ✗ Correct answer: {rightItems.find(r => r.id === correctMatches[item.id])?.text}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Preview */}
            <div className="space-y-2">
              <h3 className="font-semibold text-htb-green mb-3">Available endings:</h3>
              {rightItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-lg bg-htb-sidebar/50 border border-gray-700"
                >
                  <p className="text-sm sm:text-base text-htb-text-dim">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
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

export default TimeExpressionsC1Exercise;
