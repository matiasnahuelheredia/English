import React, { useState } from 'react';

const SentenceAdverbsExercise = () => {
  const examples = [
    { letter: 'A', sentence: "I thought the job was going to be difficult, but", adverb: 'in fact', after: "it's quite easy." },
    { letter: 'B', sentence: "It took us over five hours to get there, but", adverb: 'eventually', after: "we were able to relax." },
    { letter: 'C', adverb: 'Ideally', sentence: ", we'd go to Australia if we could afford it.", after: "" },
    { letter: 'D', adverb: 'Basically', sentence: ", it's quite a simple idea.", after: "" },
    { letter: 'E', sentence: "I thought they'd broken up, but", adverb: 'apparently', after: ", they're back together again." },
    { letter: 'F', sentence: "I'm", adverb: 'certainly', after: "never going back to that restaurant. It was awful!" },
    { letter: 'G', sentence: "She's only 14, so", adverb: 'obviously', after: "she can't stay at home on her own." },
    { letter: 'H', sentence: "She's been ill for weeks, but", adverb: 'gradually', after: "she's beginning to feel better." }
  ];

  const definitions = [
    { id: 1, definition: 'in a perfect world', correct: 'Ideally' },
    { id: 2, definition: 'the truth is; actually (used to emphasize the opposite of what was previously said)', correct: 'in fact' },
    { id: 3, definition: 'in the main and most important way', correct: 'Basically' },
    { id: 4, definition: 'clearly (used to give information you expect other people to know or agree with)', correct: 'obviously' },
    { id: 5, definition: 'little by little', correct: 'gradually' },
    { id: 6, definition: 'according to what you have heard or read', correct: 'apparently' },
    { id: 7, definition: 'without doubt', correct: 'certainly' },
    { id: 8, definition: 'in the end; after a series of events or difficulties', correct: 'eventually' }
  ];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    setShowResults(false);
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    definitions.forEach(def => {
      const userAnswer = answers[def.id]?.trim().toLowerCase();
      const correctAnswer = def.correct.toLowerCase();
      if (userAnswer === correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const isCorrect = (questionId) => {
    const definition = definitions.find(d => d.id === questionId);
    const userAnswer = answers[questionId]?.trim().toLowerCase();
    const correctAnswer = definition.correct.toLowerCase();
    return userAnswer === correctAnswer;
  };

  const score = calculateScore();
  const totalQuestions = definitions.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Sentence Adverbs</h1>
        <p className="text-htb-text">Intermediate B1 - Match the adverbs with their definitions</p>
      </div>

      {/* Examples Section */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">📖 Example Sentences:</h3>
        <div className="space-y-3">
          {examples.map((example) => (
            <div key={example.letter} className="flex items-start gap-3 text-htb-text">
              <span className="font-bold text-htb-green min-w-[25px]">{example.letter}</span>
              <p>
                {example.sentence && <span>{example.sentence} </span>}
                <span className="font-bold text-htb-green">{example.adverb}</span>
                {example.after && <span> {example.after}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Score Display */}
      {showResults && (
        <div className="bg-htb-card border border-htb-green/30 rounded-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {score === totalQuestions ? '🏆' : score >= totalQuestions * 0.8 ? '✅' : score >= totalQuestions * 0.6 ? '📝' : '💪'}
            </div>
            <p className="text-4xl font-bold text-htb-green mb-4">
              {score}/{totalQuestions}
            </p>
            <div className="w-full bg-htb-sidebar rounded-full h-6 mb-6 max-w-md mx-auto">
              <div
                className="bg-htb-green h-6 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${(score / totalQuestions) * 100}%` }}
              >
                <span className="text-xs font-bold text-htb-bg">
                  {Math.round((score / totalQuestions) * 100)}%
                </span>
              </div>
            </div>
            <p className={`text-xl font-semibold ${
              score === totalQuestions 
                ? 'text-htb-green' 
                : score >= totalQuestions * 0.8 
                ? 'text-blue-400' 
                : score >= totalQuestions * 0.6
                ? 'text-yellow-400'
                : 'text-orange-400'
            }`}>
              {score === totalQuestions 
                ? 'Perfect! You know these adverbs well!' 
                : score >= totalQuestions * 0.8 
                ? 'Great job! Almost perfect!' 
                : score >= totalQuestions * 0.6
                ? 'Good effort! Review the examples.'
                : 'Keep studying the definitions!'}
            </p>
          </div>
        </div>
      )}

      {/* Exercise */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
        <h3 className="text-xl font-bold text-white mb-6">✏️ Match the adverbs to their definitions:</h3>
        <div className="space-y-4">
          {definitions.map((def) => {
            const userAnswer = answers[def.id] || '';
            const showFeedback = showResults && userAnswer.trim();
            const correct = isCorrect(def.id);

            return (
              <div key={def.id} className="flex items-start gap-3">
                <span className="text-htb-text font-bold min-w-[30px]">{def.id}.</span>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="relative">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => handleAnswerChange(def.id, e.target.value)}
                        className={`px-3 py-2 rounded border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all text-center ${
                          showFeedback
                            ? correct
                              ? 'border-htb-green'
                              : 'border-red-500'
                            : 'border-gray-700 hover:border-htb-green/50'
                        }`}
                        style={{ width: '140px' }}
                        placeholder="..."
                      />
                      
                      {showFeedback && (
                        <span className={`ml-2 text-xl ${correct ? 'text-htb-green' : 'text-red-500'}`}>
                          {correct ? '✓' : '✗'}
                        </span>
                      )}
                    </div>
                    
                    <span className="text-htb-text flex-1">: {def.definition}</span>
                  </div>

                  {/* Show correct answer if wrong */}
                  {showFeedback && !correct && userAnswer.trim() && (
                    <div className="ml-[156px] text-sm">
                      <span className="text-htb-text-dim">Correct answer: </span>
                      <span className="text-htb-green font-semibold">{def.correct}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={handleCheck}
            className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            ✓ Check Answers
          </button>
          <button
            onClick={handleReset}
            className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🔄 Start Again
          </button>
        </div>
      </div>

      {/* Detailed Explanations */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Adverb Explanations</h3>
        <div className="space-y-4">
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">ideally</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> in a perfect world; in the best possible situation
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: Ideally, I'd like to work from home, but my boss won't allow it.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">in fact / actually</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> used to emphasize the truth, especially when it's different from what was expected
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: I thought it would be expensive, but in fact it was quite cheap.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">basically</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> in the most important or fundamental way; essentially
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: Basically, we need more money to complete the project.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">obviously</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> clearly; in a way that is easy to understand or see
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: Obviously, we can't finish this today. We need more time.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">gradually</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> slowly, over a period of time; little by little
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: The weather is gradually getting warmer as spring approaches.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">apparently</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> according to what you have heard or read; seemingly
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: Apparently, they're getting married next month. I heard it from Sarah.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">certainly</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> definitely; without any doubt
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: I will certainly be at the meeting tomorrow. You can count on me.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">eventually</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">Meaning:</span> in the end; after a series of events or difficulties
            </p>
            <p className="text-htb-text-dim text-xs">
              💡 Example: We got lost several times, but eventually we found the hotel.
            </p>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-6 bg-htb-card border border-htb-green/20 rounded-lg p-4">
          <h4 className="text-white font-bold mb-3">💡 Usage Tips:</h4>
          <ul className="space-y-2 text-htb-text text-sm">
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Sentence adverbs modify the entire sentence, not just one word</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>They often appear at the beginning or middle of a sentence</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>They're usually followed by a comma when at the beginning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>They express the speaker's attitude or comment about the situation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SentenceAdverbsExercise;
