import React, { useState } from 'react';

const PrepositionsC1Exercise = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctAnswers = {
    q1: 'up',
    q2: 'on',
    q3: 'off',
    q4: 'by',
    q5: 'at',
    q6: 'from',
    q7: 'out',
    q8: 'up'
  };

  const options = {
    q1: ['on', 'by', 'up'],
    q2: ['on', 'at', 'to'],
    q3: ['over', 'off', 'at'],
    q4: ['by', 'on', 'for'],
    q5: ['in', 'at', 'to'],
    q6: ['by', 'at', 'from'],
    q7: ['over', 'for', 'out'],
    q8: ['up', 'in', 'off']
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
      q8: ''
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
            C1 Vocabulary: Prepositions
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/8
              </p>
              {score === 8 && <p className="text-htb-green">Well done!</p>}
              {score < 8 && <p className="text-htb-text-dim">Please try again.</p>}
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Choose the correct answer.
          </p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base sm:text-lg leading-relaxed">
              Lorna never had much fun when she was younger but now she's out every night, making{' '}
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
              {' '}for lost time.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              Set your alarm for 7a.m. because you must arrive{' '}
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
              {' '}time for your interview.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              Nancy asked her boss if she could take some time{' '}
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
              {' '}to visit her sick aunt.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              It was a long journey and we were very tired{' '}
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
              {' '}the time we got home.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              He couldn't play in the final match because he was in hospital{' '}
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
              {' '}the time.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              I think most TV these days is rubbish but I watch some documentaries{' '}
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
              {' '}time to time.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              Theo was going to tidy the tool shed too this Sunday but he ran{' '}
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
              {' '}of time.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              I love gardening and in the spring and summer it takes{' '}
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
              {' '}most of my free time.
            </li>
          </ol>

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

export default PrepositionsC1Exercise;
