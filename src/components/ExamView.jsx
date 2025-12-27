import React, { useState, useEffect, useRef } from 'react';
import { getExamSections, getTotalExercises } from '../data/examData';
import SuccessModal from './SuccessModal';
import { useSuccess } from '../hooks/useSuccess';

const ExamView = () => {
  const [sections] = useState(getExamSections());
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [completedExercises, setCompletedExercises] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [allAnswers, setAllAnswers] = useState({});
  const [checkedExercises, setCheckedExercises] = useState(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const inputRef = useRef(null);
  const { celebrate } = useSuccess();

  const currentSection = sections[currentSectionIndex];
  const currentExercise = currentSection?.exercises[currentExerciseIndex];
  const totalExercises = getTotalExercises();
  const progress = (completedExercises / totalExercises) * 100;

  const getSectionHelp = (sectionId) => {
    const helpContent = {
      'narrative-tenses': {
        title: '📚 How to solve: Narrative Tenses',
        example: 'We _______ (have) dinner when the electricity went off.',
        solution: 'were having',
        explanation: 'In narratives, we use different tenses to express past actions:',
        points: [
          '🔹 Past Simple: COMPLETED and SEQUENTIAL actions',
          '   • They finished in the past → "I ate dinner, watched TV, and went to bed"',
          '   • Events one after another → "She opened the door, walked in, and sat down"',
          '   • Keyword: "then", complete action verbs',
          '',
          '🔹 Past Continuous: Actions IN PROGRESS that were INTERRUPTED',
          '   • Long action that was happening → "I was eating when..."',
          '   • Combined with Past Simple (interruption) → "were having dinner when electricity went off"',
          '   • Keyword: "when" + Past Simple, "while" + another continuous action',
          '   • Specific time context → "At 8pm, I was studying"',
          '',
          '🔹 Past Perfect: Action that happened BEFORE another past action',
          '   • First action of two events → "I had eaten (1st) before I watched TV (2nd)"',
          '   • Cause-effect in the past → "They were hungry because they hadn\'t eaten"',
          '   • Keyword: "before", "after", "already", "just", "by the time"',
          '   • Visible result in the past → "Someone had broken the window" (broken window)',
          '',
          '🔹 Past Perfect Continuous: DURATION of action before another past action',
          '   • Emphasis on how long → "I had been waiting for 2 hours when..."',
          '   • Continuous activity with result → "She was tired because she had been running"',
          '   • Keyword: "for" + time, "since" + moment, "How long"',
          '   • Action may continue or not → "had been studying all night (and still tired)"'
        ],
        tip: '💡 TRICK: Interruption? → Past Continuous. Sequence? → Past Simple. First of two? → Past Perfect. Duration before? → Past Perfect Continuous'
      },
      'present-perfect': {
        title: '📚 How to solve: Present Perfect',
        example: 'How long _______ (you / wait)?',
        solution: 'have you been waiting',
        explanation: 'Difference between Simple and Continuous:',
        points: [
          '🔹 Simple: Experiences, results, states → "have known", "have broken"',
          '🔹 Continuous: Duration, temporal activity → "have been waiting"',
          '🔹 State verbs DO NOT use continuous → know, like, have (possess)',
          '🔹 "How long" generally uses continuous (except state verbs)'
        ],
        tip: '💡 If it emphasizes DURATION of temporal action → Continuous. If it\'s RESULT or STATE → Simple'
      },
      'future-forms': {
        title: '📚 How to solve: Future Forms',
        example: 'This time tomorrow, I\'ll do / I\'ll be doing my exam.',
        solution: 'I\'ll be doing',
        explanation: 'Choose according to context:',
        points: [
          '🔹 Future Continuous: Action in progress at specific moment → "I\'ll be doing"',
          '🔹 Future Perfect: Action completed BEFORE future time → "will have finished by 3pm"',
          '🔹 "This time tomorrow/next week" → Future Continuous',
          '🔹 "By (time/date)" → Future Perfect'
        ],
        tip: '💡 Look for time indicators: "at this time", "by then", "when you arrive"'
      },
      'word-order': {
        title: '📚 How to solve: Word Order',
        example: 'is / Fiona / for / late / class / often',
        solution: 'Fiona is often late for class',
        explanation: 'Position of adverbs in English:',
        points: [
          '🔹 Frequency (often, always, rarely): AFTER BE, BEFORE other verbs',
          '🔹 Opinion (Luckily, Fortunately): At the BEGINNING of the sentence',
          '🔹 Manner (happily, quickly): After the verb or at the end',
          '🔹 Time (yesterday, next week): At the END of the sentence'
        ],
        tip: '💡 Basic order: Subject + (BE) + Frequency adverb + Verb + Complement + Time'
      },
      'adverbs': {
        title: '📚 How to solve: Adverbs',
        example: 'Have you ever / even tried sushi?',
        solution: 'ever',
        explanation: 'Confusing adverbs:',
        points: [
          '🔹 ever (questions: ever?) vs even (even)',
          '🔹 specially (specifically for) vs especially (particularly)',
          '🔹 hard (with effort) vs hardly (barely)',
          '🔹 still (still) vs yet (yet - end of negative sentence/question)',
          '🔹 in the end (finally) vs at the end (at the end of something)',
          '🔹 nearly (almost) vs near (near)'
        ],
        tip: '💡 Read the whole sentence and think about the MEANING, not just the grammar'
      },
      'mixed-grammar': {
        title: '📚 How to solve: Mixed Grammar',
        example: 'Your brother doesn\'t smoke, does / doesn\'t he?',
        solution: 'does',
        explanation: 'Various grammar rules:',
        points: [
          '🔹 The + adjective = general group → "The rich" (no "people")',
          '🔹 Question tags: Negative sentence → positive tag (and vice versa)',
          '🔹 Such + a/an + adj + noun → "such a good time"',
          '🔹 Auxiliary in short answers must match the tense',
          '🔹 "did + infinitive" to EMPHASIZE → "I did tell you!"'
        ],
        tip: '💡 Each exercise has its own rule - read the context carefully'
      },
      'vocabulary': {
        title: '📚 How to solve: Vocabulary',
        example: 'We\'re having another h_______ this month. It\'s been over 35 degrees.',
        solution: 'heatwave',
        explanation: 'Strategy for completing words:',
        points: [
          '🔹 Read the complete CONTEXT - the clues are in the sentence',
          '🔹 Use the first letter as an initial guide',
          '🔹 Think of words related to the topic (weather, health, travel)',
          '🔹 Verify that the word makes sense grammatically',
          '🔹 Common in exams: heatwave, allergic, fill, open-minded, thick, leather, aisle, pressure'
        ],
        tip: '💡 The context ALWAYS gives the clue - example: "35 degrees" → talks about heat → heatwave'
      }
    };

    return helpContent[sectionId] || null;
  };

  useEffect(() => {
    const exerciseKey = `${currentSectionIndex}-${currentExerciseIndex}`;
    const savedAnswer = allAnswers[exerciseKey] || '';
    setUserAnswer(savedAnswer);
    setFeedback(null);
    
    // Enfocar el input cuando cambia la pregunta
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentSectionIndex, currentExerciseIndex]);

  // Navegación con teclas de flecha
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Flecha derecha: siguiente pregunta
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextExercise();
      }
      // Flecha izquierda: pregunta anterior
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousExercise();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSectionIndex, currentExerciseIndex, sections]);

  const checkAnswer = () => {
    if (!userAnswer.trim()) {
      alert('Please write your answer');
      return;
    }

    const userAnswerLower = userAnswer.trim().toLowerCase();
    let isCorrect = false;

    if (currentSection.type === 'multiple-choice') {
      isCorrect = userAnswerLower === currentExercise.correctAnswer.toLowerCase();
    } else if (currentSection.type === 'reorder') {
      isCorrect = userAnswerLower === currentExercise.correctAnswer.toLowerCase();
    } else if (currentSection.type === 'fill-word') {
      isCorrect = userAnswerLower === currentExercise.correctAnswer.toLowerCase();
    } else {
      // Para ejercicios con múltiples respuestas correctas
      const correctAnswers = Array.isArray(currentExercise.correctAnswer) 
        ? currentExercise.correctAnswer 
        : [currentExercise.correctAnswer];
      
      isCorrect = correctAnswers.some(answer => 
        userAnswerLower === answer.toLowerCase() || 
        userAnswerLower.includes(answer.toLowerCase())
      );
    }

    const exerciseKey = `${currentSectionIndex}-${currentExerciseIndex}`;
    const alreadyChecked = checkedExercises.has(exerciseKey);

    setFeedback({
      isCorrect,
      explanation: currentExercise.explanation,
      correctAnswer: Array.isArray(currentExercise.correctAnswer) 
        ? currentExercise.correctAnswer.join(' / ') 
        : currentExercise.correctAnswer
    });

    // Save the answer
    setAllAnswers(prev => ({ ...prev, [exerciseKey]: userAnswer }));

    // Update score only if not previously checked
    if (!alreadyChecked) {
      if (isCorrect) {
        setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
        // Celebrar con confetti, sonido y modal
        celebrate();
        setShowSuccessModal(true);
      } else {
        setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      }
      setCompletedExercises(prev => prev + 1);
      setCheckedExercises(prev => new Set([...prev, exerciseKey]));
    }
  };

  const nextExercise = () => {
    if (currentExerciseIndex < currentSection.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentExerciseIndex(0);
    }
  };

  const previousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentExerciseIndex(sections[currentSectionIndex - 1].exercises.length - 1);
    }
  };

  const goToExercise = (sectionIdx, exerciseIdx) => {
    setCurrentSectionIndex(sectionIdx);
    setCurrentExerciseIndex(exerciseIdx);
  };

  const generateAIPrompt = () => {
    let prompt = `Act as a B2 level English teacher. I have completed an exam and I need you to analyze my mistakes and explain which concepts I should reinforce.\n\n`;
    prompt += `📊 RESULTS:\n`;
    prompt += `- Correct: ${score.correct}/${totalExercises}\n`;
    prompt += `- Incorrect: ${score.incorrect}/${totalExercises}\n`;
    prompt += `- Score: ${Math.round((score.correct / totalExercises) * 100)}%\n\n`;
    prompt += `📝 MY ANSWERS:\n\n`;

    sections.forEach((section, sectionIdx) => {
      prompt += `## ${section.title}\n\n`;
      section.exercises.forEach((exercise, exerciseIdx) => {
        const exerciseKey = `${sectionIdx}-${exerciseIdx}`;
        const userAns = allAnswers[exerciseKey] || '(not answered)';
        const correctAns = Array.isArray(exercise.correctAnswer) 
          ? exercise.correctAnswer.join(' / ') 
          : exercise.correctAnswer;
        const wasCorrect = checkedExercises.has(exerciseKey) && 
          (userAns.toLowerCase() === correctAns.toLowerCase() || 
           (Array.isArray(exercise.correctAnswer) && 
            exercise.correctAnswer.some(ans => userAns.toLowerCase() === ans.toLowerCase())));
        
        prompt += `**Question ${exerciseIdx + 1}:** ${exercise.sentence}\n`;
        prompt += `- My answer: ${userAns} ${wasCorrect ? '✅' : '❌'}\n`;
        prompt += `- Correct answer: ${correctAns}\n`;
        if (exercise.explanation) {
          prompt += `- Explanation: ${exercise.explanation}\n`;
        }
        prompt += `\n`;
      });
      prompt += `\n`;
    });

    prompt += `\n🎯 PLEASE ANALYZE:\n`;
    prompt += `1. What error patterns am I making? (problems with verb tenses, prepositions, vocabulary?)\n`;
    prompt += `2. What specific concepts should I reinforce?\n`;
    prompt += `3. Give me 3-5 specific practical exercises to improve my weak areas\n`;
    prompt += `4. Is there any grammatical rule that I am applying incorrectly repeatedly?\n\n`;
    prompt += `Please be specific and give me concrete examples based on my mistakes.`;

    return prompt;
  };

  const finishExam = () => {
    const unanswered = totalExercises - checkedExercises.size;
    if (unanswered > 0) {
      if (!window.confirm(`You have ${unanswered} unanswered question(s). Do you want to finish the exam anyway?`)) {
        return;
      }
    }
    
    const prompt = generateAIPrompt();
    const percentage = Math.round((score.correct / totalExercises) * 100);
    
    // Create modal with prompt
    const modalContent = `
      <div style="background: #1e2229; padding: 20px; border-radius: 8px; max-width: 800px; margin: 20px auto;">
        <h2 style="color: #9fef00; margin-bottom: 15px; font-size: 24px;">Exam Completed!</h2>
        <div style="background: #1a1d23; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
          <p style="color: white; margin: 5px 0;">✅ Correct: ${score.correct}</p>
          <p style="color: white; margin: 5px 0;">❌ Incorrect: ${score.incorrect}</p>
          <p style="color: white; margin: 5px 0;">⏭️ Not answered: ${unanswered}</p>
          <p style="color: #9fef00; margin: 10px 0 0 0; font-size: 20px; font-weight: bold;">📊 Score: ${percentage}%</p>
        </div>
        <div style="background: #1a1d23; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
          <h3 style="color: #9fef00; margin-bottom: 10px;">🤖 AI Prompt (ChatGPT, Claude, etc.)</h3>
          <p style="color: #a8b2d1; margin-bottom: 10px; font-size: 14px;">Copy this text and paste it into any AI to get a detailed analysis of your mistakes:</p>
          <textarea id="aiPrompt" readonly style="width: 100%; height: 300px; background: #0a0e14; color: #9fef00; border: 1px solid #9fef00; border-radius: 4px; padding: 10px; font-family: monospace; font-size: 12px; resize: vertical;">${prompt.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
        </div>
        <button id="copyPrompt" style="background: #9fef00; color: #1a1d23; border: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; margin-right: 10px;">📋 Copy Prompt</button>
        <button id="closeModal" style="background: #a8b2d1; color: #1a1d23; border: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; cursor: pointer;">Close</button>
      </div>
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 9999; overflow-y: auto; padding: 20px;';
    modal.innerHTML = modalContent;
    document.body.appendChild(modal);
    
    document.getElementById('copyPrompt').onclick = () => {
      const textarea = document.getElementById('aiPrompt');
      textarea.select();
      document.execCommand('copy');
      document.getElementById('copyPrompt').textContent = '✅ Copied!';
      setTimeout(() => {
        document.getElementById('copyPrompt').textContent = '📋 Copy Prompt';
      }, 2000);
    };
    
    document.getElementById('closeModal').onclick = () => {
      document.body.removeChild(modal);
    };
  };

  const highlightKeywords = (text) => {
    const keywords = [
      // Time indicators
      'when', 'while', 'before', 'after', 'until', 'since', 'for', 'ago', 'yet', 'already', 'just', 'ever', 'never',
      'yesterday', 'tomorrow', 'today', 'now', 'then', 'soon', 'later', 'recently', 'lately',
      'always', 'often', 'usually', 'sometimes', 'rarely', 'seldom', 'hardly',
      // Question words
      'how long', 'how many', 'how much', 'how often',
      // Future indicators
      'next week', 'next month', 'next year', 'this time tomorrow', 'by the time', 'by',
      // Present perfect indicators
      'have', 'has', 'had',
      // Continuous indicators
      'at the moment', 'right now', 'currently',
      // Conditional indicators
      'if', 'unless', 'provided', 'as long as',
      // Sequencers
      'first', 'second', 'then', 'finally', 'eventually'
    ];

    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="bg-htb-green/20 text-htb-green px-1 rounded font-semibold">$1</span>');
    });

    return highlightedText;
  };

  const renderExerciseContent = () => {
    if (currentSection.type === 'multiple-choice') {
      return (
        <div className="space-y-4">
          <p 
            className="text-lg text-white mb-4"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(currentExercise.sentence) }}
          />
          
          <div className="space-y-2">
            {currentExercise.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !feedback && setUserAnswer(option)}
                disabled={feedback !== null}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                  userAnswer === option
                    ? 'border-htb-green bg-htb-green/10 font-semibold text-white'
                    : 'border-gray-700 hover:border-htb-green/50 hover:bg-htb-sidebar text-htb-text'
                } ${feedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className="text-base">{option}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (currentSection.type === 'reorder') {
      return (
        <div className="space-y-4">
          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-htb-green mb-2">Available words:</p>
            <div className="flex flex-wrap gap-2">
              {currentExercise.words.map((word, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-htb-card border border-htb-green/30 rounded text-sm font-medium text-htb-text"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-htb-text">
              Write the sentence in the correct order:
            </label>
            <input
              ref={inputRef}
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={feedback !== null}
              className="w-full px-4 py-3 border-2 border-gray-700 bg-htb-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green text-white"
              placeholder="Write your answer..."
              onKeyPress={(e) => e.key === 'Enter' && !feedback && checkAnswer()}
            />
          </div>
        </div>
      );
    }

    if (currentSection.type === 'fill-word') {
      return (
        <div className="space-y-4">
          <p 
            className="text-lg text-white"
            dangerouslySetInnerHTML={{
              __html: highlightKeywords(currentExercise.sentence.replace('_______', `<span class="font-bold text-htb-green">${currentExercise.firstLetter}_______</span>`))
            }}
          />

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-htb-text">
              Complete the word (first letter: {currentExercise.firstLetter.toUpperCase()}):
            </label>
            <input
              ref={inputRef}
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={feedback !== null}
              className="w-full px-4 py-3 border-2 border-gray-700 bg-htb-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green text-white"
              placeholder={`${currentExercise.firstLetter}...`}
              onKeyPress={(e) => e.key === 'Enter' && !feedback && checkAnswer()}
            />
          </div>
        </div>
      );
    }

    // Default: input text
    return (
      <div className="space-y-4">
        <p 
          className="text-lg text-white"
          dangerouslySetInnerHTML={{
            __html: highlightKeywords(currentExercise.sentence).replace(/_______ \(/g, '<span class="font-bold text-htb-green">_______</span> (')
          }}
        />

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-htb-text">
            Your answer:
          </label>
          <input
            ref={inputRef}
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={feedback !== null}
            className="w-full px-4 py-3 border-2 border-gray-700 bg-htb-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green text-white"
            placeholder="Escribe tu respuesta..."
            onKeyPress={(e) => e.key === 'Enter' && !feedback && checkAnswer()}
          />
        </div>
      </div>
    );
  };

  if (!currentSection || !currentExercise) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Error</h2>
          <p className="text-htb-text-dim">Could not load the exam.</p>
        </div>
      </div>
    );
  }

  const isLastExercise = currentSectionIndex === sections.length - 1 && 
                         currentExerciseIndex === currentSection.exercises.length - 1;

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4">
      {/* Header with Progress */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">English Exam</h1>
            <p className="text-sm text-htb-text-dim mt-1">
              Progress: {completedExercises} / {totalExercises} exercises
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
        <div className="w-full bg-htb-sidebar rounded-full h-3 overflow-hidden">
          <div
            className="bg-htb-green h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Section Header */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{currentSection.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="bg-htb-green text-htb-bg px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-htb-green-hover transition-all duration-200 flex items-center gap-1"
            >
              <span>💡</span>
              <span className="hidden sm:inline">Help</span>
            </button>
            <span className="bg-htb-card border border-htb-green/30 text-htb-green px-3 py-1 rounded-full text-sm font-semibold">
              Section {currentSectionIndex + 1}/{sections.length}
            </span>
          </div>
        </div>
        <p className="text-htb-text text-sm sm:text-base">{currentSection.instruction}</p>
      </div>

      {/* Help Panel */}
      {showHelp && getSectionHelp(currentSection.id) && (
        <div className="bg-htb-card border-2 border-htb-green/50 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6 animate-fadeIn">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-white">{getSectionHelp(currentSection.id).title}</h3>
            <button
              onClick={() => setShowHelp(false)}
              className="text-htb-text-dim hover:text-white font-bold text-xl"
            >
              ✕
            </button>
          </div>
          
          <div className="bg-htb-sidebar border border-htb-green/20 rounded-lg p-4 mb-3">
            <p className="text-sm font-semibold text-htb-text mb-2">📝 Ejemplo:</p>
            <p className="text-htb-text mb-1">{getSectionHelp(currentSection.id).example}</p>
            <p className="text-htb-green font-semibold">✓ Solución: {getSectionHelp(currentSection.id).solution}</p>
          </div>

          <div className="mb-3">
            <p className="text-sm font-semibold text-white mb-2">{getSectionHelp(currentSection.id).explanation}</p>
            <ul className="space-y-1">
              {getSectionHelp(currentSection.id).points.map((point, index) => (
                <li key={index} className="text-sm text-htb-text">{point}</li>
              ))}
            </ul>
          </div>

          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-3">
            <p className="text-sm text-htb-green font-medium">{getSectionHelp(currentSection.id).tip}</p>
          </div>
        </div>
      )}

      {/* Exercise Content */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-htb-text-dim">
              Exercise {currentExerciseIndex + 1} of {currentSection.exercises.length}
            </span>
            <span className="text-xs bg-htb-sidebar border border-htb-green/30 px-3 py-1 rounded-full text-htb-text">
              ID: {currentSection.id}
            </span>
          </div>

          {renderExerciseContent()}
        </div>

        {/* Feedback Section */}
        {feedback && (
          <div className={`mt-6 p-4 rounded-lg border-2 ${
            feedback.isCorrect 
              ? 'bg-htb-sidebar border-htb-green' 
              : 'bg-htb-sidebar border-red-500'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-3xl">
                {feedback.isCorrect ? '✅' : '❌'}
              </span>
              <div className="flex-1">
                <p className={`font-bold text-lg mb-2 ${
                  feedback.isCorrect ? 'text-htb-green' : 'text-red-500'
                }`}>
                  {feedback.isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                
                {!feedback.isCorrect && (
                  <p className="text-sm text-htb-text mb-2">
                    <span className="font-semibold">Correct answer:</span>{' '}
                    <span className="text-htb-green font-semibold">{feedback.correctAnswer}</span>
                  </p>
                )}
                
                <p className="text-sm text-htb-text leading-relaxed">
                  <span className="font-semibold">Explanation:</span> {feedback.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex gap-4">
            <button
              onClick={previousExercise}
              disabled={currentSectionIndex === 0 && currentExerciseIndex === 0}
              className="bg-htb-sidebar hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-htb-green/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none disabled:opacity-50"
            >
              ← Previous
            </button>
            
            {!feedback && (
              <button
                onClick={checkAnswer}
                className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                ✓ Check
              </button>
            )}
            
            <button
              onClick={nextExercise}
              disabled={isLastExercise}
              className="bg-htb-sidebar hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-htb-green/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none disabled:opacity-50"
            >
              Next →
            </button>
          </div>
          
          {isLastExercise && (
            <button
              onClick={finishExam}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🏁 Finish Exam
            </button>
          )}
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4">
        <p className="text-xs text-htb-text-dim text-center mb-3">Click on any exercise to navigate</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {sections.map((section, sectionIdx) => 
            section.exercises.map((exercise, exerciseIdx) => {
              const exerciseKey = `${sectionIdx}-${exerciseIdx}`;
              const isAnswered = checkedExercises.has(exerciseKey);
              const isCurrent = sectionIdx === currentSectionIndex && exerciseIdx === currentExerciseIndex;
              const globalIndex = sections.slice(0, sectionIdx).reduce((acc, s) => acc + s.exercises.length, 0) + exerciseIdx;
              
              return (
                <button
                  key={exerciseKey}
                  onClick={() => goToExercise(sectionIdx, exerciseIdx)}
                  className={`px-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isCurrent
                      ? 'bg-htb-green text-htb-bg ring-2 ring-htb-green/50 ring-offset-2 ring-offset-htb-bg scale-110'
                      : isAnswered
                      ? 'bg-htb-green/20 text-htb-green border border-htb-green/30 hover:bg-htb-green/30'
                      : 'bg-htb-sidebar text-htb-text-dim border border-gray-700 hover:bg-gray-700 hover:border-htb-green/30'
                  }`}
                  title={`${section.title} - Ejercicio ${exerciseIdx + 1}`}
                >
                  {globalIndex + 1}
                  {isAnswered && !isCurrent && <span className="ml-1">✓</span>}
                </button>
              );
            })
          )}
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-htb-text">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-htb-green rounded"></div>
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-htb-green/20 border border-htb-green/30 rounded"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-htb-sidebar border border-gray-700 rounded"></div>
            <span>Pending</span>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)}
        message="Excellent! Correct Answer!"
      />
    </div>
  );
};

export default ExamView;
