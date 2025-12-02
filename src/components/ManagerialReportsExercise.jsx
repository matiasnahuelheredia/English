import React, { useState } from 'react';

const ManagerialReportsExercise = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Exercise 1: Fill in the blanks - Executive Summary
  const exercise1Questions = [
    {
      id: 1,
      text: "On November 28, our security team",
      textAfter: "unauthorized access to our customer database.",
      options: ['detected', 'prevented', 'ignored', 'caused'],
      correct: 'detected'
    },
    {
      id: 2,
      text: "The breach was",
      textAfter: "through our intrusion detection system at 14:30 GMT.",
      options: ['identified', 'hidden', 'deleted', 'created'],
      correct: 'identified'
    },
    {
      id: 3,
      text: "No financial information was",
      textAfter: ".",
      options: ['exposed', 'protected', 'encrypted', 'saved'],
      correct: 'exposed'
    },
    {
      id: 4,
      text: "Immediate actions",
      textAfter: "isolating affected systems and resetting user credentials.",
      options: ['included', 'excluded', 'avoided', 'delayed'],
      correct: 'included'
    },
    {
      id: 5,
      text: "To prevent future incidents, we",
      textAfter: "implementing multi-factor authentication across all systems.",
      options: ['recommend', 'reject', 'postpone', 'cancel'],
      correct: 'recommend'
    }
  ];

  // Exercise 2: Fill in the blanks - Performance Report
  const exercise2Questions = [
    {
      id: 1,
      text: "Our security team has",
      textAfter: "significant improvement across all KPIs this quarter.",
      options: ['demonstrated', 'avoided', 'prevented', 'reduced'],
      correct: 'demonstrated'
    },
    {
      id: 2,
      text: "Response time to incidents",
      textAfter: "by 35% compared to last quarter.",
      options: ['decreased', 'increased', 'remained', 'doubled'],
      correct: 'decreased'
    },
    {
      id: 3,
      text: "The team successfully",
      textAfter: "247 security threats this quarter.",
      options: ['mitigated', 'created', 'ignored', 'missed'],
      correct: 'mitigated'
    },
    {
      id: 4,
      text: "Key challenges",
      textAfter: "staff turnover and budget constraints.",
      options: ['included', 'solved', 'eliminated', 'prevented'],
      correct: 'included'
    },
    {
      id: 5,
      text: "We",
      textAfter: "a 20% improvement in overall security posture with these initiatives.",
      options: ['project', 'doubt', 'deny', 'reject'],
      correct: 'project'
    }
  ];

  // Exercise 3: Fill in the blanks - Post-Mortem Report
  const exercise3Questions = [
    {
      id: 1,
      text: "The attack",
      textAfter: "from a sophisticated phishing email.",
      options: ['originated', 'ended', 'stopped', 'failed'],
      correct: 'originated'
    },
    {
      id: 2,
      text: "An employee in finance",
      textAfter: "a malicious attachment.",
      options: ['opened', 'deleted', 'blocked', 'reported'],
      correct: 'opened'
    },
    {
      id: 3,
      text: "Our endpoint protection",
      textAfter: "to detect the threat.",
      options: ['failed', 'succeeded', 'managed', 'continued'],
      correct: 'failed'
    },
    {
      id: 4,
      text: "Backup verification processes",
      textAfter: "effective - full recovery was achieved.",
      options: ['proved', 'seemed', 'appeared', 'looked'],
      correct: 'proved'
    },
    {
      id: 5,
      text: "We have",
      textAfter: "mandatory security awareness training for all staff.",
      options: ['launched', 'cancelled', 'postponed', 'rejected'],
      correct: 'launched'
    }
  ];

  // Exercise 4: Fill in the blanks - Budget Proposal
  const exercise4Questions = [
    {
      id: 1,
      text: "Recent incidents have",
      textAfter: "critical vulnerabilities in our infrastructure.",
      options: ['exposed', 'hidden', 'resolved', 'prevented'],
      correct: 'exposed'
    },
    {
      id: 2,
      text: "This investment will",
      textAfter: "risk exposure by 75%.",
      options: ['reduce', 'increase', 'maintain', 'double'],
      correct: 'reduce'
    },
    {
      id: 3,
      text: "The total investment",
      textAfter: "$400,000 over the next fiscal year.",
      options: ['amounts to', 'exceeds', 'falls below', 'eliminates'],
      correct: 'amounts to'
    },
    {
      id: 4,
      text: "We expect a 60%",
      textAfter: "in successful security incidents.",
      options: ['reduction', 'increase', 'stability', 'growth'],
      correct: 'reduction'
    },
    {
      id: 5,
      text: "The three-year ROI is",
      textAfter: "at 147%.",
      options: ['projected', 'limited', 'capped', 'restricted'],
      correct: 'projected'
    }
  ];

  // Exercise 5: Fill in the blanks - Strategic Recommendations
  const exercise5Questions = [
    {
      id: 1,
      text: "Our security maturity level is",
      textAfter: "as 'Reactive' on the CMMI scale.",
      options: ['classified', 'promoted', 'upgraded', 'advanced'],
      correct: 'classified'
    },
    {
      id: 2,
      text: "Leading organizations have",
      textAfter: "zero-trust architecture.",
      options: ['adopted', 'rejected', 'ignored', 'avoided'],
      correct: 'adopted'
    },
    {
      id: 3,
      text: "We recommend",
      textAfter: "AI-powered threat intelligence systems.",
      options: ['deploying', 'removing', 'disabling', 'abandoning'],
      correct: 'deploying'
    },
    {
      id: 4,
      text: "Without these improvements, we",
      textAfter: "HIGH risk of a significant data breach.",
      options: ['face', 'avoid', 'eliminate', 'prevent'],
      correct: 'face'
    },
    {
      id: 5,
      text: "The estimated investment",
      textAfter: "$2.1M over three years.",
      options: ['totals', 'exceeds', 'reduces', 'minimizes'],
      correct: 'totals'
    }
  ];

  const exercises = [
    { title: 'Exercise 1: Executive Summary', questions: exercise1Questions },
    { title: 'Exercise 2: Performance Report', questions: exercise2Questions },
    { title: 'Exercise 3: Post-Mortem Report', questions: exercise3Questions },
    { title: 'Exercise 4: Budget Proposal', questions: exercise4Questions },
    { title: 'Exercise 5: Strategic Recommendations', questions: exercise5Questions }
  ];

  const currentExercise = exercises[activeTab - 1];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  const handleAnswerChange = (exerciseNum, questionId, value) => {
    setAnswers({
      ...answers,
      [`${exerciseNum}-${questionId}`]: value
    });
  };

  const handleCheck = (exerciseNum) => {
    setShowResults({
      ...showResults,
      [exerciseNum]: true
    });
  };

  const handleReset = (exerciseNum) => {
    const newAnswers = { ...answers };
    currentExercise.questions.forEach(q => {
      delete newAnswers[`${exerciseNum}-${q.id}`];
    });
    setAnswers(newAnswers);
    
    const newResults = { ...showResults };
    delete newResults[exerciseNum];
    setShowResults(newResults);
  };

  const calculateScore = (exerciseNum, questions) => {
    let correct = 0;
    questions.forEach(question => {
      const userAnswer = answers[`${exerciseNum}-${question.id}`];
      if (userAnswer === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const isCorrect = (exerciseNum, questionId) => {
    const question = currentExercise.questions.find(q => q.id === questionId);
    return answers[`${exerciseNum}-${questionId}`] === question.correct;
  };

  const score = calculateScore(activeTab, currentExercise.questions);
  const totalQuestions = currentExercise.questions.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Managerial Reports Writing</h1>
        <p className="text-htb-text">Advanced C1 - Professional report writing vocabulary and phrases</p>
      </div>

      {/* Tab Switcher */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {exercises.map((exercise, index) => (
          <button
            key={index + 1}
            onClick={() => setActiveTab(index + 1)}
            className={`px-4 py-3 rounded-lg font-bold text-sm transition-all duration-200 ${
              activeTab === index + 1
                ? 'bg-htb-green text-htb-bg shadow-lg'
                : 'bg-htb-card border border-gray-700 text-htb-text hover:border-htb-green/50'
            }`}
          >
            Exercise {index + 1}
          </button>
        ))}
      </div>

      {/* Score Display */}
      {showResults[activeTab] && (
        <div className="bg-htb-card border border-htb-green/30 rounded-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {score === totalQuestions ? '🏆' : score >= totalQuestions * 0.8 ? '✅' : '📝'}
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
              score === totalQuestions ? 'text-htb-green' : 'text-blue-400'
            }`}>
              {score === totalQuestions 
                ? 'Perfect! Excellent professional vocabulary!' 
                : 'Good job! Review the incorrect answers.'}
            </p>
          </div>
        </div>
      )}

      {/* Exercise Content */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">{currentExercise.title}</h2>
        <p className="text-htb-text mb-6">Choose the correct word to complete each sentence from a professional report.</p>

        <div className="space-y-5">
          {currentExercise.questions.map((question) => {
            const userAnswer = answers[`${activeTab}-${question.id}`] || '';
            const showFeedback = showResults[activeTab];
            const correct = isCorrect(activeTab, question.id);

            return (
              <div key={question.id} className="flex items-start gap-3">
                <span className="text-htb-text font-bold min-w-[30px]">{question.id}.</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-htb-text text-lg">
                    <span>{question.text}</span>
                    
                    <select
                      value={userAnswer}
                      onChange={(e) => handleAnswerChange(activeTab, question.id, e.target.value)}
                      className={`px-4 py-2 rounded-lg border-2 bg-htb-bg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-htb-green transition-all ${
                        showFeedback
                          ? correct
                            ? 'border-htb-green'
                            : userAnswer
                            ? 'border-red-500'
                            : 'border-gray-700'
                          : 'border-gray-700 hover:border-htb-green/50'
                      }`}
                    >
                      <option value="">...</option>
                      {question.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    {showFeedback && userAnswer && (
                      <span className={`text-2xl ${correct ? 'text-htb-green' : 'text-red-500'}`}>
                        {correct ? '✓' : '✗'}
                      </span>
                    )}

                    <span>{question.textAfter}</span>
                  </div>

                  {/* Show correct answer if wrong */}
                  {showFeedback && !correct && userAnswer && (
                    <div className="mt-2 ml-8 text-sm">
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
            onClick={() => handleCheck(activeTab)}
            className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            ✓ Check Answers
          </button>
          <button
            onClick={() => handleReset(activeTab)}
            className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🔄 Start Again
          </button>
        </div>
      </div>

      {/* Professional Writing Guidelines */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Professional Report Writing - Key Vocabulary</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Executive Summary Phrases:</h4>
            <ul className="space-y-2 text-htb-text text-sm">
              <li>✓ "detected/identified unauthorized access"</li>
              <li>✓ "the incident was contained within..."</li>
              <li>✓ "immediate actions included..."</li>
              <li>✓ "no financial data was exposed"</li>
              <li>✓ "we recommend implementing..."</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Performance Report Phrases:</h4>
            <ul className="space-y-2 text-htb-text text-sm">
              <li>✓ "demonstrated significant improvement"</li>
              <li>✓ "response time decreased by X%"</li>
              <li>✓ "successfully mitigated X threats"</li>
              <li>✓ "key challenges included..."</li>
              <li>✓ "we project/anticipate..."</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Post-Mortem Phrases:</h4>
            <ul className="space-y-2 text-htb-text text-sm">
              <li>✓ "the attack originated from..."</li>
              <li>✓ "an employee opened/clicked..."</li>
              <li>✓ "the system failed to detect..."</li>
              <li>✓ "backup processes proved effective"</li>
              <li>✓ "we have launched/implemented..."</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Budget & Strategy Phrases:</h4>
            <ul className="space-y-2 text-htb-text text-sm">
              <li>✓ "incidents have exposed vulnerabilities"</li>
              <li>✓ "this will reduce risk by X%"</li>
              <li>✓ "the investment amounts to/totals..."</li>
              <li>✓ "we face HIGH/MEDIUM/LOW risk"</li>
              <li>✓ "organizations have adopted..."</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-htb-card border border-htb-green/20 rounded-lg p-4">
          <h4 className="text-white font-bold mb-3">💡 Writing Tips:</h4>
          <ul className="space-y-2 text-htb-text text-sm">
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Use strong action verbs: detected, implemented, mitigated, achieved</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Include specific metrics and percentages for credibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Use passive voice when appropriate: "was detected", "were implemented"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Be clear about recommendations: "we recommend", "it is essential that"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Maintain formal, professional tone throughout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerialReportsExercise;
