import React, { useState } from 'react';

const ManagerialReportsExercise = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [showSample, setShowSample] = useState({});

  // Exercise 1: Executive Summary
  const exercise1 = {
    title: "Exercise 1: Executive Summary",
    description: "Write a brief executive summary for a cybersecurity incident report",
    prompt: "Your company experienced a data breach last week. Write an executive summary (150-200 words) that includes:",
    requirements: [
      "Brief description of the incident",
      "Impact on the organization",
      "Immediate actions taken",
      "Recommendations for future prevention"
    ],
    sampleAnswer: `EXECUTIVE SUMMARY

On November 28, 2025, our security team detected unauthorized access to our customer database, affecting approximately 15,000 user records. The breach was identified through our intrusion detection system at 14:30 GMT and contained within two hours.

The compromised data included names, email addresses, and encrypted passwords. No financial information was exposed. The incident has resulted in temporary service disruption and potential reputational damage.

Immediate actions included isolating affected systems, resetting all user credentials, notifying impacted customers, and engaging external cybersecurity consultants for forensic analysis. Our incident response team worked around the clock to restore normal operations by 22:00 GMT.

To prevent future incidents, we recommend implementing multi-factor authentication across all systems, conducting comprehensive security audits quarterly, enhancing employee security awareness training, and upgrading our firewall infrastructure. The estimated cost for these improvements is $250,000, with implementation targeted for Q1 2026.`,
    tips: [
      "Start with the most critical information",
      "Use clear, concise language",
      "Include specific data and timeframes",
      "End with actionable recommendations"
    ]
  };

  // Exercise 2: Quarterly Performance Report
  const exercise2 = {
    title: "Exercise 2: Quarterly Performance Report",
    description: "Write a quarterly performance report section analyzing team metrics",
    prompt: "As IT Security Manager, write a quarterly performance analysis (200-250 words) covering:",
    requirements: [
      "Key performance indicators (KPIs)",
      "Comparison with previous quarter",
      "Challenges encountered",
      "Action plan for next quarter"
    ],
    sampleAnswer: `QUARTERLY PERFORMANCE ANALYSIS - Q4 2025

Our security operations team has demonstrated significant improvement across all key performance indicators this quarter. Response time to security incidents decreased by 35% (from 45 minutes to 29 minutes average), while threat detection accuracy increased to 94%, up from 87% in Q3.

The team successfully mitigated 247 security threats, representing a 12% increase from the previous quarter. However, this also reflects a concerning rise in attack attempts. Our vulnerability assessment program identified and remediated 89% of critical vulnerabilities within the 48-hour SLA, exceeding our 85% target.

Key challenges included staff turnover (two senior analysts departed), resulting in temporary resource constraints, and the emergence of sophisticated phishing campaigns that required additional training resources. Budget constraints limited our ability to implement advanced threat intelligence tools.

For Q1 2026, our action plan focuses on three priorities: recruiting and onboarding two replacement analysts by January 15th, deploying AI-powered threat detection systems to reduce manual workload, and launching an enhanced security awareness program targeting executive-level personnel. We project a 20% improvement in overall security posture with these initiatives.`,
    tips: [
      "Lead with quantifiable results",
      "Provide context through comparisons",
      "Be honest about challenges",
      "Propose specific, measurable actions"
    ]
  };

  // Exercise 3: Incident Post-Mortem Report
  const exercise3 = {
    title: "Exercise 3: Incident Post-Mortem Report",
    description: "Write a post-mortem analysis of a security incident",
    prompt: "Write a post-mortem report (200-250 words) for a ransomware attack that affected 50 workstations:",
    requirements: [
      "Timeline of events",
      "Root cause analysis",
      "Lessons learned",
      "Preventive measures implemented"
    ],
    sampleAnswer: `INCIDENT POST-MORTEM: RANSOMWARE ATTACK - INCIDENT #2025-047

TIMELINE:
December 1, 2025, 09:15 - Initial compromise via phishing email
09:45 - Ransomware began encrypting files across network
10:20 - IT helpdesk received multiple user reports
10:35 - Network segments isolated, incident response activated
14:00 - All affected systems quarantined and offline
December 2, 12:00 - Systems restored from backups

ROOT CAUSE ANALYSIS:
The attack originated from a sophisticated spear-phishing email that bypassed our email filters. An employee in the finance department opened a malicious attachment, executing the ransomware payload. Our endpoint protection failed to detect the threat due to outdated signature databases.

LESSONS LEARNED:
1. Email filtering requires enhanced configuration for advanced threats
2. Backup verification processes proved effective - full recovery achieved
3. Incident communication protocols need improvement - 25-minute delay in escalation
4. Cross-departmental coordination was challenging during peak incident

PREVENTIVE MEASURES IMPLEMENTED:
- Deployed next-generation email security gateway (December 3)
- Implemented application whitelisting on all endpoints (December 5)
- Established 15-minute incident escalation SLA
- Scheduled weekly backup restoration drills
- Launched mandatory security awareness training for all staff (ongoing)

Total downtime: 26 hours. Estimated cost: $85,000. No data loss occurred.`,
    tips: [
      "Maintain chronological accuracy",
      "Focus on facts, not blame",
      "Document what worked and what didn't",
      "Ensure measures are specific and actionable"
    ]
  };

  // Exercise 4: Budget Proposal Report
  const exercise4 = {
    title: "Exercise 4: Budget Proposal Report",
    description: "Write a budget proposal for security infrastructure upgrades",
    prompt: "Draft a budget proposal (200-250 words) requesting funding for security improvements:",
    requirements: [
      "Justification for the investment",
      "Detailed cost breakdown",
      "Expected ROI or benefits",
      "Implementation timeline"
    ],
    sampleAnswer: `BUDGET PROPOSAL: CYBERSECURITY INFRASTRUCTURE UPGRADE 2026

JUSTIFICATION:
Our current security infrastructure, deployed in 2021, no longer adequately protects against evolving threats. Recent incidents have exposed critical vulnerabilities, resulting in $340,000 in remediation costs over the past year. This investment will reduce risk exposure by 75% and decrease incident response costs significantly.

COST BREAKDOWN:
- Next-generation firewall and IDS/IPS: $120,000
- SIEM platform upgrade and integration: $85,000
- Endpoint detection and response (EDR) solution: $95,000
- Security awareness training platform: $25,000
- Professional services and implementation: $75,000
Total Investment: $400,000

EXPECTED BENEFITS:
- 60% reduction in successful security incidents (projected savings: $200,000/year)
- 40% decrease in incident response time
- Automated threat detection reducing manual effort by 500 hours/year
- Compliance with ISO 27001 and SOC 2 requirements
- Three-year ROI: 147%

IMPLEMENTATION TIMELINE:
Q1 2026: Vendor selection and procurement (January-February)
Q2 2026: Infrastructure deployment and configuration (March-May)
Q3 2026: Testing, training, and optimization (June-August)
Q4 2026: Full operational capability and audit

This strategic investment positions our organization to proactively defend against sophisticated threats while ensuring regulatory compliance and business continuity.`,
    tips: [
      "Connect spending to business outcomes",
      "Provide detailed cost justification",
      "Quantify benefits where possible",
      "Include realistic timelines"
    ]
  };

  // Exercise 5: Strategic Recommendation Report
  const exercise5 = {
    title: "Exercise 5: Strategic Recommendation Report",
    description: "Write strategic recommendations for long-term security improvements",
    prompt: "Prepare a strategic recommendation report (200-250 words) for the executive board:",
    requirements: [
      "Current state assessment",
      "Industry best practices comparison",
      "Strategic recommendations",
      "Risk assessment"
    ],
    sampleAnswer: `STRATEGIC SECURITY RECOMMENDATIONS FOR 2026-2028

CURRENT STATE ASSESSMENT:
Our organization's security maturity level is classified as "Reactive" on the CMMI scale. While we successfully respond to incidents, we lack proactive threat hunting capabilities and automated response mechanisms. Current security spending represents 3.2% of IT budget, below the industry average of 5.8%.

INDUSTRY BENCHMARK ANALYSIS:
Leading organizations in our sector have adopted zero-trust architecture, implemented 24/7 security operations centers (SOC), and leverage artificial intelligence for threat detection. Our competitors average 99.7% uptime compared to our 97.2%, primarily due to security incidents.

STRATEGIC RECOMMENDATIONS:
1. Adopt Zero-Trust Security Model: Implement identity-centric security controls across all access points (18-month initiative)
2. Establish 24/7 SOC: Build internal capability or partner with managed security service provider (12-month implementation)
3. AI-Powered Threat Intelligence: Deploy machine learning systems for predictive threat detection (24-month rollout)
4. Security Culture Transformation: Embed security awareness into organizational DNA through continuous training and leadership commitment

RISK ASSESSMENT:
Without these improvements, we face:
- HIGH risk of significant data breach (probability: 65% within 24 months)
- MEDIUM risk of regulatory non-compliance and penalties
- HIGH risk of competitive disadvantage and customer trust erosion

Estimated investment: $2.1M over three years. Projected risk reduction: 80%.`,
    tips: [
      "Use data to support assertions",
      "Compare against industry standards",
      "Think long-term and strategic",
      "Clearly articulate risks of inaction"
    ]
  };

  const exercises = [exercise1, exercise2, exercise3, exercise4, exercise5];
  const currentExercise = exercises[activeTab - 1];

  const handleAnswerChange = (exerciseId, value) => {
    setAnswers({ ...answers, [exerciseId]: value });
  };

  const handleSubmit = (exerciseId) => {
    if (answers[exerciseId]?.trim()) {
      setSubmitted({ ...submitted, [exerciseId]: true });
    }
  };

  const handleToggleSample = (exerciseId) => {
    setShowSample({ ...showSample, [exerciseId]: !showSample[exerciseId] });
  };

  const handleReset = (exerciseId) => {
    const newAnswers = { ...answers };
    delete newAnswers[exerciseId];
    setAnswers(newAnswers);
    
    const newSubmitted = { ...submitted };
    delete newSubmitted[exerciseId];
    setSubmitted(newSubmitted);
  };

  const wordCount = (text) => {
    return text?.trim().split(/\s+/).filter(word => word.length > 0).length || 0;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Managerial Reports Writing</h1>
        <p className="text-htb-text">Advanced C1 - Professional report writing for IT managers</p>
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
            {submitted[index + 1] && (
              <span className="ml-1 text-xs">✓</span>
            )}
          </button>
        ))}
      </div>

      {/* Exercise Content */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">{currentExercise.title}</h2>
        <p className="text-htb-text mb-6">{currentExercise.description}</p>

        {/* Prompt */}
        <div className="bg-htb-sidebar border border-htb-green/20 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-htb-green mb-3">📋 Assignment:</h3>
          <p className="text-htb-text mb-4">{currentExercise.prompt}</p>
          
          <h4 className="text-md font-semibold text-white mb-2">Requirements:</h4>
          <ul className="list-disc list-inside space-y-1 text-htb-text">
            {currentExercise.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Writing Area */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-white font-semibold">Your Report:</label>
            <span className={`text-sm ${
              wordCount(answers[activeTab]) < 150 
                ? 'text-yellow-400' 
                : wordCount(answers[activeTab]) > 250 
                ? 'text-red-400' 
                : 'text-htb-green'
            }`}>
              Word count: {wordCount(answers[activeTab])} 
              {activeTab === 1 && ' (Target: 150-200)'}
              {activeTab !== 1 && ' (Target: 200-250)'}
            </span>
          </div>
          
          <textarea
            value={answers[activeTab] || ''}
            onChange={(e) => handleAnswerChange(activeTab, e.target.value)}
            placeholder="Write your report here..."
            disabled={submitted[activeTab]}
            className={`w-full h-96 px-4 py-3 bg-htb-bg border-2 rounded-lg text-white font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-htb-green transition-all ${
              submitted[activeTab]
                ? 'border-htb-green'
                : 'border-gray-700 hover:border-htb-green/50'
            }`}
            style={{ lineHeight: '1.6' }}
          />
        </div>

        {/* Submission Feedback */}
        {submitted[activeTab] && (
          <div className="bg-htb-green/10 border-2 border-htb-green/30 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">✓</span>
              <div>
                <p className="font-bold text-lg text-htb-green">Report Submitted!</p>
                <p className="text-htb-text text-sm">
                  Great work! Compare your report with the sample answer below to identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {!submitted[activeTab] ? (
            <button
              onClick={() => handleSubmit(activeTab)}
              disabled={!answers[activeTab]?.trim()}
              className={`px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 ${
                answers[activeTab]?.trim()
                  ? 'bg-htb-green hover:bg-htb-green-hover text-htb-bg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              ✓ Submit Report
            </button>
          ) : (
            <button
              onClick={() => handleReset(activeTab)}
              className="bg-htb-sidebar border-2 border-htb-green hover:border-htb-green-hover text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🔄 Write Again
            </button>
          )}
          
          <button
            onClick={() => handleToggleSample(activeTab)}
            className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {showSample[activeTab] ? '👁️ Hide Sample Answer' : '👁️ Show Sample Answer'}
          </button>
        </div>

        {/* Sample Answer */}
        {showSample[activeTab] && (
          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">📄 Sample Answer:</h3>
            <div className="bg-htb-bg border border-gray-800 rounded-lg p-6 mb-4">
              <pre className="text-htb-text whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {currentExercise.sampleAnswer}
              </pre>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-htb-green mb-3">💡 Writing Tips:</h4>
              <ul className="space-y-2">
                {currentExercise.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-htb-green mt-1">•</span>
                    <span className="text-htb-text text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Writing Guidelines */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">📚 Professional Report Writing Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Structure Elements:</h4>
            <ul className="space-y-2 text-htb-text text-sm">
              <li>✓ Clear headings and sections</li>
              <li>✓ Executive summary at the beginning</li>
              <li>✓ Logical flow of information</li>
              <li>✓ Data-driven conclusions</li>
              <li>✓ Actionable recommendations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Language Features:</h4>
            <ul className="space-y-2 text-htb-text text-sm">
              <li>✓ Formal, professional tone</li>
              <li>✓ Passive voice where appropriate</li>
              <li>✓ Industry-specific terminology</li>
              <li>✓ Quantifiable metrics and KPIs</li>
              <li>✓ Concise, clear sentences</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Common Phrases:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>• "The analysis indicates..."</li>
              <li>• "Key findings demonstrate..."</li>
              <li>• "It is recommended that..."</li>
              <li>• "Comparative data shows..."</li>
              <li>• "Implementation will require..."</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-htb-green mb-3">Avoid:</h4>
            <ul className="space-y-1 text-htb-text text-sm">
              <li>✗ Informal language or slang</li>
              <li>✗ Personal opinions without data</li>
              <li>✗ Vague or ambiguous statements</li>
              <li>✗ Overly complex sentences</li>
              <li>✗ Emotional or subjective language</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerialReportsExercise;
