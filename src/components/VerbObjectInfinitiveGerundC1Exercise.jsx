import React, { useState } from 'react';

const VerbObjectInfinitiveGerundC1Exercise = () => {
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
    q1: 'to go',
    q2: 'telling',
    q3: 'to study',
    q4: 'that I would fail',
    q5: 'stay',
    q6: 'that I join',
    q7: 'me going',
    q8: 'advise',
    q9: 'to get',
    q10: 'carrying'
  };

  const options = {
    q1: ['that I went', 'to go'],
    q2: ['telling', 'to tell'],
    q3: ['to study', 'study'],
    q4: ['me to fail', 'that I would fail'],
    q5: ['to stay', 'stay'],
    q6: ['that I join', 'me joining'],
    q7: ['me to go', 'me going'],
    q8: ['advise', 'warn'],
    q9: ['to get', 'getting'],
    q10: ['to carry', 'carrying']
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
            C1 Grammar: Verb + Object + Infinitive or Gerund
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

          <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4 sm:p-6 text-base sm:text-lg leading-relaxed">
            <p className="text-white">
              I never wanted to go to university but my parents persuaded me{' '}
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
              . I've never really liked people{' '}
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
              {' '}me what to do and it felt like that at university. We were made{' '}
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
              {' '}all sorts of things I wasn't interested in at all. My tutor warned{' '}
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
              {' '}but it was too late. I wanted to leave, and my parents realised that they couldn't make me{' '}
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
              , so I was off. I had no idea what to do but someone recommended{' '}
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
              {' '}the army as an officer. I couldn't really imagine{' '}
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
              {' '}on long marches and all that but I read some stuff on the internet that got me more interested. Well, now I've been in the army for five years and I definitely{' '}
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
              {' '}any young person to do it. It definitely takes you time{' '}
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
              {' '}used to it but it's a great experience and I wouldn't mind{' '}
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
              {' '}on for another five years.
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

export default VerbObjectInfinitiveGerundC1Exercise;
