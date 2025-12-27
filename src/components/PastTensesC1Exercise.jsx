import React, { useState } from 'react';

const PastTensesC1Exercise = () => {
  const [answers, setAnswers] = useState({
    q1: '-1',
    q2: '-1',
    q3: '-1',
    q4: '-1',
    q5: '-1',
    q6: '-1',
    q7: '-1',
    q8: '-1',
    q9: '-1',
    q10: '-1'
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctAnswers = {
    q1: 'had forgotten',
    q2: 'found',
    q3: 'had been cleaning',
    q4: "didn't fall",
    q5: "didn't take",
    q6: 'was imagining',
    q7: 'came',
    q8: 'used to open',
    q9: 'had died',
    q10: 'put'
  };

  const options = {
    q1: ['was forgetting', 'used to forget', 'had forgotten'],
    q2: ['would find', 'found', 'had been finding'],
    q3: ['had been cleaning', 'cleaned', 'had cleaned'],
    q4: ["hadn't been falling", "wasn't falling", "didn't fall"],
    q5: ["didn't take", "hadn't taken", "wasn't taking"],
    q6: ['had imagined', 'was imagining', 'had been imagining'],
    q7: ['came', 'were coming', 'used to come'],
    q8: ['used to open', 'were opening', 'had been opening'],
    q9: ['had died', 'died', 'was dying'],
    q10: ['had put', 'was putting', 'put']
  };

  const handleChange = (question, value) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (answers[key] === correctAnswers[key]) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({
      q1: '-1',
      q2: '-1',
      q3: '-1',
      q4: '-1',
      q5: '-1',
      q6: '-1',
      q7: '-1',
      q8: '-1',
      q9: '-1',
      q10: '-1'
    });
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  const getAnswerStyle = (question) => {
    if (!showAnswers) return '';
    return answers[question] === correctAnswers[question] 
      ? 'border-2 border-htb-green' 
      : 'border-2 border-red-500';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: The Past - Habitual Events and Specific Incidents
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              <ul className="text-htb-text text-sm">
                <li>{score < 5 ? '❌ Please try again.' : score < 10 ? '⚠️ Good effort! Review and try again.' : '✅ Well done!'}</li>
              </ul>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">Choose the correct answer.</p>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className="text-white">
              I{' '}
              <select 
                value={answers.q1} 
                onChange={(e) => handleChange('q1', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q1')}`}
              >
                <option value="-1">...</option>
                {options.q1.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q1 !== correctAnswers.q1 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q1})</span>
              )}
              {' '}all about the music box until I{' '}
              <select 
                value={answers.q2} 
                onChange={(e) => handleChange('q2', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q2')}`}
              >
                <option value="-1">...</option>
                {options.q2.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q2 !== correctAnswers.q2 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q2})</span>
              )}
              {' '}the key in my grandmother's desk. I{' '}
              <select 
                value={answers.q3} 
                onChange={(e) => handleChange('q3', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q3')}`}
              >
                <option value="-1">...</option>
                {options.q3.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q3 !== correctAnswers.q3 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q3})</span>
              )}
              {' '}out her room when I stopped for a break. Alright, the key{' '}
              <select 
                value={answers.q4} 
                onChange={(e) => handleChange('q4', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q4')}`}
              >
                <option value="-1">...</option>
                {options.q4.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q4 !== correctAnswers.q4 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q4})</span>
              )}
              {' '}out of the desk exactly, but my grandmother was no longer here to say anything. It{' '}
              <select 
                value={answers.q5} 
                onChange={(e) => handleChange('q5', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q5')}`}
              >
                <option value="-1">...</option>
                {options.q5.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q5 !== correctAnswers.q5 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q5})</span>
              )}
              {' '}me long then to find the music box and it was soon in my shaking hands. I{' '}
              <select 
                value={answers.q6} 
                onChange={(e) => handleChange('q6', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q6')}`}
              >
                <option value="-1">...</option>
                {options.q6.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q6 !== correctAnswers.q6 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q6})</span>
              )}
              {' '}opening the box again but suddenly the warning of my dead grandmother{' '}
              <select 
                value={answers.q7} 
                onChange={(e) => handleChange('q7', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q7')}`}
              >
                <option value="-1">...</option>
                {options.q7.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q7 !== correctAnswers.q7 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q7})</span>
              )}
              {' '}back to me: 'Never open the box without me!'. True, we{' '}
              <select 
                value={answers.q8} 
                onChange={(e) => handleChange('q8', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q8')}`}
              >
                <option value="-1">...</option>
                {options.q8.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q8 !== correctAnswers.q8 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q8})</span>
              )}
              {' '}the box together but that was a long time ago and my grandmother{' '}
              <select 
                value={answers.q9} 
                onChange={(e) => handleChange('q9', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q9')}`}
              >
                <option value="-1">...</option>
                {options.q9.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q9 !== correctAnswers.q9 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q9})</span>
              )}
              {' '}since then. What harm could it do to listen again? Slowly, I{' '}
              <select 
                value={answers.q10} 
                onChange={(e) => handleChange('q10', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q10')}`}
              >
                <option value="-1">...</option>
                {options.q10.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q10 !== correctAnswers.q10 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q10})</span>
              )}
              {' '}the rusty key in the lock of the music box…
            </p>
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

export default PastTensesC1Exercise;
