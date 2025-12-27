import React, { useState } from 'react';

const NegativePrefixesC1Exercise = () => {
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
    q10: '',
    q11: '',
    q12: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctAnswers = {
    q1: 'ir',
    q2: 'in',
    q3: 'dis',
    q4: 'in',
    q5: 'im',
    q6: 'il',
    q7: 'il',
    q8: 'dis',
    q9: 'ir',
    q10: 'un',
    q11: 'im',
    q12: 'dis'
  };

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim();
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
      if (normalizeAnswer(answers[key]) === normalizeAnswer(correctAnswers[key])) {
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
      q10: '',
      q11: '',
      q12: ''
    });
    setShowResults(false);
    setShowAnswers(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Vocabulary: Negative Prefixes
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/12
              </p>
              {score === 12 && <p className="text-htb-green">Perfect!</p>}
              {score >= 10 && score < 12 && <p className="text-htb-green">Well done!</p>}
              {score < 10 && <p className="text-htb-text-dim">Please try again.</p>}
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Complete the sentences with the correct negative prefix.
          </p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base leading-relaxed">
              Many of the items lost in the fire, such as photographs, were{' '}
              <input
                type="text"
                value={answers.q1}
                onChange={(e) => handleChange('q1', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q1) === normalizeAnswer(correctAnswers.q1)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              replaceable.
            </li>

            <li className="text-base leading-relaxed">
              Gareth lost his job because he was{' '}
              <input
                type="text"
                value={answers.q2}
                onChange={(e) => handleChange('q2', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q2) === normalizeAnswer(correctAnswers.q2)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              capable of doing anything right without supervision.
            </li>

            <li className="text-base leading-relaxed">
              It was extremely{' '}
              <input
                type="text"
                value={answers.q3}
                onChange={(e) => handleChange('q3', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q3) === normalizeAnswer(correctAnswers.q3)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              honest of you to blame your brother for what you did.
            </li>

            <li className="text-base leading-relaxed">
              We will be trekking in very{' '}
              <input
                type="text"
                value={answers.q4}
                onChange={(e) => handleChange('q4', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q4) === normalizeAnswer(correctAnswers.q4)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              hospitable terrain and you need to be prepared for harsh weather.
            </li>

            <li className="text-base leading-relaxed">
              The traffic problems in my city make it{' '}
              <input
                type="text"
                value={answers.q5}
                onChange={(e) => handleChange('q5', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q5) === normalizeAnswer(correctAnswers.q5)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              practical to drive to work.
            </li>

            <li className="text-base leading-relaxed">
              About 10% of the population are{' '}
              <input
                type="text"
                value={answers.q6}
                onChange={(e) => handleChange('q6', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q6) === normalizeAnswer(correctAnswers.q6)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              literate.
            </li>

            <li className="text-base leading-relaxed">
              I think his behaviour was very unethical even if it wasn't actually{' '}
              <input
                type="text"
                value={answers.q7}
                onChange={(e) => handleChange('q7', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q7) === normalizeAnswer(correctAnswers.q7)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              legal.
            </li>

            <li className="text-base leading-relaxed">
              Initial results were negative so the company has decided to{' '}
              <input
                type="text"
                value={answers.q8}
                onChange={(e) => handleChange('q8', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q8) === normalizeAnswer(correctAnswers.q8)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              continue the research.
            </li>

            <li className="text-base leading-relaxed">
              Does your language have as many{' '}
              <input
                type="text"
                value={answers.q9}
                onChange={(e) => handleChange('q9', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q9) === normalizeAnswer(correctAnswers.q9)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              regular verbs as English?
            </li>

            <li className="text-base leading-relaxed">
              My 2-year-old nephew always wants to dress himself but he can't do up or{' '}
              <input
                type="text"
                value={answers.q10}
                onChange={(e) => handleChange('q10', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q10) === normalizeAnswer(correctAnswers.q10)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              do buttons yet.
            </li>

            <li className="text-base leading-relaxed">
              Since the accident, Marie has been{' '}
              <input
                type="text"
                value={answers.q11}
                onChange={(e) => handleChange('q11', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q11) === normalizeAnswer(correctAnswers.q11)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              mobile from the waist down.
            </li>

            <li className="text-base leading-relaxed">
              All the passengers were asked to{' '}
              <input
                type="text"
                value={answers.q12}
                onChange={(e) => handleChange('q12', e.target.value)}
                className={`inline-block w-16 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q12) === normalizeAnswer(correctAnswers.q12)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              embark because the ship had developed engine problems.
            </li>
          </ol>

          {showAnswers && (
            <div className="mt-6 p-4 bg-htb-green/10 border border-htb-green/30 rounded-lg">
              <h3 className="font-bold text-htb-green mb-2">Correct Answers:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {Object.keys(correctAnswers).map((key, index) => (
                  <div key={key} className="flex items-start gap-2">
                    <span className="text-htb-green font-semibold min-w-[2rem]">{index + 1}.</span>
                    <span className={normalizeAnswer(answers[key]) === normalizeAnswer(correctAnswers[key]) ? 'text-htb-green' : 'text-red-400'}>
                      {correctAnswers[key]}
                      {normalizeAnswer(answers[key]) !== normalizeAnswer(correctAnswers[key]) && answers[key] && (
                        <span className="text-htb-text-dim"> (you: {answers[key]})</span>
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

export default NegativePrefixesC1Exercise;
