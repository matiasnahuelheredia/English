import React, { useState } from 'react';

const TalkAboutYourselfB2 = () => {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    structure: false,
    vocabulary: false,
    phrases: false,
    topics: false,
    tips: false,
    examples: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const topicsToDiscuss = [
    {
      title: "Personal Information",
      points: [
        "Your name, age, and where you're from",
        "Your current city or town and what it's like",
        "Your family background and living situation",
        "Your nationality and languages you speak"
      ],
      sampleSentences: [
        "My name is... and I'm originally from..., but I've been living in... for the past few years.",
        "I come from a fairly large/small family - I have... siblings and we're quite close.",
        "I'm bilingual/multilingual - I speak... fluently and I'm currently learning..."
      ]
    },
    {
      title: "Work & Studies",
      points: [
        "What you do for a living or study",
        "Why you chose this career/field",
        "What a typical day looks like",
        "Your future career goals"
      ],
      sampleSentences: [
        "I work as a... at/for... where I'm responsible for...",
        "I'm currently studying... at... because I've always been passionate about...",
        "What I find most rewarding about my job/studies is...",
        "In the long term, I'm hoping to... and eventually..."
      ]
    },
    {
      title: "Hobbies & Interests",
      points: [
        "Activities you enjoy in your free time",
        "How long you've been doing these activities",
        "Why these hobbies are important to you",
        "New interests you'd like to explore"
      ],
      sampleSentences: [
        "In my spare time, I really enjoy... because it helps me...",
        "I've been... for about... years now, and it's become a real passion of mine.",
        "One hobby I'd love to take up is... because I've always been fascinated by...",
        "What I appreciate most about... is that it allows me to..."
      ]
    },
    {
      title: "Personality & Character",
      points: [
        "How you would describe yourself",
        "Your strengths and qualities",
        "Areas you're working to improve",
        "How others perceive you"
      ],
      sampleSentences: [
        "People often describe me as... because I tend to...",
        "I'd say one of my strengths is... which has helped me...",
        "I'm quite... but I'm also trying to become more...",
        "My friends would probably say I'm..."
      ]
    },
    {
      title: "Life Experiences",
      points: [
        "Significant events that shaped you",
        "Places you've traveled or lived",
        "Challenges you've overcome",
        "Achievements you're proud of"
      ],
      sampleSentences: [
        "A turning point in my life was when...",
        "I've had the opportunity to travel to... which really opened my eyes to...",
        "One experience that taught me a lot was...",
        "Something I'm particularly proud of is..."
      ]
    },
    {
      title: "Future Plans & Ambitions",
      points: [
        "Your short-term goals (next year)",
        "Long-term aspirations (5-10 years)",
        "Things you'd like to achieve",
        "Dreams or bucket list items"
      ],
      sampleSentences: [
        "In the near future, I'm planning to...",
        "My main goal for the next few years is to...",
        "If everything goes according to plan, I hope to...",
        "One thing I've always dreamed of doing is..."
      ]
    }
  ];

  const vocabulary = {
    personalityTraits: [
      { word: "outgoing", definition: "friendly and sociable" },
      { word: "reserved", definition: "quiet and keeps feelings private" },
      { word: "conscientious", definition: "careful and thorough" },
      { word: "easy-going", definition: "relaxed and tolerant" },
      { word: "ambitious", definition: "determined to succeed" },
      { word: "adaptable", definition: "able to adjust to new conditions" },
      { word: "empathetic", definition: "able to understand others' feelings" },
      { word: "proactive", definition: "takes initiative" },
      { word: "meticulous", definition: "very careful about details" },
      { word: "resilient", definition: "able to recover from difficulties" }
    ],
    workStudy: [
      { word: "pursue a career in", definition: "work towards a professional path in" },
      { word: "specialize in", definition: "focus on a particular area" },
      { word: "gain experience", definition: "acquire practical knowledge" },
      { word: "be responsible for", definition: "have duty or control over" },
      { word: "collaborate with", definition: "work together with" },
      { word: "take on challenges", definition: "accept difficult tasks" },
      { word: "develop skills", definition: "improve abilities" },
      { word: "meet deadlines", definition: "complete work on time" },
      { word: "hands-on experience", definition: "practical, direct involvement" },
      { word: "steep learning curve", definition: "rapid acquisition of new knowledge" }
    ],
    experiences: [
      { word: "life-changing", definition: "having a profound impact" },
      { word: "eye-opening", definition: "revealing or enlightening" },
      { word: "rewarding", definition: "satisfying and worthwhile" },
      { word: "challenging", definition: "difficult but stimulating" },
      { word: "broaden my horizons", definition: "expand my perspective" },
      { word: "step out of my comfort zone", definition: "try something unfamiliar" },
      { word: "a turning point", definition: "a moment that changes direction" },
      { word: "invaluable experience", definition: "extremely useful knowledge" },
      { word: "formative years", definition: "years that shape your character" },
      { word: "come a long way", definition: "make significant progress" }
    ],
    futureGoals: [
      { word: "aspire to", definition: "hope to achieve" },
      { word: "set my sights on", definition: "aim for a goal" },
      { word: "in the pipeline", definition: "planned for the future" },
      { word: "on the horizon", definition: "about to happen" },
      { word: "work towards", definition: "make effort to achieve" },
      { word: "fulfil my potential", definition: "achieve what I'm capable of" },
      { word: "long-term objective", definition: "goal for the distant future" },
      { word: "make strides in", definition: "make significant progress in" },
      { word: "carve out a career", definition: "build a professional path" },
      { word: "realize my ambitions", definition: "achieve my goals" }
    ]
  };

  const usefulPhrases = {
    starting: [
      "I'd like to start by telling you a bit about...",
      "To give you some background...",
      "Let me begin with...",
      "I think it's important to mention that..."
    ],
    developing: [
      "What's interesting about this is...",
      "The reason I'm passionate about this is...",
      "This has had a significant impact on...",
      "One thing I should add is..."
    ],
    giving_opinions: [
      "From my perspective...",
      "In my experience...",
      "I strongly believe that...",
      "What I've found is that..."
    ],
    connecting_ideas: [
      "In addition to this...",
      "On a related note...",
      "This ties in with...",
      "Building on that point..."
    ],
    concluding: [
      "Overall, I'd say...",
      "To sum up...",
      "Looking at the bigger picture...",
      "All things considered..."
    ]
  };

  const structureGuide = {
    steps: [
      {
        title: "1. Opening (30 seconds)",
        description: "Start with basic information and a hook",
        tips: [
          "State your name and where you're from",
          "Mention your current situation (work/study)",
          "Add an interesting detail to engage the listener",
          "Speak clearly and confidently"
        ],
        example: "Hello, my name is Maria and I'm from Barcelona, Spain, though I've been living in London for the past three years. I work as a graphic designer for a digital marketing agency, and what I love most about my job is the creative freedom it gives me."
      },
      {
        title: "2. Background (1-1.5 minutes)",
        description: "Provide context about your life",
        tips: [
          "Talk about your education or career path",
          "Mention your family or living situation briefly",
          "Describe how you got to where you are now",
          "Use past tenses to narrate your journey"
        ],
        example: "I studied fine arts at university in Barcelona, where I discovered my passion for digital design. After graduating, I worked for a small startup for a couple of years, which taught me a lot about the industry. Then I decided to move to London to broaden my horizons and experience working in a more international environment."
      },
      {
        title: "3. Present Situation (1 minute)",
        description: "Describe your current life",
        tips: [
          "Detail your daily routine or typical activities",
          "Mention hobbies or interests",
          "Talk about what you enjoy or find challenging",
          "Use present tenses and descriptive language"
        ],
        example: "These days, I'm working on various exciting projects for international clients. In my free time, I enjoy exploring London's art galleries and museums, which provide constant inspiration for my work. I'm also learning Spanish sign language, which has been both challenging and incredibly rewarding."
      },
      {
        title: "4. Future Plans (30-45 seconds)",
        description: "Share your goals and aspirations",
        tips: [
          "Mention short-term plans (next few months)",
          "Discuss long-term ambitions (next few years)",
          "Show enthusiasm and motivation",
          "Use future forms and modal verbs"
        ],
        example: "Looking ahead, I'm hoping to develop my skills in UX design and possibly take on more leadership responsibilities at work. In the long term, I'd love to start my own creative agency, where I can help small businesses build their brand identity. I'm also planning to travel to Japan next year, which is something I've always dreamed of doing."
      },
      {
        title: "5. Closing (15-20 seconds)",
        description: "End with a memorable conclusion",
        tips: [
          "Summarize what drives you",
          "End on a positive note",
          "Show your personality",
          "Keep it brief and natural"
        ],
        example: "Overall, I'd say I'm someone who's driven by creativity and continuous learning. I believe that challenging yourself and trying new things is what makes life interesting, and that's the philosophy I try to apply to everything I do."
      }
    ]
  };

  const commonMistakes = [
    {
      mistake: "Speaking too fast or too slow",
      solution: "Practice with a timer. Aim for a natural, conversational pace. Pause briefly between main points."
    },
    {
      mistake: "Memorizing a script word-for-word",
      solution: "Learn key points and vocabulary, but speak naturally. It's okay to pause and think."
    },
    {
      mistake: "Being too modest or too boastful",
      solution: "Strike a balance. Mention achievements naturally without excessive humility or arrogance."
    },
    {
      mistake: "Giving only short, basic answers",
      solution: "Develop each point with examples, reasons, and personal details. Use complex sentences."
    },
    {
      mistake: "Using repetitive vocabulary",
      solution: "Vary your language. Instead of 'good' use: excellent, beneficial, rewarding, valuable, etc."
    },
    {
      mistake: "Forgetting to show personality",
      solution: "Include personal opinions, feelings, and unique details. Let your character come through."
    }
  ];

  return (
    <div className="min-h-screen bg-htb-bg p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-htb-card rounded-lg p-6 md:p-8 mb-6 border border-htb-border shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-htb-text mb-4">Talk About Yourself</h1>
          <p className="text-htb-text-dim text-base md:text-lg leading-relaxed">
            Master the art of introducing yourself in English with confidence and fluency. Learn how to structure your self-introduction, use appropriate vocabulary, and make a great impression.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-htb-card rounded-lg p-6 mb-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('introduction')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">📋 Overview</h2>
            <span className="text-htb-green text-2xl">{expandedSections.introduction ? '−' : '+'}</span>
          </button>
          
          {expandedSections.introduction && (
            <div className="mt-4 text-htb-text-dim space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                The "Talk About Yourself" task is one of the most common exercises in B2 English exams and real-life situations. It typically lasts <strong className="text-htb-green">2-3 minutes</strong> and covers various aspects of your life.
              </p>
              
              <div className="bg-htb-bg rounded-lg p-4 border border-htb-border">
                <h3 className="font-semibold text-htb-text mb-3">What examiners look for:</h3>
                <ul className="space-y-2 text-htb-text-dim">
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">✓</span>
                    <span><strong className="text-htb-text">Fluency:</strong> Speaking smoothly without long pauses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">✓</span>
                    <span><strong className="text-htb-text">Range:</strong> Using varied vocabulary and structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">✓</span>
                    <span><strong className="text-htb-text">Accuracy:</strong> Correct grammar and pronunciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">✓</span>
                    <span><strong className="text-htb-text">Coherence:</strong> Logical organization of ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">✓</span>
                    <span><strong className="text-htb-text">Interaction:</strong> Engaging and natural delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-htb-bg rounded-lg p-4 border border-htb-border">
                <h3 className="font-semibold text-htb-text mb-3">⏱️ Time Management:</h3>
                <ul className="space-y-1 text-htb-text-dim">
                  <li>• Opening: 30 seconds</li>
                  <li>• Background: 1-1.5 minutes</li>
                  <li>• Present situation: 1 minute</li>
                  <li>• Future plans: 30-45 seconds</li>
                  <li>• Closing: 15-20 seconds</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Structure Guide */}
        <div className="bg-htb-card rounded-lg p-6 mb-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('structure')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">🏗️ Structure Guide</h2>
            <span className="text-htb-green text-2xl">{expandedSections.structure ? '−' : '+'}</span>
          </button>
          
          {expandedSections.structure && (
            <div className="mt-6 space-y-4">
              {structureGuide.steps.map((step, index) => (
                <div key={index} className="bg-htb-bg rounded-lg p-5 border border-htb-border">
                  <h3 className="text-lg md:text-xl font-bold text-htb-text mb-2">{step.title}</h3>
                  <p className="text-htb-text-dim mb-3 italic">{step.description}</p>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold text-htb-text mb-2">Tips:</h4>
                    <ul className="space-y-1 text-htb-text-dim">
                      {step.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-htb-green">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-htb-card rounded-lg p-4 border-l-4 border-htb-green">
                    <h4 className="font-semibold text-htb-green mb-2">Example:</h4>
                    <p className="text-htb-text italic">"{step.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Topics to Discuss */}
        <div className="bg-htb-card rounded-lg p-6 mb-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('topics')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">💭 Topics to Cover</h2>
            <span className="text-htb-green text-2xl">{expandedSections.topics ? '−' : '+'}</span>
          </button>
          
          {expandedSections.topics && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {topicsToDiscuss.map((topic, index) => (
                <div key={index} className="bg-htb-bg rounded-lg p-5 border border-htb-border">
                  <h3 className="text-lg md:text-xl font-bold text-htb-text mb-3">{topic.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-htb-text mb-2">Points to mention:</h4>
                    <ul className="space-y-1 text-htb-text-dim text-sm">
                      {topic.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-htb-green">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-htb-card rounded-lg p-3 border border-htb-border">
                    <h4 className="font-semibold text-htb-green text-sm mb-2">Sample sentences:</h4>
                    <div className="space-y-2 text-htb-text text-sm">
                      {topic.sampleSentences.map((sentence, i) => (
                        <p key={i} className="italic">"{sentence}"</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vocabulary */}
        <div className="bg-htb-card rounded-lg p-6 mb-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('vocabulary')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">📚 Essential Vocabulary</h2>
            <span className="text-htb-green text-2xl">{expandedSections.vocabulary ? '−' : '+'}</span>
          </button>
          
          {expandedSections.vocabulary && (
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(vocabulary).map(([category, words]) => (
                <div key={category} className="bg-htb-bg rounded-lg p-5 border border-htb-border">
                  <h3 className="text-lg md:text-xl font-bold text-htb-text mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-2">
                    {words.map((item, index) => (
                      <div key={index} className="bg-htb-card rounded-lg p-3 border border-htb-border hover:border-htb-green transition-colors">
                        <span className="font-semibold text-htb-green">{item.word}</span>
                        <p className="text-htb-text-dim text-sm mt-1">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Useful Phrases */}
        <div className="bg-htb-card rounded-lg p-6 mb-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('phrases')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">💬 Useful Phrases</h2>
            <span className="text-htb-green text-2xl">{expandedSections.phrases ? '−' : '+'}</span>
          </button>
          
          {expandedSections.phrases && (
            <div className="mt-6 space-y-4">
              {Object.entries(usefulPhrases).map(([category, phrases]) => (
                <div key={category} className="bg-htb-bg rounded-lg p-5 border border-htb-border">
                  <h3 className="text-base md:text-lg font-bold text-htb-text mb-3 capitalize">
                    {category.replace(/_/g, ' ')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phrases.map((phrase, index) => (
                      <div key={index} className="bg-htb-card rounded-lg p-3 border border-htb-border hover:border-htb-green transition-colors">
                        <p className="text-htb-text-dim">"{phrase}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tips & Common Mistakes */}
        <div className="bg-htb-card rounded-lg p-6 mb-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('tips')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">💡 Tips & Common Mistakes</h2>
            <span className="text-htb-green text-2xl">{expandedSections.tips ? '−' : '+'}</span>
          </button>
          
          {expandedSections.tips && (
            <div className="mt-6 space-y-4">
              <div className="bg-htb-bg rounded-lg p-5 border border-htb-green/50 mb-6">
                <h3 className="text-lg md:text-xl font-bold text-htb-text mb-3">✅ Pro Tips:</h3>
                <ul className="space-y-2 text-htb-text-dim">
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">•</span>
                    <span><strong className="text-htb-text">Practice with a mirror:</strong> Observe your body language and facial expressions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">•</span>
                    <span><strong className="text-htb-text">Record yourself:</strong> Listen to identify areas for improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">•</span>
                    <span><strong className="text-htb-text">Use the STAR method:</strong> Situation, Task, Action, Result when describing experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">•</span>
                    <span><strong className="text-htb-text">Show enthusiasm:</strong> Your tone and energy matter as much as your words</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">•</span>
                    <span><strong className="text-htb-text">Be authentic:</strong> Share genuine experiences and opinions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-htb-green">•</span>
                    <span><strong className="text-htb-text">Prepare but don't memorize:</strong> Have key points ready but speak naturally</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-htb-text mb-4">⚠️ Common Mistakes to Avoid:</h3>
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-htb-bg rounded-lg p-4 border border-htb-border">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-htb-text mb-1">{item.mistake}</h4>
                      <p className="text-htb-text-dim"><strong className="text-htb-green">Solution:</strong> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Practice Examples */}
        <div className="bg-htb-card rounded-lg p-6 border border-htb-border shadow-lg">
          <button
            onClick={() => toggleSection('examples')}
            className="w-full flex justify-between items-center text-left group"
          >
            <h2 className="text-xl md:text-2xl font-bold text-htb-text group-hover:text-htb-green transition-colors">🎯 Complete Examples</h2>
            <span className="text-htb-green text-2xl">{expandedSections.examples ? '−' : '+'}</span>
          </button>
          
          {expandedSections.examples && (
            <div className="mt-6 space-y-6">
              <div className="bg-htb-bg rounded-lg p-6 border border-htb-border">
                <h3 className="text-lg md:text-xl font-bold text-htb-text mb-4">Example 1: University Student</h3>
                <div className="bg-htb-card rounded-lg p-5 border border-htb-border text-htb-text-dim leading-relaxed">
                  <p className="mb-3">
                    "Good morning. My name is Carlos and I'm from Madrid, Spain, though I'm currently studying in Edinburgh, Scotland. I'm in my second year of a degree in Computer Science, and I chose this field because I've always been fascinated by how technology shapes our world.
                  </p>
                  <p className="mb-3">
                    I grew up in a family of engineers, so I was exposed to problem-solving and logical thinking from an early age. After finishing high school, I decided to study abroad to challenge myself and improve my English. Moving to Scotland was definitely stepping out of my comfort zone, but it's been an incredibly rewarding experience.
                  </p>
                  <p className="mb-3">
                    These days, most of my time is dedicated to my studies, particularly courses in artificial intelligence and software development. Outside of university, I'm part of a coding club where we work on projects together, which has taught me a lot about teamwork and collaborative problem-solving. I also enjoy playing football with my international friends, which helps me maintain a healthy work-life balance.
                  </p>
                  <p className="mb-3">
                    Looking ahead, I'm hoping to secure an internship at a tech company this summer to gain practical experience in the industry. In the long term, I aspire to work in AI research, possibly pursuing a master's degree after I graduate. I'm particularly interested in how AI can be applied to solve environmental challenges.
                  </p>
                  <p>
                    Overall, I'd say I'm someone who's driven by curiosity and a desire to make a positive impact through technology. I believe that the best way to learn is by doing, which is why I always try to apply theoretical knowledge to real-world problems."
                  </p>
                </div>
              </div>

              <div className="bg-htb-bg rounded-lg p-6 border border-htb-border">
                <h3 className="text-lg md:text-xl font-bold text-htb-text mb-4">Example 2: Working Professional</h3>
                <div className="bg-htb-card rounded-lg p-5 border border-htb-border text-htb-text-dim leading-relaxed">
                  <p className="mb-3">
                    "Hello, I'm Sarah and I'm originally from Manchester, England, but I've been living and working in Singapore for the past five years. I work as a marketing manager for an e-commerce company, where I lead a team responsible for digital marketing campaigns across Southeast Asia.
                  </p>
                  <p className="mb-3">
                    My journey into marketing was somewhat unconventional. I initially studied journalism at university, thinking I'd become a reporter. However, during an internship at an advertising agency, I discovered my passion for understanding consumer behavior and creating compelling brand stories. After graduating, I worked for several years in London before getting this opportunity in Singapore.
                  </p>
                  <p className="mb-3">
                    My current role is both challenging and exciting. A typical day involves analyzing campaign performance, meeting with my team to brainstorm creative ideas, and collaborating with colleagues from different countries. What I find most rewarding is seeing how our campaigns directly impact the business and connect with diverse audiences. Outside of work, I'm quite passionate about photography - I love exploring Singapore's neighborhoods and capturing street scenes.
                  </p>
                  <p className="mb-3">
                    In terms of future plans, I'm working towards taking on more strategic responsibilities, possibly moving into a regional director role. I'm also considering pursuing an MBA part-time to strengthen my business acumen. On a personal level, I'd love to continue traveling throughout Asia and eventually write a book about cross-cultural marketing.
                  </p>
                  <p>
                    To sum up, I'd describe myself as someone who thrives on creativity and cross-cultural collaboration. Living abroad has taught me to be adaptable and open-minded, qualities that I believe are essential in today's globalized world."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalkAboutYourselfB2;
