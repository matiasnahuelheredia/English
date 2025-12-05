import React, { useState } from 'react';

const EmailWritingB1 = () => {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const emailExamples = [
    {
      id: 1,
      title: 'Formal Email - Job Application',
      category: 'Formal',
      subject: 'Application for Marketing Assistant Position',
      to: 'hr@company.com',
      situation: 'You are applying for a job as a Marketing Assistant. Write a formal email introducing yourself and explaining why you are interested in the position.',
      email: `Dear Hiring Manager,

I am writing to express my interest in the Marketing Assistant position advertised on your company website. I recently graduated with a degree in Business Administration and I am eager to start my career in marketing.

During my studies, I completed several projects related to digital marketing and social media management. I also did an internship at a local advertising agency, where I gained practical experience in content creation and campaign analysis.

I am particularly attracted to this position because your company has an excellent reputation in the industry. I believe my skills in communication and my enthusiasm for marketing would make me a valuable addition to your team.

I have attached my CV and would be happy to provide any additional information you may need. I am available for an interview at your convenience.

Thank you for considering my application. I look forward to hearing from you.

Yours sincerely,
[Your name]`,
      keyPhrases: [
        'I am writing to...',
        'express my interest in',
        'I recently graduated',
        'During my studies',
        'I am particularly attracted to',
        'I believe...',
        'I have attached',
        'Thank you for considering',
        'I look forward to hearing from you',
        'Yours sincerely'
      ],
      structure: [
        '1. Opening: State the purpose of your email',
        '2. Body paragraph 1: Introduce yourself and your background',
        '3. Body paragraph 2: Explain your relevant experience',
        '4. Body paragraph 3: Show interest and explain why you\'re suitable',
        '5. Closing: Mention attachments and availability',
        '6. Sign-off: Use formal closing'
      ]
    },
    {
      id: 2,
      title: 'Informal Email - Invitation to a Party',
      category: 'Informal',
      subject: 'Birthday Party This Saturday!',
      to: 'friend@email.com',
      situation: 'Write an informal email to your friend inviting them to your birthday party.',
      email: `Hi Sarah!

How are you? I hope everything is going well with your new job!

I'm writing to invite you to my birthday party this Saturday evening. I'm having a small celebration at my place and I'd love for you to come. The party starts at 7 PM and we'll have dinner, music, and probably some board games later.

You're welcome to bring someone if you'd like! Just let me know if you're coming so I can plan the food accordingly.

I know it's quite short notice, but I really hope you can make it. It would be great to catch up properly!

Let me know as soon as you can.

See you soon!
Alex`,
      keyPhrases: [
        'How are you?',
        'I hope everything is going well',
        'I\'m writing to invite you',
        'I\'d love for you to come',
        'You\'re welcome to',
        'Let me know',
        'I hope you can make it',
        'It would be great to',
        'See you soon!'
      ],
      structure: [
        '1. Greeting: Use informal greeting',
        '2. Opening: Ask about their well-being',
        '3. Body: State the invitation clearly',
        '4. Details: Provide time, place, and activities',
        '5. Additional info: Mention they can bring someone',
        '6. Closing: Express hope they can attend',
        '7. Sign-off: Use friendly closing'
      ]
    },
    {
      id: 3,
      title: 'Semi-formal Email - Complaint to Hotel',
      category: 'Semi-formal',
      subject: 'Complaint Regarding Recent Stay - Room 305',
      to: 'manager@hotel.com',
      situation: 'You stayed at a hotel last week and had several problems. Write a semi-formal email to complain about the issues.',
      email: `Dear Hotel Manager,

I am writing to express my dissatisfaction with my recent stay at your hotel from November 15th to 18th. I was staying in room 305 and unfortunately experienced several problems during my visit.

Firstly, the air conditioning in my room was not working properly. Despite reporting this to reception on the first evening, it was not repaired until the third day of my stay. This made it very uncomfortable to sleep, especially given the warm weather.

Secondly, the room was not cleaned daily as promised. On two occasions, I returned to find my room had not been serviced at all. When I complained to the housekeeping staff, they apologized but the problem continued.

Finally, the hotel restaurant was closed on two evenings without prior notice, which was very inconvenient as I had specifically chosen your hotel for its dining facilities.

I have been a regular customer of your hotel chain for several years and this experience has been very disappointing. I would appreciate a response explaining what went wrong and what compensation you might offer.

I look forward to your reply.

Yours faithfully,
[Your name]`,
      keyPhrases: [
        'I am writing to express my dissatisfaction',
        'I was staying in',
        'unfortunately experienced',
        'Firstly... Secondly... Finally',
        'Despite reporting this',
        'This made it very uncomfortable',
        'When I complained',
        'I would appreciate',
        'I look forward to your reply',
        'Yours faithfully'
      ],
      structure: [
        '1. Opening: State purpose - complaint about stay',
        '2. Problem 1: Air conditioning issue with details',
        '3. Problem 2: Cleaning service problem',
        '4. Problem 3: Restaurant closure',
        '5. Context: Mention you\'re a regular customer',
        '6. Request: Ask for explanation and compensation',
        '7. Closing: Professional sign-off'
      ]
    },
    {
      id: 4,
      title: 'Formal Email - Request for Information',
      category: 'Formal',
      subject: 'Inquiry About English Course Enrollment',
      to: 'info@languageschool.com',
      situation: 'You want to enroll in an English course. Write a formal email requesting information about courses, prices, and schedules.',
      email: `Dear Sir or Madam,

I am writing to request information about the English courses offered at your language school. I am particularly interested in improving my business English skills.

Could you please send me details about the following:

- The different course levels available
- The course schedule and duration
- The fees and payment options
- Whether there are any upcoming courses starting soon
- If you offer online or in-person classes

I currently work full-time, so I would prefer evening or weekend classes if possible. I would also like to know if you provide any placement tests to determine my current level.

Additionally, I would be grateful if you could inform me about the qualifications of your teachers and the average class size.

Thank you for your attention to this matter. I look forward to receiving the information at your earliest convenience.

Yours faithfully,
[Your name]`,
      keyPhrases: [
        'I am writing to request information',
        'I am particularly interested in',
        'Could you please send me details',
        'I would prefer',
        'I would like to know',
        'I would be grateful if',
        'Thank you for your attention',
        'at your earliest convenience',
        'Yours faithfully'
      ],
      structure: [
        '1. Opening: State purpose - request information',
        '2. Specific interest: Mention business English',
        '3. Questions: List specific information needed',
        '4. Personal circumstances: Mention work schedule',
        '5. Additional questions: Teachers and class size',
        '6. Closing: Thank them and request prompt response',
        '7. Sign-off: Formal closing'
      ]
    },
    {
      id: 5,
      title: 'Informal Email - Thank You Message',
      category: 'Informal',
      subject: 'Thanks for Everything!',
      to: 'bestfriend@email.com',
      situation: 'Your friend helped you move to a new apartment. Write an informal email thanking them for their help.',
      email: `Hey Mike!

I just wanted to send you a quick message to say a huge thank you for helping me move last weekend. I honestly don't know what I would have done without you!

Carrying all those boxes up to the third floor was definitely not easy, and you made the whole process so much more bearable. Plus, you even helped me unpack the kitchen - you're a star!

I really appreciate you giving up your entire Saturday to help me out. I know you had other things you could have been doing.

I owe you big time! How about I cook you dinner next week? Let me know when you're free and I'll make your favorite pasta dish.

Thanks again for being such an amazing friend.

Speak soon!
Emma`,
      keyPhrases: [
        'I just wanted to',
        'a huge thank you',
        'I don\'t know what I would have done without you',
        'you made the whole process',
        'I really appreciate',
        'I owe you',
        'How about...',
        'Let me know when you\'re free',
        'Thanks again',
        'Speak soon!'
      ],
      structure: [
        '1. Greeting: Casual opening',
        '2. Main purpose: Express gratitude',
        '3. Specific details: Mention what they did',
        '4. Emphasize appreciation: Show how much it meant',
        '5. Acknowledge sacrifice: Recognize their time',
        '6. Offer reciprocation: Suggest dinner as thanks',
        '7. Closing: Warm sign-off'
      ]
    }
  ];

  const currentExample = emailExamples[selectedEmail];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
      {/* Header */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">✉️</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">B1 Email Writing Examples</h1>
            <p className="text-sm text-htb-text-dim mt-1">
              Professional email writing templates and examples for different situations
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
                    example.category === 'Formal' 
                      ? 'bg-blue-500/20 text-blue-400'
                      : example.category === 'Informal'
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
            <ol className="space-y-2">
              {currentExample.structure.map((step, index) => (
                <li key={index} className="text-sm text-htb-text">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Key Phrases */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">🔑</span>
              <h3 className="text-lg font-bold text-white">Key Phrases</h3>
            </div>
            <div className="space-y-1">
              {currentExample.keyPhrases.map((phrase, index) => (
                <div
                  key={index}
                  className="bg-htb-sidebar border border-htb-green/30 rounded px-3 py-1.5 text-sm text-htb-green font-medium"
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">💡</span>
              <h3 className="text-lg font-bold text-htb-green">Writing Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-htb-text">
              {currentExample.category === 'Formal' && (
                <>
                  <li>• Use formal greetings: Dear Sir/Madam, Dear Mr./Ms.</li>
                  <li>• Avoid contractions (don't → do not)</li>
                  <li>• Use complete sentences and proper punctuation</li>
                  <li>• End with: Yours faithfully/sincerely</li>
                  <li>• Be polite and professional throughout</li>
                </>
              )}
              {currentExample.category === 'Informal' && (
                <>
                  <li>• Use casual greetings: Hi, Hey, Hello</li>
                  <li>• Contractions are fine (I'm, you're, etc.)</li>
                  <li>• Can use exclamation marks for enthusiasm!</li>
                  <li>• End with: See you, Cheers, Take care</li>
                  <li>• Be friendly and natural in tone</li>
                </>
              )}
              {currentExample.category === 'Semi-formal' && (
                <>
                  <li>• Use polite but not overly formal language</li>
                  <li>• Structure complaints clearly with paragraphs</li>
                  <li>• Be specific about dates and details</li>
                  <li>• Request action or compensation politely</li>
                  <li>• Maintain professional but firm tone</li>
                </>
              )}
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

export default EmailWritingB1;
