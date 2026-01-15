import React, { useState, useEffect, useRef } from 'react';
import { examDataC1_1 } from '../data/examDataC1_1';
import { examDataC1_2 } from '../data/examDataC1_2';
import { examDataC1_3 } from '../data/examDataC1_3';
import { examDataC1_4 } from '../data/examDataC1_4';
import SuccessModal from './SuccessModal';
import { useSuccess } from '../hooks/useSuccess';

const ExamViewC1 = ({ tenseId }) => {
  // Select exam data based on tenseId
  const getExamData = () => {
    switch (tenseId) {
      case 'exam-c1-1':
        return examDataC1_1;
      case 'exam-c1-2':
        return examDataC1_2;
      case 'exam-c1-3':
        return examDataC1_3;
      case 'exam-c1-4':
        return examDataC1_4;
      default:
        return examDataC1_1;
    }
  };

  const examData = getExamData();
  const [sections] = useState(examData.sections);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [completedExercises, setCompletedExercises] = useState(0);
  const [allAnswers, setAllAnswers] = useState({});
  const [checkedExercises, setCheckedExercises] = useState(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const inputRef = useRef(null);
  const { celebrate } = useSuccess();

  const currentSection = sections[currentSectionIndex];
  const currentExercise = currentSection?.exercises[currentExerciseIndex];
  const totalExercises = sections.reduce(
    (acc, section) => acc + section.exercises.length,
    0
  );
  const progress = (completedExercises / totalExercises) * 100;

  useEffect(() => {
    const exerciseKey = `${currentSectionIndex}-${currentExerciseIndex}`;
    const savedAnswer = allAnswers[exerciseKey] || '';
    setUserAnswer(savedAnswer);
    setFeedback(null);

    // Focus input when question changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentSectionIndex, currentExerciseIndex]);

  // Navigation with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextExercise();
      }
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
    const correctAnswers = Array.isArray(currentExercise.correctAnswer)
      ? currentExercise.correctAnswer
      : [currentExercise.correctAnswer];

    const isCorrect = correctAnswers.some(
      (answer) =>
        userAnswerLower === answer.toLowerCase() ||
        userAnswerLower.includes(answer.toLowerCase())
    );

    const exerciseKey = `${currentSectionIndex}-${currentExerciseIndex}`;
    const alreadyChecked = checkedExercises.has(exerciseKey);

    setFeedback({
      isCorrect,
      explanation: currentExercise.explanation,
      correctAnswer: correctAnswers.join(' / '),
    });

    // Save the answer
    setAllAnswers((prev) => ({ ...prev, [exerciseKey]: userAnswer }));

    // Update score only if not previously checked
    if (!alreadyChecked) {
      if (isCorrect) {
        setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
        celebrate();
        setShowSuccessModal(true);
      } else {
        setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
      }
      setCompletedExercises((prev) => prev + 1);
      setCheckedExercises((prev) => new Set([...prev, exerciseKey]));
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
      setCurrentExerciseIndex(
        sections[currentSectionIndex - 1].exercises.length - 1
      );
    }
  };

  const goToExercise = (sectionIdx, exerciseIdx) => {
    setCurrentSectionIndex(sectionIdx);
    setCurrentExerciseIndex(exerciseIdx);
  };

  const generateAIPrompt = () => {
    const examNames = {
      'exam-c1-1': 'C1 Exam 1 - Advanced Grammar',
      'exam-c1-2': 'C1 Exam 2 - Advanced Structures',
      'exam-c1-3': 'C1 Exam 3 - Vocabulary & Expressions',
      'exam-c1-4': 'C1 Exam 4 - Communication & Pragmatics',
    };

    let prompt = `Act as a C1 level English teacher. I have completed ${
      examNames[tenseId] || 'a C1 exam'
    } and I need you to analyze my mistakes and explain which concepts I should reinforce.\n\n`;
    prompt += `📊 RESULTS:\n`;
    prompt += `- Correct: ${score.correct}/${totalExercises}\n`;
    prompt += `- Incorrect: ${score.incorrect}/${totalExercises}\n`;
    prompt += `- Score: ${Math.round(
      (score.correct / totalExercises) * 100
    )}%\n\n`;
    prompt += `📝 MY ANSWERS:\n\n`;

    sections.forEach((section, sectionIdx) => {
      prompt += `## ${section.title}\n\n`;
      section.exercises.forEach((exercise, exerciseIdx) => {
        const exerciseKey = `${sectionIdx}-${exerciseIdx}`;
        const userAns = allAnswers[exerciseKey] || '(not answered)';
        const correctAns = Array.isArray(exercise.correctAnswer)
          ? exercise.correctAnswer.join(' / ')
          : exercise.correctAnswer;
        const wasCorrect =
          checkedExercises.has(exerciseKey) &&
          (userAns.toLowerCase() === correctAns.toLowerCase() ||
            (Array.isArray(exercise.correctAnswer) &&
              exercise.correctAnswer.some(
                (ans) => userAns.toLowerCase() === ans.toLowerCase()
              )));

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

    prompt += `\n🎯 PLEASE ANALYZE (C1 LEVEL):\n`;
    prompt += `1. What error patterns am I making in advanced grammar structures?\n`;
    prompt += `2. Which C1-level concepts should I reinforce?\n`;
    prompt += `3. Give me 3-5 specific practical exercises to improve my weak areas at C1 level\n`;
    prompt += `4. Are there any advanced grammatical rules or stylistic features I'm applying incorrectly?\n`;
    prompt += `5. What aspects of academic or formal English should I focus on?\n\n`;
    prompt += `Please be specific and give me concrete examples based on my mistakes, focusing on C1-level proficiency requirements.`;

    return prompt;
  };

  const finishExam = () => {
    const unanswered = totalExercises - checkedExercises.size;
    if (unanswered > 0) {
      if (
        !window.confirm(
          `You have ${unanswered} unanswered question(s). Do you want to finish the exam anyway?`
        )
      ) {
        return;
      }
    }

    const prompt = generateAIPrompt();
    const percentage = Math.round((score.correct / totalExercises) * 100);

    const modalContent = `
      <div style="background: #1e2229; padding: 20px; border-radius: 8px; max-width: 800px; margin: 20px auto;">
        <h2 style="color: #9fef00; margin-bottom: 15px; font-size: 24px;">C1 Exam Completed!</h2>
        <div style="background: #1a1d23; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
          <p style="color: white; margin: 5px 0;">✅ Correct: ${
            score.correct
          }</p>
          <p style="color: white; margin: 5px 0;">❌ Incorrect: ${
            score.incorrect
          }</p>
          <p style="color: white; margin: 5px 0;">⏭️ Not answered: ${unanswered}</p>
          <p style="color: #9fef00; margin: 10px 0 0 0; font-size: 20px; font-weight: bold;">📊 Score: ${percentage}%</p>
        </div>
        <div style="background: #1a1d23; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
          <h3 style="color: #9fef00; margin-bottom: 10px;">🤖 AI Prompt (ChatGPT, Claude, etc.)</h3>
          <p style="color: #a8b2d1; margin-bottom: 10px; font-size: 14px;">Copy this text and paste it into any AI to get a detailed analysis of your C1-level mistakes:</p>
          <textarea id="aiPrompt" readonly style="width: 100%; height: 300px; background: #0a0e14; color: #9fef00; border: 1px solid #9fef00; border-radius: 4px; padding: 10px; font-family: monospace; font-size: 12px; resize: vertical;">${prompt
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')}</textarea>
        </div>
        <button id="copyPrompt" style="background: #9fef00; color: #1a1d23; border: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; margin-right: 10px;">📋 Copy Prompt</button>
        <button id="closeModal" style="background: #a8b2d1; color: #1a1d23; border: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; cursor: pointer;">Close</button>
      </div>
    `;

    const modal = document.createElement('div');
    modal.style.cssText =
      'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 9999; overflow-y: auto; padding: 20px;';
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
      // Advanced linking
      'nevertheless',
      'nonetheless',
      'moreover',
      'furthermore',
      'consequently',
      'thus',
      'hence',
      // Hedging
      'arguably',
      'tentatively',
      'conceivably',
      'presumably',
      'allegedly',
      // Emphasis
      'indeed',
      'certainly',
      'undoubtedly',
      'particularly',
      'especially',
      // Contrast
      'whereas',
      'whilst',
      'albeit',
      'notwithstanding',
      // Condition
      'provided',
      'unless',
      'as long as',
      'on condition that',
      // Time
      'prior to',
      'subsequent to',
      'meanwhile',
      'hitherto',
      'henceforth',
      // Modals
      'should',
      'would',
      'could',
      'might',
      'must',
      'ought to',
      // Passive markers
      'is believed',
      'is thought',
      'is said',
      'is considered',
      'is regarded',
      // Academic markers
      'indicates',
      'suggests',
      'demonstrates',
      'implies',
      'reveals',
    ];

    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(
        `\\b(${keyword.replace(/\s+/g, '\\s+')})\\b`,
        'gi'
      );
      highlightedText = highlightedText.replace(
        regex,
        '<span class="bg-htb-green/20 text-htb-green px-1 rounded font-semibold">$1</span>'
      );
    });

    return highlightedText;
  };

  if (!currentSection || !currentExercise) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Error</h2>
          <p className="text-htb-text-dim">Could not load the C1 exam.</p>
        </div>
      </div>
    );
  }

  const isLastExercise =
    currentSectionIndex === sections.length - 1 &&
    currentExerciseIndex === currentSection.exercises.length - 1;

  const examTitles = {
    'exam-c1-1': 'C1 Complete Exam 1 - Advanced Grammar',
    'exam-c1-2': 'C1 Complete Exam 2 - Advanced Structures',
    'exam-c1-3': 'C1 Complete Exam 3 - Vocabulary & Expressions',
    'exam-c1-4': 'C1 Complete Exam 4 - Communication & Pragmatics',
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4">
      {/* Header with Progress */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {examTitles[tenseId] || 'C1 Exam'}
            </h1>
            <p className="text-sm text-htb-text-dim mt-1">
              Progress: {completedExercises} / {totalExercises} exercises
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-htb-green"></div>
              <span className="font-semibold text-htb-green">
                {score.correct}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-semibold text-red-500">
                {score.incorrect}
              </span>
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
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {currentSection.title}
          </h2>
          <span className="bg-htb-card border border-htb-green/30 text-htb-green px-3 py-1 rounded-full text-sm font-semibold">
            Section {currentSectionIndex + 1}/{sections.length}
          </span>
        </div>
        <p className="text-htb-text text-sm sm:text-base">
          {currentSection.instruction}
        </p>
      </div>

      {/* Exercise Content */}
      <div className="bg-htb-card border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-htb-text-dim">
              Exercise {currentExerciseIndex + 1} of{' '}
              {currentSection.exercises.length}
            </span>
            <span className="text-xs bg-htb-sidebar border border-htb-green/30 px-3 py-1 rounded-full text-htb-text">
              C1 Level
            </span>
          </div>

          <div className="space-y-4">
            <p
              className="text-lg text-white"
              dangerouslySetInnerHTML={{
                __html: highlightKeywords(currentExercise.sentence).replace(
                  /_______ \(/g,
                  '<span class="font-bold text-htb-green">_______</span> ('
                ),
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
                placeholder="Write your answer..."
                onKeyPress={(e) =>
                  e.key === 'Enter' && !feedback && checkAnswer()
                }
              />
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        {feedback && (
          <div
            className={`mt-6 p-4 rounded-lg border-2 ${
              feedback.isCorrect
                ? 'bg-htb-sidebar border-htb-green'
                : 'bg-htb-sidebar border-red-500'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">
                {feedback.isCorrect ? '✅' : '❌'}
              </span>
              <div className="flex-1">
                <p
                  className={`font-bold text-lg mb-2 ${
                    feedback.isCorrect ? 'text-htb-green' : 'text-red-500'
                  }`}
                >
                  {feedback.isCorrect ? 'Correct!' : 'Incorrect'}
                </p>

                {!feedback.isCorrect && (
                  <p className="text-sm text-htb-text mb-2">
                    <span className="font-semibold">Correct answer:</span>{' '}
                    <span className="text-htb-green font-semibold">
                      {feedback.correctAnswer}
                    </span>
                  </p>
                )}

                <p className="text-sm text-htb-text leading-relaxed">
                  <span className="font-semibold">Explanation:</span>{' '}
                  {feedback.explanation}
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
        <p className="text-xs text-htb-text-dim text-center mb-3">
          Click on any exercise to navigate
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {sections.map((section, sectionIdx) =>
            section.exercises.map((exercise, exerciseIdx) => {
              const exerciseKey = `${sectionIdx}-${exerciseIdx}`;
              const isAnswered = checkedExercises.has(exerciseKey);
              const isCurrent =
                sectionIdx === currentSectionIndex &&
                exerciseIdx === currentExerciseIndex;
              const globalIndex =
                sections
                  .slice(0, sectionIdx)
                  .reduce((acc, s) => acc + s.exercises.length, 0) +
                exerciseIdx;

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
                  title={`${section.title} - Exercise ${exerciseIdx + 1}`}
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

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Excellent! Correct Answer!"
      />
    </div>
  );
};

export default ExamViewC1;
