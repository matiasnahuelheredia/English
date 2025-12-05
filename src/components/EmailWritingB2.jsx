import React, { useState } from 'react';

const EmailWritingB2 = () => {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const emailExamples = [
    {
      id: 1,
      title: 'Formal Email - Negotiating Business Terms',
      category: 'Formal Business',
      subject: 'Proposal for Partnership and Contract Terms Review',
      to: 'director@techcorp.com',
      situation: 'You are negotiating a business partnership with a technology company. Write a formal email proposing contract modifications and discussing terms.',
      email: `Dear Ms. Richardson,

Thank you for your comprehensive proposal regarding the potential partnership between our organizations. Having reviewed the terms outlined in your document, I would like to address several points that require further discussion before we can proceed.

Firstly, regarding the revenue-sharing model proposed, while we appreciate the 60/40 split in your favor, given our substantial investment in infrastructure and our established market presence, we would like to propose a more balanced 55/45 arrangement. This would better reflect the respective contributions each party brings to the partnership.

Secondly, concerning the intellectual property rights clause, we have some reservations about the exclusivity period of five years. In our experience, such extended commitments can prove restrictive in a rapidly evolving technological landscape. We would suggest reducing this to three years, with an option to review and extend if mutually beneficial.

Additionally, I noticed that the termination clause lacks specific provisions for handling ongoing projects should either party wish to dissolve the partnership. We would strongly recommend incorporating a transition period of at least six months to ensure continuity of service to existing clients.

Despite these concerns, I must emphasize that we remain extremely enthusiastic about this collaboration. The synergies between our companies are undeniable, and I am confident that with some adjustments to the proposed terms, we can forge a partnership that will be mutually beneficial and highly successful.

I would welcome the opportunity to discuss these points in greater detail at your earliest convenience. Would it be possible to arrange a video conference sometime next week? I am available on Tuesday afternoon or Thursday morning, should either of these suit your schedule.

I look forward to your response and to moving forward with this exciting venture.

Yours sincerely,
James Thornton
Director of Strategic Partnerships`,
      keyPhrases: [
        'Having reviewed the terms outlined',
        'I would like to address several points',
        'we would like to propose',
        'we have some reservations about',
        'we would suggest',
        'I noticed that... lacks',
        'we would strongly recommend',
        'Despite these concerns',
        'I must emphasize that',
        'I would welcome the opportunity',
        'at your earliest convenience',
        'should either of these suit your schedule'
      ],
      structure: [
        '1. Opening: Acknowledge receipt and thank for proposal',
        '2. First point: Revenue sharing with justification',
        '3. Second point: IP rights concerns and suggestion',
        '4. Third point: Termination clause recommendation',
        '5. Positive reinforcement: Maintain enthusiasm',
        '6. Call to action: Request meeting with specific times',
        '7. Professional closing with optimistic tone'
      ],
      grammarFocus: [
        'Passive voice: "outlined in your document"',
        'Conditional structures: "should either party wish"',
        'Modal verbs for diplomacy: "would", "could", "might"',
        'Present perfect: "Having reviewed", "I have noticed"',
        'Relative clauses: "that require further discussion"'
      ]
    },
    {
      id: 2,
      title: 'Semi-formal Email - Academic Research Collaboration',
      category: 'Academic',
      subject: 'Invitation to Collaborate on Climate Research Project',
      to: 'dr.mitchell@university.edu',
      situation: 'You are a researcher inviting a colleague from another university to collaborate on a research project about climate change.',
      email: `Dear Dr. Mitchell,

I hope this email finds you well. I am writing to you following our stimulating conversation at the Environmental Sciences Conference in Berlin last month. Your presentation on marine ecosystem degradation was both enlightening and deeply relevant to the research project I am currently developing.

As discussed, my team at the Institute for Climate Studies has been awarded a substantial grant to investigate the correlation between atmospheric CO2 levels and oceanic acidification across different geographical regions. Given your extensive expertise in marine biology and your pioneering work on coral reef preservation, I believe your involvement would be invaluable to the success of this project.

The research would involve a three-year collaborative effort, combining field studies in the Pacific and Atlantic oceans with advanced computer modeling. Your specific contribution would focus on analyzing the biological impact on marine species, complementing our atmospheric and chemical analysis. Naturally, this would include co-authorship on all resulting publications and presentations.

In terms of logistics, we have budgeted for four research trips annually, with funding available for two research assistants from your department. Additionally, we can offer a visiting researcher position at our institute, should you wish to spend a semester with us to facilitate closer collaboration.

I understand this is a significant commitment, and you may have existing obligations that would need to be considered. However, I genuinely believe that the potential outcomes of this research could make a substantial contribution to our understanding of climate change impacts on marine ecosystems.

If this opportunity interests you, I would be delighted to discuss it further. Perhaps we could arrange a video call to explore the details? I am relatively flexible over the next fortnight and would be happy to accommodate your schedule.

I look forward to hearing your thoughts on this proposal.

Best regards,
Dr. Sarah Chen
Principal Investigator, Climate Impact Studies
Institute for Climate Studies`,
      keyPhrases: [
        'I hope this email finds you well',
        'following our stimulating conversation',
        'was both enlightening and deeply relevant',
        'Given your extensive expertise',
        'I believe... would be invaluable',
        'would involve',
        'In terms of logistics',
        'I understand this is a significant commitment',
        'I genuinely believe that',
        'If this opportunity interests you',
        'I would be delighted to',
        'I look forward to hearing your thoughts'
      ],
      structure: [
        '1. Warm opening: Reference previous meeting',
        '2. Context: Explain current research project',
        '3. Invitation: Explain why their expertise is needed',
        '4. Details: Describe collaboration structure',
        '5. Logistics: Budget, trips, positions available',
        '6. Acknowledgment: Recognize time commitment',
        '7. Next steps: Suggest video call for discussion'
      ],
      grammarFocus: [
        'Past participle adjectives: "stimulating", "enlightening"',
        'Would for polite offers: "would involve", "would focus"',
        'Conditional clauses: "should you wish to spend"',
        'Gerunds: "combining", "analyzing", "facilitating"',
        'Complex noun phrases: "the correlation between... across..."'
      ]
    },
    {
      id: 3,
      title: 'Formal Email - Diplomatic Complaint',
      category: 'Formal Complaint',
      subject: 'Formal Complaint Regarding Service Disruption and Compensation Request',
      to: 'customer.relations@globalairways.com',
      situation: 'Your international flight was severely delayed causing you to miss an important business meeting. Write a detailed formal complaint requesting compensation.',
      email: `Dear Customer Relations Manager,

I am writing to lodge a formal complaint regarding the unacceptable level of service I experienced on flight GA347 from London Heathrow to Singapore on November 28th, 2025. The series of failures I encountered has resulted in both significant financial loss and considerable professional embarrassment.

The initial departure delay of three hours was, I understand, due to technical issues. While disappointing, such occurrences are occasionally unavoidable. However, what followed was a cascade of poor communication and inadequate customer service that exacerbated an already difficult situation.

Throughout the delay, passengers received minimal information, with gate staff providing contradictory updates. When we finally boarded, we were subjected to a further 90-minute wait on the tarmac with no explanation. The combined delay of over four and a half hours meant I missed my connecting flight to Jakarta, where I was scheduled to deliver a keynote presentation at the Asia-Pacific Business Summit.

Upon arrival in Singapore, I was informed that the next available flight to Jakarta would not depart until the following afternoon, making it impossible for me to attend the conference. Your ground staff offered neither an adequate apology nor practical assistance. I was forced to arrange and pay for overnight accommodation myself, despite the delay being entirely within the airline's control.

The financial implications have been substantial. Beyond the cost of the hotel (£180), I had to forfeit a conference registration fee of £450 and a non-refundable hotel booking in Jakarta (£320). More significantly, I lost a crucial business opportunity valued at approximately £15,000, as my absence from the summit resulted in the cancellation of negotiations with potential clients.

Furthermore, the reputational damage to my consultancy firm is difficult to quantify but nonetheless real. I had promoted my participation in this high-profile event extensively, and my no-show has undoubtedly damaged professional relationships.

In light of these circumstances, I am requesting the following:

1. A full refund of my ticket cost (£847)
2. Reimbursement for accommodation expenses (£180)
3. Compensation for the forfeited conference fee (£450)
4. Compensation for the cancelled Jakarta hotel (£320)
5. Additional compensation for the business opportunity lost and reputational damage incurred

I have attached all relevant receipts and documentation, including the conference program listing my presentation and correspondence with the business contacts I was unable to meet.

I have been a Gold-tier member of your frequent flyer program for seven years and have consistently chosen your airline for both business and personal travel. This experience has severely undermined my confidence in your service standards, and my decision to continue this loyalty will depend entirely on how you handle this complaint.

I expect a comprehensive response within 14 days outlining how you intend to address these issues. Should I not receive a satisfactory resolution, I will have no choice but to escalate this matter to the Civil Aviation Authority and pursue legal advice regarding compensation under EU261 regulations.

I trust you will treat this matter with the seriousness it deserves.

Yours faithfully,
Robert Hamilton
Frequent Flyer Number: GA8472951`,
      keyPhrases: [
        'I am writing to lodge a formal complaint',
        'has resulted in',
        'While disappointing, such occurrences are',
        'what followed was a cascade of',
        'Throughout the delay',
        'Upon arrival',
        'I was forced to',
        'The financial implications have been substantial',
        'Furthermore, the reputational damage',
        'In light of these circumstances',
        'I am requesting the following',
        'I have attached all relevant',
        'This experience has severely undermined',
        'I expect a comprehensive response',
        'Should I not receive',
        'I trust you will treat this matter'
      ],
      structure: [
        '1. Opening: State complaint with flight details',
        '2. Initial problem: Technical delay acknowledgment',
        '3. Escalation: Poor communication and further delays',
        '4. Consequences: Missed connection and poor service',
        '5. Financial impact: Detailed breakdown of costs',
        '6. Professional damage: Business opportunity lost',
        '7. Specific demands: Numbered list of compensation',
        '8. Context: Loyal customer status',
        '9. Warning: Escalation if not resolved',
        '10. Professional closing'
      ],
      grammarFocus: [
        'Past perfect: "had promoted", "had to forfeit"',
        'Passive constructions: "were subjected to", "was forced to"',
        'Reported speech: "I was informed that"',
        'Conditional clauses: "Should I not receive"',
        'Participle clauses: "making it impossible", "resulting in"',
        'Complex sentences with subordination'
      ]
    },
    {
      id: 4,
      title: 'Semi-formal Email - Professional Networking',
      category: 'Networking',
      subject: 'Following Up from TechInnovate Summit - Potential Collaboration',
      to: 'anna.kowalski@innovativetech.com',
      situation: 'You met a potential business contact at a conference. Write a follow-up email to maintain the connection and explore collaboration opportunities.',
      email: `Dear Anna,

I hope this message finds you well and that you've recovered from the whirlwind that was the TechInnovate Summit! I wanted to reach out following our conversation at the networking dinner on Wednesday evening, as I've been giving considerable thought to the ideas we discussed.

Your insights into the application of artificial intelligence in sustainable urban planning were particularly fascinating, especially your work on optimizing public transportation routes through predictive modeling. It strikes me that there could be some interesting synergies between your approach and the smart building technology my company has been developing.

As I mentioned during our discussion, we've been working on an integrated system that monitors and adjusts building energy consumption based on occupancy patterns and external conditions. However, we've struggled to extend this concept to a neighborhood or district level, which is precisely where your expertise could prove invaluable.

I wonder whether there might be scope for a collaborative project exploring how our respective technologies could complement each other. Imagine, for instance, a smart district where building systems communicate not only with each other but also with public transportation networks, creating a truly integrated urban ecosystem that optimizes both energy usage and mobility.

I appreciate that you're undoubtedly busy, and I certainly don't want to impose on your time. However, if this concept resonates with you at all, I would love to explore it further over a coffee or video call. I'll be in Warsaw for the Smart Cities Europe conference next month – would you happen to be attending? Alternatively, I'd be more than happy to arrange a virtual meeting at your convenience.

In the meantime, I've attached a brief overview of our current projects, which might give you a better sense of our capabilities and potential areas of alignment. Please don't feel obliged to review it immediately – I know how these things can pile up after a major conference!

I thoroughly enjoyed our conversation and genuinely believe there could be something worthwhile in exploring this further. Whatever you decide, I hope we can stay in touch, and I wish you all the best with your current projects.

Warm regards,
Michael Peterson
Innovation Director
GreenTech Solutions Ltd.`,
      keyPhrases: [
        'I hope this message finds you well',
        'I wanted to reach out following',
        'I\'ve been giving considerable thought to',
        'Your insights into... were particularly fascinating',
        'It strikes me that',
        'As I mentioned during our discussion',
        'I wonder whether there might be scope for',
        'Imagine, for instance',
        'I appreciate that you\'re undoubtedly busy',
        'if this concept resonates with you',
        'I would love to explore',
        'In the meantime',
        'Please don\'t feel obliged to',
        'I thoroughly enjoyed',
        'I genuinely believe'
      ],
      structure: [
        '1. Friendly opening: Reference to conference',
        '2. Recap: Mention specific discussion points',
        '3. Connection: Link their work to yours',
        '4. Context: Explain your current challenge',
        '5. Proposal: Suggest collaborative opportunity',
        '6. Vision: Paint picture of potential outcome',
        '7. Respect for time: Acknowledge busy schedule',
        '8. Meeting suggestion: Offer specific options',
        '9. Attachment: Provide additional information',
        '10. Warm closing: Keep door open for future contact'
      ],
      grammarFocus: [
        'Present perfect continuous: "has been developing"',
        'Modal verbs for speculation: "could", "might", "would"',
        'Conditional sentences: "if this concept resonates"',
        'Gerunds after prepositions: "exploring how", "creating"',
        'Phrasal verbs: "reach out", "pile up", "stay in touch"',
        'Emphatic structures: "precisely where", "it strikes me that"'
      ]
    },
    {
      id: 5,
      title: 'Formal Email - Grant Application Follow-up',
      category: 'Academic/Funding',
      subject: 'Follow-up on Research Grant Application REF: ENV2025-847',
      to: 'grants@research-foundation.org',
      situation: 'You submitted a research grant application three months ago and haven\'t received a response. Write a polite but assertive follow-up email.',
      email: `Dear Grants Committee,

I am writing to inquire about the status of my research grant application (Reference: ENV2025-847), which I submitted on August 15th, 2025, for the Environmental Sciences Research Fund. According to the timeline published on your website, decisions were to be communicated by mid-November, and I note that we are now approaching mid-December.

The proposed research project, "Biodiversity Loss in Post-Industrial Urban Environments: A Longitudinal Study," represents three years of preliminary research and has the support of both my institution and several international collaborators who are awaiting confirmation before committing resources to the project.

I fully appreciate the complexity of evaluating grant applications and understand that unforeseen circumstances can affect timelines. However, the delay is beginning to create practical difficulties for my team. Specifically, we have been unable to confirm employment offers to two postdoctoral researchers who are considering alternative positions, and we are at risk of losing access to field sites that we had provisionally reserved for spring 2026.

If the evaluation process is still ongoing, I would be grateful for any indication of when we might expect to receive a decision. Alternatively, if there are any deficiencies in our application that require addressing, I would welcome the opportunity to provide additional information or clarification.

It is worth mentioning that this research has attracted interest from other funding bodies, and while your foundation remains our preferred partner due to your organization's commitment to environmental conservation, I may need to explore these alternatives if we cannot receive clarity on our application soon.

I should emphasize that I am not seeking to pressure the committee in any way. I simply wish to understand the current situation so that I can make informed decisions about the project's future and manage my team's expectations appropriately.

Thank you for taking the time to consider this request. I recognize that you must be dealing with a high volume of applications, and I appreciate the important work your foundation does in supporting environmental research.

I would be grateful for any update you can provide at your earliest convenience.

Yours sincerely,
Dr. Elizabeth Morris
Senior Research Fellow
Department of Environmental Studies
Metropolitan University

Project Reference: ENV2025-847
Application Submitted: August 15, 2025`,
      keyPhrases: [
        'I am writing to inquire about the status',
        'According to the timeline published',
        'I note that we are now',
        'I fully appreciate',
        'I understand that unforeseen circumstances',
        'However, the delay is beginning to create',
        'Specifically, we have been unable to',
        'If the evaluation process is still ongoing',
        'I would be grateful for any indication',
        'It is worth mentioning that',
        'I should emphasize that I am not seeking to pressure',
        'I simply wish to understand',
        'Thank you for taking the time',
        'I recognize that you must be dealing with',
        'at your earliest convenience'
      ],
      structure: [
        '1. Opening: Reference application and timeline',
        '2. Context: Briefly describe research significance',
        '3. Understanding: Acknowledge committee\'s workload',
        '4. Problem: Explain practical difficulties caused',
        '5. Specific impacts: Detail consequences of delay',
        '6. Request: Ask for timeline or guidance',
        '7. Alternative mention: Note other funding options',
        '8. Reassurance: Clarify not pressuring decision',
        '9. Appreciation: Thank for their work',
        '10. Closing: Professional sign-off with details'
      ],
      grammarFocus: [
        'Present perfect passive: "were to be communicated"',
        'Continuous aspect: "is beginning to create"',
        'Perfect aspect: "have been unable to confirm"',
        'Conditional structures: "If the evaluation process..."',
        'Relative clauses: "that we had provisionally reserved"',
        'Modal verbs: "might expect", "may need to", "would welcome"',
        'Discourse markers: "However", "Specifically", "Alternatively"'
      ]
    }
  ];

  const currentExample = emailExamples[selectedEmail];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
      {/* Header */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📧</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">B2 Email Writing Examples</h1>
            <p className="text-sm text-htb-text-dim mt-1">
              Advanced professional and academic email writing with complex structures and sophisticated language
            </p>
          </div>
        </div>

        {/* Email selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {emailExamples.map((example, index) => (
            <button
              key={example.id}
              onClick={() => setSelectedEmail(index)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedEmail === index
                  ? 'border-htb-green bg-htb-green/10 font-semibold'
                  : 'border-gray-700 hover:border-htb-green/50 hover:bg-htb-sidebar'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${
                    selectedEmail === index ? 'text-htb-green' : 'text-white'
                  }`}>
                    {example.title}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${
                    example.category === 'Formal Business' 
                      ? 'bg-blue-500/20 text-blue-400'
                      : example.category === 'Academic'
                      ? 'bg-purple-500/20 text-purple-400'
                      : example.category === 'Formal Complaint'
                      ? 'bg-red-500/20 text-red-400'
                      : example.category === 'Networking'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {example.category}
                  </span>
                </div>
                {selectedEmail === index && (
                  <span className="text-htb-green text-xl">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Email Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left column - Email display */}
        <div className="lg:col-span-2 space-y-4">
          {/* Situation */}
          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-xl">💡</span>
              <h3 className="text-lg font-bold text-htb-green">Situation</h3>
            </div>
            <p className="text-htb-text">{currentExample.situation}</p>
          </div>

          {/* Email header */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <div className="space-y-2 text-sm">
              <div className="flex border-b border-gray-700 pb-2">
                <span className="font-semibold text-htb-text-dim w-20">To:</span>
                <span className="text-htb-green">{currentExample.to}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-htb-text-dim w-20">Subject:</span>
                <span className="text-white">{currentExample.subject}</span>
              </div>
            </div>
          </div>

          {/* Email body */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-6">
            <div className="whitespace-pre-line text-htb-text leading-relaxed">
              {currentExample.email}
            </div>
          </div>

          {/* Copy button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentExample.email);
              alert('Email copied to clipboard!');
            }}
            className="w-full bg-htb-green hover:bg-htb-green-hover text-htb-bg px-4 py-2 rounded-lg font-semibold transition-all duration-200"
          >
            📋 Copy Email Template
          </button>
        </div>

        {/* Right column - Analysis */}
        <div className="space-y-4">
          {/* Structure */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">📝</span>
              <h3 className="text-lg font-bold text-white">Email Structure</h3>
            </div>
            <ol className="space-y-2 text-xs">
              {currentExample.structure.map((step, index) => (
                <li key={index} className="text-htb-text">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Key Phrases */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">🔑</span>
              <h3 className="text-lg font-bold text-white">Key Phrases (B2)</h3>
            </div>
            <div className="space-y-1 max-h-96 overflow-y-auto">
              {currentExample.keyPhrases.map((phrase, index) => (
                <div
                  key={index}
                  className="bg-htb-sidebar border border-htb-green/30 rounded px-3 py-1.5 text-xs text-htb-green font-medium"
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Focus */}
          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">📚</span>
              <h3 className="text-lg font-bold text-htb-green">Grammar Focus</h3>
            </div>
            <ul className="space-y-2 text-sm text-htb-text">
              {currentExample.grammarFocus.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* B2 Level Tips */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">💡</span>
              <h3 className="text-lg font-bold text-white">B2 Writing Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-htb-text">
              <li>• Use complex sentence structures with subordination</li>
              <li>• Employ a wide range of cohesive devices</li>
              <li>• Demonstrate precise vocabulary and idiomatic expressions</li>
              <li>• Maintain consistent register throughout</li>
              <li>• Use passive voice and nominalisation appropriately</li>
              <li>• Show ability to argue, persuade, and negotiate diplomatically</li>
              <li>• Incorporate conditional and hypothetical language</li>
              <li>• Use discourse markers to structure longer texts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setSelectedEmail(selectedEmail > 0 ? selectedEmail - 1 : emailExamples.length - 1)}
          className="bg-htb-sidebar hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-htb-green/50 transition-all duration-200"
        >
          ← Previous Example
        </button>
        <button
          onClick={() => setSelectedEmail(selectedEmail < emailExamples.length - 1 ? selectedEmail + 1 : 0)}
          className="bg-htb-sidebar hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-htb-green/50 transition-all duration-200"
        >
          Next Example →
        </button>
      </div>
    </div>
  );
};

export default EmailWritingB2;
