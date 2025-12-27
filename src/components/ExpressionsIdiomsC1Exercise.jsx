import { useState } from 'react';

const ExpressionsIdiomsC1Exercise = () => {
  const leftItems = [
    { id: 'L1', text: 'They gave us a pasta dish topped with grated' },
    { id: 'L2', text: "My little sister's favourite meal is scrambled" },
    { id: 'L3', text: 'Add the melted' },
    { id: 'L4', text: 'This dessert is made with whipped' },
    { id: 'L5', text: 'When you go to the shop, please get some sliced' },
    { id: 'L6', text: 'Chilli con carne is generally served with plain, boiled' },
    { id: 'L7', text: 'If you like herbs, you could garnish with some chopped' },
    { id: 'L8', text: "At my grandmother's house, we had sausages, mashed" }
  ];

  const rightItems = [
    { id: 'R1', text: 'cheese, which was melted under the grill.' },
    { id: 'R2', text: 'eggs on toast.' },
    { id: 'R3', text: 'chocolate to the mixture.' },
    { id: 'R4', text: 'cream and strawberries.' },
    { id: 'R5', text: 'bread so that we can make some sandwiches.' },
    { id: 'R6', text: 'rice or nachos.' },
    { id: 'R7', text: 'parsley.' },
    { id: 'R8', text: 'potatoes and vegetables.' }
  ];

  const correctMatches = {
    L1: 'R1',
    L2: 'R2',
    L3: 'R3',
    L4: 'R4',
    L5: 'R5',
    L6: 'R6',
    L7: 'R7',
    L8: 'R8'
  };

  const [matches, setMatches] = useState({
    L1: '', L2: '', L3: '', L4: '', L5: '', L6: '', L7: '', L8: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleMatch = (leftId, rightId) => {
    setMatches(prev => ({
      ...prev,
      [leftId]: rightId
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    Object.keys(correctMatches).forEach(leftId => {
      if (matches[leftId] === correctMatches[leftId]) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  const resetExercise = () => {
    setMatches({
      L1: '', L2: '', L3: '', L4: '', L5: '', L6: '', L7: '', L8: ''
    });
    setShowResults(false);
    setScore(0);
    setShowAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setShowResults(true);
  };

  const getSelectStyle = (leftId) => {
    if (!showAnswers) return 'border-htb-text-dim';
    if (matches[leftId] === correctMatches[leftId]) {
      return 'border-htb-green';
    }
    return 'border-red-500';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-htb-text p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-htb-green mb-6">Expressions and Idioms</h1>
        
        <p className="text-htb-text-dim mb-8">
          Match the two halves of the sentences.
        </p>

        <div className="space-y-4 mb-8">
          {leftItems.map((leftItem, index) => {
            const rightItem = rightItems.find(r => r.id === matches[leftItem.id]);
            
            return (
              <div key={leftItem.id} className="bg-htb-card p-4 rounded-lg border border-htb-text-dim">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <span className="text-htb-green font-bold">{index + 1}.</span>
                      <p className="text-htb-text flex-1">{leftItem.text}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <select
                      value={matches[leftItem.id]}
                      onChange={(e) => handleMatch(leftItem.id, e.target.value)}
                      className={`w-full bg-htb-bg border-2 ${getSelectStyle(leftItem.id)} text-htb-text px-3 py-2 rounded focus:outline-none focus:border-htb-green`}
                    >
                      <option value="">-- Select ending --</option>
                      {rightItems.map(right => (
                        <option key={right.id} value={right.id}>
                          {right.text}
                        </option>
                      ))}
                    </select>
                    
                    {rightItem && (
                      <div className="mt-2 p-2 bg-htb-bg rounded border border-htb-text-dim">
                        <p className="text-htb-text-dim text-sm">{rightItem.text}</p>
                      </div>
                    )}
                    
                    {showAnswers && matches[leftItem.id] !== correctMatches[leftItem.id] && (
                      <div className="mt-2 text-htb-green text-sm">
                        <strong>Correct:</strong> {rightItems.find(r => r.id === correctMatches[leftItem.id])?.text}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showResults && (
          <div className="bg-htb-card p-6 rounded-lg border border-htb-text-dim mb-6">
            <h2 className="text-2xl font-bold text-htb-green mb-2">Results</h2>
            <p className="text-xl">
              Score: <span className="text-htb-green font-bold">{score}/8</span>
            </p>
            {score === 8 && (
              <p className="text-htb-green mt-2">Perfect! All matches are correct!</p>
            )}
            {score >= 6 && score < 8 && (
              <p className="text-yellow-500 mt-2">Well done! Keep practicing.</p>
            )}
            {score < 6 && (
              <p className="text-red-500 mt-2">Please try again and review the matches.</p>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          <button
            onClick={calculateScore}
            className="px-6 py-2 bg-htb-green text-htb-bg font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Score
          </button>
          <button
            onClick={resetExercise}
            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-500 transition-colors"
          >
            Start again
          </button>
          <button
            onClick={handleShowAnswers}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition-colors"
          >
            Show answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressionsIdiomsC1Exercise;
