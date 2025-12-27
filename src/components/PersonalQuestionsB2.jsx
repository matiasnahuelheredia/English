import React, { useState } from 'react';

const PersonalQuestionsB2 = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const questionCategories = [
    {
      category: 'Relaxation & Free Time',
      color: 'bg-green-900',
      icon: '🧘',
      description: 'Questions about how you spend your leisure time and unwind.',
      questions: [
        {
          question: 'What do you usually do to relax?',
          sampleAnswer: 'To unwind after a long day, I usually do a combination of things. I\'m quite into yoga, so I try to do a 30-minute session at least three times a week - it really helps me clear my mind and release tension. I also love reading, particularly crime novels and thrillers. There\'s something about getting lost in a good book that just helps me switch off from work completely. On weekends, I often go for long walks in the park near my house. I find that being in nature, even if it\'s just a local park, has a calming effect on me.',
          keyVocabulary: ['to unwind', 'I\'m quite into', 'clear my mind', 'release tension', 'getting lost in', 'switch off', 'has a calming effect'],
          grammarPoints: ['Present Simple for habits', 'Gerunds (reading, getting lost)', 'There\'s something about + gerund', 'Frequency adverbs (usually, often)'],
          tips: 'Be specific about activities and explain why they help you relax. Use varied vocabulary and don\'t just list activities.'
        },
        {
          question: 'How do you spend your weekends?',
          sampleAnswer: 'My weekends are usually a mix of productivity and relaxation. On Saturday mornings, I typically catch up on household chores and do some meal prep for the week - I find it quite therapeutic actually. Saturday afternoons, I try to do something social, whether it\'s meeting friends for coffee, going to a gallery, or sometimes just having people over for dinner. Sundays are more laid-back for me. I usually have a lie-in, then spend the afternoon either exploring different neighborhoods in the city or working on personal projects. I\'m currently learning to play the guitar, so I dedicate a couple of hours to practice. Sunday evenings are sacred though - I always unwind with a good film and prepare mentally for the week ahead.',
          keyVocabulary: ['catch up on', 'meal prep', 'therapeutic', 'laid-back', 'have a lie-in', 'sacred', 'prepare mentally'],
          grammarPoints: ['Present Simple for routines', 'Present Continuous for ongoing projects', 'Whether...or', 'Adverbs of frequency'],
          tips: 'Show variety in your weekend activities. Mention both productive and relaxing activities to show balance.'
        },
        {
          question: 'What hobbies or interests do you have outside of work?',
          sampleAnswer: 'I\'ve got quite a few interests that keep me busy outside of work. I\'m really passionate about photography - I\'ve been doing it for about five years now, mainly landscape and street photography. I love the creative aspect of it and how it encourages me to see ordinary things from different perspectives. I\'m also an avid runner. I try to do at least 5K three times a week, and I\'ve actually completed two half-marathons this year, which I\'m quite proud of. Additionally, I volunteer at a local animal shelter on weekends. It\'s incredibly rewarding and helps me stay grounded. I\'ve always believed in giving back to the community.',
          keyVocabulary: ['passionate about', 'avid runner', 'incredibly rewarding', 'stay grounded', 'giving back to the community', 'from different perspectives'],
          grammarPoints: ['Present Perfect Continuous (I\'ve been doing)', 'Present Perfect (I\'ve completed)', 'Relative clauses (which I\'m quite proud of)'],
          tips: 'Demonstrate genuine enthusiasm and explain what you gain from your hobbies. This shows self-awareness.'
        },
        {
          question: 'Do you prefer spending time alone or with others?',
          sampleAnswer: 'I\'d say I\'m quite balanced in this respect - I genuinely enjoy both. I\'m naturally quite sociable and I get a lot of energy from being around people, especially in stimulating conversations or collaborative environments. However, I\'ve also learned to really value my alone time. I need those quiet moments to recharge, reflect, and pursue individual interests like reading or practicing meditation. I think the key is finding the right balance. Too much socializing can be draining, but too much isolation isn\'t healthy either. I\'ve found that a mix of both keeps me at my best.',
          keyVocabulary: ['in this respect', 'sociable', 'stimulating conversations', 'value my alone time', 'recharge', 'finding the right balance', 'at my best'],
          grammarPoints: ['I\'d say (conditional for opinion)', 'Present Perfect (I\'ve learned, I\'ve found)', 'Too much + noun', 'Comparative structures'],
          tips: 'Show self-awareness and balance. Avoid extreme answers - demonstrate that you can adapt to different situations.'
        }
      ]
    },
    {
      category: 'Past Experiences (This Year)',
      color: 'bg-blue-900',
      icon: '📅',
      description: 'Questions about recent achievements and memorable moments.',
      questions: [
        {
          question: 'What is the best thing you\'ve done this year?',
          sampleAnswer: 'Without a doubt, the best thing I\'ve done this year was completing a professional certification I\'d been working towards for months. It was a real challenge - I had to balance studying with my full-time job and personal commitments. There were definitely moments when I questioned whether I could actually pull it off. But I stuck with it, and passing the exam was incredibly satisfying. What made it even better was that it immediately opened up new opportunities at work. I was given the chance to lead a project I\'d been interested in for ages. The whole experience taught me that I\'m capable of more than I sometimes give myself credit for.',
          keyVocabulary: ['without a doubt', 'working towards', 'pull it off', 'stuck with it', 'incredibly satisfying', 'opened up opportunities', 'give myself credit for'],
          grammarPoints: ['Present Perfect (I\'ve done, I\'d been working)', 'Past Perfect Continuous (I\'d been working)', 'Passive voice (I was given)', 'There were moments when'],
          tips: 'Choose something meaningful that shows growth or achievement. Explain the challenge and what you learned.'
        },
        {
          question: 'What\'s been your biggest achievement this year?',
          sampleAnswer: 'My biggest achievement this year has been buying my first apartment. It was something I\'d been saving for since I started working, and honestly, there were times when it felt like an impossible dream, especially with rising property prices. But I was disciplined with my finances, made some sacrifices - like cutting back on holidays and eating out - and finally managed to save enough for a deposit. The day I got the keys was genuinely one of the proudest moments of my life. It\'s not just about owning property though; it represents independence and the result of years of hard work and planning. It\'s made me realize that long-term goals are achievable if you stay focused and committed.',
          keyVocabulary: ['saving for', 'impossible dream', 'disciplined with finances', 'cutting back on', 'proudest moments', 'long-term goals', 'stay focused'],
          grammarPoints: ['Present Perfect (has been)', 'Past Perfect Continuous (I\'d been saving)', 'It\'s not just about + gerund', 'Made me realize that'],
          tips: 'Discuss both the achievement and the process. Show determination and the ability to work towards long-term goals.'
        },
        {
          question: 'Have you learned any new skills recently?',
          sampleAnswer: 'Yes, actually I\'ve been learning Spanish for about six months now. I\'ve always been fascinated by languages and different cultures, and I have some Spanish-speaking colleagues at work, which was part of my motivation. I\'m using a combination of a language app, weekly conversation classes, and I try to watch Spanish TV series with subtitles. I won\'t lie - it\'s been challenging, especially getting my head around the different verb tenses! But I\'m starting to see real progress. Just last week, I had my first proper conversation entirely in Spanish with a colleague, which felt amazing. Beyond just the language itself, learning Spanish has improved my cognitive flexibility and given me a greater appreciation for how challenging it must be for non-native English speakers.',
          keyVocabulary: ['fascinated by', 'part of my motivation', 'I won\'t lie', 'getting my head around', 'see real progress', 'cognitive flexibility', 'appreciation for'],
          grammarPoints: ['Present Perfect Continuous (I\'ve been learning)', 'It\'s been + adjective', 'Modal verbs (must be)', 'How challenging it + verb'],
          tips: 'Show continuous learning and self-improvement. Explain your motivation and the benefits beyond the skill itself.'
        },
        {
          question: 'What\'s the most memorable experience you\'ve had recently?',
          sampleAnswer: 'The most memorable experience I\'ve had recently was a solo hiking trip I took to the Lake District last month. I\'d never done anything like that before - I\'m usually more of a city person - but I felt I needed to challenge myself and step out of my comfort zone. I spent four days hiking different trails, staying in small guesthouses, and just being completely disconnected from technology and work. What struck me most was how peaceful and grounding the experience was. I had so much time to think, to reflect on my goals and priorities. I also met some fascinating people along the way - fellow hikers from all over the world. It reminded me that some of the best experiences come from taking risks and trying new things.',
          keyVocabulary: ['solo trip', 'step out of my comfort zone', 'disconnected from', 'what struck me most', 'grounding', 'reflect on', 'taking risks'],
          grammarPoints: ['Past Simple for completed actions', 'Past Perfect (I\'d never done)', 'Gerunds (being completely disconnected, trying new things)', 'It reminded me that'],
          tips: 'Choose an experience that shows personal growth or learning. Describe not just what happened, but what it meant to you.'
        }
      ]
    },
    {
      category: 'Past Experiences (Last Summer)',
      color: 'bg-purple-900',
      icon: '☀️',
      description: 'Questions about activities and events from last summer.',
      questions: [
        {
          question: 'What did you do last summer?',
          sampleAnswer: 'Last summer was quite memorable for me. I spent two weeks in Portugal, which was absolutely incredible. I started in Lisbon, which I fell in love with - the architecture, the food, the friendly locals. I spent my days wandering through the narrow streets of Alfama, trying different pastéis de nata in every café I could find, and watching the sunset from various viewpoints around the city. After Lisbon, I rented a car and drove down the coast to the Algarve. I stayed in a small coastal town and spent most of my time on the beach, reading, swimming, and just unwinding. What I loved most was that I didn\'t have a strict itinerary - I just went with the flow and let myself be spontaneous, which is quite unlike me usually!',
          keyVocabulary: ['fell in love with', 'wandering through', 'went with the flow', 'be spontaneous', 'quite unlike me', 'unwinding'],
          grammarPoints: ['Past Simple for completed actions', 'Past Continuous (I was staying)', 'Relative clauses (which was...)', 'What I loved most was that'],
          tips: 'Provide specific details and sensory descriptions. Show enthusiasm and explain what made the experience special.'
        },
        {
          question: 'Did you go on holiday last summer? Where did you go?',
          sampleAnswer: 'Yes, I did! I went to Croatia with three of my closest friends - it was our first proper trip together since university, so it felt quite special. We based ourselves in Split for a week and took day trips to nearby islands like Hvar and Brač. The highlight was definitely a sailing trip we did around the Dalmatian coast. None of us had any sailing experience, but we hired a skipper who taught us the basics. We spent three days island-hopping, swimming in crystal-clear waters, and sleeping under the stars on deck. The whole experience was magical. What made it even better was that we all agreed to have a digital detox - we barely used our phones, which meant we were completely present and really bonded as a group.',
          keyVocabulary: ['proper trip', 'based ourselves', 'highlight', 'island-hopping', 'crystal-clear waters', 'digital detox', 'completely present', 'bonded as a group'],
          grammarPoints: ['Past Simple narration', 'None of us had', 'What made it better was that', 'We all agreed to + infinitive'],
          tips: 'Tell a story with a beginning, middle, and end. Include specific details that make your answer interesting and unique.'
        },
        {
          question: 'What was the weather like last summer where you live?',
          sampleAnswer: 'Last summer was unusually hot and dry where I live. We had a proper heatwave that lasted for about six weeks - temperatures were regularly hitting 35°C, which is quite extreme for our area. While it was great for outdoor activities and barbecues, it did cause some problems. There was a hosepipe ban because of water shortages, and my garden definitely suffered! A lot of the grass turned brown and some plants didn\'t survive despite my best efforts to keep them watered. The evenings were beautiful though - warm enough to sit outside until late, which I really enjoyed. We made the most of it by having lots of outdoor dinners and even set up a small paddling pool in the garden, which was a lifesaver during the hottest days.',
          keyVocabulary: ['proper heatwave', 'regularly hitting', 'hosepipe ban', 'despite my best efforts', 'made the most of it', 'lifesaver'],
          grammarPoints: ['Past Simple for past states', 'Past Continuous (temperatures were hitting)', 'Enough to + infinitive', 'While it was...it did'],
          tips: 'Don\'t just describe the weather - talk about how it affected your activities and daily life. This makes your answer more interesting.'
        },
        {
          question: 'Did you try anything new last summer?',
          sampleAnswer: 'I did, actually! Last summer, I took up paddleboarding for the first time. A colleague had been raving about it for months, so I finally decided to give it a go. I was quite nervous at first - my balance isn\'t great and I was convinced I\'d spend more time in the water than on the board! But I was pleasantly surprised. After a few attempts and definitely a few falls, I got the hang of it. What I loved about it was how peaceful it was - gliding across the water early in the morning, watching the sunrise, seeing wildlife like ducks and swans up close. It became my go-to weekend activity. I went almost every Saturday morning, and it was the perfect way to start the weekend. It taught me that I should try new things more often instead of always sticking to what I know.',
          keyVocabulary: ['took up', 'raving about', 'give it a go', 'got the hang of it', 'gliding across', 'go-to activity', 'sticking to what I know'],
          grammarPoints: ['Past Simple narrative', 'Past Perfect Continuous (had been raving)', 'I was convinced I\'d', 'What I loved was', 'Instead of + gerund'],
          tips: 'Describe the learning process and what you gained from the experience. Show willingness to step out of your comfort zone.'
        }
      ]
    },
    {
      category: 'Future Plans',
      color: 'bg-orange-900',
      icon: '🎯',
      description: 'Questions about your goals, aspirations, and future intentions.',
      questions: [
        {
          question: 'What are your plans for the next year?',
          sampleAnswer: 'I\'ve got quite a few goals for the next year, both professionally and personally. Career-wise, I\'m planning to take on more leadership responsibilities. I\'ve been working in my current role for three years now, and I feel ready for the next step. I\'m hoping to lead my own team or project, which would be a great opportunity to develop my management skills. On a personal level, I\'m planning to finally run a full marathon - I\'ve done several half-marathons, so this feels like a natural progression. I\'m also committed to improving my work-life balance. I tend to work quite long hours, and I want to be more intentional about making time for friends, family, and hobbies. Oh, and I\'m planning a big trip to Japan in the spring, which I\'m incredibly excited about!',
          keyVocabulary: ['take on', 'ready for the next step', 'natural progression', 'committed to', 'intentional about', 'making time for', 'incredibly excited about'],
          grammarPoints: ['Going to + infinitive', 'Planning to + infinitive', 'Present Perfect (I\'ve been working, I\'ve done)', 'I tend to + infinitive', 'Would be + adjective'],
          tips: 'Show ambition balanced with realistic goals. Include both professional and personal plans to show you\'re well-rounded.'
        },
        {
          question: 'Where do you see yourself in five years?',
          sampleAnswer: 'In five years, I see myself in a senior position within my field, ideally managing a team and working on strategic initiatives rather than just day-to-day tasks. I\'m passionate about mentoring and developing others, so I\'d love to be in a role where that\'s a key part of my responsibilities. Location-wise, I\'m quite open - I\'d be happy to relocate if the right opportunity came along, perhaps even internationally. I think working abroad for a few years would be an incredible experience both professionally and personally. On a personal front, I hope to have bought a larger property, maybe with a garden where I can pursue my interest in growing my own vegetables. I also want to have traveled to at least ten new countries - I\'ve always believed that travel is one of the best forms of education.',
          keyVocabulary: ['I see myself', 'strategic initiatives', 'passionate about', 'key part of', 'if the right opportunity came along', 'pursue my interest in', 'forms of education'],
          grammarPoints: ['Present Simple for future vision', 'I\'d love to + infinitive', 'I\'d be happy to', 'Conditional structures', 'I hope to have + past participle (future perfect)'],
          tips: 'Be ambitious but realistic. Show you\'ve thought about your career trajectory while remaining flexible and open to opportunities.'
        },
        {
          question: 'What are you looking forward to in the near future?',
          sampleAnswer: 'There are several things I\'m really looking forward to! In the immediate future, I\'m excited about a project launch at work next month - it\'s something I\'ve been involved in from the very beginning, and seeing it come to fruition will be really satisfying. I\'m also looking forward to my best friend\'s wedding in two months - I\'m actually going to be the best man, which is both an honor and slightly terrifying! I\'ve been working on my speech for weeks. On a simpler note, I\'m looking forward to the Christmas holidays. My family has a tradition of getting together at my parents\' house, and it\'s always such a warm, chaotic, wonderful time. And finally, I\'m really excited about starting Italian classes in January - I\'ve wanted to learn for years, and I\'ve finally signed up.',
          keyVocabulary: ['in the immediate future', 'come to fruition', 'both an honor and', 'on a simpler note', 'chaotic but wonderful', 'I\'ve finally signed up'],
          grammarPoints: ['Present Continuous for future (I\'m excited about)', 'Present Perfect Continuous (I\'ve been working, I\'ve been involved)', 'It\'s something I\'ve...', 'I\'ve wanted to + infinitive'],
          tips: 'Mix big and small things you\'re looking forward to. This shows you can find joy in both major events and everyday moments.'
        },
        {
          question: 'Do you have any goals you want to achieve?',
          sampleAnswer: 'Absolutely! I\'m quite goal-oriented, actually. My main professional goal right now is to become a subject matter expert in sustainable business practices. Climate change is something I care deeply about, and I want to position myself as someone who can help companies transition to more environmentally friendly operations. To achieve this, I\'m planning to pursue additional certifications and attend industry conferences. Personally, I have a fitness goal - I want to be able to do a proper pull-up! It sounds simple, but I\'ve never been able to do one, and I\'m working with a personal trainer to build the necessary strength. I also have a creative goal: I want to write and publish a collection of short stories. I\'ve been writing on and off for years, but I want to take it more seriously and actually put my work out there, even if it\'s just self-published initially.',
          keyVocabulary: ['goal-oriented', 'care deeply about', 'position myself as', 'transition to', 'put my work out there', 'on and off', 'take it more seriously'],
          grammarPoints: ['Want to + infinitive', 'I\'m planning to', 'I\'ve never been able to', 'I\'ve been writing (Present Perfect Continuous)', 'Even if + clause'],
          tips: 'Show diverse goals across different areas of life. Explain why these goals matter to you and what steps you\'re taking to achieve them.'
        }
      ]
    },
    {
      category: 'Job Interview Questions',
      color: 'bg-red-900',
      icon: '💼',
      description: 'Common questions asked during job interviews.',
      questions: [
        {
          question: 'Tell me about yourself.',
          sampleAnswer: 'I\'m a digital marketing professional with over six years of experience, specializing in social media strategy and content creation. I graduated from university with a degree in Communications, and I immediately knew I wanted to work in the digital space. I started my career at a small startup, which was an incredible learning experience - I wore many hats and really learned the ins and outs of digital marketing from the ground up. After three years, I moved to a larger agency where I\'ve been leading campaigns for major brands. What I love most about my work is the combination of creativity and data - I get to develop engaging content while also analyzing metrics to optimize performance. Outside of work, I\'m passionate about photography and volunteering with a local literacy program. I believe strongly in continuous learning, which is why I recently completed a certification in digital analytics.',
          keyVocabulary: ['specializing in', 'wore many hats', 'from the ground up', 'what I love most', 'passionate about', 'believe strongly in', 'continuous learning'],
          grammarPoints: ['Present Simple for current role', 'Past Simple for career history', 'Which is why (relative clause)', 'What I love most is'],
          tips: 'Create a compelling narrative that connects your past, present, and future. Keep it professional but let your personality shine through.'
        },
        {
          question: 'Why do you want to work for this company?',
          sampleAnswer: 'I\'ve been following your company\'s work for several years now, and I\'m genuinely impressed by your commitment to innovation and sustainability. What particularly attracts me is your recent initiative to become carbon neutral by 2030 - it aligns perfectly with my personal values and my professional interest in sustainable business practices. I\'ve researched your company culture extensively, and the emphasis on employee development and collaborative working really resonates with me. I was particularly interested to read about your mentorship program and the opportunities for cross-departmental projects. I believe my skills in project management and my experience with agile methodologies would be a valuable addition to your team. Moreover, the role itself is exactly the kind of challenge I\'m looking for at this stage of my career - it would allow me to leverage my existing expertise while also developing new skills in areas like AI and machine learning.',
          keyVocabulary: ['genuinely impressed by', 'aligns perfectly with', 'resonates with me', 'valuable addition', 'at this stage of my career', 'leverage my expertise'],
          grammarPoints: ['Present Perfect Continuous (I\'ve been following)', 'What particularly attracts me is', 'Would be + adjective', 'Would allow me to + infinitive'],
          tips: 'Show you\'ve done your research. Connect the company\'s values and goals to your own. Be specific about what attracts you.'
        },
        {
          question: 'What are your strengths and weaknesses?',
          sampleAnswer: 'One of my key strengths is my ability to manage multiple projects simultaneously while maintaining attention to detail. In my current role, I regularly juggle five or six campaigns at different stages, and I\'ve developed robust systems to ensure nothing falls through the cracks. I\'m also a strong communicator - I\'ve been told I have a knack for explaining complex technical concepts in ways that non-technical stakeholders can understand, which has been invaluable when presenting proposals to clients. As for weaknesses, I tend to be a bit of a perfectionist, which can sometimes slow me down. I\'ve learned to recognize when "good enough" is actually sufficient and when perfectionism is adding value versus creating unnecessary delays. I\'m actively working on this by setting clearer boundaries around revision cycles and trusting my initial judgment more. Another area I\'m developing is public speaking. While I\'m comfortable in small meetings, large presentations still make me nervous. I\'ve been addressing this by volunteering to present at team meetings and I recently joined a Toastmasters group.',
          keyVocabulary: ['juggle multiple projects', 'falls through the cracks', 'have a knack for', 'invaluable when', 'tend to be', 'setting clearer boundaries', 'trusting my judgment'],
          grammarPoints: ['Present Perfect (I\'ve developed, I\'ve learned, I\'ve been told)', 'Can sometimes + verb', 'I\'m actively working on', 'Present Perfect Continuous (I\'ve been addressing)'],
          tips: 'For strengths, provide specific examples. For weaknesses, choose real ones but show self-awareness and what you\'re doing to improve.'
        },
        {
          question: 'Describe a challenging situation you faced and how you handled it.',
          sampleAnswer: 'Last year, I was leading a major campaign launch when our main designer unexpectedly left the company just two weeks before the deadline. We were already behind schedule, and losing our key creative resource felt like a disaster. I had to act quickly. First, I called an emergency meeting with the remaining team to reassess our priorities and see what could be delegated. I then reached out to my network and managed to find a freelance designer who could start immediately. However, bringing someone new up to speed so quickly was challenging. I created detailed briefs and held daily check-ins to ensure we stayed aligned. I also negotiated with the client to adjust some of the deliverables - being transparent about the situation actually strengthened our relationship. We ended up delivering the campaign only three days late, and the client was extremely understanding and happy with the results. The experience taught me the importance of having contingency plans and the value of honest communication, especially when things go wrong.',
          keyVocabulary: ['unexpectedly left', 'act quickly', 'emergency meeting', 'reassess priorities', 'bring someone up to speed', 'stay aligned', 'contingency plans', 'when things go wrong'],
          grammarPoints: ['Past Simple narrative', 'Past Continuous (We were already behind)', 'Managed to + infinitive', 'Ended up + gerund', 'Being + adjective (Being transparent)'],
          tips: 'Use the STAR method (Situation, Task, Action, Result). Show problem-solving skills and what you learned from the experience.'
        },
        {
          question: 'Why are you leaving your current job?',
          sampleAnswer: 'I\'ve really valued my time at my current company - I\'ve learned an enormous amount and had the opportunity to work on some fantastic projects. However, after four years, I feel I\'ve reached a plateau in terms of growth opportunities. I\'ve taken on as much responsibility as possible in my current role, and unfortunately, there aren\'t many opportunities for advancement within the organization due to its flat structure. I\'m now looking for a position that will challenge me in new ways and allow me to develop skills in areas like strategic planning and team leadership. Your role particularly appeals to me because it would give me exposure to international markets and larger-scale projects. I\'m not leaving because of any negative experiences - I\'m simply ready for the next chapter in my career and I believe this position aligns much better with my long-term goals.',
          keyVocabulary: ['valued my time', 'learned an enormous amount', 'reached a plateau', 'opportunities for advancement', 'flat structure', 'challenge me in new ways', 'next chapter', 'aligns with my goals'],
          grammarPoints: ['Present Perfect (I\'ve learned, I\'ve taken on, I\'ve reached)', 'Unfortunately + clause', 'I\'m now looking for', 'Would give me + noun', 'I\'m not leaving because'],
          tips: 'Stay positive about your current employer. Focus on what you\'re moving toward, not what you\'re running from. Show ambition and clear career goals.'
        },
        {
          question: 'Where do you see yourself in 5 years?',
          sampleAnswer: 'In five years, I see myself having progressed into a senior management role, ideally leading a department or a significant business unit. I\'m very interested in strategic leadership and making decisions that shape the direction of projects and teams. I hope to have developed strong expertise in emerging technologies relevant to this industry, perhaps even becoming a thought leader who speaks at conferences or contributes to industry publications. That said, I\'m also pragmatic - I know that career progression isn\'t always linear, and I\'m open to lateral moves if they provide valuable learning experiences. What\'s most important to me is continuous growth and being in an environment where I\'m consistently challenged. I also see myself having built a strong professional network and having mentored several junior team members - giving back and helping others develop is something I find really fulfilling.',
          keyVocabulary: ['having progressed into', 'shape the direction', 'thought leader', 'career progression isn\'t linear', 'lateral moves', 'continuously challenged', 'giving back', 'find really fulfilling'],
          grammarPoints: ['I see myself + gerund', 'I hope to have + past participle (future perfect)', 'I know that + clause', 'Being in an environment where', 'What\'s most important is'],
          tips: 'Show ambition but also flexibility. Align your goals with the company\'s potential career paths. Show you\'ve thought seriously about your future.'
        },
        {
          question: 'What motivates you?',
          sampleAnswer: 'I\'m primarily motivated by seeing tangible results from my work and knowing that I\'ve made a positive impact. I get a real sense of satisfaction from taking a project from concept to completion and seeing it succeed. I\'m also highly motivated by learning and personal development - I love being in situations where I\'m slightly out of my comfort zone and have to acquire new skills or knowledge. Working with talented colleagues is another big motivator for me. I thrive in collaborative environments where I can both learn from others and share my own expertise. Recognition certainly matters to me too - not necessarily public praise, but knowing that my contributions are valued and that I\'m trusted with increasing levels of responsibility. Finally, I\'m motivated by purpose. I want to feel that the work I\'m doing has meaning, whether that\'s helping customers solve problems, contributing to innovation, or supporting my team\'s success.',
          keyVocabulary: ['tangible results', 'made a positive impact', 'sense of satisfaction', 'out of my comfort zone', 'thrive in', 'valued and trusted', 'increasing levels of responsibility', 'has meaning'],
          grammarPoints: ['I\'m motivated by + gerund', 'I get a sense of...from + gerund', 'I love being in situations where', 'Knowing that + clause', 'Whether that\'s + gerund'],
          tips: 'Give multiple motivators to show you\'re well-rounded. Connect your motivations to the role you\'re applying for. Be authentic and specific.'
        },
        {
          question: 'Do you have any questions for us?',
          sampleAnswer: 'Yes, I do have several questions. First, could you tell me more about the team I\'d be working with? I\'m particularly interested in understanding the team dynamics and how collaboration typically works. Second, what does success look like in this role? I\'d love to know what the key priorities would be in the first three to six months. I\'m also curious about professional development opportunities - does the company support continued learning through courses, conferences, or certifications? Additionally, I noticed the company recently launched a new sustainability initiative. Could you tell me more about that and whether this role would have any involvement in those efforts? Finally, what do you enjoy most about working here? I always think it\'s valuable to hear from current employees about what makes the company special to them.',
          keyVocabulary: ['team dynamics', 'what does success look like', 'key priorities', 'professional development', 'I noticed that', 'involvement in', 'valuable to hear from'],
          grammarPoints: ['Could you tell me about', 'I\'m particularly interested in + gerund', 'What does...look like?', 'I\'d love to know', 'I\'m curious about', 'Would have + noun'],
          tips: 'Always have questions prepared. Ask about the role, team, company culture, and growth opportunities. Show genuine interest and that you\'ve researched the company.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestion(expandedQuestion === key ? null : key);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-htb-bg text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-htb-green">
            B2 Personal Questions & Answers
          </h1>
          <p className="text-lg sm:text-xl text-htb-text max-w-3xl mx-auto mb-6">
            Practice answering common personal and interview questions with detailed sample answers.
            Learn how to structure responses, use advanced vocabulary, and speak naturally at B2 level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
              <p className="text-htb-text text-sm">
                💡 <strong className="text-htb-green">Tip:</strong> Don't memorize answers! Use these as examples to develop your own authentic responses.
              </p>
            </div>
            <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
              <p className="text-htb-text text-sm">
                🎯 <strong className="text-htb-green">Strategy:</strong> Include specific details and examples to make your answers more interesting and believable.
              </p>
            </div>
            <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
              <p className="text-htb-text text-sm">
                📝 <strong className="text-htb-green">Practice:</strong> Record yourself answering these questions to improve fluency and pronunciation.
              </p>
            </div>
          </div>
        </div>

        {/* Question Categories */}
        {questionCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 sm:mb-12">
            <div className="bg-htb-sidebar p-4 sm:p-6 rounded-t-lg border-b-4 border-htb-green">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl sm:text-4xl">{category.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{category.category}</h2>
              </div>
              <p className="text-htb-text text-base sm:text-lg">{category.description}</p>
            </div>

            <div className="space-y-4 mt-6">
              {category.questions.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                const isExpanded = expandedQuestion === key;
                const uniqueIndex = `${categoryIndex}-${questionIndex}`;

                return (
                  <div
                    key={questionIndex}
                    className="bg-htb-card border border-gray-800 rounded-lg overflow-hidden hover:border-htb-green transition-all duration-300"
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-htb-sidebar transition-colors"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-xl sm:text-2xl">{isExpanded ? '📖' : '❓'}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-htb-green text-left">
                          {item.question}
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${isExpanded ? 'rotate-180' : ''} text-htb-green`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                        {/* Sample Answer */}
                        <div className="bg-htb-sidebar p-4 sm:p-5 rounded-lg border-l-4 border-htb-green">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-base sm:text-lg font-semibold text-htb-green">📝 Sample Answer:</h4>
                            <button
                              onClick={() => copyToClipboard(item.sampleAnswer, `answer-${uniqueIndex}`)}
                              className="text-htb-text-dim hover:text-htb-green transition-colors"
                              title="Copy answer"
                            >
                              {copiedIndex === `answer-${uniqueIndex}` ? (
                                <span className="text-htb-green text-sm">✓ Copied!</span>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              )}
                            </button>
                          </div>
                          <p className="text-htb-text text-sm sm:text-base leading-relaxed italic">
                            "{item.sampleAnswer}"
                          </p>
                        </div>

                        {/* Key Vocabulary */}
                        <div className="bg-htb-sidebar border border-gray-800 p-4 rounded-lg">
                          <h4 className="text-sm sm:text-md font-semibold text-htb-green mb-3">🔑 Key Vocabulary & Expressions:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.keyVocabulary.map((vocab, vIdx) => (
                              <span
                                key={vIdx}
                                className="bg-htb-card text-htb-text px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-800"
                              >
                                {vocab}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Grammar Points */}
                        <div className="bg-htb-sidebar border border-gray-800 p-4 rounded-lg">
                          <h4 className="text-sm sm:text-md font-semibold text-htb-green mb-3">📚 Grammar Points:</h4>
                          <ul className="space-y-2">
                            {item.grammarPoints.map((point, gIdx) => (
                              <li key={gIdx} className="text-htb-text text-sm sm:text-base flex items-start gap-2">
                                <span className="text-htb-green mt-1">▸</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tips */}
                        <div className="bg-htb-sidebar border border-htb-green/30 p-4 rounded-lg">
                          <h4 className="text-sm sm:text-md font-semibold text-htb-green mb-2">💡 Answer Tips:</h4>
                          <p className="text-htb-text text-xs sm:text-sm">{item.tips}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* General Tips Section */}
        <div className="mt-8 sm:mt-12 bg-htb-sidebar border border-htb-green/30 rounded-lg p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-htb-green">General Tips for Answering Personal Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-htb-text">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-htb-green">✓ Do:</h3>
              <ul className="space-y-2 list-disc list-inside text-sm sm:text-base">
                <li>Be specific and give examples to support your points</li>
                <li>Use a variety of tenses appropriately (past, present, future)</li>
                <li>Include feelings and personal reflections</li>
                <li>Structure longer answers with clear beginning, middle, and end</li>
                <li>Use linking words to connect your ideas smoothly</li>
                <li>Show enthusiasm and personality in your responses</li>
                <li>Expand on your answers - aim for 30-60 seconds per question</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-400">✗ Don't:</h3>
              <ul className="space-y-2 list-disc list-inside text-sm sm:text-base">
                <li>Give one-word or very short answers</li>
                <li>Memorize answers word-for-word (sounds unnatural)</li>
                <li>Use only simple vocabulary and grammar</li>
                <li>Go off-topic or ramble without structure</li>
                <li>Be negative or complain excessively</li>
                <li>Lie or exaggerate - be authentic</li>
                <li>Forget to actually answer the question asked</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interview-Specific Tips */}
        <div className="mt-6 sm:mt-8 bg-htb-sidebar border border-htb-green/30 rounded-lg p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-htb-green">Job Interview Success Tips</h2>
          <div className="space-y-4 text-htb-text">
            <div className="bg-htb-card border border-gray-800 p-4 rounded">
              <h4 className="text-base sm:text-lg font-semibold text-htb-green mb-2">🎯 STAR Method</h4>
              <p className="mb-2 text-sm sm:text-base">For behavioral questions, use the STAR structure:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                <li><strong>Situation:</strong> Set the context</li>
                <li><strong>Task:</strong> Describe your responsibility</li>
                <li><strong>Action:</strong> Explain what you did</li>
                <li><strong>Result:</strong> Share the outcomes and what you learned</li>
              </ul>
            </div>
            <div className="bg-htb-card border border-gray-800 p-4 rounded">
              <h4 className="text-base sm:text-lg font-semibold text-htb-green mb-2">🔍 Research is Key</h4>
              <p className="text-sm sm:text-base">Before the interview, research the company thoroughly: their values, recent news, products/services, and culture. Reference this knowledge in your answers to show genuine interest.</p>
            </div>
            <div className="bg-htb-card border border-gray-800 p-4 rounded">
              <h4 className="text-base sm:text-lg font-semibold text-htb-green mb-2">💬 Body Language Matters</h4>
              <p className="text-sm sm:text-base">Maintain eye contact, sit up straight, smile, and use hand gestures naturally. Your non-verbal communication is just as important as your words.</p>
            </div>
            <div className="bg-htb-card border border-gray-800 p-4 rounded">
              <h4 className="text-base sm:text-lg font-semibold text-htb-green mb-2">⏰ Practice Timing</h4>
              <p className="text-sm sm:text-base">Aim for 1-2 minute answers for most questions. Too short seems unprepared; too long can lose the interviewer's attention. Practice timing yourself!</p>
            </div>
          </div>
        </div>

        {/* Practice Suggestion */}
        <div className="mt-6 sm:mt-8 bg-htb-sidebar border border-htb-green/30 rounded-lg p-4 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-htb-green">Ready to Practice?</h2>
          <p className="text-htb-text mb-4 text-sm sm:text-base">
            Record yourself answering these questions and compare your responses to the sample answers. 
            Focus on using natural intonation, appropriate vocabulary, and clear structure.
          </p>
          <p className="text-xs sm:text-sm text-htb-text-dim italic">
            Total questions covered: {questionCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} across {questionCategories.length} categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalQuestionsB2;
