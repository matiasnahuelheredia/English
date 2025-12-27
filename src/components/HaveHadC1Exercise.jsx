import React, { useState } from 'react';

const HaveHadC1Exercise = () => {
  const [answers, setAnswers] = useState({
    q1: '-1',
    q2: '-1',
    q3: '-1',
    q4: '-1',
    q5: '-1',
    q6: '-1',
    q7: '-1',
    q8: '-1',
    q9: '-1',
    q10: '-1'
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctAnswers = {
    q1: 'had',
    q2: 'have',
    q3: 'have',
    q4: 'having',
    q5: 'have got',
    q6: 'had',
    q7: 'had to have',
    q8: 'had had',
    q9: 'had',
    q10: 'have got to'
  };

  const options = {
    q1: ['have', 'had', 'got'],
    q2: ['have', 'had', 'got'],
    q3: ['has', 'had', 'have'],
    q4: ['having', 'getting', 'having got'],
    q5: ['have got', 'am having', 'had got'],
    q6: ['was having', 'had', 'has'],
    q7: ['had to have', 'had', 'had to'],
    q8: ['had had', 'had got', 'was having'],
    q9: ['has been having', 'has had', 'had'],
    q10: ['have got', 'have got to', 'got to']
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
      q1: '-1',
      q2: '-1',
      q3: '-1',
      q4: '-1',
      q5: '-1',
      q6: '-1',
      q7: '-1',
      q8: '-1',
      q9: '-1',
      q10: '-1'
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
    if (!showAnswers) return '';
    return answers[question] === correctAnswers[question] 
      ? 'border-2 border-htb-green' 
      : 'border-2 border-red-500';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Grammar: <em>Have</em>, <em>Have got</em>, and <em>Had</em>
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

          <p className="text-htb-text mb-6 font-semibold">Choose the correct answer.</p>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className="text-white">
              Have you ever{' '}
              <select 
                value={answers.q1} 
                onChange={(e) => handleChange('q1', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q1')}`}
              >
                <option value="-1">...</option>
                {options.q1.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q1 !== correctAnswers.q1 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q1})</span>
              )}
              {' '}a strange dream and woken up wondering what it all could mean? I'm sure you{' '}
              <select 
                value={answers.q2} 
                onChange={(e) => handleChange('q2', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q2')}`}
              >
                <option value="-1">...</option>
                {options.q2.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q2 !== correctAnswers.q2 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q2})</span>
              )}
              , as people{' '}
              <select 
                value={answers.q3} 
                onChange={(e) => handleChange('q3', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q3')}`}
              >
                <option value="-1">...</option>
                {options.q3.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q3 !== correctAnswers.q3 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q3})</span>
              )}
              {' '}always been fascinated by dreams and what they say about their personality and even their future. There are so many stories about people{' '}
              <select 
                value={answers.q4} 
                onChange={(e) => handleChange('q4', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q4')}`}
              >
                <option value="-1">...</option>
                {options.q4.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q4 !== correctAnswers.q4 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q4})</span>
              )}
              {' '}dreams which turned out to be significant. I{' '}
              <select 
                value={answers.q5} 
                onChange={(e) => handleChange('q5', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q5')}`}
              >
                <option value="-1">...</option>
                {options.q5.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q5 !== correctAnswers.q5 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q5})</span>
              )}
              {' '}a friend, for example, who{' '}
              <select 
                value={answers.q6} 
                onChange={(e) => handleChange('q6', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q6')}`}
              >
                <option value="-1">...</option>
                {options.q6.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q6 !== correctAnswers.q6 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q6})</span>
              )}
              {' '}to get up early and take his grandmother to the doctor's because she{' '}
              <select 
                value={answers.q7} 
                onChange={(e) => handleChange('q7', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q7')}`}
              >
                <option value="-1">...</option>
                {options.q7.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q7 !== correctAnswers.q7 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q7})</span>
              )}
              {' '}her blood pressure checked (she{' '}
              <select 
                value={answers.q8} 
                onChange={(e) => handleChange('q8', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q8')}`}
              >
                <option value="-1">...</option>
                {options.q8.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q8 !== correctAnswers.q8 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q8})</span>
              )}
              {' '}high blood pressure for ages). That night, though, he{' '}
              <select 
                value={answers.q9} 
                onChange={(e) => handleChange('q9', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q9')}`}
              >
                <option value="-1">...</option>
                {options.q9.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q9 !== correctAnswers.q9 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q9})</span>
              )}
              {' '}a nightmare about his grandma and so he woke up and thought, 'I{' '}
              <select 
                value={answers.q10} 
                onChange={(e) => handleChange('q10', e.target.value)}
                className={`dropdown-custom ${getAnswerStyle('q10')}`}
              >
                <option value="-1">...</option>
                {options.q10.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
              {showAnswers && answers.q10 !== correctAnswers.q10 && (
                <span className="text-htb-green ml-2 text-sm">({correctAnswers.q10})</span>
              )}
              {' '}get to my gran's right now!'. When he arrived at his gran's, she was on the floor unconscious and only a quick trip to the hospital saved her. It makes even a cynical person like me start to think.
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

export default HaveHadC1Exercise;
