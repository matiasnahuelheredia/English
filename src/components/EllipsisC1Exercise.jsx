import React, { useState } from 'react';

const EllipsisC1Exercise = () => {
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
    q1: "I don't",
    q2: 'or',
    q3: "wouldn't",
    q4: 'has',
    q5: 'so',
    q6: 'and',
    q7: 'because I',
    q8: 'did',
    q9: 'it did so',
    q10: 'not'
  };

  const options = {
    q1: ["I don't", "don't"],
    q2: ['or', 'while'],
    q3: ["wouldn't like", "wouldn't"],
    q4: ['has heard', 'has'],
    q5: ['such', 'so'],
    q6: ['and', 'so'],
    q7: ['because I', 'because'],
    q8: ['had', 'did'],
    q9: ['it did so', 'so it did'],
    q10: ["you don't", 'not']
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
            C1 Grammar: Ellipsis
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

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="mb-2">
                <span className="font-bold text-htb-green">Ray:</span> You say you like animals, do you have any pets?
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p>
                <span className="font-bold text-htb-green">Ann:</span> I like pets, although{' '}
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
                {' '}have any at the moment. We used to have dogs, which was fun because we took them out for walks{' '}
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
                {' '}made them do tricks.
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p>
                <span className="font-bold text-htb-green">Ray:</span> My wife would like to have a cat but I{' '}
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
                . Well, you must have heard my cat story, almost everyone{' '}
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
                .
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p>
                <span className="font-bold text-htb-green">Ann:</span> I don't think{' '}
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
                . What happened?
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p>
                <span className="font-bold text-htb-green">Ray:</span> I saw this cat near our house stuck at the top of a tree. It was just sitting there{' '}
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
                {' '}looking really sad. I decided to rescue the cat{' '}
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
                {' '}felt sorry for it. I didn't have a ladder but the neighbours{' '}
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
                {' '}and I borrowed it and climbed up to rescue the cat. I reached out for the cat, it jumped down and as{' '}
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
                , knocked me off the ladder. I almost broke a leg when I landed. I'm not that keen on cats anymore!
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p>
                <span className="font-bold text-htb-green">Ann:</span> Ha-ha, I guess{' '}
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
                !
              </p>
            </div>
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

export default EllipsisC1Exercise;
