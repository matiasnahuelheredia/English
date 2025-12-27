import React, { useState } from 'react';

const MoneyVocabularyC1Exercise = () => {
  // Part 1: Word reordering state
  const [reorderedSentences, setReorderedSentences] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: []
  });

  const [availableWords, setAvailableWords] = useState({
    0: ['You', 'should', 'borrow', 'money', 'when', 'the', 'interest', 'rate', 'is', 'low.'],
    1: ['Before', 'you', 'buy', 'foreign', 'currency,', 'check', 'the', 'exchange', 'rate.'],
    2: ['The', 'standard', 'of', 'living', 'has', 'improved', 'recently.'],
    3: ['Going', 'bankrupt', 'is', 'common', 'for', 'small', 'companies', 'during', 'a', 'recession.'],
    4: ['I', 'find', 'it', 'easy', 'to', 'manage', 'my', 'bank', 'account', 'online.'],
    5: ['She', 'wants', 'to', 'buy', 'a', 'new', 'car', 'but', "can't", 'afford', 'one.'],
    6: ['The', 'cost', 'of', 'living', 'is', 'high', 'due', 'to', 'inflation.'],
    7: ['Few', 'people', 'can', 'buy', 'property', 'without', 'getting', 'a', 'mortgage.']
  });

  // Part 2: Fill in the blanks state
  const [fillAnswers, setFillAnswers] = useState({
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
  const [orderScore, setOrderScore] = useState(0);
  const [fillScore, setFillScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const correctSentences = {
    0: 'You should borrow money when the interest rate is low.',
    1: 'Before you buy foreign currency, check the exchange rate.',
    2: 'The standard of living has improved recently.',
    3: 'Going bankrupt is common for small companies during a recession.',
    4: 'I find it easy to manage my bank account online.',
    5: "She wants to buy a new car but can't afford one.",
    6: 'The cost of living is high due to inflation.',
    7: 'Few people can buy property without getting a mortgage.'
  };

  const correctFillAnswers = {
    q1: 'grant',
    q2: 'loan',
    q3: 'donation',
    q4: 'instalments',
    q5: 'sum',
    q6: 'deposit',
    q7: 'savings',
    q8: 'will'
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const addWord = (sentenceIndex, word) => {
    setReorderedSentences(prev => ({
      ...prev,
      [sentenceIndex]: [...prev[sentenceIndex], word]
    }));
    setAvailableWords(prev => ({
      ...prev,
      [sentenceIndex]: prev[sentenceIndex].filter(w => w !== word)
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const removeWord = (sentenceIndex, word, wordIndex) => {
    setReorderedSentences(prev => ({
      ...prev,
      [sentenceIndex]: prev[sentenceIndex].filter((_, index) => index !== wordIndex)
    }));
    setAvailableWords(prev => ({
      ...prev,
      [sentenceIndex]: [...prev[sentenceIndex], word]
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

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim();
  };

  const calculateScore = () => {
    // Calculate word reordering score
    let correctOrder = 0;
    Object.keys(correctSentences).forEach(key => {
      const userSentence = reorderedSentences[key].join(' ');
      if (userSentence === correctSentences[key]) {
        correctOrder++;
      }
    });
    setOrderScore(correctOrder);

    // Calculate fill-in-the-blank score
    let correctFill = 0;
    Object.keys(correctFillAnswers).forEach(key => {
      if (normalizeAnswer(fillAnswers[key]) === normalizeAnswer(correctFillAnswers[key])) {
        correctFill++;
      }
    });
    setFillScore(correctFill);

    setShowResults(true);
  };

  const resetExercise = () => {
    const initialWords = {
      0: shuffleArray(['You', 'should', 'borrow', 'money', 'when', 'the', 'interest', 'rate', 'is', 'low.']),
      1: shuffleArray(['Before', 'you', 'buy', 'foreign', 'currency,', 'check', 'the', 'exchange', 'rate.']),
      2: shuffleArray(['The', 'standard', 'of', 'living', 'has', 'improved', 'recently.']),
      3: shuffleArray(['Going', 'bankrupt', 'is', 'common', 'for', 'small', 'companies', 'during', 'a', 'recession.']),
      4: shuffleArray(['I', 'find', 'it', 'easy', 'to', 'manage', 'my', 'bank', 'account', 'online.']),
      5: shuffleArray(['She', 'wants', 'to', 'buy', 'a', 'new', 'car', 'but', "can't", 'afford', 'one.']),
      6: shuffleArray(['The', 'cost', 'of', 'living', 'is', 'high', 'due', 'to', 'inflation.']),
      7: shuffleArray(['Few', 'people', 'can', 'buy', 'property', 'without', 'getting', 'a', 'mortgage.'])
    };
    
    setAvailableWords(initialWords);
    setReorderedSentences({
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: []
    });
    setFillAnswers({
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
    setOrderScore(0);
    setFillScore(0);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    calculateScore();
  };

  React.useEffect(() => {
    resetExercise();
  }, []);

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-htb-green mb-6">
            C1 Vocabulary: Money
          </h1>
          
          {showResults && (
            <div className="mb-6 p-4 bg-htb-sidebar border border-htb-green/30 rounded-lg">
              <p className="text-lg font-bold text-htb-green mb-2">
                Total Score: {orderScore + fillScore}/16
              </p>
              <p className="text-sm text-htb-text-dim">
                Part 1 (Word Order): {orderScore}/8
              </p>
              <p className="text-sm text-htb-text-dim">
                Part 2 (Fill in the Blanks): {fillScore}/8
              </p>
            </div>
          )}

          {/* Part 1: Word Reordering */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-htb-green mb-4">Part 1: Money</h2>
            <p className="text-htb-text mb-4 font-semibold">
              Click on the sentences in the correct order.
            </p>

            <div className="space-y-6">
              {Object.keys(correctSentences).map((key) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-htb-green font-bold">{parseInt(key) + 1}.</span>
                    <div className="flex-1 min-h-[2.5rem] bg-htb-sidebar border-2 border-gray-700 rounded-lg p-2 flex flex-wrap gap-1">
                      {reorderedSentences[key].map((word, index) => (
                        <button
                          key={index}
                          onClick={() => removeWord(key, word, index)}
                          className="bg-htb-green text-htb-bg px-2 py-1 rounded text-sm font-medium hover:bg-htb-green/80 transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 ml-8">
                    {availableWords[key].map((word, index) => (
                      <button
                        key={index}
                        onClick={() => addWord(key, word)}
                        className="bg-htb-bg border border-gray-700 text-htb-text px-2 py-1 rounded text-sm hover:bg-htb-sidebar transition-colors"
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                  {showAnswers && (
                    <div className="ml-8 text-sm">
                      {reorderedSentences[key].join(' ') === correctSentences[key] ? (
                        <span className="text-htb-green">✓ Correct</span>
                      ) : (
                        <span className="text-red-400">
                          ✗ Correct answer: {correctSentences[key]}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Fill in the Blanks */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-htb-green mb-4">Part 2: Money</h2>
            <p className="text-htb-text mb-4 font-semibold">
              Complete the text using one word in each space.
            </p>

            <div className="bg-htb-sidebar border border-gray-700 rounded-lg p-4 text-base leading-relaxed">
              <p>
                Andrew was very lucky to get a government{' '}
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
                {' '}to study zoology but his sister, Rosie, had to take out a bank{' '}
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
                {' '}for her university course. After graduating, Andrew got a job with a wildlife charity and was lucky again when a wealthy animal-lover decided to make a large{' '}
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
                . This meant he could go to the Antarctic to do some research. Rosie went to work for a bank and paid back the money she had borrowed in{' '}
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
                . She worked hard and was promoted so she was able to save a lump{' '}
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
                {' '}to use as a{' '}
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
                {' '}on her first flat. Andrew never bought a flat but by the end of his life, he had a lot of{' '}
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
                {' '}in the bank and he left all of this money to the wildlife charity in his{' '}
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
              </p>
            </div>

            {showAnswers && (
              <div className="mt-4 p-4 bg-htb-green/10 border border-htb-green/30 rounded-lg">
                <h3 className="font-bold text-htb-green mb-2">Correct Answers (Part 2):</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>1. {correctFillAnswers.q1}</div>
                  <div>2. {correctFillAnswers.q2}</div>
                  <div>3. {correctFillAnswers.q3}</div>
                  <div>4. {correctFillAnswers.q4}</div>
                  <div>5. {correctFillAnswers.q5}</div>
                  <div>6. {correctFillAnswers.q6}</div>
                  <div>7. {correctFillAnswers.q7}</div>
                  <div>8. {correctFillAnswers.q8}</div>
                </div>
              </div>
            )}
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

export default MoneyVocabularyC1Exercise;
