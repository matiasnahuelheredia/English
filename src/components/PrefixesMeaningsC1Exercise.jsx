import React, { useState } from 'react';

const PrefixesMeaningsC1Exercise = () => {
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
    q1: 'inter',
    q2: 'out',
    q3: 'ill-',
    q4: 'over',
    q5: 'co',
    q6: 'post',
    q7: 'under',
    q8: 'under'
  };

  const options = {
    q1: ['post', 'inter', 'under'],
    q2: ['over', 'super', 'out'],
    q3: ['ill-', 'anti', 'sub'],
    q4: ['super', 'auto', 'over'],
    q5: ['co', 'bi', 'inter'],
    q6: ['sub', 'post', 'over'],
    q7: ['sub', 'mis', 'under'],
    q8: ['mono', 'under', 'ill-']
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
            C1 Vocabulary: Prefixes Which Add Other Meanings
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
              Professor Smart is chairing the{' '}
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
              departmental meeting this morning.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              My 98-year-old grandfather has{' '}
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
              lived his three younger brothers.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              There's a lot of{' '}
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
              feeling towards teenagers in the community.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              If I tell you what the problem is, will you promise not to{' '}
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
              react?
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              Claire's an outgoing member of staff who gets on well with her{' '}
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
              workers.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              During the{' '}
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
              war period, art and music flourished in the city.
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              We are all overworked and{' '}
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
              paid in this factory!
            </li>

            <li className="text-base sm:text-lg leading-relaxed">
              There's plenty of action in his latest film but I felt the characters were{' '}
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
              developed.
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

export default PrefixesMeaningsC1Exercise;
