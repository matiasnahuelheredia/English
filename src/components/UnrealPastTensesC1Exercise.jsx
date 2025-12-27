import React, { useState } from 'react';

const UnrealPastTensesC1Exercise = () => {
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
    q1: 'would',
    q2: 'wish',
    q3: 'had',
    q4: 'could',
    q5: 'rather',
    q6: 'time',
    q7: 'only',
    q8: 'would',
    q9: 'to look',
    q10: 'had'
  };

  const handleChange = (question, value) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim();
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

  const getAnswerStyle = (question) => {
    if (!showAnswers) return 'border-gray-700';
    const isCorrect = normalizeAnswer(answers[question]) === normalizeAnswer(correctAnswers[question]);
    return isCorrect ? 'border-htb-green bg-htb-green/10' : 'border-red-500 bg-red-500/10';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: Unreal Uses of Past Tenses
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Complete the dialogue with ONE word in each gap.
          </p>

          <ul className="space-y-4 text-base sm:text-lg leading-relaxed">
            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Roger:</strong> Hi, Jane. Are you busy?{' '}
                <input
                  type="text"
                  value={answers.q1}
                  onChange={(e) => handleChange('q1', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q1')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q1) !== normalizeAnswer(correctAnswers.q1) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q1})</span>
                )}
                {' '}you rather I phoned a bit later?
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Jane:</strong> No, it's alright. I'm always busy. I{' '}
                <input
                  type="text"
                  value={answers.q2}
                  onChange={(e) => handleChange('q2', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q2')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q2) !== normalizeAnswer(correctAnswers.q2) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q2})</span>
                )}
                {' '}I hadn't taken on this job!
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Roger:</strong> Well, you wanted more money. I wish you{' '}
                <input
                  type="text"
                  value={answers.q3}
                  onChange={(e) => handleChange('q3', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q3')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q3) !== normalizeAnswer(correctAnswers.q3) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q3})</span>
                )}
                {' '}listened to what I was saying at the time.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Jane:</strong> And I wish I{' '}
                <input
                  type="text"
                  value={answers.q4}
                  onChange={(e) => handleChange('q4', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q4')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q4) !== normalizeAnswer(correctAnswers.q4) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q4})</span>
                )}
                {' '}go back in time and think it over more but I can't.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Roger:</strong> I'd{' '}
                <input
                  type="text"
                  value={answers.q5}
                  onChange={(e) => handleChange('q5', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q5')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q5) !== normalizeAnswer(correctAnswers.q5) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q5})</span>
                )}
                {' '}you were happy than in this kind of mood.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Jane:</strong> Me too, but it's high{' '}
                <input
                  type="text"
                  value={answers.q6}
                  onChange={(e) => handleChange('q6', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q6')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q6) !== normalizeAnswer(correctAnswers.q6) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q6})</span>
                )}
                {' '}I did something about it instead of just moaning all the time.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Roger:</strong> If{' '}
                <input
                  type="text"
                  value={answers.q7}
                  onChange={(e) => handleChange('q7', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q7')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q7) !== normalizeAnswer(correctAnswers.q7) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q7})</span>
                )}
                {' '}you really meant that. I'm sure you don't.
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Jane:</strong> I wish you{' '}
                <input
                  type="text"
                  value={answers.q8}
                  onChange={(e) => handleChange('q8', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q8')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q8) !== normalizeAnswer(correctAnswers.q8) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q8})</span>
                )}
                {' '}stop criticising me!
              </p>
            </li>

            <li className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white">
                <strong className="text-htb-green">Roger:</strong> I'm saying you're right. It really is time{' '}
                <input
                  type="text"
                  value={answers.q9}
                  onChange={(e) => handleChange('q9', e.target.value)}
                  className={`inline-block w-32 sm:w-40 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q9')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q9) !== normalizeAnswer(correctAnswers.q9) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q9})</span>
                )}
                {' '}for a new job and it won't take long to find one. Lots of people must wish they{' '}
                <input
                  type="text"
                  value={answers.q10}
                  onChange={(e) => handleChange('q10', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q10')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q10) !== normalizeAnswer(correctAnswers.q10) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q10})</span>
                )}
                {' '}the job experience you've got.
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

export default UnrealPastTensesC1Exercise;
