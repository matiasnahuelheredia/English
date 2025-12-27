import React, { useState } from 'react';

const WorkVocabularyC1Exercise = () => {
  // Part 1 - Multiple choice answers
  const [mcAnswers, setMcAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: ''
  });

  // Part 2 - Fill in the blank answers
  const [fillAnswers, setFillAnswers] = useState({
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
    q16: '',
    q17: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [mcScore, setMcScore] = useState(0);
  const [fillScore, setFillScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctMcAnswers = {
    q1: 'monotonous',
    q2: 'compassionate',
    q3: 'sacked',
    q4: 'benefits',
    q5: 'workforce',
    q6: 'part-time',
    q7: 'rewarding',
    q8: 'hire'
  };

  const correctFillAnswers = {
    q9: 'hunting',
    q10: 'applied',
    q11: 'qualifications',
    q12: 'skills',
    q13: 'experience',
    q14: 'redundant',
    q15: 'out',
    q16: 'contract',
    q17: 'leave'
  };

  const mcOptions = {
    q1: ['rewarding', 'challenging', 'monotonous'],
    q2: ['paternity', 'compassionate', 'sick'],
    q3: ['sacked', 'laid off', 'made redundant'],
    q4: ['freelance', 'benefits', 'leave'],
    q5: ['colleagues', 'work', 'workforce'],
    q6: ['temporary', 'full-time', 'part-time'],
    q7: ['rewarding', 'tedious', 'demanding'],
    q8: ['fire', 'hire', 'benefit']
  };

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim();
  };

  const handleMcChange = (question, value) => {
    setMcAnswers(prev => ({
      ...prev,
      [question]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const handleFillChange = (question, value) => {
    setFillAnswers(prev => ({
      ...prev,
      [question]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let mcCorrect = 0;
    let fillCorrect = 0;

    // Score multiple choice
    Object.keys(correctMcAnswers).forEach(key => {
      if (mcAnswers[key] === correctMcAnswers[key]) {
        mcCorrect++;
      }
    });

    // Score fill in the blanks
    Object.keys(correctFillAnswers).forEach(key => {
      if (normalizeAnswer(fillAnswers[key]) === normalizeAnswer(correctFillAnswers[key])) {
        fillCorrect++;
      }
    });

    setMcScore(mcCorrect);
    setFillScore(fillCorrect);
    setShowResults(true);
  };

  const resetExercise = () => {
    setMcAnswers({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: ''
    });
    setFillAnswers({
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16: '',
      q17: ''
    });
    setShowResults(false);
    setShowAnswers(false);
    setMcScore(0);
    setFillScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  const getSelectStyle = (question) => {
    if (!showAnswers) return 'dropdown-custom';
    if (mcAnswers[question] === correctMcAnswers[question]) {
      return 'dropdown-custom border-htb-green';
    }
    return 'dropdown-custom border-red-500';
  };

  const getInputStyle = (question) => {
    if (!showAnswers) return 'bg-htb-bg border-2 border-gray-700 text-white px-3 py-1 rounded focus:border-htb-green focus:outline-none';
    if (normalizeAnswer(fillAnswers[question]) === normalizeAnswer(correctFillAnswers[question])) {
      return 'bg-htb-bg border-2 border-htb-green text-white px-3 py-1 rounded';
    }
    return 'bg-htb-bg border-2 border-red-500 text-white px-3 py-1 rounded';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-2">
            C1 Vocabulary: Work
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Part 1 Score: {mcScore}/8
              </p>
              <p className="text-lg font-bold text-htb-green">
                Part 2 Score: {fillScore}/9
              </p>
              <p className="text-lg font-bold text-htb-green mt-2">
                Total: {mcScore + fillScore}/17
              </p>
            </div>
          )}

          {/* Part 1 - Multiple Choice */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-htb-green mb-4">Part 1: Choose the correct answer</h2>
            
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-base sm:text-lg leading-relaxed">
                My job is so{' '}
                <select
                  value={mcAnswers.q1}
                  onChange={(e) => handleMcChange('q1', e.target.value)}
                  className={getSelectStyle('q1')}
                >
                  <option value="">...</option>
                  {mcOptions.q1.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {' '}that I can almost do it in my sleep!
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                William is on{' '}
                <select
                  value={mcAnswers.q2}
                  onChange={(e) => handleMcChange('q2', e.target.value)}
                  className={getSelectStyle('q2')}
                >
                  <option value="">...</option>
                  {mcOptions.q2.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {' '}leave because his mum has just passed away.
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                She was late every day for 3 weeks so she was{' '}
                <select
                  value={mcAnswers.q3}
                  onChange={(e) => handleMcChange('q3', e.target.value)}
                  className={getSelectStyle('q3')}
                >
                  <option value="">...</option>
                  {mcOptions.q3.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                .
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                Our company has cut all our{' '}
                <select
                  value={mcAnswers.q4}
                  onChange={(e) => handleMcChange('q4', e.target.value)}
                  className={getSelectStyle('q4')}
                >
                  <option value="">...</option>
                  {mcOptions.q4.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {' '}this year so I no longer have a company car.
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                There are a lot of women in the{' '}
                <select
                  value={mcAnswers.q5}
                  onChange={(e) => handleMcChange('q5', e.target.value)}
                  className={getSelectStyle('q5')}
                >
                  <option value="">...</option>
                  {mcOptions.q5.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {' '}but hardly any female directors.
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                I need two days a week to run my own business from home so I'm looking for a{' '}
                <select
                  value={mcAnswers.q6}
                  onChange={(e) => handleMcChange('q6', e.target.value)}
                  className={getSelectStyle('q6')}
                >
                  <option value="">...</option>
                  {mcOptions.q6.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {' '}job for the rest of the week.
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                What kind of job do you think is{' '}
                <select
                  value={mcAnswers.q7}
                  onChange={(e) => handleMcChange('q7', e.target.value)}
                  className={getSelectStyle('q7')}
                >
                  <option value="">...</option>
                  {mcOptions.q7.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                , without being either boring or high-pressure?
              </li>

              <li className="text-base sm:text-lg leading-relaxed">
                They decided to{' '}
                <select
                  value={mcAnswers.q8}
                  onChange={(e) => handleMcChange('q8', e.target.value)}
                  className={getSelectStyle('q8')}
                >
                  <option value="">...</option>
                  {mcOptions.q8.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {' '}Sue because she made such a good impression at her interview.
              </li>
            </ol>
          </div>

          {/* Part 2 - Fill in the blanks */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-htb-green mb-4">Part 2: Complete the text with ONE word in each gap</h2>
            
            <div className="bg-htb-sidebar border border-gray-800 rounded-lg p-4 sm:p-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Since graduating from university in September, my cousin, Fabian, has been job-
                <input
                  type="text"
                  value={fillAnswers.q9}
                  onChange={(e) => handleFillChange('q9', e.target.value)}
                  className={getInputStyle('q9')}
                  size="10"
                />
                {' '}and has{' '}
                <input
                  type="text"
                  value={fillAnswers.q10}
                  onChange={(e) => handleFillChange('q10', e.target.value)}
                  className={getInputStyle('q10')}
                  size="10"
                />
                {' '}for several positions. As well as having excellent academic{' '}
                <input
                  type="text"
                  value={fillAnswers.q11}
                  onChange={(e) => handleFillChange('q11', e.target.value)}
                  className={getInputStyle('q11')}
                  size="15"
                />
                , he has great{' '}
                <input
                  type="text"
                  value={fillAnswers.q12}
                  onChange={(e) => handleFillChange('q12', e.target.value)}
                  className={getInputStyle('q12')}
                  size="10"
                />
                {' '}such as speaking two languages, and he's really good at solving IT problems. The only drawback for Fabian is that he hasn't got any work{' '}
                <input
                  type="text"
                  value={fillAnswers.q13}
                  onChange={(e) => handleFillChange('q13', e.target.value)}
                  className={getInputStyle('q13')}
                  size="12"
                />
                {' '}because he has only just finished his studies. Unfortunately, his father was made{' '}
                <input
                  type="text"
                  value={fillAnswers.q14}
                  onChange={(e) => handleFillChange('q14', e.target.value)}
                  className={getInputStyle('q14')}
                  size="12"
                />
                {' '}last month so both father and son are currently{' '}
                <input
                  type="text"
                  value={fillAnswers.q15}
                  onChange={(e) => handleFillChange('q15', e.target.value)}
                  className={getInputStyle('q15')}
                  size="8"
                />
                {' '}of work. I'm lucky to have a permanent{' '}
                <input
                  type="text"
                  value={fillAnswers.q16}
                  onChange={(e) => handleFillChange('q16', e.target.value)}
                  className={getInputStyle('q16')}
                  size="10"
                />
                {' '}so my job is fairly secure but I'm also off work at the moment. It's for a good reason though – I've been on paternity{' '}
                <input
                  type="text"
                  value={fillAnswers.q17}
                  onChange={(e) => handleFillChange('q17', e.target.value)}
                  className={getInputStyle('q17')}
                  size="8"
                />
                {' '}since the birth of my son last week!
              </p>
            </div>
          </div>

          {showAnswers && (
            <div className="mt-6 p-4 bg-htb-green/10 border border-htb-green/30 rounded-lg">
              <h3 className="font-bold text-htb-green mb-2">Correct Answers:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-htb-green mb-1">Part 1:</h4>
                  <div className="space-y-1 text-sm">
                    {Object.keys(correctMcAnswers).map((key, index) => (
                      <div key={key}>
                        <span className="text-htb-text-dim">{index + 1}. </span>
                        <span className={mcAnswers[key] === correctMcAnswers[key] ? 'text-htb-green' : 'text-red-400'}>
                          {correctMcAnswers[key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-htb-green mb-1">Part 2:</h4>
                  <div className="space-y-1 text-sm">
                    {Object.keys(correctFillAnswers).map((key, index) => (
                      <div key={key}>
                        <span className="text-htb-text-dim">{index + 1}. </span>
                        <span className={normalizeAnswer(fillAnswers[key]) === normalizeAnswer(correctFillAnswers[key]) ? 'text-htb-green' : 'text-red-400'}>
                          {correctFillAnswers[key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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

export default WorkVocabularyC1Exercise;
