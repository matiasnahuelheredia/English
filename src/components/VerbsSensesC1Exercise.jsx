import React, { useState } from 'react';

const VerbsSensesC1Exercise = () => {
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
    q1: 'strange',
    q2: 'strangely',
    q3: 'as if',
    q4: 'standing',
    q5: 'Can you see',
    q6: 'like',
    q7: 'of',
    q8: 'will be hearing',
    q9: 'to have run',
    q10: 'am seeing'
  };

  const options = {
    q1: ['strangely', 'strange'],
    q2: ['strangely', 'strange'],
    q3: ['as if', 'like'],
    q4: ['standing', 'stand'],
    q5: ['Are you seeing', 'Can you see'],
    q6: ['like', 'as if'],
    q7: ['of', 'as'],
    q8: ['can hear', 'will be hearing'],
    q9: ['to run', 'to have run'],
    q10: ['am seeing', 'see']
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
            C1 Grammar: Verbs of the Senses
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

          <ul className="space-y-4 text-base sm:text-lg leading-relaxed">
            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Janice:</strong> What do you think of this portrait of the old Duke?
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Lilly:</strong> He looks a bit{' '}
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
                {' '}in that hat. It's very realistic though and a bit frightening, I mean those eyes look out at you so{' '}
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
                .
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Janice:</strong> Yeah, it seems{' '}
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
                {' '}he wants to jump out of the picture and get you. Maybe he is the one watching us{' '}
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
                {' '}here in front of his portrait…
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Lilly:</strong> Let's move on!{' '}
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
                {' '}that one over there? It looks{' '}
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
                {' '}a watercolour.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Janice:</strong> Yes, wow, it must be a new one. It smells{' '}
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
                {' '}fresh paint! Oh, it's by this artist Joe Cartwright. I'm sure we{' '}
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
                {' '}a lot about him in the future. Look, it's getting late, we better go.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Lilly:</strong> Shame, we seem{' '}
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
                {' '}out of time. We'll have to come back before the exhibition closes down. What about next week?
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Janice:</strong> Sorry, but I{' '}
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
                {' '}another friend then. Maybe the Saturday after?
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Lilly:</strong> Great, sounds good.
              </p>
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

export default VerbsSensesC1Exercise;
