import React, { useState } from 'react';

const PhonesTechnologyC1Exercise = () => {
  // Part 1: Fill-in-the-blank state
  const [fillAnswers, setFillAnswers] = useState({
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

  // Part 2: Multiple choice state
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

  const [showResults, setShowResults] = useState(false);
  const [fillScore, setFillScore] = useState(0);
  const [mcScore, setMcScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctFillAnswers = {
    q1: 'top up',
    q2: 'scroll down',
    q3: 'hang up',
    q4: 'log in',
    q5: 'get through',
    q6: 'speak up',
    q7: 'put through',
    q8: 'cut off',
    q9: 'free up',
    q10: 'runs out'
  };

  const correctMcAnswers = {
    q1: 'contacts',
    q2: 'missed',
    q3: 'signal',
    q4: 'virus',
    q5: 'keypad',
    q6: 'cookies',
    q7: 'landline',
    q8: 'give'
  };

  const mcOptions = {
    q1: ['contacts', 'settings', 'coverage'],
    q2: ['engaged', 'lost', 'missed'],
    q3: ['signal', 'reception', 'coverage'],
    q4: ['cookie', 'virus', 'pop-up'],
    q5: ['keyboard', 'key area', 'keypad'],
    q6: ['cookies', 'updates', 'pop-ups'],
    q7: ['broadband', 'landline', 'mobile'],
    q8: ['do', 'give', 'make']
  };

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim();
  };

  const handleFillChange = (question, value) => {
    setFillAnswers(prev => ({
      ...prev,
      [question]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const handleMcChange = (question, value) => {
    setMcAnswers(prev => ({
      ...prev,
      [question]: value
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    // Calculate fill-in-the-blank score
    let correctFill = 0;
    Object.keys(correctFillAnswers).forEach(key => {
      if (normalizeAnswer(fillAnswers[key]) === normalizeAnswer(correctFillAnswers[key])) {
        correctFill++;
      }
    });
    setFillScore(correctFill);

    // Calculate multiple choice score
    let correctMc = 0;
    Object.keys(correctMcAnswers).forEach(key => {
      if (mcAnswers[key] === correctMcAnswers[key]) {
        correctMc++;
      }
    });
    setMcScore(correctMc);

    setShowResults(true);
  };

  const resetExercise = () => {
    setFillAnswers({
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
    setShowResults(false);
    setShowAnswers(false);
    setFillScore(0);
    setMcScore(0);
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

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-6">
            C1 Vocabulary: Phones and Technology
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Total Score: {fillScore + mcScore}/18
              </p>
              <p className="text-sm text-htb-text-dim">
                Part 1 (Phrasal Verbs): {fillScore}/10
              </p>
              <p className="text-sm text-htb-text-dim">
                Part 2 (Vocabulary): {mcScore}/8
              </p>
            </div>
          )}

          {/* Part 1: Fill in the Blanks */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-htb-green mb-4">Part 1: Phones and Technology</h2>
            <p className="text-htb-text mb-4">
              Complete the sentences with a phrasal verb from the list below. Use the correct form of the verb.
            </p>
            <p className="text-htb-text-dim mb-6 italic text-sm">
              cut off, free up, get through, hang up, log in, put through, run out, scroll down, speak up, top up
            </p>

            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-base leading-relaxed">
                She couldn't use her phone because she forgot to{' '}
                <input
                  type="text"
                  value={fillAnswers.q1}
                  onChange={(e) => handleFillChange('q1', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q1) === normalizeAnswer(correctFillAnswers.q1)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}her credit.
              </li>

              <li className="text-base leading-relaxed">
                To find the information, just{' '}
                <input
                  type="text"
                  value={fillAnswers.q2}
                  onChange={(e) => handleFillChange('q2', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q2) === normalizeAnswer(correctFillAnswers.q2)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}to the bottom of the page.
              </li>

              <li className="text-base leading-relaxed">
                It's rude to{' '}
                <input
                  type="text"
                  value={fillAnswers.q3}
                  onChange={(e) => handleFillChange('q3', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q3) === normalizeAnswer(correctFillAnswers.q3)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}the phone without saying goodbye.
              </li>

              <li className="text-base leading-relaxed">
                You need to remember your password so that you can{' '}
                <input
                  type="text"
                  value={fillAnswers.q4}
                  onChange={(e) => handleFillChange('q4', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q4) === normalizeAnswer(correctFillAnswers.q4)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}to the website.
              </li>

              <li className="text-base leading-relaxed">
                I've been trying to{' '}
                <input
                  type="text"
                  value={fillAnswers.q5}
                  onChange={(e) => handleFillChange('q5', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q5) === normalizeAnswer(correctFillAnswers.q5)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}to him all day but his phone just goes to voicemail.
              </li>

              <li className="text-base leading-relaxed">
                It's really noisy and I can't hear you. You'll have to{' '}
                <input
                  type="text"
                  value={fillAnswers.q6}
                  onChange={(e) => handleFillChange('q6', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q6) === normalizeAnswer(correctFillAnswers.q6)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                .
              </li>

              <li className="text-base leading-relaxed">
                When you call, ask to be{' '}
                <input
                  type="text"
                  value={fillAnswers.q7}
                  onChange={(e) => handleFillChange('q7', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q7) === normalizeAnswer(correctFillAnswers.q7)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}to Customer Service.
              </li>

              <li className="text-base leading-relaxed">
                Hello it's me again. Sorry we were{' '}
                <input
                  type="text"
                  value={fillAnswers.q8}
                  onChange={(e) => handleFillChange('q8', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q8) === normalizeAnswer(correctFillAnswers.q8)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                .
              </li>

              <li className="text-base leading-relaxed">
                If you delete some of these old apps, it will{' '}
                <input
                  type="text"
                  value={fillAnswers.q9}
                  onChange={(e) => handleFillChange('q9', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q9) === normalizeAnswer(correctFillAnswers.q9)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}space for new ones.
              </li>

              <li className="text-base leading-relaxed">
                The ink{' '}
                <input
                  type="text"
                  value={fillAnswers.q10}
                  onChange={(e) => handleFillChange('q10', e.target.value)}
                  className={`inline-block w-32 bg-htb-bg border-2 ${
                    showAnswers
                      ? normalizeAnswer(fillAnswers.q10) === normalizeAnswer(correctFillAnswers.q10)
                        ? 'border-htb-green'
                        : 'border-red-500'
                      : 'border-gray-700'
                  } rounded px-2 py-1 text-sm focus:outline-none focus:border-htb-green`}
                  placeholder="..."
                />
                {' '}too fast in this printer and it's very expensive.
              </li>
            </ol>
          </div>

          {/* Part 2: Multiple Choice */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-htb-green mb-4">Part 2: Phones and Technology</h2>
            <p className="text-htb-text mb-6 font-semibold">
              Choose the correct answer.
            </p>

            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-base leading-relaxed">
                If you want to delete his number, go into your{' '}
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
                .
              </li>

              <li className="text-base leading-relaxed">
                I've got three{' '}
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
                {' '}calls from an unknown number.
              </li>

              <li className="text-base leading-relaxed">
                It's difficult to get a good{' '}
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
                {' '}in my parent's village.
              </li>

              <li className="text-base leading-relaxed">
                My computer's been infected with a{' '}
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
                {' '}and I can't access my email.
              </li>

              <li className="text-base leading-relaxed">
                This smart phone has more features and the{' '}
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
                {' '}is bigger too.
              </li>

              <li className="text-base leading-relaxed">
                Most internet businesses use{' '}
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
                {' '}because it's a good way for them to collect information about your online habits.
              </li>

              <li className="text-base leading-relaxed">
                She's got very poor reception so if I were you, I'd call her{' '}
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
                .
              </li>

              <li className="text-base leading-relaxed">
                Ben asked me to{' '}
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
                {' '}him a call this afternoon.
              </li>
            </ol>
          </div>

          {showAnswers && (
            <div className="p-4 bg-htb-green/10 border border-htb-green/30 rounded-lg">
              <h3 className="font-bold text-htb-green mb-2">Correct Answers:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-htb-text mb-2">Part 1:</h4>
                  <div className="space-y-1 text-sm">
                    {Object.keys(correctFillAnswers).map((key, index) => (
                      <div key={key}>
                        <span className="text-htb-green font-semibold">{index + 1}.</span>{' '}
                        <span className={normalizeAnswer(fillAnswers[key]) === normalizeAnswer(correctFillAnswers[key]) ? 'text-htb-green' : 'text-red-400'}>
                          {correctFillAnswers[key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-htb-text mb-2">Part 2:</h4>
                  <div className="space-y-1 text-sm">
                    {Object.keys(correctMcAnswers).map((key, index) => (
                      <div key={key}>
                        <span className="text-htb-green font-semibold">{index + 1}.</span>{' '}
                        <span className={mcAnswers[key] === correctMcAnswers[key] ? 'text-htb-green' : 'text-red-400'}>
                          {correctMcAnswers[key]}
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

export default PhonesTechnologyC1Exercise;
