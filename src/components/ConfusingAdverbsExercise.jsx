import React, { useState } from 'react';

const ConfusingAdverbsExercise = () => {
  const adverbPairs = [
    { pair: 'at the moment / actually', explanation: 'at the moment = now / actually = in fact' },
    { pair: 'especially / specially', explanation: 'especially = particularly / specially = for a specific purpose' },
    { pair: 'ever / even', explanation: 'ever = at any time / even = used for emphasis' },
    { pair: 'hard / hardly', explanation: 'hard = with effort / hardly = almost not' },
    { pair: 'in the end / at the end', explanation: 'in the end = finally / at the end = at the final part' },
    { pair: 'late / lately', explanation: 'late = not on time / lately = recently' },
    { pair: 'near / nearly', explanation: 'near = close to / nearly = almost' },
    { pair: 'still / yet', explanation: 'still = continuing / yet = up to now (negative/questions)' }
  ];

  const questions = [
    {
      id: 1,
      number: '1 a.',
      text: 'He trains very',
      textAfter: '– at least three hours a day.',
      correct: 'hard',
      pairIndex: 3
    },
    {
      id: 2,
      number: '   b.',
      text: "It's incredibly foggy. I can",
      textAfter: 'see anything.',
      correct: 'hardly',
      pairIndex: 3
    },
    {
      id: 3,
      number: '2 a.',
      text: 'I hate it when people arrive',
      textAfter: 'for meetings.',
      correct: 'late',
      pairIndex: 5
    },
    {
      id: 4,
      number: '   b.',
      text: "I haven't heard from Mike",
      textAfter: '. He must be very busy.',
      correct: 'lately',
      pairIndex: 5
    },
    {
      id: 5,
      number: '3 a.',
      text: '',
      textAfter: 'of a film, I always stay and watch the credits roll.',
      correct: 'At the end',
      pairIndex: 4
    },
    {
      id: 6,
      number: '   b.',
      text: "I didn't want to go, but",
      textAfter: ', they persuaded me.',
      correct: 'in the end',
      pairIndex: 4
    },
    {
      id: 7,
      number: '4 a.',
      text: 'I love most kinds of music, but',
      textAfter: 'jazz.',
      correct: 'especially',
      pairIndex: 1
    },
    {
      id: 8,
      number: '   b.',
      text: 'My wedding dress was',
      textAfter: 'made for me by a dressmaker.',
      correct: 'specially',
      pairIndex: 1
    },
    {
      id: 9,
      number: '5 a.',
      text: 'She looks younger than me, but',
      textAfter: "she's two years older.",
      correct: 'actually',
      pairIndex: 0
    },
    {
      id: 10,
      number: '   b.',
      text: '',
      textAfter: "they're renting a flat, but they're hoping to buy one soon.",
      correct: 'At the moment',
      pairIndex: 0
    },
    {
      id: 11,
      number: '6 a.',
      text: "I've",
      textAfter: 'finished my book. I\'m on the last chapter.',
      correct: 'nearly',
      pairIndex: 6
    },
    {
      id: 12,
      number: '   b.',
      text: 'Excuse me, is there a bank',
      textAfter: 'here?',
      correct: 'near',
      pairIndex: 6
    },
    {
      id: 13,
      number: '7 a.',
      text: 'Have you found a job',
      textAfter: '?',
      correct: 'yet',
      pairIndex: 7
    },
    {
      id: 14,
      number: '   b.',
      text: "He's 35, but he",
      textAfter: 'lives with his parents.',
      correct: 'still',
      pairIndex: 7
    },
    {
      id: 15,
      number: '8 a.',
      text: 'Have you',
      textAfter: 'been to the USA?',
      correct: 'ever',
      pairIndex: 2
    },
    {
      id: 16,
      number: '   b.',
      text: "I've been all over the USA – I've",
      textAfter: 'been to Alaska!',
      correct: 'even',
      pairIndex: 2
    }
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
    questions.forEach(question => {
      const userAnswer = answers[question.id]?.trim().toLowerCase();
      const correctAnswer = question.correct.toLowerCase();
      if (userAnswer === correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const isCorrect = (questionId) => {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = answers[questionId]?.trim().toLowerCase();
    const correctAnswer = question.correct.toLowerCase();
    return userAnswer === correctAnswer;
  };

  const score = calculateScore();
  const totalQuestions = questions.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Confusing Adverbs</h1>
        <p className="text-htb-text">Intermediate B1 - Choose the correct adverb to complete each sentence</p>
      </div>

      {/* Adverb Pairs Reference */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Adverb Pairs:</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {adverbPairs.map((item, index) => (
            <div key={index} className="bg-htb-card border border-gray-800 rounded p-3">
              <div className="text-htb-green font-bold mb-1">{item.pair}</div>
              <div className="text-htb-text text-sm">{item.explanation}</div>
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
                ? 'Perfect! You master these adverbs!' 
                : score >= totalQuestions * 0.8 
                ? 'Great job! Almost there!' 
                : score >= totalQuestions * 0.6
                ? 'Good effort! Keep practicing.'
                : 'Keep studying the differences!'}
            </p>
          </div>
        </div>
      )}

      {/* Exercise */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id] || '';
            const showFeedback = showResults && userAnswer.trim();
            const correct = isCorrect(question.id);

            return (
              <div key={question.id} className="flex items-start gap-3">
                <span className="text-htb-text font-bold min-w-[50px]">{question.number}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-htb-text">
                    {question.text && <span>{question.text}</span>}
                    
                    <div className="relative inline-block">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className={`px-3 py-1.5 rounded border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all text-center ${
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

                    <span>{question.textAfter}</span>
                  </div>

                  {/* Show correct answer if wrong */}
                  {showFeedback && !correct && userAnswer.trim() && (
                    <div className="mt-2 ml-14 text-sm">
                      <span className="text-htb-text-dim">Correct answer: </span>
                      <span className="text-htb-green font-semibold">{question.correct}</span>
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
        <h3 className="text-xl font-bold text-white mb-4">📖 Detailed Explanations</h3>
        <div className="space-y-4">
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">hard vs hardly</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">hard</span> = with a lot of effort, intensely
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: She works hard to support her family.
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">hardly</span> = almost not, scarcely
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: I hardly know him. (= I know him very little)
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">late vs lately</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">late</span> = not on time, after the expected time
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: The train arrived late.
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">lately</span> = recently
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: Have you seen any good films lately?
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">at the end vs in the end</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">at the end</span> = at the final part (of something)
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: There's a surprise at the end of the book.
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">in the end</span> = finally, eventually
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: We had problems, but in the end everything worked out.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">especially vs specially</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">especially</span> = particularly, more than usual
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: I love all animals, especially cats.
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">specially</span> = for a specific purpose
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: This cake was specially made for your birthday.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">actually vs at the moment</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">actually</span> = in fact, really
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: He looks young but he's actually 50.
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">at the moment</span> = now, currently
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: I'm busy at the moment. Can I call you back?
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">near vs nearly</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">near</span> = close to (in distance)
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: Is there a bank near here?
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">nearly</span> = almost
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: I've nearly finished my homework.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">still vs yet</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">still</span> = continuing, not finished (positive sentences)
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: He still lives with his parents.
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">yet</span> = up to now (negative/questions)
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: Have you finished yet? / I haven't finished yet.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <h4 className="text-htb-green font-bold mb-2">ever vs even</h4>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">ever</span> = at any time (questions/negatives)
            </p>
            <p className="text-htb-text-dim text-xs mb-3">
              Example: Have you ever been to Japan?
            </p>
            <p className="text-htb-text text-sm mb-2">
              <span className="font-semibold text-white">even</span> = used for emphasis (surprising information)
            </p>
            <p className="text-htb-text-dim text-xs">
              Example: Everyone came, even people I didn't invite!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfusingAdverbsExercise;
