import React, { useState } from 'react';

const EmailWritingB2 = () => {
  const [selectedEmail, setSelectedEmail] = useState(0);
  const [hoveredTense, setHoveredTense] = useState(null);
  const [hoveredSignal, setHoveredSignal] = useState(null);

  // Signal words patterns
  const signalWordsPatterns = [
    {
      words: ['for', 'since', 'how long'],
      tense: 'Duration (Perfect Continuous)',
      color: 'bg-emerald-200 text-emerald-900',
    },
    {
      words: [
        'already',
        'just',
        'yet',
        'ever',
        'never',
        'recently',
        'lately',
        'so far',
        'up to now',
      ],
      tense: 'Present Perfect',
      color: 'bg-indigo-200 text-indigo-900',
    },
    {
      words: ['before', 'after', 'by the time', 'until', 'when'],
      tense: 'Past Perfect / Sequence',
      color: 'bg-purple-200 text-purple-900',
    },
    {
      words: ['while', 'when', 'as', 'at that moment', 'at that time'],
      tense: 'Past Continuous / Background',
      color: 'bg-yellow-200 text-yellow-900',
    },
    {
      words: [
        'yesterday',
        'ago',
        'last week',
        'last month',
        'last year',
        'in 1990',
        'in 2020',
      ],
      tense: 'Past Simple',
      color: 'bg-orange-200 text-orange-900',
    },
    {
      words: ['by', 'by then', 'by now', 'by that time', 'by next week'],
      tense: 'Perfect (Future/Past)',
      color: 'bg-pink-200 text-pink-900',
    },
    {
      words: [
        'next week',
        'next month',
        'next year',
        'tomorrow',
        'in the future',
      ],
      tense: 'Future',
      color: 'bg-blue-200 text-blue-900',
    },
  ];

  const highlightSignalWords = (text) => {
    let result = text;
    const allWords = [];

    signalWordsPatterns.forEach((pattern) => {
      pattern.words.forEach((word) => {
        allWords.push({ word, tense: pattern.tense, color: pattern.color });
      });
    });

    // Sort by length (descending) to match longer phrases first
    allWords.sort((a, b) => b.word.length - a.word.length);

    const segments = [];
    let currentText = text;
    let position = 0;

    while (position < currentText.length) {
      let foundMatch = false;

      for (const item of allWords) {
        const regex = new RegExp(`\\b${item.word}\\b`, 'gi');
        const match = currentText.slice(position).match(regex);

        if (match && currentText.slice(position).search(regex) === 0) {
          segments.push({
            text: match[0],
            isSignal: true,
            tense: item.tense,
            color: item.color,
          });
          position += match[0].length;
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) {
        let nextMatch = currentText.length;

        for (const item of allWords) {
          const regex = new RegExp(`\\b${item.word}\\b`, 'gi');
          const match = regex.exec(currentText.slice(position));
          if (match && match.index < nextMatch) {
            nextMatch = match.index;
          }
        }

        const textChunk = currentText.slice(
          position,
          position + (nextMatch === currentText.length ? nextMatch : nextMatch)
        );
        if (textChunk) {
          segments.push({ text: textChunk, isSignal: false });
        }
        position += textChunk.length;

        if (position >= currentText.length) break;
      }
    }

    return segments;
  };

  // Función para resaltar tenses en el texto
  const highlightTenses = (text) => {
    const tensePatterns = [
      {
        pattern: /\b(had\s+been\s+\w+ing)\b/gi,
        tense: 'Past Perfect Continuous',
        usage:
          'Used to emphasize the duration of an action that was in progress before another past action. Shows how long something had been happening.',
        auxiliary: 'had been',
        verbForm: 'verb + -ing (present participle)',
        timeWords: 'for, since, before, when',
        color: 'bg-blue-500/20 border-b-2 border-blue-500',
        hoverColor: 'bg-blue-500/40',
      },
      {
        pattern:
          /\b(had\s+(?:been|become|come|done|gone|got|given|known|made|seen|taken|written|completed|passed|arrived|moved|stayed|thrown|laid|put|told|learned|left|met|attended|found|won|lost|built|spent|heard|felt|thought|kept|brought|bought|caught|taught|fought|sought|sold|held|sent|paid|said|worked|lived|studied|traveled|travelled|opened|closed|created|started|finished|changed|used|helped|wanted|needed|liked|loved|hated|tried|planned|happened|seemed|appeared|remembered|forgotten|chosen|spoken|broken|frozen|stolen|hidden|ridden|driven|eaten|drunk|sung|swum|begun|run|sat|stood|understood|grown|shown|drawn|flown|worn|torn|fallen|risen|shaken|beaten|bitten|blown))\b/gi,
        tense: 'Past Perfect',
        usage:
          'Used to show that an action was completed before another action or time in the past. Establishes the sequence of past events.',
        auxiliary: 'had',
        verbForm: 'past participle (3rd form)',
        timeWords: 'before, after, already, just, never, ever, by the time',
        color: 'bg-purple-500/20 border-b-2 border-purple-500',
        hoverColor: 'bg-purple-500/40',
      },
      {
        pattern: /\b((?:was|were)\s+\w+ing)\b/gi,
        tense: 'Past Continuous',
        usage:
          'Used to describe actions that were in progress at a specific time in the past, or to set the background scene for another past action.',
        auxiliary: 'was/were',
        verbForm: 'verb + -ing (present participle)',
        timeWords: "while, when, at that moment, at 5 o'clock yesterday",
        color: 'bg-yellow-500/20 border-b-2 border-yellow-500',
        hoverColor: 'bg-yellow-500/40',
      },
      {
        pattern: /\b((?:have|has|haven't|hasn't)\s+been\s+\w+ing)\b/gi,
        tense: 'Present Perfect Continuous',
        usage:
          'Used to emphasize the duration of an action that started in the past and continues now, or has just finished with visible results.',
        auxiliary: 'have/has been',
        verbForm: 'verb + -ing (present participle)',
        timeWords: 'for, since, how long, lately, recently',
        color: 'bg-cyan-500/20 border-b-2 border-cyan-500',
        hoverColor: 'bg-cyan-500/40',
      },
      {
        pattern:
          /\b((?:have|has|haven't|hasn't|'ve|'s)\s+(?:been|become|come|done|gone|got|given|known|made|seen|taken|written|completed|passed|arrived|moved|stayed|thrown|laid|put|told|learned|left|met|attended|found|won|lost|built|spent|heard|felt|thought|kept|brought|bought|caught|taught|fought|sought|sold|held|sent|paid|said|worked|lived|studied|traveled|travelled|opened|closed|created|started|finished|changed|used|helped|wanted|needed|liked|loved|hated|tried|planned|happened|seemed|appeared|remembered|forgotten|chosen|spoken|broken|frozen|stolen|hidden|ridden|driven|eaten|drunk|sung|swum|begun|run|sat|stood|understood|grown|shown|drawn|flown|worn|torn|fallen|risen|shaken|beaten|bitten|blown))\b/gi,
        tense: 'Present Perfect',
        usage:
          'Used to connect the past with the present. Shows completed actions with present relevance, recent actions, or experiences without specific time.',
        auxiliary: 'have/has',
        verbForm: 'past participle (3rd form)',
        timeWords:
          'just, already, yet, ever, never, recently, lately, so far, up to now',
        color: 'bg-indigo-500/20 border-b-2 border-indigo-500',
        hoverColor: 'bg-indigo-500/40',
      },
      {
        pattern:
          /\b((?:would|could|should|might|must)\s+have\s+\w+(?:ed|en))\b/gi,
        tense: 'Modal Perfect',
        usage:
          'Used to speculate, express regret, or make deductions about past situations. Shows what was possible, probable, or advisable in the past.',
        auxiliary: 'modal + have',
        verbForm: 'past participle (3rd form)',
        timeWords: 'by now, by then, by that time',
        color: 'bg-pink-500/20 border-b-2 border-pink-500',
        hoverColor: 'bg-pink-500/40',
      },
      {
        pattern: /\b((?:will|'ll)\s+(?:be\s+\w+ing|have\s+\w+(?:ed|en)))\b/gi,
        tense: 'Future Perfect/Continuous',
        usage:
          'Used to describe actions that will be completed or in progress at a specific time in the future.',
        auxiliary: 'will',
        verbForm: 'have + past participle OR be + verb-ing',
        timeWords: 'by, by the time, by then, in, next week/month/year',
        color: 'bg-orange-500/20 border-b-2 border-orange-500',
        hoverColor: 'bg-orange-500/40',
      },
    ];

    const paragraphs = text.split('\n\n');

    return paragraphs.map((paragraph, pIndex) => {
      if (!paragraph.trim()) return null;

      let segments = [{ text: paragraph, matches: [] }];

      tensePatterns.forEach((tensePattern) => {
        const newSegments = [];

        segments.forEach((segment) => {
          if (typeof segment !== 'string' && segment.tense) {
            newSegments.push(segment);
            return;
          }

          const textToProcess =
            typeof segment === 'string' ? segment : segment.text;
          const matches = [...textToProcess.matchAll(tensePattern.pattern)];

          if (matches.length === 0) {
            newSegments.push(segment);
            return;
          }

          let lastIndex = 0;
          matches.forEach((match) => {
            const beforeText = textToProcess.substring(lastIndex, match.index);
            if (beforeText) {
              newSegments.push(beforeText);
            }

            newSegments.push({
              text: match[0],
              tense: tensePattern.tense,
              usage: tensePattern.usage,
              auxiliary: tensePattern.auxiliary,
              verbForm: tensePattern.verbForm,
              timeWords: tensePattern.timeWords,
              color: tensePattern.color,
              hoverColor: tensePattern.hoverColor,
            });

            lastIndex = match.index + match[0].length;
          });

          const afterText = textToProcess.substring(lastIndex);
          if (afterText) {
            newSegments.push(afterText);
          }
        });

        segments = newSegments;
      });

      return (
        <p key={pIndex} className="mb-4">
          {segments.map((segment, sIndex) => {
            if (typeof segment === 'string') {
              // Apply signal words highlighting to plain text
              const signalSegments = highlightSignalWords(segment);
              return (
                <span key={sIndex}>
                  {signalSegments.map((sig, sigIndex) =>
                    sig.isSignal ? (
                      <span
                        key={`${sIndex}-${sigIndex}`}
                        className={`${sig.color} px-1.5 py-0.5 rounded font-semibold cursor-help relative inline-block`}
                        onMouseEnter={() =>
                          setHoveredSignal(`${pIndex}-${sIndex}-${sigIndex}`)
                        }
                        onMouseLeave={() => setHoveredSignal(null)}
                      >
                        {sig.text}
                        {hoveredSignal ===
                          `${pIndex}-${sIndex}-${sigIndex}` && (
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-htb-bg border-2 border-htb-green rounded-lg text-htb-green text-xs z-50 shadow-xl font-semibold w-64 whitespace-nowrap">
                            <div className="font-bold text-sm">{sig.tense}</div>
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-htb-green"></span>
                          </span>
                        )}
                      </span>
                    ) : (
                      <span key={`${sIndex}-${sigIndex}`}>{sig.text}</span>
                    )
                  )}
                </span>
              );
            }

            return (
              <span
                key={sIndex}
                className={`relative cursor-help transition-all duration-200 ${
                  hoveredTense === `${pIndex}-${sIndex}`
                    ? segment.hoverColor
                    : segment.color
                }`}
                onMouseEnter={() => setHoveredTense(`${pIndex}-${sIndex}`)}
                onMouseLeave={() => setHoveredTense(null)}
              >
                {segment.text}
                {hoveredTense === `${pIndex}-${sIndex}` && (
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-htb-bg border-2 border-htb-green rounded-lg text-htb-green text-xs z-50 shadow-xl font-semibold w-96 max-w-md">
                    <div className="font-bold mb-2 text-sm">
                      {segment.tense}
                    </div>
                    <div className="text-gray-300 font-normal text-xs leading-relaxed whitespace-normal mb-3">
                      {segment.usage}
                    </div>
                    <div className="border-t border-htb-green/30 pt-2 space-y-1.5">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">
                          Auxiliar:
                        </span>
                        <span className="text-blue-300">
                          {segment.auxiliary}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 font-bold">Verbo:</span>
                        <span className="text-green-300">
                          {segment.verbForm}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">
                          Tiempo:
                        </span>
                        <span className="text-yellow-300">
                          {segment.timeWords}
                        </span>
                      </div>
                    </div>
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-htb-green"></span>
                  </span>
                )}
              </span>
            );
          })}
        </p>
      );
    });
  };

  const emailExamples = [
    {
      id: 1,
      title: 'Informal Email - Catching Up with Friend',
      category: 'Informal',
      subject: 'News!',
      to: 'johnstons586@gmail.com',
      situation:
        "You haven't been in touch with your friend Sue for a while because you've been ill. Write an informal email catching up and asking for hotel recommendations.",
      email: `Hi Sue,

Sorry that I haven\'t been in touch for a while, but I\'ve been ill. I got flu last week and I had a temperature of 39°C, so I\'ve been in bed for four days. I\'m feeling a bit better today, so I\'ve been catching up on my emails. Luckily, my classes at university don\'t start till next week.

How are you? What have you been doing? Anything exciting? Here everyone is fine (apart from me and my flu!). My brother Ian has just started his new job with a software company – I think I told you about it when I last wrote – anyway, so far, he\'s really been enjoying it. How is your family? I hope they\'re well.

I have some good news – I\'m going to a conference in your town in May, from 16th to 20th. Could you recommend a hotel where I could stay, in the centre of town? It needs to be somewhere not too expensive because the university is paying. I\'ll have a free half-day for sightseeing. Do you think you\'ll be able to show me around? That would be great.

Well, that\'s all for now. Please give my regards to your parents.

Hope to hear from you soon.

Take care,

Anna

PS Please reply to this email address. I\'ve stopped using the old Yahoo one.`,
      keyPhrases: [
        "Sorry that I haven't been in touch",
        "I've been ill",
        "I'm feeling a bit better",
        'catching up on my emails',
        'How are you?',
        'What have you been doing?',
        'everyone is fine',
        'has just started',
        'I have some good news',
        'Could you recommend',
        "Do you think you'll be able to",
        'Hope to hear from you soon',
        'Take care',
      ],
      structure: [
        '1. Greeting: Informal opening with apology',
        '2. Explanation: Reason for not being in touch',
        '3. Current status: Update on recovery',
        "4. Questions: Ask about friend's life",
        '5. Family news: Update on brother',
        '6. Main request: Conference and hotel recommendation',
        '7. Additional request: Ask to meet up',
        '8. Closing: Friendly sign-off with PS',
      ],
      grammarFocus: [
        'Present Perfect: "haven\'t been in touch", "I\'ve been ill"',
        'Present Perfect Continuous: "I\'ve been catching up"',
        'Past Simple: "I got flu", "I had a temperature"',
        'Present Continuous for future: "I\'m going to a conference"',
        'Modal verbs: "Could you recommend", "Do you think you\'ll be able"',
        'Time expressions: "for a while", "for four days", "so far"',
        'Informal contractions throughout',
      ],
    },
    {
      id: 2,
      title: 'Informal Email - Planning a Reunion',
      category: 'Informal',
      subject: 'Long time no see!',
      to: 'mike.taylor@email.com',
      situation:
        'You want to organize a reunion with old university friends. Write an informal email suggesting dates and asking for ideas.',
      email: `Hey Mike!

I can\'t believe it\'s been almost two years since we all graduated! Time really does fly, doesn\'t it? I\'ve been thinking about this for ages, and I reckon it\'s about time we got the old gang back together for a proper reunion.

I bumped into Sarah last month at a conference in Edinburgh, and we were reminiscing about all the crazy things we used to get up to at uni. Remember that time we tried to cook a three-course meal for the whole floor and nearly set off the fire alarm? Good times!

Anyway, I was wondering if you\'d be up for organizing something? I\'ve already mentioned it to a few people – Sarah\'s definitely in, and Tom said he\'d try to make it work around his shifts at the hospital. I\'m thinking maybe a weekend in late June or early July? That way, people who are teaching will have finished for the summer.

I was considering either London or somewhere in the countryside – maybe the Lake District? London would be easier for most people to get to, but the Lakes would be more relaxing and we could do some hiking. What do you reckon? Have you got any better ideas?

Also, have you managed to stay in touch with anyone else from our year? I\'ve completely lost contact with most people, which is a bit rubbish really. It would be great to track down as many of the old crew as possible.

Let me know what you think! If you\'re keen, maybe we could set up a group chat or something to start planning properly?

Missing the old days!

Cheers,
Alex

PS How\'s the new job going? You never did tell me how the interview went!`,
      keyPhrases: [
        "I can't believe it's been",
        'Time really does fly',
        "I've been thinking about this for ages",
        "it's about time we",
        'I bumped into',
        'we were reminiscing about',
        'Remember that time we',
        "I was wondering if you'd be up for",
        "I'm thinking maybe",
        'What do you reckon?',
        'Have you got any better ideas?',
        'Let me know what you think',
        'Missing the old days',
      ],
      structure: [
        '1. Opening: Exclamatory greeting and time reference',
        '2. Purpose: Suggest reunion',
        '3. Shared memory: Reminisce about university',
        "4. Details: Propose dates and who's interested",
        '5. Options: Suggest possible locations',
        '6. Request input: Ask for opinions and ideas',
        '7. Additional question: About other friends',
        '8. Call to action: Request response',
        '9. Closing: Nostalgic sign-off with PS',
      ],
      grammarFocus: [
        'Present Perfect: "it\'s been almost two years", "I\'ve been thinking"',
        'Past Simple: "I bumped into", "we were reminiscing"',
        'Used to: "we used to get up to"',
        'Modal verbs: "would be", "could do", "could set up"',
        'Conditional: "If you\'re keen"',
        'Question forms: "What do you reckon?", "Have you got?"',
        'Informal phrasal verbs: "get up to", "set up", "track down"',
      ],
    },
    {
      id: 3,
      title: 'Informal Email - Apologizing for Missing Event',
      category: 'Informal',
      subject: 'So sorry I missed your party!',
      to: 'rachel.green@email.com',
      situation:
        "You missed your friend's birthday party due to unexpected circumstances. Write an informal email apologizing and explaining what happened.",
      email: `Dear Rachel,

I am SO sorry I missed your birthday party on Saturday! I\'ve been feeling absolutely terrible about it all weekend. I bet you\'re wondering what on earth happened, so let me explain.

Everything was going fine – I\'d bought your present, got dressed up, and was literally about to leave my flat when my sister called in floods of tears. Her car had broken down on the motorway about 50 miles away, and she was stuck there with her two-year-old twins. Her husband was abroad on business, and she didn\'t know who else to call.

I know I should have messaged you straight away, but to be honest, it was such chaos that I completely forgot. I drove out to pick her up, which took forever because of the traffic, and then we had to wait ages for the breakdown service. By the time I got her and the twins back home and settled, it was nearly midnight. I felt awful knowing I\'d missed your party.

I really hope you had an amazing time despite my no-show. Did many people turn up? I\'ve seen some photos on Instagram and it looks like it was a great night. That cake looked incredible!

I\'d love to take you out for dinner next week to make up for it – my treat, obviously. Are you free any evening? I promise I won\'t let you down this time! I\'ve also got your present here, which I\'m dying to give you.

Once again, I\'m really sorry. I hope you can forgive me!

Lots of love,

Emma

PS Tell me you saved me a piece of that cake!`,
      keyPhrases: [
        'I am SO sorry',
        "I've been feeling absolutely terrible",
        "I bet you're wondering",
        'let me explain',
        'Everything was going fine',
        'was literally about to',
        'in floods of tears',
        'I know I should have',
        'to be honest',
        'it was such chaos',
        'By the time',
        'I felt awful',
        "I'd love to",
        'to make up for it',
        'I hope you can forgive me',
      ],
      structure: [
        '1. Apology: Strong opening apology',
        "2. Acknowledgment: Recognize reader's curiosity",
        '3. Explanation: Describe what went wrong',
        "4. Further apology: Explain why didn't message",
        '5. Details: Full account of the situation',
        '6. Expression of regret: Show you know you missed out',
        '7. Interest in event: Ask about the party',
        '8. Offer to make amends: Suggest dinner',
        '9. Final apology: Reinforce sincerity',
        '10. Light-hearted PS: Keep it friendly',
      ],
      grammarFocus: [
        'Present Perfect Continuous: "I\'ve been feeling"',
        'Past Continuous: "was literally about to leave", "was going fine"',
        'Past Perfect: "had broken down", "I\'d bought"',
        'Modal perfect: "I should have messaged"',
        'Past Simple: sequence of events',
        'By the time + Past Perfect: "By the time I got her back"',
        'Emphatic DO: "I am SO sorry"',
        'Future arrangement: "Are you free any evening?"',
      ],
    },
    {
      id: 9,
      title: 'Semi-formal Email - Professional Networking',
      category: 'Networking',
      subject: 'Following up from the Digital Innovation Conference',
      to: 'james.wilson@email.com',
      situation:
        "You've just received some exciting news about a job promotion. Write an informal email sharing the news with your close friend.",
      email: `Hi James!

I\'ve got some massive news and I just had to tell you straight away! You know how I\'ve been working my socks off at the marketing agency for the past three years? Well, it\'s finally paid off – they\'ve offered me the Creative Director position! I still can\'t quite believe it!

I found out yesterday afternoon. Sarah, the MD, called me into her office and I was absolutely bricking it because I thought I\'d done something wrong. But then she started going on about how impressed they\'ve been with my work on the recent campaigns, and how the clients have been specifically asking for me. And then she just came out with it – would I be interested in taking over as Creative Director when Mark retires next month?

I mean, I\'ve been hoping for a promotion for ages, but I never expected it to be THIS big! The salary is insane – almost double what I\'m on now – plus I\'ll get my own team of five designers and a company car. Mental, right?

The only slight downside is that I\'ll have to travel quite a bit more – probably once or twice a month to our offices in Berlin and Amsterdam. But hey, I\'m not complaining! Free trips to Europe sound pretty good to me.

I\'ve been absolutely buzzing since I heard. I went straight out and bought a bottle of champagne to celebrate with my flatmate last night. We polished off the whole thing and I\'ve got a bit of a headache today, but it was totally worth it!

Anyway, I wanted you to be one of the first to know. We should definitely go out for a proper celebration soon. Are you around this weekend? Drinks are on me!

Can\'t wait to catch up properly!

All the best,

Sophie

PS Remember when we were at uni and I said I\'d be running a creative agency by the time I was 30? Not quite there yet, but this is definitely a step in the right direction!`,
      keyPhrases: [
        "I've got some massive news",
        'I just had to tell you',
        "You know how I've been",
        "it's finally paid off",
        "I still can't quite believe it",
        'I was absolutely bricking it',
        'she started going on about',
        'she just came out with it',
        'I never expected it to be',
        'The only slight downside is',
        "I'm not complaining",
        "I've been absolutely buzzing",
        'We polished off',
        'I wanted you to be one of the first to know',
        'Drinks are on me',
      ],
      structure: [
        '1. Exciting opening: Build anticipation',
        '2. Background: Reference shared knowledge',
        '3. Big reveal: Share the news',
        '4. The moment: Describe how you found out',
        '5. Details: Explain the position and benefits',
        '6. Minor concern: Mention travel requirement',
        '7. Celebration story: Share how you celebrated',
        '8. Personal touch: Acknowledge importance of friendship',
        '9. Invitation: Suggest celebration',
        '10. Nostalgic PS: Reference shared past',
      ],
      grammarFocus: [
        'Present Perfect Continuous: "I\'ve been working my socks off"',
        'Present Perfect: "they\'ve offered me", "it\'s finally paid off"',
        'Past Simple: "I found out", "she called me"',
        'Past Continuous: "I was absolutely bricking it", "I thought"',
        'Present Perfect: "I\'ve been hoping", "I\'ve been buzzing"',
        'Future: "I\'ll have to travel", "I\'ll get my own team"',
        'Informal expressions: "working my socks off", "Mental, right?"',
        'Colloquial past: "We polished off the whole thing"',
      ],
    },
    {
      id: 10,
      title: 'Formal Email - Grant Application Follow-up',
      category: 'Academic/Funding',
      subject: 'Follow-up on Research Grant Application REF: ENV2025-847',
      to: 'lisa.martinez@email.com',
      situation:
        "You're facing a difficult decision about whether to accept a job offer abroad. Write an informal email to your friend asking for advice.",
      email: `Hey Lisa,

I hope you\'re doing well! I\'m writing because I could really use some advice from someone who knows me well, and you\'re always so good at seeing things clearly.

So here\'s the situation – I\'ve been offered an amazing job in Singapore. It\'s with a massive tech company, the salary is incredible (seriously, like triple what I\'m earning now), and it would be an unbelievable opportunity for my career. On paper, it\'s everything I\'ve been working towards.

But here\'s the thing – I\'d have to move to Singapore for at least three years, possibly longer. That means leaving my family, my friends, and basically everything I know. Plus, I\'ve been seeing Tom for about six months now, and things are getting quite serious between us. I know six months isn\'t that long, but still...

I\'ve been going round in circles about this for days and I honestly don\'t know what to do. Part of me is thinking "when will I ever get another opportunity like this?" But then another part of me is terrified of moving to the other side of the world and regretting it.

Tom says he\'d support whatever decision I make, but I can tell he\'s gutted about the idea of me leaving. My parents are trying to be supportive too, but I know Mum\'s already worrying about how often she\'d see me.

What would you do if you were in my position? I mean, you lived in Australia for two years, didn\'t you? How did you cope with being so far from home? Did you ever regret going?

I\'ve got to give them an answer by next Friday, so I\'m running out of time to decide. Any words of wisdom would be massively appreciated!

Sorry for dumping all this on you – I just really value your opinion and I\'m a bit desperate for some perspective!

Missing our coffee catch-ups already (and I haven\'t even left yet!),

Claire

PS How are things with you anyway? I feel like I\'ve been so wrapped up in my own drama that I haven\'t asked how you are!`,
      keyPhrases: [
        "I hope you're doing well",
        'I could really use some advice',
        "here's the situation",
        "On paper, it's everything",
        "But here's the thing",
        "I've been going round in circles",
        "I honestly don't know what to do",
        'Part of me is thinking... But then another part',
        "I can tell he's gutted",
        'What would you do if you were in my position?',
        'How did you cope with',
        'Did you ever regret',
        "I've got to give them an answer",
        "I'm running out of time",
        'Any words of wisdom would be massively appreciated',
        'Sorry for dumping all this on you',
      ],
      structure: [
        '1. Greeting: Friendly opening',
        '2. Purpose: State need for advice',
        '3. The opportunity: Present the positive aspects',
        '4. The dilemma: Explain the concerns',
        '5. Personal complications: Mention relationship',
        '6. Internal conflict: Show indecision',
        "7. Others' reactions: Family and partner's views",
        '8. Direct questions: Ask for specific advice',
        '9. Deadline: Create urgency',
        '10. Appreciation: Thank in advance',
        '11. Self-awareness: Acknowledge taking up time',
        '12. PS: Show you care about them too',
      ],
      grammarFocus: [
        'Present Perfect: "I\'ve been offered", "I\'ve been seeing Tom"',
        'Present Perfect Continuous: "I\'ve been going round in circles"',
        'Modal verbs: "I\'d have to move", "would you do"',
        'Conditional: "What would you do if you were"',
        'Past Simple: "you lived in Australia"',
        'Future: "when will I ever get"',
        'Present Continuous for complaints: "Mum\'s already worrying"',
        'Have got to: "I\'ve got to give them an answer"',
        'Question forms for advice: "How did you cope?", "Did you regret?"',
      ],
    },
    {
      id: 6,
      title: 'Informal Email - Complaining to Roommate',
      category: 'Informal',
      subject: 'We need to talk about the flat...',
      to: 'danny.brown@email.com',
      situation:
        'You share a flat with someone who has been leaving the kitchen messy and making noise late at night. Write an informal email addressing these issues diplomatically.',
      email: `Hey Danny,

Hope you\'re having a good week! Listen, I wanted to have a quick chat about a couple of things regarding the flat. I know we\'re both super busy with work and everything, but there are a few issues that have been bothering me lately, and I thought it would be better to clear the air rather than let things fester.

First off, the kitchen situation. I\'ve noticed that over the past few weeks, it\'s been getting left in a bit of a state quite often. I\'m talking dirty dishes piling up in the sink, food containers left out, that sort of thing. I completely get that after a long day at work, the last thing you want to do is clean up, but it\'s been getting a bit much. The other day I found a pan that had been sitting there for three days with food stuck to it – it was absolutely mingin!

I know I\'m not perfect either, and I\'ve definitely left the odd mug lying around, but I do try to clean up after myself most of the time. Maybe we could agree on a simple rule like "wash up as you go" or at least make sure everything\'s sorted by the end of each day?

The other thing – and I feel a bit awkward bringing this up – is the noise late at night. I know you\'ve had your mates round a few times recently, which is totally fine, but the walls are pretty thin and I\'ve been struggling to sleep when there\'s music and talking going on till 2 or 3 in the morning. I\'ve got early starts for work and I\'ve been absolutely knackered lately.

I\'m not saying you can\'t have people over or anything like that – it\'s your flat too! But maybe if you could keep it down a bit after midnight on weeknights? Or give me a heads up if you\'re planning a late one, so I can maybe crash at my girlfriend\'s place if I\'ve got an early meeting?

I really don\'t want this to come across as me having a go at you – you\'re a great flatmate in so many ways, and I know we generally get on really well. I just think it\'s important we\'re both comfortable in our own home, you know?

Let me know what you think? Maybe we could grab a pint this weekend and have a proper chat about it all?

Cheers,
Matt`,
      keyPhrases: [
        "Hope you're having a good week",
        'I wanted to have a quick chat',
        'I thought it would be better to clear the air',
        'rather than let things fester',
        "I've noticed that",
        "it's been getting a bit much",
        "I know I'm not perfect either",
        'Maybe we could agree on',
        'I feel a bit awkward bringing this up',
        'which is totally fine, but',
        "I'm not saying you can't",
        "I really don't want this to come across as",
        'Let me know what you think',
      ],
      structure: [
        '1. Friendly opening: Set positive tone',
        '2. Purpose statement: Introduce topic diplomatically',
        '3. First issue: Kitchen mess with specific examples',
        '4. Acknowledgment: Admit own imperfections',
        '5. Suggestion: Propose solution',
        '6. Second issue: Late night noise',
        '7. Clarification: Show understanding and flexibility',
        '8. Alternative solutions: Offer compromises',
        '9. Reassurance: Emphasize good relationship',
        '10. Call to action: Suggest face-to-face chat',
      ],
      grammarFocus: [
        'Present Perfect Continuous: "have been bothering me", "have been struggling"',
        'Present Perfect: "I\'ve noticed", "it\'s been getting"',
        'Modal verbs for suggestions: "could", "would", "maybe"',
        'Passive voice: "getting left in a bit of a state"',
        'Conditional: "if you could keep it down"',
        'Gerunds: "bothering me", "bringing this up", "having a go"',
        'Informal phrasal verbs: "clear the air", "piling up", "clean up", "come across as"',
        'British slang: "mingin", "knackered", "having a go"',
      ],
    },
    {
      id: 7,
      title: 'Informal Email - Inviting Friend to Visit',
      category: 'Informal',
      subject: 'You HAVE to come visit!',
      to: 'chloe.parker@email.com',
      situation:
        "You've moved to a new city and want to invite your best friend to come visit and explore the area with you.",
      email: `Hi Chloe!

I can\'t believe I\'ve been here in Barcelona for two months already – time\'s absolutely flying! I\'m finally settled in properly now, and I\'ve been meaning to write to you for ages about coming to visit. So here it is – you NEED to come out here!

Honestly, this place is incredible. I\'ve been exploring non-stop at weekends, and I keep thinking "Chloe would absolutely love this." Remember how we were obsessed with Gaudí when we did that architecture module at uni? Well, I\'ve been to the Sagrada Familia three times already and I\'m still discovering new details every time. It\'s mind-blowing!

I\'ve also found the most amazing tapas bars in the Gothic Quarter. There\'s this tiny place called El Xampanyet that does the best patatas bravas I\'ve ever tasted, and the wine is ridiculously cheap. We could literally eat our way around the city – I\'ve already got a whole list of places I want to take you.

The weather\'s been gorgeous too. Even now in late autumn, it\'s still warm enough to sit outside in the evenings. The beaches aren\'t too packed anymore either, so we could actually have a proper catch-up without being surrounded by thousands of tourists.

I\'ve got quite a bit of annual leave left this year, so I could take a few days off whenever suits you. What about sometime in January or February? Flights are really cheap then – I\'ve been checking, and you can get return flights from London for under £50 if you book in advance. Plus, it\'s off-season so hotels are much more affordable too.

You could stay with me, obviously – my flat\'s tiny but the sofa\'s actually pretty comfortable (I\'ve been told!), or if you\'d prefer your own space, I can help you find somewhere nearby. There\'s a really nice hostel just down the road that does private rooms for about €30 a night.

I know you\'ve been saying for ages that you need a proper break from work. This could be perfect timing! Plus, I\'m starting to forget what you look like in person rather than just on video calls!

What do you reckon? Shall we start looking at dates? I\'m literally free whenever, so just let me know what works for you and I\'ll book the time off.

Can\'t wait to hear back from you!

Missing you loads,

Laura

PS I\'ve already planned a whole weekend itinerary in my head. I\'m that excited!`,
      keyPhrases: [
        "I can't believe",
        "time's absolutely flying",
        "I've been meaning to",
        'you NEED to',
        'I keep thinking',
        'Remember how we were',
        "It's mind-blowing",
        'We could literally',
        "I've already got a whole list",
        'What about sometime in',
        'You could stay with me, obviously',
        "I know you've been saying for ages",
        'This could be perfect timing',
        'What do you reckon?',
        "I'm literally free whenever",
        "Can't wait to hear back",
      ],
      structure: [
        '1. Opening: Time reference and excitement',
        '2. Main invitation: Direct and enthusiastic',
        '3. Selling points: Architecture and cultural attractions',
        '4. Food highlights: Specific recommendations',
        '5. Weather and beach: Additional attractions',
        '6. Logistics: Dates and flight costs',
        '7. Accommodation options: Both free and paid',
        "8. Personal appeal: Reference friend's needs",
        '9. Call to action: Ask for decision',
        '10. Enthusiastic closing with PS',
      ],
      grammarFocus: [
        'Present Perfect: "I\'ve been here", "I\'ve been exploring"',
        'Present Perfect Continuous: "I\'ve been meaning to", "you\'ve been saying"',
        'Modal verbs: "could take", "could stay", "would absolutely love"',
        'Conditional: "if you book in advance", "if you\'d prefer"',
        'Emphatic structures: "you NEED to", "literally eat our way"',
        'Future arrangements: "I can help you find"',
        'Superlatives: "the best patatas bravas", "the most amazing tapas bars"',
        'Informal contractions throughout',
      ],
    },
    {
      id: 8,
      title: 'Informal Email - Asking to Borrow Something',
      category: 'Informal',
      subject: 'Huge favour to ask...',
      to: 'ben.hughes@email.com',
      situation:
        "You need to borrow your friend's camping equipment for a trip. Write an informal email asking if you can borrow it.",
      email: `Hey Ben,

How\'s it going? Hope all\'s well with you! I\'m writing to ask you a massive favour, so feel free to say no if it\'s not convenient – I\'ll completely understand.

Basically, a group of us from work have decided to go camping in the Lake District for a long weekend at the end of this month. It was all quite last-minute – someone suggested it in the pub last week and before we knew it, we\'d all booked the time off work! The thing is, I\'ve never actually been camping before (I know, I know, how have I made it to 28 without ever sleeping in a tent?!), so I don\'t have any of the gear.

I remembered that you\'re really into all that outdoor stuff and you mentioned ages ago that you\'ve got loads of camping equipment. I was wondering if there\'s any chance I could borrow some bits and pieces? I\'d only need them for the one weekend – Friday 27th to Monday 30th.

I\'m mainly looking for a tent (just for me, so nothing massive), a sleeping bag, and maybe a camping stove if you\'ve got one going spare? If you\'ve got any other essentials that you think I might need, I\'d be really grateful for those too. To be honest, I haven\'t got a clue what I\'m doing!

Obviously, I\'d take really good care of everything and make sure it all comes back clean and in perfect condition. And I\'d be more than happy to return the favour somehow – maybe I could take you out for a few pints when I bring your stuff back? Or if you need any help with anything, just shout.

I know it\'s a big ask, and I\'d totally get it if you\'d rather not lend your gear out. Just thought I\'d check before I go and spend a fortune buying everything new for what might be a one-off trip!

Let me know what you think when you get a chance. No pressure at all!

Cheers mate,

Josh

PS If you\'ve got any camping tips for a complete beginner, I\'m all ears! I\'ve been watching YouTube videos but I\'m still slightly terrified I\'m going to end up sleeping in a puddle or something.`,
      keyPhrases: [
        "How's it going?",
        "Hope all's well with you",
        'to ask you a massive favour',
        'feel free to say no',
        "I'll completely understand",
        'Basically',
        'The thing is',
        "I was wondering if there's any chance",
        "I'm mainly looking for",
        "if you've got one going spare",
        'To be honest',
        "I haven't got a clue",
        "Obviously, I'd take really good care",
        "I'd be more than happy to",
        "I know it's a big ask",
        "I'd totally get it if",
        'No pressure at all',
      ],
      structure: [
        '1. Casual greeting: Establish friendly tone',
        '2. Purpose with caveat: State favour but offer easy out',
        '3. Context: Explain the camping trip',
        '4. Self-deprecating humor: Acknowledge inexperience',
        '5. The request: Specific items needed with dates',
        '6. Additional request: Ask for extras and advice',
        '7. Reassurance: Promise to take care of items',
        '8. Offer reciprocation: Suggest ways to return favour',
        "9. Understanding exit: Acknowledge it's okay to refuse",
        '10. Casual closing with helpful PS',
      ],
      grammarFocus: [
        'Present Perfect: "have decided", "I\'ve never been", "you\'ve got"',
        'Past Simple: "someone suggested", "we\'d all booked"',
        'Would for polite requests: "I was wondering if", "I\'d be grateful"',
        'Conditional: "if there\'s any chance", "if you\'d rather not"',
        'Modal verbs: "could borrow", "might need", "might be"',
        'Present Continuous for future: "I\'m writing to ask"',
        'Gerunds: "sleeping in a tent", "buying everything new"',
        'Informal expressions: "going spare", "just shout", "I\'m all ears"',
      ],
    },
    {
      id: 9,
      title: 'Informal Email - Congratulating on Achievement',
      category: 'Informal',
      subject: 'CONGRATULATIONS!!!',
      to: 'amy.roberts@email.com',
      situation:
        'Your friend just completed a marathon after months of training. Write an informal email congratulating them.',
      email: `AMY!!!

I just saw your post on Instagram – YOU DID IT! I\'m so incredibly proud of you! Running a full marathon is absolutely insane, and you smashed it!

I\'ve been following your training journey on social media for the past few months, and honestly, your dedication has been so inspiring. All those early morning runs in the freezing cold, the long weekend sessions, dealing with injuries – you just kept going no matter what. That takes some serious mental strength.

And look at your time – 4 hours 23 minutes! That\'s phenomenal for your first marathon! I know you were hoping to go under 4 hours 30, but you absolutely destroyed that target. I bet when you started training back in June, you never imagined you\'d get such a good time.

How are you feeling now? You must be absolutely exhausted! Are you able to walk today or are the stairs your worst enemy? I remember when my cousin ran the London Marathon, she said she couldn\'t sit down properly for about three days afterwards!

I saw in the photos that your whole family was there to support you at the finish line. That must have been such an emotional moment. Were you crying? I think I would have been an absolute mess!

So what\'s next for you? Are you going to have a well-deserved rest, or are you already planning the next challenge? Knowing you, you\'re probably already eyeing up an ultra-marathon or something equally crazy! Whatever you decide to do, I know you\'ll absolutely nail it.

We definitely need to celebrate properly. Are you free next weekend? I want to take you out for dinner – my treat. You deserve to eat the biggest, most indulgent meal imaginable after all those months of healthy eating and carb-loading!

Seriously though, I\'m just so happy for you. You set yourself an incredible goal and you achieved it through sheer determination and hard work. You should be ridiculously proud of yourself.

Well done, Marathon Woman!

Lots of love,

Kate

PS Please tell me you\'ve got the medal on permanent display somewhere. If I\'d run 42 kilometers, I\'d probably sleep wearing it!`,
      keyPhrases: [
        'YOU DID IT!',
        "I'm so incredibly proud of you",
        'you smashed it',
        "I've been following",
        'your dedication has been so inspiring',
        'you just kept going',
        'That takes some serious',
        'you absolutely destroyed that target',
        'How are you feeling now?',
        'You must be absolutely',
        'That must have been',
        "So what's next for you?",
        "Knowing you, you're probably",
        'We definitely need to celebrate',
        'You deserve to',
        'You should be ridiculously proud',
      ],
      structure: [
        '1. Enthusiastic opening: Show excitement',
        '2. Main congratulations: Express pride',
        '3. Acknowledgment of effort: Recognize training journey',
        '4. Specific achievement: Comment on time',
        '5. Recovery check: Ask about physical state with humor',
        '6. Emotional moment: Reference finish line',
        '7. Future plans: Ask about next goals',
        '8. Celebration offer: Suggest dinner treat',
        '9. Summary praise: Emphasize accomplishment',
        '10. Fun sign-off with playful PS',
      ],
      grammarFocus: [
        'Present Perfect: "I\'ve been following", "you\'ve got"',
        'Past Simple: "you smashed it", "you kept going"',
        'Modal perfects: "you never imagined you\'d get", "I would have been"',
        'Present Continuous for recent completion: "How are you feeling"',
        'Future: "you\'re probably already eyeing up"',
        'Emphatic structures: "absolutely insane", "so incredibly proud"',
        'Question forms: "How are you feeling?", "Were you crying?"',
        'Informal intensifiers: "absolutely", "ridiculously", "so"',
      ],
    },
    {
      id: 10,
      title: 'Informal Email - Sharing Bad News',
      category: 'Informal',
      subject: 'Some not-so-great news...',
      to: 'ollie.thompson@email.com',
      situation:
        "You've just found out you didn't get a job you really wanted. Write an informal email to your close friend sharing the disappointment.",
      email: `Hey Ollie,

I hope you\'re doing alright. I\'ve got some disappointing news that I wanted to share with you – I didn\'t get the job at the design agency I\'d been interviewing for. Just got the rejection email this morning and I\'m feeling pretty gutted about it, to be honest.

I really thought I\'d nailed the final interview, you know? I\'d prepared loads, all my answers seemed to go down well, and the creative director even said she was "very impressed" with my portfolio. So when I saw the email come through this morning, I was actually expecting it to be good news. But nope – they\'ve decided to go with someone who has "more extensive experience in digital marketing campaigns."

What\'s frustrating is that I\'ve been working really hard over the past year to build up exactly that kind of experience. I\'ve taken on extra freelance projects, done two online courses, even volunteered my time to help that charity redesign their website. Apparently, it\'s still not enough.

I know I shouldn\'t take it too personally – there were probably loads of really qualified candidates, and sometimes these decisions just come down to tiny details or even just gut feeling. But it\'s hard not to feel a bit deflated when you\'ve invested so much time and emotional energy into the application process.

The worst part is that I\'d already started imagining myself working there. I\'d looked up how long the commute would be, I\'d been thinking about which projects I\'d love to work on, and I\'d even mentally spent my first pay cheque! I know, I know – I was getting way ahead of myself.

Anyway, I just needed to vent to someone who gets it. You\'ve been through this kind of thing before with those teaching jobs you applied for last year, so I figured you\'d understand. How did you deal with the rejection? Because right now I\'m swinging between wanting to immediately apply for ten more jobs and never wanting to write another cover letter ever again!

I think I might just take the rest of the day off from job hunting and do something to take my mind off it. Maybe I\'ll finally finish that book I\'ve been reading for about three months, or go for a long walk or something.

Thanks for listening to me moan. I promise I\'ll be more cheerful next time we chat! Hopefully with some actual good news to share.

Speak soon,

Jordan

PS If you fancy meeting up for a pint sometime this week, I could definitely use some company and distraction!`,
      keyPhrases: [
        'Some disappointing news',
        "I'm feeling pretty gutted",
        'to be honest',
        "I really thought I'd nailed",
        'you know?',
        'all my answers seemed to go down well',
        'I was actually expecting',
        'But nope',
        "What's frustrating is",
        "I've been working really hard",
        "it's still not enough",
        "I know I shouldn't take it too personally",
        "it's hard not to feel",
        "I'd already started imagining",
        'I was getting way ahead of myself',
        'I just needed to vent',
        'who gets it',
        'Thanks for listening to me moan',
      ],
      structure: [
        '1. Opening: Check on friend then introduce bad news',
        '2. The news: State rejection clearly',
        '3. Expectations: Explain why disappointed',
        '4. Frustration: Express efforts made',
        '5. Rational perspective: Try to be objective',
        '6. Emotional reality: Admit real feelings',
        '7. Self-awareness: Acknowledge getting ahead',
        '8. Purpose: Explain need to share',
        '9. Seeking advice: Ask how friend coped',
        '10. Plan forward: Mention self-care',
        '11. Appreciation: Thank for listening',
        '12. Hopeful PS: Suggest meeting up',
      ],
      grammarFocus: [
        'Present Perfect: "I\'ve got", "I\'ve been working", "I\'ve taken on"',
        'Past Simple: "didn\'t get", "got the rejection", "they\'ve decided"',
        'Past Perfect: "I\'d been interviewing", "I\'d prepared", "I\'d been thinking"',
        'Modal perfects: "I thought I\'d nailed", "You\'ve been through"',
        'Present Continuous: "I\'m feeling", "I\'m swinging between"',
        'Gerunds: "getting ahead of myself", "job hunting", "listening to me moan"',
        'Would for habitual past in mind: "I\'d love to work on"',
        'Conditional: "if you fancy meeting up"',
      ],
    },
    {
      id: 11,
      title: 'Informal Email - Making Plans with Friends',
      category: 'Informal',
      subject: "Beach weekend - who's in?",
      to: 'group.friends@email.com',
      situation:
        'You want to organize a beach trip with a group of friends. Write an informal email proposing the idea and coordinating details.',
      email: `Hey everyone!

Right, so I\'ve had an idea that I think you\'re all going to love. The weather forecast for next weekend is looking absolutely gorgeous – sunny and 25°C – and I reckon we should make the most of it before summer properly ends. How do you all fancy a day trip to Brighton beach on Saturday?

I know it\'s a bit last minute, but hear me out! We could get the early train down (there\'s one that leaves at 8:47am), spend the whole day by the sea, and be back in London by about 9pm. Train tickets are only £15 if we book today, which is a pretty decent deal.

Here\'s what I\'m thinking: we could set up camp on the beach, go for a swim if anyone\'s brave enough (the water\'s probably freezing but whatever!), grab fish and chips for lunch, maybe play some beach volleyball or frisbee, and then hit up one of the bars on the seafront for sundowners. Doesn\'t that sound perfect?

I\'ve already checked and the tide\'s going to be out most of the day, so we\'ll have loads of space on the beach. Plus, I\'ve got a massive beach umbrella we can borrow, and Sam said she\'s got a cool box we can use for drinks and snacks.

So who\'s up for it? I need to know numbers by tomorrow evening so I can book the train tickets – apparently they sell out pretty quickly for weekend trips when the weather\'s good. 

A few practical things to sort out:
- If you\'re coming, can you let me know ASAP?
- Bring: swimsuit, towel, suncream, sunglasses, and maybe a jumper for the evening
- We should probably make sandwiches at home to save money (though we\'re definitely getting proper fish and chips at some point!)
- If anyone\'s got beach games, inflatables, or speakers, bring them along!

Sarah, I know you mentioned you might be away visiting your parents this weekend – has that changed at all? Would be gutted if you couldn\'t make it!

Jake, this means you have to actually leave your flat and interact with real humans instead of just gaming all weekend. No excuses! 😊

Right, I\'m going to stop rambling now. Let me know what you think! If enough people are keen, I\'ll set up a WhatsApp group to coordinate all the details.

Fingers crossed for a unanimous "YES"!

Love,
Mia

PS If it absolutely pours with rain and the whole thing\'s a disaster, I take zero responsibility. I\'m just the ideas person! 😂`,
      keyPhrases: [
        "Right, so I've had an idea",
        "I think you're all going to love",
        'I reckon we should',
        'How do you all fancy',
        "I know it's a bit last minute, but hear me out",
        "Here's what I'm thinking",
        "Doesn't that sound perfect?",
        "So who's up for it?",
        'I need to know',
        'A few practical things to sort out',
        'can you let me know ASAP?',
        "Would be gutted if you couldn't make it",
        'No excuses!',
        'Let me know what you think',
        'Fingers crossed for',
      ],
      structure: [
        '1. Enthusiastic opening: Grab attention with idea',
        '2. Weather hook: Present opportunity',
        '3. Main proposal: Beach trip suggestion',
        '4. Logistics: Train times and costs',
        '5. Day plan: Detailed itinerary',
        '6. Practical details: Tide, equipment available',
        '7. Call to action: Request RSVPs with deadline',
        '8. Checklist: What to bring',
        '9. Personal mentions: Address individuals',
        '10. Coordination plan: WhatsApp group',
        '11. Playful closing with disclaimer PS',
      ],
      grammarFocus: [
        'Present Continuous for future: "I\'m thinking", "the weather\'s looking"',
        'Modal verbs: "should make", "could get", "might be"',
        'Conditional: "If enough people are keen", "If it pours"',
        'Going to future: "you\'re all going to love", "the tide\'s going to be"',
        'Present Perfect: "I\'ve had an idea", "I\'ve already checked"',
        'Imperative for instructions: "Bring", "Let me know"',
        'Question tags implied: "Doesn\'t that sound perfect?"',
        'Informal contractions and colloquialisms throughout',
      ],
    },
    {
      id: 12,
      title: 'Informal Email - Asking About Relationship Issues',
      category: 'Informal',
      subject: 'Need to talk... (nothing serious!)',
      to: 'jessica.lee@email.com',
      situation:
        "You're having some confusion about a new relationship and need advice from your close friend. Write an informal email asking for perspective.",
      email: `Hey Jess,

Hope you\'re good! I\'m writing because I could really do with some advice about the whole situation with Mark, and you\'re basically the only person I trust to be brutally honest with me without judging.

So, things have been going really well with him – like, really well. We\'ve been seeing each other for about six weeks now, and when we\'re together, everything feels perfect. He\'s funny, he\'s thoughtful, we never run out of things to talk about, and there\'s definitely a spark there. On paper, it all sounds great, right?

But here\'s the thing that\'s been bugging me: he\'s really inconsistent with communication. Like, when we\'re together in person, he\'s super attentive and affectionate. But then during the week, I barely hear from him. Sometimes he\'ll go two or three days without texting, and when he does message, it\'s just really brief stuff like "hey, how\'s work?" with no real conversation.

At first, I thought maybe he\'s just not a big texter, which is fair enough – not everyone lives on their phone. But then last week, I saw him constantly on his phone when we were out with his mates at the pub. So clearly he CAN text when he wants to!

I\'ve tried bringing it up casually, saying something like "I feel like we don\'t talk much during the week," and he just said "Yeah, sorry, I\'ve been really busy with work." Which might be true – he has got a pretty full-on job. But is it really that hard to send a quick message saying "hope you\'re having a good day" or something?

The thing is, I really like him, and I don\'t want to come across as clingy or needy. I\'m not expecting constant communication or anything – I\'ve got my own life and I\'m perfectly happy doing my own thing. But I also don\'t want to be sat around wondering if he\'s actually that interested or if I\'m just convenient when he happens to be free.

Am I overthinking this? You know I have a tendency to spiral when I\'m unsure about things. Or is this a genuine red flag that I should be paying attention to? 

What would you do in my situation? Should I have another proper conversation with him about it, or should I just match his energy and see what happens? Or – and I know you\'ll tell me straight – do you think I should just cut my losses now before I get even more invested?

I\'m also worried that my past relationship experiences are making me paranoid. You remember how things were with Chris – he did exactly the same thing with the hot-and-cold behavior, and that ended up being a total disaster. I don\'t want to project all that onto Mark if he\'s genuinely just rubbish at texting!

Ugh, I\'m sorry for the essay. My brain\'s just been going round in circles with this. I\'d really value your take on it all because you\'re so good at seeing things objectively.

Can we maybe grab coffee this weekend? I feel like I need a proper face-to-face debrief with you!

Thanks for always being my voice of reason 💚

Love you,
Charlotte

PS Please tell me I\'m not being completely crazy!`,
      keyPhrases: [
        'I could really do with some advice',
        "you're basically the only person",
        'to be brutally honest with me',
        'things have been going really well',
        'On paper, it all sounds great, right?',
        "But here's the thing that's been bugging me",
        'which is fair enough',
        'So clearly he CAN',
        "I've tried bringing it up casually",
        'Which might be true',
        'The thing is',
        "I don't want to come across as",
        'Am I overthinking this?',
        'You know I have a tendency to',
        'Or is this a genuine red flag',
        'What would you do in my situation?',
        "you'll tell me straight",
        "I don't want to project",
        "My brain's just been going round in circles",
      ],
      structure: [
        '1. Casual opening with purpose',
        '2. Context: Relationship going well',
        '3. The problem: Inconsistent communication',
        '4. Evidence: Specific examples',
        '5. Attempted solution: Tried discussing casually',
        "6. Internal conflict: Don't want to seem needy",
        '7. Self-awareness: Question own perception',
        '8. Direct questions: Seek specific advice',
        '9. Past context: Reference previous relationship',
        '10. Apology for length',
        '11. Request to meet: Face-to-face chat',
        '12. Appreciation with vulnerable PS',
      ],
      grammarFocus: [
        'Present Perfect Continuous: "things have been going", "that\'s been bugging"',
        'Present Perfect: "We\'ve been seeing", "I\'ve tried bringing it up"',
        'Modal verbs: "could really do with", "would you do", "should I"',
        'Conditional: "if he\'s genuinely", "if I\'m just convenient"',
        'Reported speech: "saying something like"',
        'Emphatic structures: "clearly he CAN text", "is it really that hard"',
        'Question forms for advice: multiple question types',
        'Gerunds and infinitives: "without judging", "to be brutally honest"',
      ],
    },
    {
      id: 13,
      title: "Informal Email - Explaining Why You're Leaving a Job",
      category: 'Informal',
      subject: 'Big news (finally!)',
      to: 'marcus.davies@email.com',
      situation:
        "You've decided to quit your job and want to tell your work friend before you officially hand in your notice. Write an informal email explaining your decision.",
      email: `Hey Marcus,

I wanted to give you a heads up about something before it becomes office gossip – I\'ve decided to hand in my notice. I know this might come as a bit of a shock, especially since I\'ve been here for nearly four years, but I\'ve been thinking about it for months and I\'ve finally made up my mind.

Please keep this between us for now! I\'m planning to tell Helen (our manager) on Monday, but I wanted you to hear it from me first rather than through the grapevine. You\'ve been such a brilliant work mate over the years, and it felt wrong not giving you a proper explanation.

Basically, I\'ve just reached a point where I feel completely stuck here. Don\'t get me wrong – it\'s not a terrible job, and there are things I\'ll genuinely miss (the free coffee, the casual Fridays, you and the lunch crew!). But I\'ve been doing essentially the same thing day in, day out for the past two years, and I\'m just not learning anything new anymore.

I\'ve brought it up with Helen a few times, asking about opportunities for progression or maybe moving into a different department, but there never seems to be any budget for it, or the timing\'s not right, or there are "no positions available at the moment." I\'ve basically been fobbed off so many times that I\'ve lost count.

The final straw came last month when they hired that external candidate for the senior analyst role – you know, the one I\'d expressed interest in multiple times? They didn\'t even give me the opportunity to apply or interview for it. That really stung, and it made me realize that they clearly don\'t see me progressing here, so why am I hanging around?

I haven\'t got another job lined up yet, which I know is a bit risky, but I\'ve got enough savings to last me about four months, and honestly, I think I need a proper break anyway. I\'ve been feeling burned out for ages, and maybe some time off will help me figure out what I actually want to do next.

I might do some traveling – I\'ve always wanted to do that South America trip we used to talk about in our lunch breaks! Or I might finally get around to doing that UX design course I\'ve been putting off forever. The point is, for the first time in years, I\'ll actually have some time to think about what I want rather than just going through the motions.

I\'m genuinely going to miss working with you though. You\'ve made the tough days so much more bearable, and lunch breaks definitely won\'t be the same without our ridiculous conversations about absolutely nothing! We\'ll have to make sure we stay in touch properly – maybe actually do those climbing sessions we keep saying we\'re going to organize?

Anyway, I just wanted to let you know before the office rumor mill goes into overdrive. I\'m planning to work my full notice period (probably four weeks), so we\'ve still got some time before I disappear!

Let\'s grab a pint after work one day this week? My treat – I owe you several after all the times you\'ve covered for me when I\'ve been "working from home" (aka having a duvet day!).

Cheers,
Ryan

PS Seriously though, keep it quiet until Monday. I don\'t need Karen from HR hunting me down before I\'ve even spoken to Helen!`,
      keyPhrases: [
        'I wanted to give you a heads up',
        'before it becomes office gossip',
        'this might come as a bit of a shock',
        "I've been thinking about it for months",
        "I've finally made up my mind",
        'Please keep this between us',
        'I wanted you to hear it from me first',
        'rather than through the grapevine',
        "Don't get me wrong",
        "there are things I'll genuinely miss",
        'I feel completely stuck',
        'day in, day out',
        "I've been fobbed off",
        'The final straw came',
        'That really stung',
        "I haven't got another job lined up yet",
        'which I know is a bit risky',
        "I'm genuinely going to miss",
        'keep it quiet',
      ],
      structure: [
        '1. Heads up: Announce decision privately',
        '2. Request confidentiality: Ask to keep secret',
        '3. Personal acknowledgment: Value the friendship',
        '4. Main explanation: Feel stuck and unstimulated',
        '5. Positive aspects: Acknowledge good parts',
        '6. Attempts made: Tried to progress internally',
        '7. Final straw: Specific incident that decided it',
        '8. No backup plan: Explain risk but justification',
        '9. Future possibilities: Travel and learning',
        '10. Personal sentiment: Will miss the friend',
        '11. Maintain connection: Suggest staying in touch',
        '12. Immediate plans: Offer to meet',
        '13. Reminder PS: Reinforce confidentiality',
      ],
      grammarFocus: [
        'Present Perfect: "I\'ve decided", "I\'ve been thinking", "You\'ve been"',
        'Present Perfect Continuous: "I\'ve been doing", "I\'ve been feeling"',
        'Future Continuous: "I\'ll be working"',
        'Past Simple: "came last month", "they hired", "That really stung"',
        'Modal perfects: "might come", "would you do"',
        'Gerunds: "before becoming", "about progressing", "without our conversations"',
        'Passive voice: "I\'ve been fobbed off", "I\'ve been feeling burned out"',
        'Informal phrasal verbs: "hand in", "keep quiet", "hang around", "figure out"',
      ],
    },
    {
      id: 14,
      title: 'Informal Email - Reconnecting After Long Time',
      category: 'Informal',
      subject: 'Long time no speak!',
      to: 'kelly.anderson@email.com',
      situation:
        "You haven't been in touch with an old friend for over a year. Write an informal email reconnecting and catching up.",
      email: `Hey Kelly!

I know, I know – it\'s been absolutely ages since we last spoke, and I\'m completely rubbish for not staying in touch better. I was scrolling through old photos on my phone the other day and came across that hilarious one of us at your 25th birthday party (you know, the one where we both thought wearing matching unicorn onesies was a brilliant idea 😂), and it made me realize how much I\'ve missed having you in my life.

How have you been? What\'s been going on in Kelly-world? I feel like the last proper conversation we had was... what, about a year and a half ago? Maybe longer? Time has absolutely flown by and I genuinely can\'t believe it\'s been that long.

I\'ve been meaning to reach out for months but, you know how it is – life just gets ridiculously busy and before you know it, weeks turn into months. Plus, the longer you leave it, the more awkward it feels to break the silence, which is stupid really because we used to talk literally every day!

So much has happened since we last caught up! Where do I even start? I finally left that awful job at the marketing agency (remember how I used to complain about my boss constantly?), and I\'ve been working for a tech startup for about eight months now. It\'s absolutely chaotic but in a good way – I\'m learning loads and the people are amazing.

I also moved flat! I\'m living in Hackney now, sharing with two girls I met through a friend. The flat\'s tiny and the rent is extortionate (welcome to London, right?), but it\'s in such a cool area with loads of great bars and restaurants, so I\'m not complaining.

Oh, and you\'ll never guess what – I\'ve taken up rock climbing! I know, completely random for someone who used to get out of breath walking up stairs, but I absolutely love it. You should come try it sometime if you fancy it – there\'s a brilliant climbing center near me.

Anyway, enough about me rambling on about my life! I really want to hear what\'s been happening with you. Are you still at the same company? How\'s your family? Are you still with Matt, or am I completely out of the loop? (Please don\'t tell me you got married and I missed it because I\'ve been a terrible friend!)

I was thinking – and stop me if this is too presumptuous – but maybe we could actually meet up properly? Like, not just say "we should totally get coffee sometime" and then never do it, but actually put a date in the diary? I\'m free most weekends, or we could do an evening during the week if that works better for you?

I\'d genuinely love to catch up properly and hear everything that\'s been going on. Plus, I owe you a massive apology coffee for being so rubbish at keeping in touch!

Let me know if you fancy it – no pressure if you\'re super busy, I totally get it. But it would be really lovely to see you again.

Missing your face!

Emma x

PS I still have that book you lent me about two years ago. I promise I\'ll actually bring it if we meet up! (I know, I know, I\'m the worst!)`,
      keyPhrases: [
        "it's been absolutely ages",
        "I'm completely rubbish for",
        'it made me realize',
        'How have you been?',
        "What's been going on",
        "I've been meaning to",
        'you know how it is',
        'the longer you leave it, the more awkward it feels',
        'which is stupid really',
        'So much has happened',
        'Where do I even start?',
        "you'll never guess what",
        'enough about me rambling on',
        'I really want to hear',
        'Are you still',
        'or am I completely out of the loop?',
        'stop me if this is too presumptuous',
        'not just say... but actually',
        "I'd genuinely love to",
        'no pressure if',
      ],
      structure: [
        '1. Apologetic opening: Acknowledge time gap',
        '2. Trigger memory: Share what prompted email',
        '3. Opening questions: Ask about their life',
        '4. Self-awareness: Explain delay in contacting',
        '5. Life updates: Job change',
        '6. Life updates: New flat',
        '7. Life updates: New hobby',
        '8. Shift focus: Ask about their life',
        '9. Specific questions: Probe for details',
        '10. Concrete proposal: Suggest actual meetup',
        '11. Flexibility: Offer options and understanding',
        '12. Warm closing with playful PS',
      ],
      grammarFocus: [
        'Present Perfect: "it\'s been ages", "I\'ve been meaning to"',
        'Present Perfect Continuous: "What\'s been going on", "I\'ve been working"',
        'Past Simple: "I was scrolling", "I moved", "I met"',
        'Used to: "we used to talk", "I used to complain"',
        'Modal verbs: "would be lovely", "could do", "should come"',
        'Conditional: "if we meet up", "if you fancy it"',
        'Gerunds: "about rambling", "at keeping in touch"',
        'Question forms: variety of question structures',
        'Informal time expressions: "absolutely ages", "months and months"',
      ],
    },
    {
      id: 15,
      title: 'Informal Email - Declining an Invitation Diplomatically',
      category: 'Informal',
      subject: 'Re: Wedding invitation',
      to: 'hannah.foster@email.com',
      situation:
        "A colleague has invited you to their wedding but you can't attend due to prior commitments. Write a diplomatic informal email declining the invitation.",
      email: `Dear Hannah,

Thank you so much for the wedding invitation! I was absolutely thrilled to receive it – the design is gorgeous, and I can only imagine how excited you both must be getting as the big day approaches. I\'ve been looking at the date on my calendar ever since the envelope arrived, desperately hoping I\'d be able to make it work.

Unfortunately, I\'m gutted to say that I\'m not going to be able to come. I genuinely feel terrible about this, especially because I know how meaningful it is to have the people you care about there to celebrate with you.

The timing has just worked out horribly – that weekend falls right in the middle of my sister\'s visit from Australia. She\'s only over for two weeks (her first time back in three years!), and we\'ve had this trip planned for absolutely ages. We\'re taking our parents away to the Cotswolds for their 40th wedding anniversary, and obviously I can\'t bail on that.

I was honestly going back and forth about whether I could somehow do both – maybe race back for the evening reception or something – but your venue\'s about four hours away from where we\'ll be, and I realized that trying to squeeze it in would just mean doing neither thing properly and probably being stressed and exhausted the entire time.

I really want you to know that it\'s nothing to do with not wanting to be there – I absolutely would love to celebrate with you and David! You\'ve both been so lovely to work with, and I think it\'s wonderful that you\'re getting married. I just genuinely can\'t make the logistics work with my family commitments.

Please don\'t feel like you need to save me a spot just in case or anything like that – I definitely won\'t be able to make it, so please give my place to someone else who can be there to enjoy your special day properly.

I\'d really love to take you both out for dinner or drinks sometime after the honeymoon though, if you\'re up for it? My treat, obviously – consider it a very belated wedding celebration! I want to hear all about the day and see about a million photos.

I hope you have the most incredible, magical day, and I\'m sending you both so much love and all my best wishes. I\'ll be thinking of you on the day and raising a glass from afar!

I\'m genuinely so sorry I can\'t be there in person.

All my love,

Sophie

PS Please send me some photos afterwards – I\'d love to see how it all turns out! And congratulations again to you both. You\'re going to make a beautiful bride! 💕`,
      keyPhrases: [
        'Thank you so much for',
        'I was absolutely thrilled to receive',
        'I can only imagine how excited',
        "Unfortunately, I'm gutted to say",
        'I genuinely feel terrible about this',
        'especially because I know how meaningful',
        'The timing has just worked out horribly',
        "we've had this planned for absolutely ages",
        "obviously I can't bail on that",
        'I was honestly going back and forth',
        'whether I could somehow do both',
        'I realized that',
        'doing neither thing properly',
        'I really want you to know',
        "it's nothing to do with not wanting to be there",
        "I just genuinely can't make the logistics work",
        "Please don't feel like you need to",
        "I'd really love to",
        "if you're up for it",
        'I hope you have the most incredible',
      ],
      structure: [
        '1. Grateful opening: Thank for invitation',
        '2. Enthusiasm: Express genuine excitement for them',
        '3. The decline: Deliver bad news with regret',
        '4. Explanation: Valid prior commitment',
        '5. Considered alternatives: Show you tried to make it work',
        '6. Reassurance: Not a rejection of them personally',
        "7. Practical point: Don't save a spot",
        '8. Alternative offer: Suggest celebration later',
        '9. Well wishes: Heartfelt congratulations',
        '10. Apology: Reinforce regret',
        '11. Sweet PS: Request photos and compliment',
      ],
      grammarFocus: [
        'Present Perfect Continuous: "I\'ve been looking"',
        'Present Perfect: "we\'ve had this planned", "You\'ve been so lovely"',
        'Future Continuous: "We\'re taking our parents"',
        'Modal verbs: "must be", "would love to", "could somehow"',
        'Gerunds: "after receiving", "about whether", "trying to squeeze"',
        'Conditional: "if you\'re up for it"',
        'Passive voice: "I was absolutely thrilled"',
        'Reported thought: "I realized that trying to squeeze it in would mean"',
        'Emphatic adverbs: "absolutely", "genuinely", "definitely"',
      ],
    },
    {
      id: 16,
      title: 'Formal Email - Negotiating Business Terms',
      category: 'Formal Business',
      subject: 'Proposal for Partnership and Contract Terms Review',
      to: 'director@techcorp.com',
      situation:
        'You are negotiating a business partnership with a technology company. Write a formal email proposing contract modifications and discussing terms.',
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
        'should either of these suit your schedule',
      ],
      structure: [
        '1. Opening: Acknowledge receipt and thank for proposal',
        '2. First point: Revenue sharing with justification',
        '3. Second point: IP rights concerns and suggestion',
        '4. Third point: Termination clause recommendation',
        '5. Positive reinforcement: Maintain enthusiasm',
        '6. Call to action: Request meeting with specific times',
        '7. Professional closing with optimistic tone',
      ],
      grammarFocus: [
        'Passive voice: "outlined in your document"',
        'Conditional structures: "should either party wish"',
        'Modal verbs for diplomacy: "would", "could", "might"',
        'Present perfect: "Having reviewed", "I have noticed"',
        'Relative clauses: "that require further discussion"',
      ],
    },
    {
      id: 17,
      title: 'Semi-formal Email - Academic Research Collaboration',
      category: 'Academic',
      subject: 'Invitation to Collaborate on Climate Research Project',
      to: 'dr.mitchell@university.edu',
      situation:
        'You are a researcher inviting a colleague from another university to collaborate on a research project about climate change.',
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
        'I look forward to hearing your thoughts',
      ],
      structure: [
        '1. Warm opening: Reference previous meeting',
        '2. Context: Explain current research project',
        '3. Invitation: Explain why their expertise is needed',
        '4. Details: Describe collaboration structure',
        '5. Logistics: Budget, trips, positions available',
        '6. Acknowledgment: Recognize time commitment',
        '7. Next steps: Suggest video call for discussion',
      ],
      grammarFocus: [
        'Past participle adjectives: "stimulating", "enlightening"',
        'Would for polite offers: "would involve", "would focus"',
        'Conditional clauses: "should you wish to spend"',
        'Gerunds: "combining", "analyzing", "facilitating"',
        'Complex noun phrases: "the correlation between... across..."',
      ],
    },
    {
      id: 18,
      title: 'Formal Email - Diplomatic Complaint',
      category: 'Formal Complaint',
      subject:
        'Formal Complaint Regarding Service Disruption and Compensation Request',
      to: 'customer.relations@globalairways.com',
      situation:
        'Your international flight was severely delayed causing you to miss an important business meeting. Write a detailed formal complaint requesting compensation.',
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
        'I trust you will treat this matter',
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
        '10. Professional closing',
      ],
      grammarFocus: [
        'Past perfect: "had promoted", "had to forfeit"',
        'Passive constructions: "were subjected to", "was forced to"',
        'Reported speech: "I was informed that"',
        'Conditional clauses: "Should I not receive"',
        'Participle clauses: "making it impossible", "resulting in"',
        'Complex sentences with subordination',
      ],
    },
    {
      id: 19,
      title: 'Formal Email - Defective Product Complaint',
      category: 'Formal Complaint',
      subject: 'Complaint Regarding Defective Laptop - Order #TEC-89472',
      to: 'customer.service@techproelectronics.com',
      situation:
        'You purchased an expensive laptop online that arrived damaged and has multiple technical faults. Despite several attempts to resolve the issue, you have received poor customer service. Write a formal complaint demanding a replacement or full refund.',
      email: `Dear Customer Service Manager,

I am writing to express my profound dissatisfaction with both the product I received and the subsequent handling of my complaint by your customer service department. I ordered a TechPro X15 laptop (Order #TEC-89472) on December 3rd, 2025, which was delivered on December 10th. The total cost was £1,899, representing a significant investment for professional equipment I require for my graphic design business.

Upon opening the package, I immediately noticed that the exterior of the laptop had sustained damage during transit. There was a visible dent on the top casing and scratches along the left side. Despite this concerning first impression, I proceeded to set up the device, hoping that the internal components had remained unaffected. Unfortunately, this proved to be wishful thinking.

Within the first hour of use, I encountered multiple serious technical issues. The laptop overheated to the point where I could barely touch the keyboard, the screen displayed persistent flickering that made extended work impossible, and the battery drained from 100% to 15% in less than two hours despite being advertised as having an eight-hour battery life. Additionally, the solid-state drive produced an alarming clicking sound that should not occur in this type of hardware.

I contacted your customer service team via telephone on December 11th, only to spend forty-five minutes on hold before being disconnected. When I finally reached an agent the following day, I was informed that I would need to send the laptop back at my own expense for "assessment," despite the damage clearly occurring before delivery and the defects being immediately apparent. This suggestion is wholly unacceptable, as your company's own terms and conditions stipulate that return shipping for faulty products should be covered by the seller.

Furthermore, when I requested to speak with a supervisor, I was told that none were available and that someone would call me back within 48 hours. That was nine days ago, and I have received neither a callback nor any email correspondence addressing my complaint. This level of service falls dramatically short of what any customer should expect, particularly from a company that markets itself as providing "premium products with exceptional support."

The situation has now severely impacted my business operations. I have been unable to complete several client projects that were scheduled for delivery before Christmas, resulting in lost income and damage to my professional reputation. I have been forced to rent alternative equipment at a cost of £180 per week, an expense that should never have been necessary.

I am therefore formally requesting one of the following resolutions within the next seven business days:

1. An immediate replacement with a new, fully functional TechPro X15 laptop, delivered at your expense with express shipping
2. A full refund of £1,899 plus reimbursement for the equipment rental costs I have incurred (£360 for two weeks)
3. If neither option is acceptable, a superior model as compensation for the inconvenience and business losses sustained

I have attached photographs documenting the physical damage, screenshots of the technical errors, and copies of all previous correspondence with your customer service department, demonstrating the numerous attempts I have made to resolve this matter reasonably.

Should I not receive a satisfactory response within the specified timeframe, I will have no alternative but to pursue this matter through the Trading Standards Authority and to post detailed reviews of my experience on consumer websites and social media platforms. I will also be contacting my credit card company to initiate a chargeback procedure.

I have been a loyal customer of TechPro Electronics for over five years, having purchased multiple items from your company and recommended you to numerous colleagues. It is deeply disappointing that this loyalty has been met with such inadequate service and apparent disregard for customer satisfaction.

I await your prompt response and resolution to this matter.

Yours faithfully,
Jennifer Matthews
Customer ID: TPE-447821
Order Number: TEC-89472
Purchase Date: December 3rd, 2025`,
      keyPhrases: [
        'I am writing to express my profound dissatisfaction',
        'Upon opening the package, I immediately noticed',
        'Despite this concerning first impression',
        'this proved to be wishful thinking',
        'Within the first hour of use',
        'I contacted your customer service team',
        'This suggestion is wholly unacceptable',
        'Furthermore, when I requested',
        'This level of service falls dramatically short',
        'The situation has now severely impacted',
        'I have been forced to',
        'I am therefore formally requesting',
        'Should I not receive a satisfactory response',
        'I will have no alternative but to',
        'It is deeply disappointing that',
        'I await your prompt response',
      ],
      structure: [
        '1. Opening: State dissatisfaction with product and service',
        '2. Order details: Provide specific information',
        '3. Initial problem: Describe physical damage upon arrival',
        '4. Technical issues: List all faults discovered',
        '5. Service complaint: Detail poor customer service experience',
        "6. Policy violation: Reference company's own terms",
        '7. Follow-up failure: Explain lack of response',
        '8. Business impact: Describe professional consequences',
        '9. Formal demands: List three possible resolutions with deadline',
        '10. Evidence: Mention attached documentation',
        '11. Escalation warning: State next steps if not resolved',
        '12. Context: Reference customer loyalty',
        '13. Professional closing: Formal sign-off with details',
      ],
      grammarFocus: [
        'Past perfect: "had sustained damage", "had remained unaffected"',
        'Present perfect: "have received", "have been unable to"',
        'Passive voice: "was delivered", "were scheduled", "have been forced"',
        'Participle clauses: "representing a significant investment"',
        'Conditional structures: "Should I not receive"',
        'Reported speech: "I was informed that", "I was told that"',
        'Discourse markers: "Furthermore", "Additionally", "Despite"',
      ],
    },
    {
      id: 20,
      title: 'Formal Email - Internet Service Complaint',
      category: 'Formal Complaint',
      subject:
        'Formal Complaint - Persistent Service Failures Account #BB-394857',
      to: 'complaints@speednetbroadband.co.uk',
      situation:
        'Your broadband internet service has been unreliable for weeks with frequent outages and speeds far below what was advertised. Multiple technicians have failed to fix the problem. Write a formal complaint requesting compensation and threatening to cancel your contract.',
      email: `Dear Complaints Department,

I am writing to lodge a formal complaint regarding the unacceptable and persistent failures of the broadband service provided to my address under account number BB-394857. What was marketed as "ultra-fast fibre broadband with 99.9% uptime reliability" has, in reality, been an exercise in frustration and a serious impediment to my ability to work from home.

I initially subscribed to your Premium Unlimited package on September 1st, 2025, attracted by your advertised speeds of "up to 500 Mbps" and promises of reliable connectivity. For the first month, the service performed reasonably well, though speeds rarely exceeded 300 Mbps. However, since early October, the quality has deteriorated dramatically and has now reached a point where the service is virtually unusable for professional purposes.

Over the past six weeks, I have experienced daily interruptions to my internet service, with complete outages occurring an average of three to four times per week, each lasting between two and five hours. When connectivity is restored, the download speeds frequently drop to below 50 Mbps, a mere 10% of the advertised rate. For context, I require stable, high-speed internet to participate in video conferences with international clients, upload large design files to cloud servers, and conduct real-time collaborative work. The current service is insufficient for any of these essential business activities.

I have contacted your technical support department on no fewer than eight separate occasions, each time spending between thirty and ninety minutes on the telephone attempting to resolve the issue. I have been walked through the same basic troubleshooting steps repeatedly – turning the router off and on, checking cable connections, resetting factory settings – none of which have produced any lasting improvement. Three different technicians have been sent to my property, yet each one has claimed that everything appears to be functioning correctly, despite the problems recurring within hours of their departure.

The most recent technician, who visited on December 7th, suggested that the issue might be related to network congestion in my area and that you are "working on infrastructure upgrades." This is the first time anyone has mentioned such problems, and I find it astonishing that I was sold a premium package for an area where the network infrastructure is apparently inadequate to deliver the advertised service. Had I been informed of these limitations, I would never have entered into this contract.

The impact on my professional life has been substantial and quantifiable. I have missed three important client video calls due to connectivity failures, resulting in the loss of one contract worth approximately £8,000. I have been forced to work from coffee shops and co-working spaces, incurring costs of roughly £250 for desk rental and daily expenses. Additionally, I have had to purchase a mobile hotspot device and data package as a backup solution, costing an extra £95 per month. These are expenses I should never have needed to bear, given that I am already paying £65 monthly for what was supposed to be premium broadband service.

In light of these serious and ongoing service failures, I am making the following demands:

1. Immediate compensation equal to three months of subscription fees (£195) for the substandard service provided
2. Reimbursement of £345 for the costs I have incurred in seeking alternative connectivity solutions
3. A reduction in my monthly subscription rate by 50% until such time as your infrastructure upgrades are completed and you can guarantee consistent delivery of the advertised speeds
4. A formal explanation from senior management regarding why this situation has been allowed to continue and what specific steps are being taken to prevent recurrence
5. The option to terminate my contract immediately without penalty, should I not be satisfied with the proposed remedies

I am attaching detailed logs of every outage I have experienced over the past six weeks, including dates, times, and duration, as well as screenshots of speed tests consistently showing performance far below your advertised specifications. I also include copies of all correspondence with your technical support team and the notes left by your technicians.

This complaint is being filed formally through your complaints procedure as outlined in your terms and conditions. According to your published policy, I should receive an acknowledgment within three working days and a full response within eight weeks. However, given the severity and duration of these service issues, I expect a substantive response much sooner – ideally within one week.

Should you fail to address these matters adequately, I will not hesitate to escalate this complaint to the Communications Ombudsman, contact the Advertising Standards Authority regarding your misleading service claims, and share my experience on consumer review platforms. I will also be exploring legal options regarding breach of contract, as the service provided bears no resemblance to what was advertised and sold to me.

I have been patient and cooperative throughout this process, but my patience has now been exhausted. I require a professional, comprehensive, and immediate response to this complaint.

Yours faithfully,
David Chen
Account Number: BB-394857
Installation Date: September 1st, 2025
Service Address: 42 Riverside Apartments, Manchester M3 4BD`,
      keyPhrases: [
        'I am writing to lodge a formal complaint',
        'What was marketed as',
        'has, in reality, been',
        'For the first month, the service performed reasonably well',
        'However, since early October',
        'has now reached a point where',
        'Over the past six weeks',
        'I have contacted your technical support on no fewer than',
        'I have been walked through the same',
        'none of which have produced',
        'The most recent technician',
        'I find it astonishing that',
        'Had I been informed',
        'The impact on my professional life has been substantial',
        'I have been forced to',
        'In light of these serious and ongoing',
        'I am making the following demands',
        'Should you fail to address',
        'I will not hesitate to escalate',
        'my patience has now been exhausted',
      ],
      structure: [
        '1. Opening: State formal complaint with account details',
        '2. Context: Describe initial advertising promises',
        '3. Initial period: Acknowledge early acceptable service',
        '4. Deterioration: Detail when and how problems began',
        '5. Frequency: Quantify outages and poor performance',
        '6. Business needs: Explain why service is critical',
        '7. Support attempts: Document repeated contact with company',
        '8. Technician visits: Describe failed repair attempts',
        '9. Infrastructure revelation: Expose underlying network issues',
        '10. Professional impact: Detail financial and business losses',
        '11. Additional costs: List expenses incurred',
        '12. Formal demands: Present five specific requirements',
        '13. Evidence: Reference attached documentation',
        '14. Complaint procedure: Cite company policy and timelines',
        '15. Escalation threats: Outline next steps if not resolved',
        '16. Closing statement: Express exhausted patience',
        '17. Sign-off: Provide full details',
      ],
      grammarFocus: [
        'Passive voice: "was marketed", "was advertised", "have been sent"',
        'Present perfect: "have experienced", "have contacted", "have been"',
        'Present perfect continuous: "have been patient and cooperative"',
        'Past perfect: "Had I been informed"',
        'Conditional structures: "Should you fail to address"',
        'Participle clauses: "each lasting between", "resulting in"',
        'Reported speech: "claimed that", "suggested that"',
        'Relative clauses: "which have produced", "who visited"',
      ],
    },
    {
      id: 21,
      title: 'Formal Email - Hotel Reservation Complaint',
      category: 'Formal Complaint',
      subject:
        'Serious Complaint - Wedding Party Accommodation Booking Ref: HTL-2025-6847',
      to: 'management@grandviewhotel.com',
      situation:
        'You booked multiple rooms at a hotel for your wedding guests six months in advance. Upon arrival, half the rooms were not available, forcing guests to find alternative accommodation. Write a strong formal complaint requesting compensation for the disruption to your special day.',
      email: `Dear Hotel Management,

I am writing to register a serious and deeply distressing complaint regarding the catastrophic failure of your establishment to honor a substantial room booking I made for my wedding celebration on December 21st, 2025. The incompetence and lack of professionalism I encountered has resulted in immeasurable stress, embarrassment, and the partial ruination of what should have been the happiest day of my life.

On June 15th, 2025, I made a reservation for twelve double rooms at the Grand View Hotel for the nights of December 20th and 21st. This booking was specifically and explicitly for my wedding guests, many of whom were traveling from abroad to attend our ceremony and reception. I paid a non-refundable deposit of £1,200 at the time of booking and received written confirmation via email, which I still have in my possession. The booking reference was HTL-2025-6847, and I was personally assured by your reservations manager, Ms. Patricia Williams, that our group booking had been "secured and prioritized" given the special nature of the occasion.

I contacted your hotel on three separate occasions in the months leading up to the wedding – August 22nd, October 10th, and December 5th – to reconfirm the reservation and to arrange additional services such as early check-in for several guests and a welcome drinks reception. On each occasion, I was reassured that everything was in order and that we could look forward to excellent service.

When my guests began arriving at your hotel on the afternoon of December 20th, they were met with chaos and confusion. The reception staff initially claimed to have no record of our group booking, despite my having provided the booking reference and shown them the confirmation email on my phone. After thirty minutes of searching their system, they acknowledged that the reservation existed but informed us that only six of the twelve rooms were actually available. The remaining six rooms had apparently been "double-booked" and given to other guests who had checked in earlier that day.

The impact of this disaster can scarcely be overstated. Six couples, including my elderly parents who had flown in from Australia specifically for the wedding, were left without accommodation at 5:30 PM the evening before the ceremony. It was the height of the Christmas season, and virtually every hotel in the vicinity was fully booked. My brother spent over two hours on the phone frantically calling hotels throughout the region while I should have been enjoying a rehearsal dinner with my family and friends.

Eventually, alternative accommodation was found, but it was scattered across three different hotels, ranging from five to fifteen miles from your location. This meant that guests who had been looking forward to spending time together were separated, the planned pre-wedding breakfast was impossible to organize, and several guests incurred significant additional taxi costs getting to and from the wedding venue. One couple ended up in accommodation so far away that they nearly missed the ceremony altogether due to traffic.

The financial implications have been considerable. The alternative hotel rooms cost substantially more than what I had paid for your rooms, with the total additional cost amounting to £1,340. Taxi fares for guests moving between locations came to approximately £280. The planned welcome reception had to be cancelled, representing a loss of £450 in catering costs that were non-refundable. Additionally, I had arranged for flowers, chocolates, and welcome baskets to be delivered to the twelve rooms at your hotel – all of which went to waste, costing a further £360.

However, the financial cost, while significant, pales in comparison to the emotional distress this situation caused. My wedding day was overshadowed by the knowledge that I had let down people who had traveled thousands of miles to celebrate with us. My mother was in tears, not from joy but from exhaustion and stress. Several guests made comments about the "disorganization," clearly holding me responsible for the accommodation fiasco, despite it being entirely your establishment's fault. The first day of my married life was spent apologizing to guests and dealing with logistical nightmares rather than celebrating with loved ones.

What makes this situation even more egregious is that no one from your management team has contacted me to apologize or offer any explanation for what went wrong. When I spoke to the duty manager on the evening of December 20th, he was dismissive and unhelpful, suggesting that "these things happen during busy periods" and offering only a cursory apology. This cavalier attitude toward such a serious failure is completely unacceptable.

I am therefore demanding the following immediate actions:

1. A full refund of the £1,200 deposit I paid six months in advance
2. Compensation of £1,340 for the additional accommodation costs incurred by my guests
3. Reimbursement of £280 for taxi fares necessitated by your failure
4. Compensation of £810 for the cancelled welcome reception and wasted room decorations
5. A formal written apology from the hotel's general manager, explaining exactly what went wrong and what measures are being implemented to prevent such failures in the future
6. Additional compensation of £2,000 for the emotional distress and reputational damage I have suffered

This represents a total of £5,630, which I believe is entirely reasonable given the magnitude of your failure and its impact on one of the most important events of my life.

I have compiled extensive documentation including the original booking confirmation, all email correspondence with your staff, photographs timestamped on the day showing my guests at your reception desk, receipts for the alternative accommodation and transport costs, and written statements from three guests describing their experience of the incident.

I expect a comprehensive response from senior management within five working days of receipt of this letter. Should I not receive satisfactory compensation and a credible explanation, I will immediately pursue the following courses of action:

1. File a formal complaint with the Hotel and Catering Consumer Protection Authority
2. Pursue legal action through the small claims court for breach of contract
3. Post detailed reviews on every major travel and hotel review platform, including TripAdvisor, Booking.com, and Google Reviews
4. Contact the local and wedding industry press about this incident
5. Report your establishment to relevant professional bodies and tourism associations

I would also note that I am a wedding photographer by profession and am well-connected within the wedding industry in this region. I have already been asked by several colleagues about hotel recommendations for their clients' weddings, and I will be ensuring that your establishment is explicitly warned against. The reputational damage this could cause your business should not be underestimated.

This was an inexcusable failure that has caused genuine harm. I trusted your hotel with one of the most important aspects of my wedding, and you failed spectacularly. I expect you to take full responsibility and provide comprehensive compensation without delay.

I await your urgent response.

Yours faithfully,
Rebecca Anderson
Booking Reference: HTL-2025-6847
Wedding Date: December 21st, 2025
Original Booking Date: June 15th, 2025
Contact: rebecca.anderson@email.com / 07700 900123`,
      keyPhrases: [
        'I am writing to register a serious and deeply distressing complaint',
        'The incompetence and lack of professionalism',
        'has resulted in immeasurable stress',
        'what should have been the happiest day of my life',
        'I made a reservation for',
        'This booking was specifically and explicitly for',
        'I was personally assured by',
        'I contacted your hotel on three separate occasions',
        'On each occasion, I was reassured that',
        'When my guests began arriving',
        'they were met with chaos and confusion',
        'The impact of this disaster can scarcely be overstated',
        'It was the height of the Christmas season',
        'alternative accommodation was found',
        'The financial implications have been considerable',
        'However, the financial cost pales in comparison',
        'What makes this situation even more egregious',
        'This cavalier attitude is completely unacceptable',
        'I am therefore demanding the following',
        'which I believe is entirely reasonable',
        'I have compiled extensive documentation',
        'Should I not receive satisfactory compensation',
        'This was an inexcusable failure',
      ],
      structure: [
        '1. Opening: State serious complaint with emotional context',
        '2. Background: Describe original booking made six months prior',
        '3. Special circumstances: Emphasize wedding context',
        '4. Confirmation: Detail deposit and written assurance',
        '5. Reconfirmation efforts: List multiple follow-up contacts',
        '6. The disaster: Describe what happened on arrival day',
        '7. Initial confusion: Detail reception staff problems',
        '8. The revelation: Explain double-booking discovery',
        '9. Human impact: Describe effect on elderly parents and guests',
        '10. Emergency measures: Detail frantic search for alternatives',
        '11. Consequences: Explain scattered accommodation and near-misses',
        '12. Financial breakdown: Itemize all additional costs',
        '13. Emotional impact: Describe distress and embarrassment',
        '14. Management failure: Criticize lack of apology or contact',
        '15. Formal demands: Present seven specific compensation requests',
        '16. Total calculation: State comprehensive compensation figure',
        '17. Evidence: List all documentation compiled',
        '18. Deadline: Set five-day response timeframe',
        '19. Escalation threats: Detail five specific actions if not resolved',
        '20. Professional warning: Mention industry connections',
        '21. Final statement: Emphasize trust betrayed',
        '22. Sign-off: Provide comprehensive contact details',
      ],
      grammarFocus: [
        'Past perfect: "had made", "had paid", "had been looking forward"',
        'Passive voice: "was made", "were met with", "were left without"',
        'Present perfect: "has resulted in", "have been", "has contacted"',
        'Modal verbs: "should have been", "could cause", "would note"',
        'Conditional structures: "Should I not receive"',
        'Participle clauses: "representing a loss", "clearly holding me"',
        'Reported speech: "claimed to have", "informed us that"',
        'Relative clauses with "who" and "which"',
        'Complex noun phrases: "The incompetence and lack of professionalism"',
      ],
    },
    {
      id: 22,
      title: 'Semi-formal Email - Professional Networking',
      category: 'Networking',
      subject:
        'Following Up from TechInnovate Summit - Potential Collaboration',
      to: 'anna.kowalski@innovativetech.com',
      situation:
        'You met a potential business contact at a conference. Write a follow-up email to maintain the connection and explore collaboration opportunities.',
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
        "I've been giving considerable thought to",
        'Your insights into... were particularly fascinating',
        'It strikes me that',
        'As I mentioned during our discussion',
        'I wonder whether there might be scope for',
        'Imagine, for instance',
        "I appreciate that you're undoubtedly busy",
        'if this concept resonates with you',
        'I would love to explore',
        'In the meantime',
        "Please don't feel obliged to",
        'I thoroughly enjoyed',
        'I genuinely believe',
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
        '10. Warm closing: Keep door open for future contact',
      ],
      grammarFocus: [
        'Present perfect continuous: "has been developing"',
        'Modal verbs for speculation: "could", "might", "would"',
        'Conditional sentences: "if this concept resonates"',
        'Gerunds after prepositions: "exploring how", "creating"',
        'Phrasal verbs: "reach out", "pile up", "stay in touch"',
        'Emphatic structures: "precisely where", "it strikes me that"',
      ],
    },
    {
      id: 23,
      title: 'Formal Email - Grant Application Follow-up',
      category: 'Academic/Funding',
      subject: 'Follow-up on Research Grant Application REF: ENV2025-847',
      to: 'grants@research-foundation.org',
      situation:
        "You submitted a research grant application three months ago and haven't received a response. Write a polite but assertive follow-up email.",
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
        'at your earliest convenience',
      ],
      structure: [
        '1. Opening: Reference application and timeline',
        '2. Context: Briefly describe research significance',
        "3. Understanding: Acknowledge committee's workload",
        '4. Problem: Explain practical difficulties caused',
        '5. Specific impacts: Detail consequences of delay',
        '6. Request: Ask for timeline or guidance',
        '7. Alternative mention: Note other funding options',
        '8. Reassurance: Clarify not pressuring decision',
        '9. Appreciation: Thank for their work',
        '10. Closing: Professional sign-off with details',
      ],
      grammarFocus: [
        'Present perfect passive: "were to be communicated"',
        'Continuous aspect: "is beginning to create"',
        'Perfect aspect: "have been unable to confirm"',
        'Conditional structures: "If the evaluation process..."',
        'Relative clauses: "that we had provisionally reserved"',
        'Modal verbs: "might expect", "may need to", "would welcome"',
        'Discourse markers: "However", "Specifically", "Alternatively"',
      ],
    },
  ];

  const currentExample = emailExamples[selectedEmail];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
      {/* Header */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📧</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              B2 Email Writing Examples
            </h1>
            <p className="text-sm text-htb-text-dim mt-1">
              Advanced professional and academic email writing with complex
              structures and sophisticated language
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
                  <p
                    className={`text-sm font-semibold ${
                      selectedEmail === index ? 'text-htb-green' : 'text-white'
                    }`}
                  >
                    {example.title}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${
                      example.category === 'Formal Business'
                        ? 'bg-blue-500/20 text-blue-400'
                        : example.category === 'Academic'
                        ? 'bg-purple-500/20 text-purple-400'
                        : example.category === 'Formal Complaint'
                        ? 'bg-red-500/20 text-red-400'
                        : example.category === 'Networking'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
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
                <span className="font-semibold text-htb-text-dim w-20">
                  To:
                </span>
                <span className="text-htb-green">{currentExample.to}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-htb-text-dim w-20">
                  Subject:
                </span>
                <span className="text-white">{currentExample.subject}</span>
              </div>
            </div>
          </div>

          {/* Tense Legend */}
          <div className="bg-htb-card border border-htb-green/30 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-xl">🎨</span>
              <h3 className="text-sm font-bold text-htb-green">
                Hover over colored text to see tenses
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-cyan-500/40 border-b-2 border-cyan-500 rounded"></span>
                <span className="text-htb-text">Pres. Perf. Cont.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-indigo-500/40 border-b-2 border-indigo-500 rounded"></span>
                <span className="text-htb-text">Present Perfect</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-500/40 border-b-2 border-blue-500 rounded"></span>
                <span className="text-htb-text">Past Perf. Cont.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-purple-500/40 border-b-2 border-purple-500 rounded"></span>
                <span className="text-htb-text">Past Perfect</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-500/40 border-b-2 border-yellow-500 rounded"></span>
                <span className="text-htb-text">Past Continuous</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-orange-500/40 border-b-2 border-orange-500 rounded"></span>
                <span className="text-htb-text">Future Perf./Cont.</span>
              </div>
            </div>
          </div>

          {/* Email body */}
          <div className="bg-htb-card border border-gray-800 rounded-lg p-6">
            <div className="text-htb-text leading-relaxed">
              {highlightTenses(currentExample.email)}
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
              <h3 className="text-lg font-bold text-htb-green">
                Grammar Focus
              </h3>
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
              <li>
                • Demonstrate precise vocabulary and idiomatic expressions
              </li>
              <li>• Maintain consistent register throughout</li>
              <li>• Use passive voice and nominalisation appropriately</li>
              <li>
                • Show ability to argue, persuade, and negotiate diplomatically
              </li>
              <li>• Incorporate conditional and hypothetical language</li>
              <li>• Use discourse markers to structure longer texts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() =>
            setSelectedEmail(
              selectedEmail > 0 ? selectedEmail - 1 : emailExamples.length - 1
            )
          }
          className="bg-htb-sidebar hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-htb-green/50 transition-all duration-200"
        >
          ← Previous Example
        </button>
        <button
          onClick={() =>
            setSelectedEmail(
              selectedEmail < emailExamples.length - 1 ? selectedEmail + 1 : 0
            )
          }
          className="bg-htb-sidebar hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-htb-green/50 transition-all duration-200"
        >
          Next Example →
        </button>
      </div>
    </div>
  );
};

export default EmailWritingB2;
