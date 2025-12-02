import React, { useState, useEffect } from 'react';

const ManagerialReportsExercise = () => {
  // All questions pool - much larger now
  const allQuestions = [
    // Executive Summary questions
    {
      category: 'Executive Summary',
      text: "On November 28, our security team",
      textAfter: "unauthorized access to our customer database.",
      options: ['detected', 'prevented', 'ignored', 'caused'],
      correct: 'detected',
      explanation: "In security reports, 'detected' indicates the discovery of an incident."
    },
    {
      category: 'Executive Summary',
      text: "The breach was",
      textAfter: "through our intrusion detection system at 14:30 GMT.",
      options: ['identified', 'hidden', 'deleted', 'created'],
      correct: 'identified',
      explanation: "'Identified' is used when something is discovered and confirmed through a system."
    },
    {
      category: 'Executive Summary',
      text: "No financial information was",
      textAfter: "during the security incident.",
      options: ['exposed', 'protected', 'encrypted', 'saved'],
      correct: 'exposed',
      explanation: "'Exposed' means data was revealed or made accessible in a breach."
    },
    {
      category: 'Executive Summary',
      text: "Immediate actions",
      textAfter: "isolating affected systems and resetting user credentials.",
      options: ['included', 'excluded', 'avoided', 'delayed'],
      correct: 'included',
      explanation: "'Included' lists what was part of the response actions."
    },
    {
      category: 'Executive Summary',
      text: "To prevent future incidents, we",
      textAfter: "implementing multi-factor authentication across all systems.",
      options: ['recommend', 'reject', 'postpone', 'cancel'],
      correct: 'recommend',
      explanation: "'Recommend' is the formal way to suggest actions in a report."
    },
    {
      category: 'Executive Summary',
      text: "The incident was",
      textAfter: "within 45 minutes of initial detection.",
      options: ['contained', 'expanded', 'ignored', 'delayed'],
      correct: 'contained',
      explanation: "'Contained' means the incident was controlled and prevented from spreading."
    },
    {
      category: 'Executive Summary',
      text: "All stakeholders were",
      textAfter: "immediately following the discovery.",
      options: ['notified', 'hidden', 'excluded', 'forgotten'],
      correct: 'notified',
      explanation: "'Notified' means informed officially, essential in incident reports."
    },
    {
      category: 'Executive Summary',
      text: "The investigation",
      textAfter: "that the attack vector was a compromised employee account.",
      options: ['revealed', 'concealed', 'dismissed', 'rejected'],
      correct: 'revealed',
      explanation: "'Revealed' indicates what was discovered during investigation."
    },
    {
      category: 'Executive Summary',
      text: "We have",
      textAfter: "enhanced monitoring on all critical systems.",
      options: ['implemented', 'removed', 'disabled', 'postponed'],
      correct: 'implemented',
      explanation: "'Implemented' means put into action or executed."
    },
    {
      category: 'Executive Summary',
      text: "The security team",
      textAfter: "to the incident within industry-standard response times.",
      options: ['responded', 'delayed', 'ignored', 'overlooked'],
      correct: 'responded',
      explanation: "'Responded' shows the team took action appropriately."
    },

    // Performance Report questions
    {
      category: 'Performance Report',
      text: "Our security team has",
      textAfter: "significant improvement across all KPIs this quarter.",
      options: ['demonstrated', 'avoided', 'prevented', 'reduced'],
      correct: 'demonstrated',
      explanation: "'Demonstrated' means showed or proved through evidence."
    },
    {
      category: 'Performance Report',
      text: "Response time to incidents",
      textAfter: "by 35% compared to last quarter.",
      options: ['decreased', 'increased', 'remained', 'doubled'],
      correct: 'decreased',
      explanation: "'Decreased' indicates a positive reduction in response time."
    },
    {
      category: 'Performance Report',
      text: "The team successfully",
      textAfter: "247 security threats this quarter.",
      options: ['mitigated', 'created', 'ignored', 'missed'],
      correct: 'mitigated',
      explanation: "'Mitigated' means reduced the impact or severity of threats."
    },
    {
      category: 'Performance Report',
      text: "Key challenges",
      textAfter: "staff turnover and budget constraints.",
      options: ['included', 'solved', 'eliminated', 'prevented'],
      correct: 'included',
      explanation: "'Included' lists what the challenges were."
    },
    {
      category: 'Performance Report',
      text: "We",
      textAfter: "a 20% improvement in overall security posture with these initiatives.",
      options: ['project', 'doubt', 'deny', 'reject'],
      correct: 'project',
      explanation: "'Project' means forecast or estimate future outcomes."
    },
    {
      category: 'Performance Report',
      text: "The team",
      textAfter: "all quarterly objectives ahead of schedule.",
      options: ['achieved', 'missed', 'postponed', 'abandoned'],
      correct: 'achieved',
      explanation: "'Achieved' means successfully completed or reached goals."
    },
    {
      category: 'Performance Report',
      text: "Security awareness training",
      textAfter: "completion rates rose to 98%.",
      options: ['compliance', 'resistance', 'rejection', 'avoidance'],
      correct: 'compliance',
      explanation: "'Compliance' indicates adherence to requirements or policies."
    },
    {
      category: 'Performance Report',
      text: "Vulnerability scanning coverage has",
      textAfter: "from 75% to 94% of all assets.",
      options: ['expanded', 'shrunk', 'remained', 'failed'],
      correct: 'expanded',
      explanation: "'Expanded' shows growth or increase in coverage."
    },
    {
      category: 'Performance Report',
      text: "The security operations center",
      textAfter: "24/7 monitoring capability this quarter.",
      options: ['established', 'removed', 'reduced', 'abandoned'],
      correct: 'established',
      explanation: "'Established' means created or set up for the first time."
    },
    {
      category: 'Performance Report',
      text: "Incident resolution times have",
      textAfter: "exceeded industry benchmarks.",
      options: ['consistently', 'rarely', 'never', 'occasionally'],
      correct: 'consistently',
      explanation: "'Consistently' emphasizes regular, reliable performance."
    },

    // Post-Mortem Report questions
    {
      category: 'Post-Mortem Report',
      text: "The attack",
      textAfter: "from a sophisticated phishing email.",
      options: ['originated', 'ended', 'stopped', 'failed'],
      correct: 'originated',
      explanation: "'Originated' indicates the source or beginning point."
    },
    {
      category: 'Post-Mortem Report',
      text: "An employee in finance",
      textAfter: "a malicious attachment.",
      options: ['opened', 'deleted', 'blocked', 'reported'],
      correct: 'opened',
      explanation: "'Opened' is the action that triggered the incident."
    },
    {
      category: 'Post-Mortem Report',
      text: "Our endpoint protection",
      textAfter: "to detect the threat initially.",
      options: ['failed', 'succeeded', 'managed', 'continued'],
      correct: 'failed',
      explanation: "'Failed' honestly acknowledges when a system didn't work."
    },
    {
      category: 'Post-Mortem Report',
      text: "Backup verification processes",
      textAfter: "effective - full recovery was achieved within 4 hours.",
      options: ['proved', 'seemed', 'appeared', 'looked'],
      correct: 'proved',
      explanation: "'Proved' confirms something demonstrated to be true in practice."
    },
    {
      category: 'Post-Mortem Report',
      text: "We have",
      textAfter: "mandatory security awareness training for all staff.",
      options: ['launched', 'cancelled', 'postponed', 'rejected'],
      correct: 'launched',
      explanation: "'Launched' means started or initiated a new program."
    },
    {
      category: 'Post-Mortem Report',
      text: "The malware",
      textAfter: "undetected for approximately 72 hours.",
      options: ['remained', 'disappeared', 'activated', 'stopped'],
      correct: 'remained',
      explanation: "'Remained' indicates a state that continued over time."
    },
    {
      category: 'Post-Mortem Report',
      text: "Network segmentation",
      textAfter: "the spread to critical production systems.",
      options: ['prevented', 'allowed', 'encouraged', 'caused'],
      correct: 'prevented',
      explanation: "'Prevented' shows what stopped further damage."
    },
    {
      category: 'Post-Mortem Report',
      text: "The incident response team was",
      textAfter: "within 15 minutes of the alert.",
      options: ['mobilized', 'dismissed', 'ignored', 'delayed'],
      correct: 'mobilized',
      explanation: "'Mobilized' means assembled and put into action quickly."
    },
    {
      category: 'Post-Mortem Report',
      text: "Root cause analysis",
      textAfter: "outdated software as the primary vulnerability.",
      options: ['identified', 'dismissed', 'ignored', 'concealed'],
      correct: 'identified',
      explanation: "'Identified' means discovered and confirmed the cause."
    },
    {
      category: 'Post-Mortem Report',
      text: "Lessons learned have been",
      textAfter: "across all IT and security teams.",
      options: ['disseminated', 'hidden', 'restricted', 'withheld'],
      correct: 'disseminated',
      explanation: "'Disseminated' means distributed or spread widely."
    },

    // Budget Proposal questions
    {
      category: 'Budget Proposal',
      text: "Recent incidents have",
      textAfter: "critical vulnerabilities in our infrastructure.",
      options: ['exposed', 'hidden', 'resolved', 'prevented'],
      correct: 'exposed',
      explanation: "'Exposed' reveals previously unknown weaknesses."
    },
    {
      category: 'Budget Proposal',
      text: "This investment will",
      textAfter: "risk exposure by 75%.",
      options: ['reduce', 'increase', 'maintain', 'double'],
      correct: 'reduce',
      explanation: "'Reduce' shows the positive impact of the investment."
    },
    {
      category: 'Budget Proposal',
      text: "The total investment",
      textAfter: "$400,000 over the next fiscal year.",
      options: ['amounts to', 'exceeds', 'falls below', 'eliminates'],
      correct: 'amounts to',
      explanation: "'Amounts to' states the total sum required."
    },
    {
      category: 'Budget Proposal',
      text: "We expect a 60%",
      textAfter: "in successful security incidents.",
      options: ['reduction', 'increase', 'stability', 'growth'],
      correct: 'reduction',
      explanation: "'Reduction' indicates a decrease in negative incidents."
    },
    {
      category: 'Budget Proposal',
      text: "The three-year ROI is",
      textAfter: "at 147%.",
      options: ['projected', 'limited', 'capped', 'restricted'],
      correct: 'projected',
      explanation: "'Projected' gives an estimated future return."
    },
    {
      category: 'Budget Proposal',
      text: "The proposed budget",
      textAfter: "industry standards for organizations of our size.",
      options: ['aligns with', 'exceeds', 'ignores', 'contradicts'],
      correct: 'aligns with',
      explanation: "'Aligns with' shows consistency with established norms."
    },
    {
      category: 'Budget Proposal',
      text: "Cost-benefit analysis",
      textAfter: "strong justification for the expenditure.",
      options: ['demonstrates', 'undermines', 'questions', 'opposes'],
      correct: 'demonstrates',
      explanation: "'Demonstrates' proves through analysis."
    },
    {
      category: 'Budget Proposal',
      text: "Funding will be",
      textAfter: "across three strategic priority areas.",
      options: ['allocated', 'wasted', 'denied', 'refused'],
      correct: 'allocated',
      explanation: "'Allocated' means distributed or assigned for specific purposes."
    },
    {
      category: 'Budget Proposal',
      text: "The investment",
      textAfter: "with our five-year cybersecurity roadmap.",
      options: ['correlates', 'conflicts', 'contradicts', 'opposes'],
      correct: 'correlates',
      explanation: "'Correlates' shows the connection and consistency."
    },
    {
      category: 'Budget Proposal',
      text: "Stakeholders have",
      textAfter: "preliminary approval pending detailed cost breakdown.",
      options: ['granted', 'refused', 'denied', 'rejected'],
      correct: 'granted',
      explanation: "'Granted' means given or approved formally."
    },

    // Strategic Recommendations questions
    {
      category: 'Strategic Recommendations',
      text: "Our security maturity level is",
      textAfter: "as 'Reactive' on the CMMI scale.",
      options: ['classified', 'promoted', 'upgraded', 'advanced'],
      correct: 'classified',
      explanation: "'Classified' means categorized or placed in a category."
    },
    {
      category: 'Strategic Recommendations',
      text: "Leading organizations have",
      textAfter: "zero-trust architecture.",
      options: ['adopted', 'rejected', 'ignored', 'avoided'],
      correct: 'adopted',
      explanation: "'Adopted' means taken up or started using."
    },
    {
      category: 'Strategic Recommendations',
      text: "We recommend",
      textAfter: "AI-powered threat intelligence systems.",
      options: ['deploying', 'removing', 'disabling', 'abandoning'],
      correct: 'deploying',
      explanation: "'Deploying' means putting into operational use."
    },
    {
      category: 'Strategic Recommendations',
      text: "Without these improvements, we",
      textAfter: "HIGH risk of a significant data breach.",
      options: ['face', 'avoid', 'eliminate', 'prevent'],
      correct: 'face',
      explanation: "'Face' indicates confronting a potential threat."
    },
    {
      category: 'Strategic Recommendations',
      text: "The estimated investment",
      textAfter: "$2.1M over three years.",
      options: ['totals', 'exceeds', 'reduces', 'minimizes'],
      correct: 'totals',
      explanation: "'Totals' gives the complete sum."
    },
    {
      category: 'Strategic Recommendations',
      text: "Industry trends",
      textAfter: "toward automated security orchestration.",
      options: ['indicate', 'oppose', 'reject', 'deny'],
      correct: 'indicate',
      explanation: "'Indicate' shows what the evidence points to."
    },
    {
      category: 'Strategic Recommendations',
      text: "We must",
      textAfter: "our competitive advantage in security innovation.",
      options: ['maintain', 'surrender', 'abandon', 'sacrifice'],
      correct: 'maintain',
      explanation: "'Maintain' means keep or preserve."
    },
    {
      category: 'Strategic Recommendations',
      text: "The proposed framework",
      textAfter: "with international security standards (ISO 27001).",
      options: ['complies', 'conflicts', 'contradicts', 'violates'],
      correct: 'complies',
      explanation: "'Complies' means conforms to or meets requirements."
    },
    {
      category: 'Strategic Recommendations',
      text: "Security governance should be",
      textAfter: "at the board level.",
      options: ['elevated', 'reduced', 'minimized', 'ignored'],
      correct: 'elevated',
      explanation: "'Elevated' means raised to a higher level of importance."
    },
    {
      category: 'Strategic Recommendations',
      text: "This strategy will",
      textAfter: "our organization as an industry leader in security.",
      options: ['position', 'exclude', 'remove', 'eliminate'],
      correct: 'position',
      explanation: "'Position' means establish or place strategically."
    },

    // Risk Assessment questions
    {
      category: 'Risk Assessment',
      text: "The vulnerability scan",
      textAfter: "38 critical findings requiring immediate attention.",
      options: ['uncovered', 'concealed', 'ignored', 'missed'],
      correct: 'uncovered',
      explanation: "'Uncovered' means discovered or revealed."
    },
    {
      category: 'Risk Assessment',
      text: "Third-party vendor risk",
      textAfter: "a significant concern in our supply chain.",
      options: ['represents', 'eliminates', 'removes', 'solves'],
      correct: 'represents',
      explanation: "'Represents' indicates what something constitutes or signifies."
    },
    {
      category: 'Risk Assessment',
      text: "The risk register has been",
      textAfter: "to reflect current threat landscape.",
      options: ['updated', 'archived', 'deleted', 'ignored'],
      correct: 'updated',
      explanation: "'Updated' means brought up to date with current information."
    },
    {
      category: 'Risk Assessment',
      text: "We have",
      textAfter: "residual risk levels within acceptable tolerance.",
      options: ['maintained', 'exceeded', 'ignored', 'elevated'],
      correct: 'maintained',
      explanation: "'Maintained' shows keeping within desired parameters."
    },
    {
      category: 'Risk Assessment',
      text: "Critical assets have been",
      textAfter: "and prioritized for protection.",
      options: ['inventoried', 'discarded', 'forgotten', 'overlooked'],
      correct: 'inventoried',
      explanation: "'Inventoried' means catalogued or listed systematically."
    },

    // Compliance & Audit questions
    {
      category: 'Compliance & Audit',
      text: "The external audit",
      textAfter: "minor non-compliance issues that have since been addressed.",
      options: ['identified', 'overlooked', 'ignored', 'concealed'],
      correct: 'identified',
      explanation: "'Identified' means found and documented."
    },
    {
      category: 'Compliance & Audit',
      text: "All remediation actions have been",
      textAfter: "and verified by the compliance team.",
      options: ['completed', 'postponed', 'cancelled', 'rejected'],
      correct: 'completed',
      explanation: "'Completed' means finished in full."
    },
    {
      category: 'Compliance & Audit',
      text: "We",
      textAfter: "full compliance with GDPR requirements.",
      options: ['achieved', 'violated', 'ignored', 'dismissed'],
      correct: 'achieved',
      explanation: "'Achieved' means successfully reached or attained."
    },
    {
      category: 'Compliance & Audit',
      text: "Audit findings",
      textAfter: "several opportunities for process improvement.",
      options: ['highlighted', 'concealed', 'dismissed', 'rejected'],
      correct: 'highlighted',
      explanation: "'Highlighted' means brought attention to or emphasized."
    },
    {
      category: 'Compliance & Audit',
      text: "Documentation has been",
      textAfter: "to meet regulatory standards.",
      options: ['enhanced', 'reduced', 'eliminated', 'removed'],
      correct: 'enhanced',
      explanation: "'Enhanced' means improved or made better."
    }
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [isCompleted, setIsCompleted] = useState(false);

  // Shuffle questions on component mount
  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;

  const checkAnswer = () => {
    if (!selectedAnswer) {
      alert('Please select an answer');
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    setUserAnswers([...userAnswers, {
      question: currentQuestion,
      userAnswer: selectedAnswer,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowFeedback(false);
    } else {
      setIsCompleted(true);
    }
  };

  const restartExercise = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowFeedback(false);
    setUserAnswers([]);
    setScore({ correct: 0, incorrect: 0 });
    setIsCompleted(false);
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-8 text-center">
          <p className="text-htb-text">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Completion view
  if (isCompleted) {
    const percentage = Math.round((score.correct / totalQuestions) * 100);
    
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Managerial Reports Writing</h1>
          <p className="text-htb-text">Advanced C1 - Professional report writing vocabulary</p>
        </div>

        {/* Score Display */}
        <div className="bg-htb-card border border-htb-green/30 rounded-lg p-8 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {percentage === 100 ? '🏆' : percentage >= 80 ? '🌟' : percentage >= 60 ? '✅' : '📝'}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Exercise Completed!</h2>
            <p className="text-5xl font-bold text-htb-green mb-6">
              {score.correct}/{totalQuestions}
            </p>
            <div className="w-full bg-htb-sidebar rounded-full h-8 mb-6 max-w-md mx-auto">
              <div
                className="bg-htb-green h-8 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${percentage}%` }}
              >
                <span className="text-sm font-bold text-htb-bg">{percentage}%</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-htb-green"></div>
                <span className="text-htb-text">Correct: <span className="font-bold text-htb-green">{score.correct}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-htb-text">Incorrect: <span className="font-bold text-red-500">{score.incorrect}</span></span>
              </div>
            </div>
            <button
              onClick={restartExercise}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🔄 Practice Again
            </button>
          </div>
        </div>

        {/* Review All Answers */}
        <div className="bg-htb-card border border-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-6">📋 Review Your Answers</h3>
          <div className="space-y-4">
            {userAnswers.map((answer, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg p-4 ${
                  answer.isCorrect
                    ? 'border-htb-green bg-htb-green/5'
                    : 'border-red-500 bg-red-500/5'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{answer.isCorrect ? '✅' : '❌'}</span>
                  <div className="flex-1">
                    <p className="text-sm text-htb-text-dim mb-1">
                      Question {index + 1} - {answer.question.category}
                    </p>
                    <p className="text-lg text-white mb-2">
                      {answer.question.text} <span className="font-bold text-htb-green">{answer.question.correct}</span> {answer.question.textAfter}
                    </p>
                    {!answer.isCorrect && (
                      <div className="bg-htb-sidebar border border-red-500/30 rounded p-3 mb-2">
                        <p className="text-sm text-htb-text mb-1">
                          <span className="font-semibold text-red-500">Your answer:</span> {answer.userAnswer}
                        </p>
                        <p className="text-sm text-htb-text">
                          <span className="font-semibold text-htb-green">Correct answer:</span> {answer.question.correct}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-htb-text italic">
                      💡 {answer.question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4">
      {/* Header with Progress */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">📊 Managerial Reports Writing</h1>
            <p className="text-sm text-htb-text-dim mt-1">
              Advanced C1 - Professional Business Vocabulary
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-htb-green"></div>
              <span className="font-semibold text-htb-green">{score.correct}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-semibold text-red-500">{score.incorrect}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-htb-sidebar rounded-full h-3 overflow-hidden mb-2">
          <div
            className="bg-htb-green h-full transition-all duration-500"
            style={{ width: `${((currentQuestionIndex) / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-htb-text-dim text-center">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
      </div>

      {/* Category Badge */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-htb-text">Category:</span>
          <span className="bg-htb-green/20 border border-htb-green/30 text-htb-green px-3 py-1 rounded-full text-sm font-semibold">
            {currentQuestion.category}
          </span>
        </div>
      </div>

      {/* Question Content */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-6">
        <div className="mb-6">
          <p className="text-lg sm:text-xl text-white mb-6 leading-relaxed">
            {currentQuestion.text}{' '}
            <span className="inline-flex items-center px-3 py-1 bg-htb-green/10 border-2 border-htb-green/30 rounded font-bold text-htb-green">
              ______
            </span>{' '}
            {currentQuestion.textAfter}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showFeedback && setSelectedAnswer(option)}
                disabled={showFeedback}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === option
                    ? 'border-htb-green bg-htb-green/10 font-semibold text-white'
                    : 'border-gray-700 hover:border-htb-green/50 hover:bg-htb-sidebar text-htb-text'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className="text-base">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        {showFeedback && (
          <div className={`mt-6 p-4 rounded-lg border-2 ${
            selectedAnswer === currentQuestion.correct
              ? 'bg-htb-sidebar border-htb-green' 
              : 'bg-htb-sidebar border-red-500'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-3xl">
                {selectedAnswer === currentQuestion.correct ? '✅' : '❌'}
              </span>
              <div className="flex-1">
                <p className={`font-bold text-lg mb-2 ${
                  selectedAnswer === currentQuestion.correct ? 'text-htb-green' : 'text-red-500'
                }`}>
                  {selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Incorrect'}
                </p>
                
                {selectedAnswer !== currentQuestion.correct && (
                  <p className="text-sm text-htb-text mb-2">
                    <span className="font-semibold">Correct answer:</span>{' '}
                    <span className="text-htb-green font-semibold">{currentQuestion.correct}</span>
                  </p>
                )}
                
                <p className="text-sm text-htb-text leading-relaxed">
                  <span className="font-semibold">Explanation:</span> {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          {!showFeedback ? (
            <button
              onClick={checkAnswer}
              disabled={!selectedAnswer}
              className="bg-htb-green hover:bg-htb-green-hover disabled:bg-gray-700 disabled:cursor-not-allowed text-htb-bg px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none"
            >
              ✓ Check Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {currentQuestionIndex < totalQuestions - 1 ? 'Next Question →' : '🏁 Finish Exercise'}
            </button>
          )}
        </div>
      </div>

      {/* Professional Writing Reference */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Professional Report Writing - Key Vocabulary</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Executive Summary Verbs:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✓ detected, identified, discovered</li>
              <li>✓ contained, mitigated, resolved</li>
              <li>✓ notified, informed, alerted</li>
              <li>✓ implemented, executed, deployed</li>
              <li>✓ recommend, propose, suggest</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Performance Verbs:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✓ demonstrated, achieved, attained</li>
              <li>✓ increased, decreased, improved</li>
              <li>✓ exceeded, surpassed, outperformed</li>
              <li>✓ maintained, sustained, preserved</li>
              <li>✓ project, forecast, anticipate</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Post-Mortem Verbs:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✓ originated, emerged, developed</li>
              <li>✓ failed, succeeded, performed</li>
              <li>✓ proved, confirmed, validated</li>
              <li>✓ launched, initiated, introduced</li>
              <li>✓ prevented, blocked, stopped</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Strategy & Budget Verbs:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✓ exposed, revealed, highlighted</li>
              <li>✓ reduce, minimize, eliminate</li>
              <li>✓ amounts to, totals, equals</li>
              <li>✓ adopted, embraced, implemented</li>
              <li>✓ face, confront, encounter</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-htb-green mb-3">Risk Assessment Verbs:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✓ uncovered, discovered, found</li>
              <li>✓ represents, constitutes, signifies</li>
              <li>✓ updated, revised, modified</li>
              <li>✓ maintained, preserved, kept</li>
              <li>✓ inventoried, catalogued, listed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-htb-green mb-3">Compliance Verbs:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✓ identified, found, discovered</li>
              <li>✓ completed, finished, concluded</li>
              <li>✓ achieved, attained, reached</li>
              <li>✓ highlighted, emphasized, stressed</li>
              <li>✓ enhanced, improved, upgraded</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-htb-card border border-htb-green/20 rounded-lg p-4">
          <h4 className="text-white font-bold mb-3">💡 Business Writing Tips:</h4>
          <ul className="space-y-2 text-htb-text text-sm">
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Use strong action verbs: detected, implemented, achieved, reduced</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Include specific metrics and percentages for credibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Use passive voice appropriately: "was detected", "were implemented"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Be clear about recommendations: "we recommend", "it is essential that"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Maintain formal, professional tone throughout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-htb-green mt-1">•</span>
              <span>Choose precise verbs over vague ones: "mitigated" vs "dealt with"</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerialReportsExercise;
