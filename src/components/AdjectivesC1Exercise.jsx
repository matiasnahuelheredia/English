import React, { useState } from 'react';

const AdjectivesC1Exercise = () => {
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
    q1: 'bright',
    q2: 'sympathetic',
    q3: 'conscientious',
    q4: 'determined',
    q5: 'self-sufficient',
    q6: 'gentle',
    q7: 'sarcastic',
    q8: 'straightforward'
  };

  const options = {
    q1: ['gentle', 'steady', 'bright'],
    q2: ['sympathetic', 'annoying', 'sarcastic'],
    q3: ['straightforward', 'conscientious', 'sarcastic'],
    q4: ['determined', 'sympathetic', 'gentle'],
    q5: ['self-sufficient', 'steady', 'spontaneous'],
    q6: ['bright', 'gentle', 'thorough'],
    q7: ['resourceful', 'sympathetic', 'sarcastic'],
    q8: ['sarcastic', 'straightforward', 'determined']
  };

  const questions = [
    "I'm sure Hannah will know the answer because she's very",
    "He's very ___, so don't be afraid to tell him why you're upset.",
    "People say Chloe is very ___ and I'd agree that she's careful and works hard.",
    "Any Olympic athlete has to be ___ because the one thing you can't do is give up.",
    "She's perfectly happy to do the project on her own so I think you'd say she's",
    "Jamie is very aggressive but his twin brother is almost the opposite – so ___ and caring.",
    "I don't like it when Alex is ___ because, though he thinks he's funny, he is actually being mean.",
    "My relationship with my aunt is very complicated but my uncle is more"
  ];

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
            C1 Vocabulary: Adjectives
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

          <ol className="space-y-6 list-decimal list-inside">
            {questions.map((question, index) => {
              const qKey = `q${index + 1}`;
              return (
                <li key={qKey} className="text-base sm:text-lg leading-relaxed">
                  <span className="text-htb-text">{question}</span>{' '}
                  <select
                    value={answers[qKey]}
                    onChange={(e) => handleChange(qKey, e.target.value)}
                    className={getSelectStyle(qKey)}
                  >
                    <option value="">...</option>
                    {options[qKey].map((option, optIndex) => (
                      <option key={optIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {question.includes('___') ? '' : '.'}
                </li>
              );
            })}
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

export default AdjectivesC1Exercise;
