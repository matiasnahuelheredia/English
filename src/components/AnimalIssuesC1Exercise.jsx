import { useState, useEffect } from 'react';

const AnimalIssuesC1Exercise = () => {
  const correctSentences = {
    s1: ['I', 'support', 'an', 'organization', 'which', 'protects', 'animals', 'and', 'their', 'environments.'],
    s2: ['Many', 'people', 'believe', 'it', 'is', 'wrong', 'to', 'hunt', 'animals', 'for', 'sport.'],
    s3: ['Animal', 'rights', 'activists', 'protest', 'against', 'the', 'fur', 'trade.'],
    s4: ['I', "won't", 'go', 'to', 'any', 'events', 'where', 'animals', 'are', 'treated', 'cruelly.'],
    s5: ['Animals', 'bred', 'in', 'captivity', 'may', 'struggle', 'to', 'survive', 'when', 'they', 'are', 'released', 'in', 'the', 'wild.'],
    s6: ['On', 'safari', 'you', 'can', 'see', 'animals', 'living', 'in', 'the', 'wild.'],
    s7: ['The', 'black', 'rhino', 'is', 'one', 'of', 'the', 'most', 'endangered', 'species', 'on', 'Earth.'],
    s8: ['We', 'should', 'protest', 'against', 'animals', 'transported', 'in', 'inhumane', 'conditions.']
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const [reorderedSentences, setReorderedSentences] = useState({
    s1: [], s2: [], s3: [], s4: [], s5: [], s6: [], s7: [], s8: []
  });

  const [availableWords, setAvailableWords] = useState({
    s1: [], s2: [], s3: [], s4: [], s5: [], s6: [], s7: [], s8: []
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    const initialAvailable = {};
    Object.keys(correctSentences).forEach(key => {
      initialAvailable[key] = shuffleArray(correctSentences[key]);
    });
    setAvailableWords(initialAvailable);
  }, []);

  const addWord = (sentenceKey, word) => {
    setReorderedSentences(prev => ({
      ...prev,
      [sentenceKey]: [...prev[sentenceKey], word]
    }));
    setAvailableWords(prev => ({
      ...prev,
      [sentenceKey]: prev[sentenceKey].filter(w => w !== word)
    }));
  };

  const removeWord = (sentenceKey, word) => {
    setAvailableWords(prev => ({
      ...prev,
      [sentenceKey]: [...prev[sentenceKey], word]
    }));
    setReorderedSentences(prev => ({
      ...prev,
      [sentenceKey]: prev[sentenceKey].filter(w => w !== word)
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    Object.keys(correctSentences).forEach(key => {
      const userSentence = reorderedSentences[key].join(' ');
      const correctSentence = correctSentences[key].join(' ');
      if (userSentence === correctSentence) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  const resetExercise = () => {
    const initialAvailable = {};
    Object.keys(correctSentences).forEach(key => {
      initialAvailable[key] = shuffleArray(correctSentences[key]);
    });
    setAvailableWords(initialAvailable);
    setReorderedSentences({
      s1: [], s2: [], s3: [], s4: [], s5: [], s6: [], s7: [], s8: []
    });
    setShowResults(false);
    setScore(0);
    setShowAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setShowResults(true);
  };

  const getSentenceFeedback = (sentenceKey) => {
    if (!showAnswers) return '';
    const userSentence = reorderedSentences[sentenceKey].join(' ');
    const correctSentence = correctSentences[sentenceKey].join(' ');
    return userSentence === correctSentence ? 'correct' : 'incorrect';
  };

  const renderSentenceBlock = (sentenceKey, number) => {
    const feedback = getSentenceFeedback(sentenceKey);
    const borderClass = showAnswers 
      ? (feedback === 'correct' ? 'border-htb-green' : 'border-red-500')
      : 'border-htb-card';

    return (
      <div key={sentenceKey} className={`mb-6 p-4 bg-htb-card rounded-lg border-2 ${borderClass}`}>
        <div className="flex items-start mb-3">
          <span className="text-htb-green font-bold mr-2">{number}.</span>
          <div className="flex-1">
            <div className="min-h-[60px] p-3 bg-htb-bg rounded border border-htb-text-dim flex flex-wrap gap-2 items-start">
              {reorderedSentences[sentenceKey].map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => removeWord(sentenceKey, word)}
                  className="px-3 py-1 bg-htb-green text-htb-bg rounded hover:opacity-80 transition-opacity font-medium"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ml-6">
          {availableWords[sentenceKey]?.map((word, idx) => (
            <button
              key={idx}
              onClick={() => addWord(sentenceKey, word)}
              className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors"
            >
              {word}
            </button>
          ))}
        </div>
        {showAnswers && feedback === 'incorrect' && (
          <div className="mt-3 ml-6 text-htb-green">
            <strong>Correct answer:</strong> {correctSentences[sentenceKey].join(' ')}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-htb-bg text-htb-text p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-htb-green mb-6">Animal Issues</h1>
        
        <p className="text-htb-text-dim mb-8">
          Click on the words in the correct order to form complete sentences.
        </p>

        <div className="space-y-4 mb-8">
          {renderSentenceBlock('s1', 1)}
          {renderSentenceBlock('s2', 2)}
          {renderSentenceBlock('s3', 3)}
          {renderSentenceBlock('s4', 4)}
          {renderSentenceBlock('s5', 5)}
          {renderSentenceBlock('s6', 6)}
          {renderSentenceBlock('s7', 7)}
          {renderSentenceBlock('s8', 8)}
        </div>

        {showResults && (
          <div className="bg-htb-card p-6 rounded-lg border border-htb-text-dim mb-6">
            <h2 className="text-2xl font-bold text-htb-green mb-2">Results</h2>
            <p className="text-xl">
              Score: <span className="text-htb-green font-bold">{score}/8</span>
            </p>
            {score === 8 && (
              <p className="text-htb-green mt-2">Perfect! All sentences are correct!</p>
            )}
            {score >= 6 && score < 8 && (
              <p className="text-yellow-500 mt-2">Well done! Keep practicing.</p>
            )}
            {score < 6 && (
              <p className="text-red-500 mt-2">Please try again and review the sentence structure.</p>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          <button
            onClick={calculateScore}
            className="px-6 py-2 bg-htb-green text-htb-bg font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Score
          </button>
          <button
            onClick={resetExercise}
            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-500 transition-colors"
          >
            Start again
          </button>
          <button
            onClick={handleShowAnswers}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition-colors"
          >
            Show answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalIssuesC1Exercise;
