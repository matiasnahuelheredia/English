import React, { useState } from 'react';

const PhrasalVerbsC1Exercise = () => {
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
    q1: 'over',
    q2: 'behind',
    q3: 'out of',
    q4: 'on with',
    q5: 'away with',
    q6: 'together with',
    q7: 'back to',
    q8: 'into'
  };

  const options = {
    q1: ['into', 'over', 'out of'],
    q2: ['on', 'together', 'behind'],
    q3: ['out of', 'through to', 'back to'],
    q4: ['into', 'on with', 'around'],
    q5: ['away with', 'on with', 'over'],
    q6: ['through to', 'around', 'together with'],
    q7: ['through to', 'on with', 'back to'],
    q8: ['into', 'over', 'around']
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
            C1 Vocabulary: Phrasal Verbs
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

          <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4 sm:p-6">
            <p className="text-base sm:text-lg leading-relaxed">
              It's great that I've almost got{' '}
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
              {' '}the flu but because of it I've really got{' '}
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
              {' '}with my paperwork. I think I'll be able to catch up over the weekend if I can get{' '}
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
              {' '}babysitting for my brother. Actually, even if I have to babysit, it might be OK because I'll be able to get{' '}
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
              {' '}my work once the baby is asleep. The report isn't very important so I can probably get{' '}
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
              {' '}not finishing it until Tuesday. In any case, all this work means I'm not going to be able to get{' '}
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
              {' '}Alex and Noah to play golf as we'd planned. John texted this morning as well about Saturday, but I haven't had time to get{' '}
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
              {' '}him yet. I've just been so busy. Sometimes I wonder why I got{' '}
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
              {' '}this field of work - even without having the flu, I'd still have lots of work to do!
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

export default PhrasalVerbsC1Exercise;
