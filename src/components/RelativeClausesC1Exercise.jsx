import React, { useState } from 'react';

const RelativeClausesC1Exercise = () => {
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
    q1: 'sport which is',
    q2: 'which',
    q3: 'that',
    q4: 'whom',
    q5: 'for which',
    q6: 'which they made',
    q7: 'whose',
    q8: 'to play',
    q9: 'which',
    q10: 'what'
  };

  const options = {
    q1: ['sport is', 'sport which is'],
    q2: ['which', 'that'],
    q3: ['that', 'what'],
    q4: ['who', 'whom'],
    q5: ['for which', 'which'],
    q6: ['which made', 'which they made'],
    q7: ['whose', 'that'],
    q8: ['which to play', 'to play'],
    q9: ['which', 'that'],
    q10: ['what', 'which']
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
    if (!showAnswers) return 'dropdown-custom';
    if (answers[question] === correctAnswers[question]) {
      return 'dropdown-custom border-htb-green';
    }
    return 'dropdown-custom border-red-500';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: Relative Clauses
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              {score === 10 && <p className="text-htb-green">Well done!</p>}
              {score < 10 && <p className="text-htb-text-dim">Please try again.</p>}
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Choose the correct answer.
          </p>

          <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4 sm:p-6">
            <p className="text-base sm:text-lg leading-relaxed">
              You may have heard of a{' '}
              <select
                value={answers.q1}
                onChange={(e) => handleChange('q1', e.target.value)}
                className={getSelectStyle('q1')}
              >
                <option value="">...</option>
                {options.q1.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}very popular in North America and Canada: lacrosse. Lacrosse,{' '}
              <select
                value={answers.q2}
                onChange={(e) => handleChange('q2', e.target.value)}
                className={getSelectStyle('q2')}
              >
                <option value="">...</option>
                {options.q2.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}has been played for almost 1000 years, was actually in the London Olympics. Well, the Olympics{' '}
              <select
                value={answers.q3}
                onChange={(e) => handleChange('q3', e.target.value)}
                className={getSelectStyle('q3')}
              >
                <option value="">...</option>
                {options.q3.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}were in 1908. Originally, there would be hundreds of people on a team, all of{' '}
              <select
                value={answers.q4}
                onChange={(e) => handleChange('q4', e.target.value)}
                className={getSelectStyle('q4')}
              >
                <option value="">...</option>
                {options.q4.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}were desperate to win glory for the tribes{' '}
              <select
                value={answers.q5}
                onChange={(e) => handleChange('q5', e.target.value)}
                className={getSelectStyle('q5')}
              >
                <option value="">...</option>
                {options.q5.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}they played. The earliest game involved throwing a ball{' '}
              <select
                value={answers.q6}
                onChange={(e) => handleChange('q6', e.target.value)}
                className={getSelectStyle('q6')}
              >
                <option value="">...</option>
                {options.q6.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}out of wood by means of sticks{' '}
              <select
                value={answers.q7}
                onChange={(e) => handleChange('q7', e.target.value)}
                className={getSelectStyle('q7')}
              >
                <option value="">...</option>
                {options.q7.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}ends were curved. Today there are different formats of the game{' '}
              <select
                value={answers.q8}
                onChange={(e) => handleChange('q8', e.target.value)}
                className={getSelectStyle('q8')}
              >
                <option value="">...</option>
                {options.q8.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}but the basic idea remains the same,{' '}
              <select
                value={answers.q9}
                onChange={(e) => handleChange('q9', e.target.value)}
                className={getSelectStyle('q9')}
              >
                <option value="">...</option>
                {options.q9.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}is reassuring in these times of change. Lacrosse is a great game so, if you are at a loose end as to{' '}
              <select
                value={answers.q10}
                onChange={(e) => handleChange('q10', e.target.value)}
                className={getSelectStyle('q10')}
              >
                <option value="">...</option>
                {options.q10.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {' '}to do this weekend, why not get a few friends and try lacrosse?
            </p>
          </div>

          {showAnswers && (
            <div className="mt-6 p-4 bg-htb-green/10 border border-htb-green/30 rounded-lg">
              <h3 className="font-bold text-htb-green mb-2">Correct Answers:</h3>
              <div className="space-y-1 text-sm">
                {Object.keys(correctAnswers).map((key, index) => (
                  <div key={key} className="flex items-start gap-2">
                    <span className="text-htb-green font-semibold min-w-[2rem]">{index + 1}.</span>
                    <span className={answers[key] === correctAnswers[key] ? 'text-htb-green' : 'text-red-400'}>
                      {correctAnswers[key]}
                      {answers[key] !== correctAnswers[key] && answers[key] && (
                        <span className="text-htb-text-dim"> (you answered: {answers[key]})</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

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

export default RelativeClausesC1Exercise;
