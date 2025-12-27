import { useState } from 'react';

const UtensilsC1Exercise = () => {
  const questions = [
    {
      id: 'q1',
      text: "You'll need to use a _____ to make sure the flour doesn't have any lumps in it.",
      options: ['baking tray', 'kettle', 'sieve'],
      correct: 'sieve'
    },
    {
      id: 'q2',
      text: 'Pour some oil into the _____ and, when it is hot, add the meat.',
      options: ['frying pan', 'chopping board', 'colander'],
      correct: 'frying pan'
    },
    {
      id: 'q3',
      text: 'First, boil some water in the _____.',
      options: ['food processor', 'kettle', 'sieve'],
      correct: 'kettle'
    },
    {
      id: 'q4',
      text: 'When you have cut out the biscuit shapes, you should space them out on the _____ and bake them in the oven.',
      options: ['baking tray', 'mixing bowl', 'chopping board'],
      correct: 'baking tray'
    },
    {
      id: 'q5',
      text: 'He used a fork to beat the eggs but it would have been quicker with a _____.',
      options: ['colander', 'saucepan', 'whisk'],
      correct: 'whisk'
    },
    {
      id: 'q6',
      text: 'As soon as the pasta is ready, tip it into a _____ to drain the water away.',
      options: ['colander', 'frying pan', 'kettle'],
      correct: 'colander'
    },
    {
      id: 'q7',
      text: 'Put the eggs, milk and water into the _____ and stir them well.',
      options: ['baking tray', 'mixing bowl', 'kettle'],
      correct: 'mixing bowl'
    },
    {
      id: 'q8',
      text: 'My _____ can make dough in just a few minutes.',
      options: ['kettle', 'frying pan', 'food processor'],
      correct: 'food processor'
    }
  ];

  const [answers, setAnswers] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({
      q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: ''
    });
    setShowResults(false);
    setScore(0);
    setShowAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setShowResults(true);
  };

  const getSelectStyle = (questionId, correctAnswer) => {
    if (!showAnswers) return 'border-htb-text-dim';
    if (answers[questionId] === correctAnswer) {
      return 'border-htb-green';
    }
    return 'border-red-500';
  };

  return (
    <div className="min-h-screen bg-htb-bg text-htb-text p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-htb-green mb-6">Utensils</h1>
        
        <p className="text-htb-text-dim mb-8">
          Choose the correct answer.
        </p>

        <ol className="space-y-6 mb-8">
          {questions.map((question, index) => (
            <li key={question.id} className="flex gap-3">
              <span className="text-htb-green font-bold">{index + 1}.</span>
              <div className="flex-1">
                <p className="mb-3">{question.text}</p>
                <select
                  value={answers[question.id]}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  className={`w-full sm:w-64 bg-htb-bg border-2 ${getSelectStyle(question.id, question.correct)} text-htb-text px-3 py-2 rounded focus:outline-none focus:border-htb-green`}
                >
                  <option value="">...</option>
                  {question.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {showAnswers && answers[question.id] !== question.correct && (
                  <div className="mt-2 text-htb-green">
                    <strong>Correct answer:</strong> {question.correct}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        {showResults && (
          <div className="bg-htb-card p-6 rounded-lg border border-htb-text-dim mb-6">
            <h2 className="text-2xl font-bold text-htb-green mb-2">Results</h2>
            <p className="text-xl mb-2">
              Score: <span className="text-htb-green font-bold">{score}/8</span>
            </p>
            {score === 8 && (
              <p className="text-htb-green">Well done!</p>
            )}
            {score < 8 && (
              <p className="text-red-500">Please try again.</p>
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

export default UtensilsC1Exercise;
