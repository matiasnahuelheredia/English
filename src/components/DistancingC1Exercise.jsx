import React, { useState } from 'react';

const DistancingC1Exercise = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctAnswers = {
    q1: 'to be',
    q2: 'that there is',
    q3: 'to be',
    q4: 'hoped',
    q5: 'to have appointed',
    q6: 'It',
    q7: 'reported',
    q8: 'Apparently',
    q9: 'him',
    q10: 'might'
  };

  const options = {
    q1: ['that it is', 'to be'],
    q2: ['that there is', 'to be'],
    q3: ['to be', 'that they are'],
    q4: ['understood', 'hoped'],
    q5: ['to have appointed', 'to appoint'],
    q6: ['It', 'There'],
    q7: ['agreed', 'reported'],
    q8: ['It is apparent', 'Apparently'],
    q9: ['me', 'him'],
    q10: ['might', 'must']
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
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: ''
    });
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  const getSelectStyle = (question) => {
    if (!showAnswers) return 'border-gray-700 bg-htb-bg';
    const isCorrect = answers[question] === correctAnswers[question];
    return isCorrect 
      ? 'border-htb-green bg-htb-green/10' 
      : 'border-red-500 bg-red-500/10';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: Distancing
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              <ul className="text-htb-text text-sm">
                <li>{score < 10 ? '❌ Please try again.' : '✅ Well done!'}</li>
              </ul>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Choose the correct answer.
          </p>

          <ul className="space-y-4 text-base sm:text-lg">
            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              Now would seem{' '}
              <select
                value={answers.q1}
                onChange={(e) => handleChange('q1', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q1')}`}
              >
                <option value="">...</option>
                {options.q1.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q1 !== correctAnswers.q1 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q1})</span>
              )}
              {' '}a good time to discuss this.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              It appears{' '}
              <select
                value={answers.q2}
                onChange={(e) => handleChange('q2', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q2')}`}
              >
                <option value="">...</option>
                {options.q2.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q2 !== correctAnswers.q2 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q2})</span>
              )}
              {' '}more than one person involved.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              Women are believed{' '}
              <select
                value={answers.q3}
                onChange={(e) => handleChange('q3', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q3')}`}
              >
                <option value="">...</option>
                {options.q3.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q3 !== correctAnswers.q3 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q3})</span>
              )}
              {' '}better at multitasking.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              It is{' '}
              <select
                value={answers.q4}
                onChange={(e) => handleChange('q4', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q4')}`}
              >
                <option value="">...</option>
                {options.q4.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q4 !== correctAnswers.q4 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q4})</span>
              )}
              {' '}that you'll reconsider your decision soon.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              Manchester United are believed{' '}
              <select
                value={answers.q5}
                onChange={(e) => handleChange('q5', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q5')}`}
              >
                <option value="">...</option>
                {options.q5.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q5 !== correctAnswers.q5 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q5})</span>
              )}
              {' '}a new manager.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <select
                value={answers.q6}
                onChange={(e) => handleChange('q6', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q6')}`}
              >
                <option value="">...</option>
                {options.q6.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q6 !== correctAnswers.q6 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q6})</span>
              )}
              {' '}is said that no news is good news.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              Jones is{' '}
              <select
                value={answers.q7}
                onChange={(e) => handleChange('q7', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q7')}`}
              >
                <option value="">...</option>
                {options.q7.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q7 !== correctAnswers.q7 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q7})</span>
              )}
              {' '}to have signed the new deal.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <select
                value={answers.q8}
                onChange={(e) => handleChange('q8', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q8')}`}
              >
                <option value="">...</option>
                {options.q8.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q8 !== correctAnswers.q8 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q8})</span>
              )}
              , technology saves us time.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              According to{' '}
              <select
                value={answers.q9}
                onChange={(e) => handleChange('q9', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q9')}`}
              >
                <option value="">...</option>
                {options.q9.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q9 !== correctAnswers.q9 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q9})</span>
              )}
              , time management is a waste of time.
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              Your theory{' '}
              <select
                value={answers.q10}
                onChange={(e) => handleChange('q10', e.target.value)}
                className={`dropdown-custom border-2 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getSelectStyle('q10')}`}
              >
                <option value="">...</option>
                {options.q10.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q10 !== correctAnswers.q10 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q10})</span>
              )}
              {' '}be true, but I'm not sure.
            </li>
          </ul>

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

export default DistancingC1Exercise;
