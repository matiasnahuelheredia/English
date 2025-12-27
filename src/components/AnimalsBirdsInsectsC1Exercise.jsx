import React, { useState } from 'react';

const AnimalsBirdsInsectsC1Exercise = () => {
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
    q1: 'stable',
    q2: 'grunt',
    q3: 'dog',
    q4: 'kitten',
    q5: 'mouse',
    q6: 'hive',
    q7: 'lamb',
    q8: 'tank',
    q9: 'puppy',
    q10: 'nest',
    q11: 'foal',
    q12: 'cow'
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
            C1 Vocabulary: Animals, Birds & Insects
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
            Complete the sentences with ONE word.
          </p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base leading-relaxed">
              A horse lives in a{' '}
              <input
                type="text"
                value={answers.q1}
                onChange={(e) => handleChange('q1', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q1) === normalizeAnswer(correctAnswers.q1)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              The noise a pig makes is a{' '}
              <input
                type="text"
                value={answers.q2}
                onChange={(e) => handleChange('q2', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q2) === normalizeAnswer(correctAnswers.q2)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              A{' '}
              <input
                type="text"
                value={answers.q3}
                onChange={(e) => handleChange('q3', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q3) === normalizeAnswer(correctAnswers.q3)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              {' '}lives in a kennel.
            </li>

            <li className="text-base leading-relaxed">
              A baby cat is called a{' '}
              <input
                type="text"
                value={answers.q4}
                onChange={(e) => handleChange('q4', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q4) === normalizeAnswer(correctAnswers.q4)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              The noise a{' '}
              <input
                type="text"
                value={answers.q5}
                onChange={(e) => handleChange('q5', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q5) === normalizeAnswer(correctAnswers.q5)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              {' '}makes is a squeak.
            </li>

            <li className="text-base leading-relaxed">
              Bees live in a{' '}
              <input
                type="text"
                value={answers.q6}
                onChange={(e) => handleChange('q6', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q6) === normalizeAnswer(correctAnswers.q6)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              A{' '}
              <input
                type="text"
                value={answers.q7}
                onChange={(e) => handleChange('q7', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q7) === normalizeAnswer(correctAnswers.q7)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              {' '}is a baby sheep.
            </li>

            <li className="text-base leading-relaxed">
              You keep goldfish in a{' '}
              <input
                type="text"
                value={answers.q8}
                onChange={(e) => handleChange('q8', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q8) === normalizeAnswer(correctAnswers.q8)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              A baby dog is known as a{' '}
              <input
                type="text"
                value={answers.q9}
                onChange={(e) => handleChange('q9', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q9) === normalizeAnswer(correctAnswers.q9)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              The word for a bird's house is a{' '}
              <input
                type="text"
                value={answers.q10}
                onChange={(e) => handleChange('q10', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q10) === normalizeAnswer(correctAnswers.q10)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
            </li>

            <li className="text-base leading-relaxed">
              A{' '}
              <input
                type="text"
                value={answers.q11}
                onChange={(e) => handleChange('q11', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q11) === normalizeAnswer(correctAnswers.q11)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              {' '}is a baby horse.
            </li>

            <li className="text-base leading-relaxed">
              A calf is a baby{' '}
              <input
                type="text"
                value={answers.q12}
                onChange={(e) => handleChange('q12', e.target.value)}
                className={`inline-block w-32 bg-htb-bg border-2 ${
                  showAnswers
                    ? normalizeAnswer(answers.q12) === normalizeAnswer(correctAnswers.q12)
                      ? 'border-htb-green'
                      : 'border-red-500'
                    : 'border-gray-700'
                } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                placeholder="..."
              />
              .
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

export default AnimalsBirdsInsectsC1Exercise;
