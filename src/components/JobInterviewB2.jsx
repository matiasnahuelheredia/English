import React, { useState } from 'react';

const JobInterviewB2 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const interviewQuestions = [
    {
      id: 1,
      category: "Opening Questions",
      question: "Tell me about yourself.",
      recommendation: "Structure your answer using past-present-future format. Start with your educational background, move to your current situation, and end with your career goals. Keep it concise (2-3 minutes) and relevant to the job you're applying for.",
      tips: [
        "Focus on professional information, not personal life",
        "Highlight experiences relevant to the position",
        "End with why you're interested in this role",
        "Practice this answer as it's almost guaranteed to be asked"
      ],
      sampleAnswer: "I'm a marketing professional with 5 years of experience in digital marketing. I graduated with a degree in Communications from [University], where I developed a strong interest in consumer behavior. Currently, I work as a Marketing Coordinator at [Company], where I manage social media campaigns and content strategy. I'm particularly proud of increasing our engagement rate by 40% over the past year. I'm now looking to take on more strategic responsibilities, which is why I'm excited about this Marketing Manager position at your company."
    },
    {
      id: 2,
      category: "Opening Questions",
      question: "Why do you want to work for our company?",
      recommendation: "Show that you've researched the company. Mention specific aspects like their products, culture, values, or recent achievements. Connect these to your own career goals and values. Avoid generic answers like 'It's a great company.'",
      tips: [
        "Reference specific company projects or initiatives",
        "Mention the company's reputation in the industry",
        "Connect their values with your professional goals",
        "Show genuine enthusiasm"
      ],
      sampleAnswer: "I've been following your company's innovative approach to sustainable technology for the past two years. Your recent launch of the eco-friendly product line really impressed me, as it aligns with my own values about corporate responsibility. I'm particularly drawn to your company culture of continuous learning and innovation. The collaborative environment you promote is exactly what I'm looking for to develop my skills further while contributing meaningfully to projects that make a positive impact."
    },
    {
      id: 3,
      category: "Opening Questions",
      question: "Why are you leaving your current job?",
      recommendation: "Stay positive! Never criticize your current or former employer. Focus on what you're moving toward (opportunities, growth, new challenges) rather than what you're moving away from. Frame it as career progression.",
      tips: [
        "Never speak negatively about your current employer",
        "Focus on growth opportunities",
        "Mention seeking new challenges",
        "Show enthusiasm for the new role"
      ],
      sampleAnswer: "I've really enjoyed my time at my current company and have learned a great deal. However, I feel I've reached a point where I'm ready for new challenges and more responsibility. This position offers the opportunity to work on larger-scale projects and take on more strategic responsibilities, which aligns perfectly with where I want to take my career next. I'm excited about the possibility of bringing my experience to a new environment while continuing to grow professionally."
    },
    {
      id: 4,
      category: "Experience & Skills",
      question: "What are your greatest strengths?",
      recommendation: "Choose 2-3 strengths that are relevant to the job. For each strength, provide a specific example that demonstrates it. Use the STAR method (Situation, Task, Action, Result) to structure your examples.",
      tips: [
        "Select strengths mentioned in the job description",
        "Back up each strength with concrete examples",
        "Show how these strengths benefited previous employers",
        "Be confident but not arrogant"
      ],
      sampleAnswer: "I'd say my greatest strength is my ability to analyze complex problems and develop practical solutions. For example, at my current job, we were losing customers due to a complicated checkout process. I analyzed user data, identified the pain points, and proposed a streamlined process that reduced cart abandonment by 25%. Another strength is my communication skills – I regularly present findings to stakeholders and I'm skilled at explaining technical concepts to non-technical audiences, which has been crucial in getting buy-in for my projects."
    },
    {
      id: 5,
      category: "Experience & Skills",
      question: "What is your greatest weakness?",
      recommendation: "Choose a real weakness, but one that won't disqualify you from the job. Show self-awareness and, most importantly, explain what you're doing to improve. This demonstrates growth mindset and professionalism.",
      tips: [
        "Be honest but strategic",
        "Always explain how you're working to improve",
        "Avoid clichés like 'I'm a perfectionist'",
        "Don't mention weaknesses critical to the job"
      ],
      sampleAnswer: "I sometimes have a tendency to take on too much because I'm enthusiastic about multiple projects. In the past, this has occasionally led to me feeling stretched thin. However, I've been working on this by implementing better time management strategies and learning to prioritize more effectively. I now use project management tools to track my workload and I've gotten better at communicating realistic timelines to my team. I've also learned to delegate more effectively, which has actually helped develop my team members' skills as well."
    },
    {
      id: 6,
      category: "Experience & Skills",
      question: "Describe a challenging situation you faced at work and how you handled it.",
      recommendation: "Use the STAR method: Situation (set the context), Task (explain the challenge), Action (describe what YOU did), Result (share the outcome with numbers if possible). Focus on your problem-solving skills and positive outcomes.",
      tips: [
        "Choose a relevant example for the role",
        "Focus on YOUR actions, not the team's",
        "Include measurable results if possible",
        "Show what you learned from the experience"
      ],
      sampleAnswer: "In my previous role, we had a major client threatening to leave due to repeated service delays. The situation was tense, as losing them would have meant a 15% revenue drop for our department. I took the initiative to schedule a face-to-face meeting with the client, where I listened carefully to their concerns without making excuses. I then worked with our team to develop a detailed action plan with specific timelines and appointed myself as their dedicated account manager. I provided weekly progress updates and ensured every deadline was met. After three months, not only did we retain the client, but they actually increased their contract by 20%. This taught me the value of proactive communication and taking ownership of problems."
    },
    {
      id: 7,
      category: "Experience & Skills",
      question: "Tell me about a time you failed.",
      recommendation: "Choose a real failure, but one that happened earlier in your career. Focus more on what you learned than on the failure itself. Show resilience, accountability, and how the experience made you better at what you do.",
      tips: [
        "Choose a genuine but not catastrophic failure",
        "Take responsibility without making excuses",
        "Emphasize lessons learned",
        "Show how you've applied those lessons since"
      ],
      sampleAnswer: "Early in my career, I was managing a marketing campaign and I failed to properly test all elements before launch. As a result, there was a broken link in our email that went out to 50,000 subscribers. I felt terrible about it. I immediately took responsibility, informed my manager, and worked late to send a corrected email with an apology. Since then, I've implemented a rigorous quality assurance process with multiple checkpoints before any launch. I've also learned the importance of having a backup plan and being prepared to act quickly when mistakes happen. That experience, while painful, made me much more detail-oriented and prepared me to train others on quality control procedures."
    },
    {
      id: 8,
      category: "Teamwork & Leadership",
      question: "How would you describe your leadership style?",
      recommendation: "Even if you're not applying for a management role, show leadership qualities. Describe how you influence, motivate, or guide others. Mention adaptability – good leaders adjust their style to different situations and team members.",
      tips: [
        "Give specific examples of when you led",
        "Mention different leadership approaches you use",
        "Show empathy and people skills",
        "Demonstrate results of your leadership"
      ],
      sampleAnswer: "I'd describe my leadership style as collaborative and empowering. I believe in setting clear goals and expectations, but then giving team members the autonomy to determine how best to achieve them. For example, when I led a project team last year, I made sure everyone understood the end goal, but I encouraged each person to leverage their unique strengths in their approach. I also make it a priority to have regular check-ins where team members feel comfortable sharing challenges. This approach led to higher engagement and we completed the project two weeks ahead of schedule. I adapt my style based on the situation – sometimes people need more guidance, other times they need space to innovate."
    },
    {
      id: 9,
      category: "Teamwork & Leadership",
      question: "Tell me about a time you had a conflict with a coworker. How did you resolve it?",
      recommendation: "Choose an example that shows maturity and professionalism. Focus on communication, empathy, and finding a mutually beneficial solution. Never badmouth the other person. Show that you can maintain professional relationships even during disagreements.",
      tips: [
        "Stay professional and neutral in your description",
        "Show you listened to the other perspective",
        "Demonstrate problem-solving and communication skills",
        "End with a positive outcome or lesson learned"
      ],
      sampleAnswer: "I once had a disagreement with a colleague about the direction of a project. We had very different approaches – I wanted to move quickly while she preferred a more thorough, slower approach. Initially, tensions were high. I requested a private meeting where we could discuss our perspectives without interruption. I realized that her concerns about quality were valid, and she understood my pressure regarding deadlines. We compromised by creating a timeline that included thorough planning in the early stages but allowed for faster execution later. This not only resolved our conflict but actually resulted in a better project outcome. We've worked well together ever since, and I learned the value of seeking to understand before being understood."
    },
    {
      id: 10,
      category: "Teamwork & Leadership",
      question: "How do you handle working under pressure or tight deadlines?",
      recommendation: "Show that you can stay calm and organized under pressure. Mention specific strategies you use (prioritization, time management, communication). Give an example that demonstrates your ability to deliver quality work even when stressed.",
      tips: [
        "Emphasize staying calm and focused",
        "Mention organizational strategies",
        "Show you can prioritize effectively",
        "Give a concrete example with positive results"
      ],
      sampleAnswer: "I actually perform quite well under pressure because I've developed strong organizational strategies. When facing tight deadlines, I first break down the project into smaller tasks and prioritize them based on impact and dependencies. I also communicate proactively with stakeholders about realistic timelines and potential trade-offs. For instance, last quarter I had to deliver a major presentation with only three days' notice because a colleague fell ill. I stayed focused, worked systematically through each section, and asked a teammate to review my work. I delivered the presentation successfully and received positive feedback from senior management. The key for me is staying organized, communicating clearly, and maintaining a problem-solving mindset rather than panicking."
    },
    {
      id: 11,
      category: "Problem-Solving & Decision Making",
      question: "Describe your decision-making process.",
      recommendation: "Show that you're analytical but also practical. Mention gathering information, considering alternatives, weighing pros and cons, and considering stakeholder input when appropriate. Also mention that you can make decisions with incomplete information when necessary.",
      tips: [
        "Balance analytical thinking with decisiveness",
        "Mention considering multiple perspectives",
        "Show you can adapt your process to the situation",
        "Give an example of a good decision you made"
      ],
      sampleAnswer: "My decision-making process varies depending on the situation's urgency and impact. For major decisions, I start by gathering relevant data and seeking input from stakeholders who'll be affected. I consider multiple alternatives and weigh the pros and cons of each, thinking about both short-term and long-term implications. I also consider our resources and constraints. However, I recognize that sometimes you need to make decisions without perfect information. For example, when choosing between two vendors last year, I had limited time. I focused on the key criteria that mattered most – reliability, cost, and customer service – and made a confident decision based on those factors. The vendor has worked out excellently, proving that a systematic but timely approach works well."
    },
    {
      id: 12,
      category: "Problem-Solving & Decision Making",
      question: "How do you prioritize your work when you have multiple deadlines?",
      recommendation: "Demonstrate strong organizational and time management skills. Mention using frameworks like urgent/important matrix, communicating with stakeholders, and being flexible when priorities shift. Show you're proactive rather than reactive.",
      tips: [
        "Mention specific prioritization methods or tools",
        "Show you consider impact and urgency",
        "Demonstrate communication with stakeholders",
        "Give a real example"
      ],
      sampleAnswer: "I use a combination of the urgency-importance matrix and regular communication with stakeholders. I start by listing all tasks and categorizing them by deadline and impact on business objectives. Tasks that are both urgent and important get immediate attention, while important but not urgent items get scheduled into my calendar. For less critical tasks, I batch them or delegate when possible. I also maintain open communication with my manager and teammates about my workload. For example, last month when three projects collided, I met with my manager to discuss priorities. We agreed to extend one deadline slightly, which allowed me to deliver high-quality work on the most critical projects. I also use project management tools to visualize my workload and stay organized."
    },
    {
      id: 13,
      category: "Problem-Solving & Decision Making",
      question: "Tell me about a time you had to learn something new quickly.",
      recommendation: "Show that you're adaptable and a quick learner – both highly valued qualities. Describe your learning process, resources you used, and how you applied the new knowledge successfully. This demonstrates growth mindset and resilience.",
      tips: [
        "Choose an example relevant to the role",
        "Describe your learning strategy",
        "Show resourcefulness",
        "Emphasize successful application of new knowledge"
      ],
      sampleAnswer: "When I transitioned to my current role, I needed to learn data analytics tools quickly as it was a key part of the job, but I had limited experience. I took a proactive approach: I enrolled in an online course during evenings, practiced with sample datasets on weekends, and asked a colleague who was an expert if I could shadow them for a few days. Within a month, I was comfortable with the tools. Within three months, I was creating detailed reports that influenced strategic decisions. I actually enjoyed the challenge so much that I've continued developing my data skills. This experience taught me that with the right resources and determination, I can master new tools or concepts quickly."
    },
    {
      id: 14,
      category: "Motivation & Goals",
      question: "What motivates you?",
      recommendation: "Connect your motivation to both the role and broader career goals. Avoid mentioning only salary. Focus on intrinsic motivators like growth, impact, challenges, learning, or helping others. Show authentic passion.",
      tips: [
        "Be genuine and specific",
        "Connect motivation to the job you're applying for",
        "Mention intrinsic rather than just extrinsic motivators",
        "Show enthusiasm"
      ],
      sampleAnswer: "I'm motivated by solving complex problems and seeing the tangible impact of my work. There's nothing more satisfying than taking on a challenging project, working through obstacles, and delivering results that benefit the organization or customers. I'm also motivated by continuous learning and growth – I love acquiring new skills and taking on responsibilities that stretch my capabilities. In my current role, what's driven me is knowing that the marketing campaigns I create directly influence our company's growth and help customers discover products that meet their needs. This sense of purpose and the opportunity to constantly evolve is what gets me excited about coming to work each day."
    },
    {
      id: 15,
      category: "Motivation & Goals",
      question: "Where do you see yourself in five years?",
      recommendation: "Show ambition but also realism. Demonstrate that you've thought about your career path and that this role fits into it. Make it clear you see a future with this company. Avoid saying you want the interviewer's job or that you'll be somewhere completely different.",
      tips: [
        "Show you've thought about your career trajectory",
        "Connect your goals to growth within the company",
        "Be ambitious but realistic",
        "Demonstrate commitment to the field"
      ],
      sampleAnswer: "In five years, I see myself as a senior member of the team, having developed deep expertise in this field and taken on increasing levels of responsibility. I'd love to be managing key projects or perhaps leading a small team, mentoring junior colleagues the way I've been mentored. I'm particularly interested in developing expertise in strategic planning and I hope to be contributing to high-level decision-making. Ultimately, I want to be someone the organization relies on for both execution and strategic thinking. I see this role as the perfect foundation for that trajectory, which is why I'm so excited about this opportunity."
    },
    {
      id: 16,
      category: "Motivation & Goals",
      question: "Why should we hire you?",
      recommendation: "This is your chance to make a compelling case. Summarize your key qualifications, mention 2-3 specific strengths that match job requirements, and show enthusiasm. Differentiate yourself by mentioning unique value you bring.",
      tips: [
        "Reference specific job requirements",
        "Highlight unique combinations of skills",
        "Show confidence without arrogance",
        "End with enthusiasm for the role"
      ],
      sampleAnswer: "You should hire me because I bring exactly the combination of skills and experience you're looking for, plus genuine enthusiasm for this role. I have five years of proven experience in digital marketing with a track record of increasing engagement and ROI. My analytical background allows me to make data-driven decisions, while my creativity helps develop campaigns that resonate with audiences. Beyond technical skills, I'm someone who takes initiative, works collaboratively, and is committed to continuous improvement. I've researched your company extensively and I'm genuinely excited about your mission and the innovative work you're doing. I'm confident I can make immediate contributions while growing with the organization long-term."
    },
    {
      id: 17,
      category: "Company & Role Fit",
      question: "What do you know about our company?",
      recommendation: "This tests whether you've done your homework. Mention specific facts about their products, services, recent news, company culture, or industry position. Show genuine interest and connect what you know to why you want to work there.",
      tips: [
        "Research the company thoroughly before the interview",
        "Mention specific recent achievements or news",
        "Reference their mission or values",
        "Show how your values align with theirs"
      ],
      sampleAnswer: "I've been following your company for quite some time. I know you're a leader in sustainable technology solutions, with a focus on reducing carbon footprints for enterprise clients. I was particularly impressed by your recent partnership with [Company] to develop green energy solutions – that made headlines in the industry. I've also read that you've been recognized as one of the best places to work, with a strong emphasis on employee development and innovation. Your commitment to both environmental sustainability and fostering talent really resonates with me. I also noticed you're expanding into the Asian market, which is exciting as I have some experience working with international teams."
    },
    {
      id: 18,
      category: "Company & Role Fit",
      question: "What interests you about this particular role?",
      recommendation: "Show you understand the role by referencing specific responsibilities from the job description. Connect these to your skills and career goals. Demonstrate that you're interested in the work itself, not just getting any job.",
      tips: [
        "Reference specific aspects of the job description",
        "Connect the role to your experience and goals",
        "Show enthusiasm for the actual work",
        "Mention learning opportunities"
      ],
      sampleAnswer: "Several aspects of this role really appeal to me. First, the opportunity to lead end-to-end campaign development is exactly the kind of responsibility I'm ready for at this stage in my career. I'm particularly excited about the cross-functional collaboration mentioned in the job description – working closely with product, sales, and creative teams to develop integrated strategies. The mention of using data analytics to optimize campaigns aligns perfectly with my skills and interests. I'm also drawn to the innovative culture here and the opportunity to work on cutting-edge marketing technology. This role seems like the perfect blend of leveraging my existing strengths while challenging me to grow in new areas like team leadership and strategic planning."
    },
    {
      id: 19,
      category: "Company & Role Fit",
      question: "How do you handle feedback and criticism?",
      recommendation: "Show that you're open to feedback and see it as a growth opportunity. Give an example of receiving constructive criticism, how you responded professionally, and how you used it to improve. This demonstrates maturity and coachability.",
      tips: [
        "Emphasize openness to feedback",
        "Show you don't take criticism personally",
        "Give an example of acting on feedback",
        "Demonstrate continuous improvement mindset"
      ],
      sampleAnswer: "I view feedback as essential for growth and I actively seek it out. I try to listen carefully without becoming defensive, ask clarifying questions, and reflect on how I can apply it. For example, earlier in my career, a manager told me that while my work was excellent, I needed to communicate progress more regularly. Initially, I felt I was doing enough, but I realized she had a point – I was heads-down focused on work and not thinking about keeping stakeholders informed. I started sending weekly updates and scheduling brief check-ins. This not only improved our working relationship but made me more effective because I could course-correct earlier if needed. I'm grateful for that feedback as it's shaped how I work. I believe the best professionals are those who can accept feedback gracefully and use it constructively."
    },
    {
      id: 20,
      category: "Closing Questions",
      question: "What are your salary expectations?",
      recommendation: "If possible, try to deflect this until you have an offer. If pressed, give a range based on market research. Know your worth but be flexible. You can say you're more interested in the overall opportunity and growth potential than just salary.",
      tips: [
        "Research market rates beforehand",
        "Give a range rather than a specific number",
        "Consider the total compensation package",
        "Stay flexible and focus on mutual fit"
      ],
      sampleAnswer: "Based on my research of the market and my experience level, I understand that roles like this typically range from $X to $Y. However, I'm more focused on finding the right fit and opportunity for growth. I'm confident that if we both feel this is a good match, we can agree on fair compensation. I'm also interested in understanding the complete compensation package, including benefits, professional development opportunities, and potential for growth. Could you share what range you have budgeted for this position?"
    },
    {
      id: 21,
      category: "Closing Questions",
      question: "Do you have any questions for us?",
      recommendation: "ALWAYS have questions prepared! This shows genuine interest and helps you evaluate if the role is right for you. Ask about team culture, success metrics, growth opportunities, or challenges the team faces. Avoid asking only about benefits or vacation.",
      tips: [
        "Prepare 4-5 questions in advance",
        "Ask about things you genuinely want to know",
        "Show you've thought about succeeding in the role",
        "Avoid questions easily answered by their website"
      ],
      sampleQuestions: [
        "What does success look like in this role during the first 6-12 months?",
        "Can you tell me about the team I'd be working with?",
        "What are the biggest challenges facing the team/department right now?",
        "How does the company support professional development and growth?",
        "What do you enjoy most about working here?",
        "What are the next steps in the interview process?"
      ],
      sampleAnswer: "Yes, I have several questions. First, what does success look like in this role during the first six months? I want to make sure I'm focusing on the right priorities from day one. Also, could you tell me more about the team culture and how the team typically collaborates? Finally, what are the most important challenges the team is currently facing, and how could this role help address them?"
    },
    {
      id: 22,
      category: "Behavioral Questions",
      question: "Tell me about a time you went above and beyond your job responsibilities.",
      recommendation: "Choose an example that shows initiative, dedication, and adds value beyond expectations. Highlight your motivation and the positive impact. This demonstrates you're not just a task-completer but someone who takes ownership.",
      tips: [
        "Pick an example showing genuine initiative",
        "Explain your motivation",
        "Focus on the positive impact",
        "Show it's your natural work style, not a one-time thing"
      ],
      sampleAnswer: "In my previous role, I noticed our onboarding process for new hires was disorganized and many new employees felt lost in their first weeks. Although improving onboarding wasn't part of my job description, I took the initiative to create a comprehensive onboarding guide and mentor program. I interviewed recent hires to understand their pain points, collaborated with HR to document key processes, and created a 30-day roadmap for new employees. I also volunteered to be a mentor for new hires. This effort took several weeks of extra time, but the result was that new employees became productive much faster and reported higher satisfaction. My manager was impressed and the program is now used company-wide. I did this because I believe a strong team makes everyone more successful."
    },
    {
      id: 23,
      category: "Behavioral Questions",
      question: "Describe a situation where you had to work with a difficult person.",
      recommendation: "Focus on professionalism, emotional intelligence, and finding solutions. Never badmouth the person. Show that you can maintain composure and find ways to work effectively even with challenging personalities.",
      tips: [
        "Stay diplomatic in your description",
        "Focus on your approach and actions",
        "Show emotional intelligence",
        "End with a positive resolution or learning"
      ],
      sampleAnswer: "I once worked with a team member who was very resistant to change and often dismissed ideas without consideration. During a project to implement new software, their negativity was affecting team morale. Instead of avoiding them or escalating to management, I scheduled a one-on-one coffee chat to understand their concerns. I discovered they felt their expertise was being overlooked and were worried about becoming obsolete. I made a point to ask for their input on the implementation, highlighting how their experience was valuable. This changed the dynamic completely – they became one of the strongest supporters because they felt heard and valued. This taught me that difficult behavior often stems from underlying concerns that can be addressed through empathy and communication."
    },
    {
      id: 24,
      category: "Behavioral Questions",
      question: "Tell me about a time you had to adapt to a significant change at work.",
      recommendation: "Show flexibility and resilience. Describe the change, your initial reaction (be honest), and how you adapted. Emphasize positive outcomes and what you learned. This shows you can handle the uncertainties of a dynamic work environment.",
      tips: [
        "Be honest about initial challenges",
        "Show a positive, proactive response",
        "Emphasize learning and growth",
        "Connect to why change can be beneficial"
      ],
      sampleAnswer: "Last year, my company underwent a major restructuring, and my role changed significantly. I went from being an individual contributor to leading a team, which was both exciting and daunting. Initially, I felt uncertain about my management skills. However, I approached it as a learning opportunity. I sought mentorship from experienced managers, took an online leadership course, and had regular check-ins with my team to understand their needs. I also maintained open communication with my own manager about my development. Within a few months, I found my footing and actually discovered I really enjoy mentoring and leading others. The team has since exceeded our goals, and I've grown tremendously as a professional. This experience taught me that changes that initially seem challenging often lead to the most growth."
    },
    {
      id: 25,
      category: "Technical/Role-Specific",
      question: "What technical skills or tools are you most proficient in?",
      recommendation: "Tailor this to the job requirements. List relevant skills and tools, and for each mention your proficiency level and provide a brief example of how you've used it. Stay honest – don't claim expertise you don't have.",
      tips: [
        "Align your answer with the job description",
        "Be specific about proficiency levels",
        "Give concrete examples of usage",
        "Mention any certifications or training"
      ],
      sampleAnswer: "I'm highly proficient in several tools relevant to this role. In terms of data analysis, I work daily with Excel at an advanced level, including pivot tables, VLOOKUPs, and macros. I'm also skilled in Google Analytics and have used it to track campaign performance and user behavior, which has informed our content strategy. For project management, I've used both Asana and Trello extensively to coordinate team workflows. I also have strong skills in Adobe Creative Suite, particularly Photoshop and InDesign, which I use for creating marketing materials. Recently, I've been learning SQL to query databases directly, which has been incredibly useful for pulling custom reports. I'm always eager to learn new tools and typically pick them up quickly."
    }
  ];

  const handleNext = () => {
    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowRecommendation(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowRecommendation(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShowRecommendation = () => {
    setShowRecommendation(true);
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const currentQuestion = interviewQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / interviewQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4">Job Interview Practice - B2</h1>
          <p className="text-blue-100 text-lg mb-4">
            Practice answering common job interview questions in English. Read each question carefully, think about your answer, then click "Show Recommendation" to see expert advice and sample answers.
          </p>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>Progress</span>
              <span>Question {currentQuestionIndex + 1} of {interviewQuestions.length}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-blue-200">
              {answeredQuestions.length} questions reviewed
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-white/20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-600/50 rounded-full text-white text-sm font-semibold mb-4">
              {currentQuestion.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">
              Question #{currentQuestion.id}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 mb-6 border-l-4 border-blue-400">
            <p className="text-2xl text-white font-medium leading-relaxed">
              "{currentQuestion.question}"
            </p>
          </div>

          {/* Think About Section */}
          <div className="bg-amber-900/30 rounded-xl p-6 mb-6 border border-amber-400/30">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>💭</span> Take a moment to think...
            </h3>
            <ul className="space-y-2 text-amber-100">
              <li>• How would you answer this question?</li>
              <li>• What examples from your experience could you share?</li>
              <li>• What key points would you want to highlight?</li>
            </ul>
          </div>

          {/* Show Recommendation Button */}
          {!showRecommendation && (
            <button
              onClick={handleShowRecommendation}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-500 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg"
            >
              Show Recommendation & Sample Answer
            </button>
          )}

          {/* Recommendation Section */}
          {showRecommendation && (
            <div className="space-y-6 animate-fadeIn">
              {/* Main Recommendation */}
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span>💡</span> How to Answer This Question
                </h3>
                <p className="text-green-100 leading-relaxed">
                  {currentQuestion.recommendation}
                </p>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-6 border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>✨</span> Key Tips
                </h3>
                <ul className="space-y-2">
                  {currentQuestion.tips.map((tip, index) => (
                    <li key={index} className="text-blue-100 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Answer */}
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎯</span> Sample Answer
                </h3>
                <div className="bg-black/30 rounded-lg p-5 border-l-4 border-purple-400">
                  <p className="text-white leading-relaxed italic">
                    "{currentQuestion.sampleAnswer}"
                  </p>
                </div>
              </div>

              {/* Sample Questions (for question 21) */}
              {currentQuestion.sampleQuestions && (
                <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/40 rounded-xl p-6 border border-teal-400/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span>❓</span> Good Questions to Ask
                  </h3>
                  <ul className="space-y-2">
                    {currentQuestion.sampleQuestions.map((q, index) => (
                      <li key={index} className="text-teal-100 flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentQuestionIndex === 0
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
            }`}
          >
            <span>←</span> Previous Question
          </button>

          <div className="text-center">
            <div className="text-white font-semibold">
              {currentQuestionIndex + 1} / {interviewQuestions.length}
            </div>
            <div className="text-blue-200 text-sm">
              {Math.round(progress)}% Complete
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === interviewQuestions.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentQuestionIndex === interviewQuestions.length - 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg'
            }`}
          >
            Next Question <span>→</span>
          </button>
        </div>

        {/* Completion Message */}
        {currentQuestionIndex === interviewQuestions.length - 1 && showRecommendation && (
          <div className="mt-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span>🎉</span> Congratulations!
            </h3>
            <p className="text-green-100 text-lg">
              You've reviewed all {interviewQuestions.length} interview questions! Remember to practice your answers out loud and adapt these examples to your own experiences. Good luck with your interview!
            </p>
          </div>
        )}

        {/* General Tips Section */}
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">📌 General Interview Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-bold text-white mb-2">Before the Interview</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>• Research the company thoroughly</li>
                <li>• Prepare examples for common questions</li>
                <li>• Practice answers out loud</li>
                <li>• Prepare questions to ask them</li>
                <li>• Plan your outfit and route</li>
              </ul>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-400/30">
              <h4 className="font-bold text-white mb-2">During the Interview</h4>
              <ul className="space-y-1 text-purple-100 text-sm">
                <li>• Arrive 10-15 minutes early</li>
                <li>• Make eye contact and smile</li>
                <li>• Listen carefully to questions</li>
                <li>• Take a moment to think before answering</li>
                <li>• Ask for clarification if needed</li>
              </ul>
            </div>
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-400/30">
              <h4 className="font-bold text-white mb-2">Body Language</h4>
              <ul className="space-y-1 text-green-100 text-sm">
                <li>• Sit up straight</li>
                <li>• Use natural hand gestures</li>
                <li>• Maintain good eye contact</li>
                <li>• Smile when appropriate</li>
                <li>• Show enthusiasm</li>
              </ul>
            </div>
            <div className="bg-amber-900/30 rounded-lg p-4 border border-amber-400/30">
              <h4 className="font-bold text-white mb-2">After the Interview</h4>
              <ul className="space-y-1 text-amber-100 text-sm">
                <li>• Send a thank-you email within 24 hours</li>
                <li>• Reflect on what went well</li>
                <li>• Note questions you struggled with</li>
                <li>• Follow up if you don't hear back</li>
                <li>• Stay positive regardless of outcome</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInterviewB2;
