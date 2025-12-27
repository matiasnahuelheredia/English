import React, { useState } from 'react';

const DiscourseMarkersC1Exercise = () => {
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
    q1: 'way',
    q2: 'matter',
    q3: 'least',
    q4: 'mean',
    q5: 'words',
    q6: 'one',
    q7: 'other',
    q8: 'all',
    q9: 'far',
    q10: 'whole'
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
            C1 Grammar: Discourse Markers (2) - Adverbs and Adverbial Expressions
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Score: {score}/10
              </p>
              <ul className="text-htb-text text-sm">
                <li>{score < 5 ? '❌ Please try again.' : score < 10 ? '⚠️ Good effort! Review and try again.' : '✅ Well done!'}</li>
              </ul>
            </div>
          )}

          <p className="text-htb-text mb-6 font-semibold">
            Complete the dialogue with ONE word in each gap.
          </p>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Mario:</strong> It sounds like you've been keeping yourself busy. I'm surprised you spend any time at all at home. By the{' '}
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
                , how are the new neighbours?
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Kristina:</strong> We aren't exactly friends. As a{' '}
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
                {' '}of fact, I don't like them at all. We're always arguing about something silly like the noise the kids make or their dog.
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Mario:</strong> At{' '}
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
                {' '}you're still on speaking terms.
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Kristina:</strong> Just about. They're not very reasonable, I{' '}
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
                , they don't see that what they do might upset people living around them. I'm not sure I want to spend the rest of my life warring with the neighbours, to be honest.
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Mario:</strong> In other{' '}
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
                , you're thinking of moving?
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Kristina:</strong> Well, on the{' '}
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
                {' '}hand, it's a decent flat and a great location but on the{' '}
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
                {' '}hand, maybe we need a change. After{' '}
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
                , we have been here nine years.
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Mario:</strong> What would the kids say?
              </p>
            </div>

            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4">
              <p className="text-white mb-2">
                <strong className="text-htb-green">Kristina:</strong> As{' '}
                <input
                  type="text"
                  value={answers.q9}
                  onChange={(e) => handleChange('q9', e.target.value)}
                  className={`inline-block w-24 sm:w-32 border-2 rounded px-2 py-1 text-center bg-htb-bg text-white focus:outline-none focus:ring-2 focus:ring-htb-green ${getAnswerStyle('q9')}`}
                  placeholder="..."
                />
                {showAnswers && normalizeAnswer(answers.q9) !== normalizeAnswer(correctAnswers.q9) && (
                  <span className="text-htb-green ml-2 text-sm">({correctAnswers.q9})</span>
                )}
                {' '}as they're concerned, anywhere with internet access would do. On the{' '}
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
                , a new place might be the best thing for everyone.
              </p>
            </div>
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

export default DiscourseMarkersC1Exercise;
