import React, { useState, useEffect } from 'react';
import { getExamSections, getTotalExercises } from '../data/examData';

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

  const currentSection = sections[currentSectionIndex];
  const currentExercise = currentSection?.exercises[currentExerciseIndex];
  const totalExercises = getTotalExercises();
  const progress = (completedExercises / totalExercises) * 100;

  const getSectionHelp = (sectionId) => {
    const helpContent = {
      'narrative-tenses': {
        title: '📚 Cómo resolver: Narrative Tenses',
        example: 'We _______ (have) dinner when the electricity went off.',
        solution: 'were having',
        explanation: 'En narrativas usamos diferentes tiempos para expresar:',
        points: [
          '🔹 Past Continuous: Acciones en progreso interrumpidas → "were having"',
          '🔹 Past Perfect: Acciones anteriores a otra pasada → "had eaten"',
          '🔹 Past Perfect Continuous: Duración antes de otra acción → "had been waiting"',
          '🔹 Past Simple: Acciones completadas secuenciales → "went, ate, left"'
        ],
        tip: '💡 Busca palabras clave: "when" (interrupción), "before" (anterior), "for ages" (duración)'
      },
      'present-perfect': {
        title: '📚 Cómo resolver: Present Perfect',
        example: 'How long _______ (you / wait)?',
        solution: 'have you been waiting',
        explanation: 'Diferencia entre Simple y Continuous:',
        points: [
          '🔹 Simple: Experiencias, resultados, estados → "have known", "have broken"',
          '🔹 Continuous: Duración, actividad temporal → "have been waiting"',
          '🔹 Verbos de estado NO usan continuous → know, like, have (poseer)',
          '🔹 "How long" generalmente usa continuous (excepto verbos de estado)'
        ],
        tip: '💡 Si enfatiza DURACIÓN de acción temporal → Continuous. Si es RESULTADO o ESTADO → Simple'
      },
      'future-forms': {
        title: '📚 Cómo resolver: Future Forms',
        example: 'This time tomorrow, I\'ll do / I\'ll be doing my exam.',
        solution: 'I\'ll be doing',
        explanation: 'Elige según el contexto:',
        points: [
          '🔹 Future Continuous: Acción en progreso en momento específico → "I\'ll be doing"',
          '🔹 Future Perfect: Acción completa ANTES de tiempo futuro → "will have finished by 3pm"',
          '🔹 "This time tomorrow/next week" → Future Continuous',
          '🔹 "By (time/date)" → Future Perfect'
        ],
        tip: '💡 Busca indicadores de tiempo: "at this time", "by then", "when you arrive"'
      },
      'word-order': {
        title: '📚 Cómo resolver: Word Order',
        example: 'is / Fiona / for / late / class / often',
        solution: 'Fiona is often late for class',
        explanation: 'Posición de adverbios en inglés:',
        points: [
          '🔹 Frecuencia (often, always, rarely): DESPUÉS de BE, ANTES de otros verbos',
          '🔹 Opinión (Luckily, Fortunately): Al PRINCIPIO de la oración',
          '🔹 Modo (happily, quickly): Después del verbo o al final',
          '🔹 Tiempo (yesterday, next week): Al FINAL de la oración'
        ],
        tip: '💡 Orden básico: Sujeto + (BE) + Adverbio de frecuencia + Verbo + Complemento + Tiempo'
      },
      'adverbs': {
        title: '📚 Cómo resolver: Adverbs',
        example: 'Have you ever / even tried sushi?',
        solution: 'ever',
        explanation: 'Adverbios confusos:',
        points: [
          '🔹 ever (preguntas: ¿alguna vez?) vs even (incluso)',
          '🔹 specially (específicamente para) vs especially (particularmente)',
          '🔹 hard (con esfuerzo) vs hardly (apenas)',
          '🔹 still (todavía) vs yet (todavía - final de frase negativa/pregunta)',
          '🔹 in the end (finalmente) vs at the end (al final de algo)',
          '🔹 nearly (casi) vs near (cerca)'
        ],
        tip: '💡 Lee la oración completa y piensa en el SIGNIFICADO, no solo la gramática'
      },
      'mixed-grammar': {
        title: '📚 Cómo resolver: Mixed Grammar',
        example: 'Your brother doesn\'t smoke, does / doesn\'t he?',
        solution: 'does',
        explanation: 'Reglas variadas de gramática:',
        points: [
          '🔹 The + adjective = grupo general → "The rich" (no "people")',
          '🔹 Question tags: Oración negativa → tag positivo (y viceversa)',
          '🔹 Such + a/an + adj + noun → "such a good time"',
          '🔹 Auxiliar en respuestas cortas debe coincidir con el tiempo',
          '🔹 "did + infinitive" para ENFATIZAR → "I did tell you!"'
        ],
        tip: '💡 Cada ejercicio tiene su propia regla - lee con atención el contexto'
      },
      'vocabulary': {
        title: '📚 Cómo resolver: Vocabulary',
        example: 'We\'re having another h_______ this month. It\'s been over 35 degrees.',
        solution: 'heatwave',
        explanation: 'Estrategia para completar palabras:',
        points: [
          '🔹 Lee el CONTEXTO completo - las pistas están en la oración',
          '🔹 Usa la primera letra como guía inicial',
          '🔹 Piensa en palabras relacionadas al tema (clima, salud, viajes)',
          '🔹 Verifica que la palabra tenga sentido gramaticalmente',
          '🔹 Común en exámenes: heatwave, allergic, fill, open-minded, thick, leather, aisle, pressure'
        ],
        tip: '💡 El contexto SIEMPRE da la pista - ejemplo: "35 degrees" → habla de calor → heatwave'
      }
    };

    return helpContent[sectionId] || null;
  };

  useEffect(() => {
    const exerciseKey = `${currentSectionIndex}-${currentExerciseIndex}`;
    const savedAnswer = allAnswers[exerciseKey] || '';
    setUserAnswer(savedAnswer);
    setFeedback(null);
  }, [currentSectionIndex, currentExerciseIndex, allAnswers]);

  const checkAnswer = () => {
    if (!userAnswer.trim()) {
      alert('Por favor escribe tu respuesta');
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

  const finishExam = () => {
    const unanswered = totalExercises - checkedExercises.size;
    if (unanswered > 0) {
      if (!window.confirm(`Tienes ${unanswered} pregunta(s) sin responder. ¿Deseas finalizar el examen de todos modos?`)) {
        return;
      }
    }
    alert(`¡Examen completado!\n\nCorrectas: ${score.correct}\nIncorrectas: ${score.incorrect}\nSin responder: ${unanswered}\nPuntuación: ${Math.round((score.correct / totalExercises) * 100)}%`);
  };

  const renderExerciseContent = () => {
    if (currentSection.type === 'multiple-choice') {
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-800 mb-4">{currentExercise.sentence}</p>
          
          <div className="space-y-2">
            {currentExercise.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !feedback && setUserAnswer(option)}
                disabled={feedback !== null}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                  userAnswer === option
                    ? 'border-blue-500 bg-blue-50 font-semibold'
                    : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-800 mb-2">Palabras disponibles:</p>
            <div className="flex flex-wrap gap-2">
              {currentExercise.words.map((word, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-blue-300 rounded text-sm font-medium text-gray-700"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Escribe la oración en el orden correcto:
            </label>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={feedback !== null}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              placeholder="Escribe tu respuesta..."
              onKeyPress={(e) => e.key === 'Enter' && !feedback && checkAnswer()}
            />
          </div>
        </div>
      );
    }

    if (currentSection.type === 'fill-word') {
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-800">
            {currentExercise.sentence.replace('_______', `<span class="font-bold text-blue-600">${currentExercise.firstLetter}_______</span>`)}
          </p>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Completa la palabra (primera letra: {currentExercise.firstLetter.toUpperCase()}):
            </label>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={feedback !== null}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
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
          className="text-lg text-gray-800"
          dangerouslySetInnerHTML={{
            __html: currentExercise.sentence.replace(/_______ \(/g, '<span class="font-bold text-blue-600">_______</span> (')
          }}
        />

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Tu respuesta:
          </label>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={feedback !== null}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
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
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-gray-600">No se pudo cargar el examen.</p>
        </div>
      </div>
    );
  }

  const isLastExercise = currentSectionIndex === sections.length - 1 && 
                         currentExerciseIndex === currentSection.exercises.length - 1;

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4">
      {/* Header with Progress */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Examen de Inglés</h1>
            <p className="text-sm text-gray-600 mt-1">
              Progreso: {completedExercises} / {totalExercises} ejercicios
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-semibold text-green-700">{score.correct}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-semibold text-red-700">{score.incorrect}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl sm:text-2xl font-bold">{currentSection.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="bg-white text-blue-600 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-1"
            >
              <span>💡</span>
              <span className="hidden sm:inline">Ayuda</span>
            </button>
            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              Sección {currentSectionIndex + 1}/{sections.length}
            </span>
          </div>
        </div>
        <p className="text-blue-100 text-sm sm:text-base">{currentSection.instruction}</p>
      </div>

      {/* Help Panel */}
      {showHelp && getSectionHelp(currentSection.id) && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6 animate-fadeIn">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">{getSectionHelp(currentSection.id).title}</h3>
            <button
              onClick={() => setShowHelp(false)}
              className="text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              ✕
            </button>
          </div>
          
          <div className="bg-white bg-opacity-70 rounded-lg p-4 mb-3">
            <p className="text-sm font-semibold text-gray-700 mb-2">📝 Ejemplo:</p>
            <p className="text-gray-800 mb-1">{getSectionHelp(currentSection.id).example}</p>
            <p className="text-green-700 font-semibold">✓ Solución: {getSectionHelp(currentSection.id).solution}</p>
          </div>

          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-800 mb-2">{getSectionHelp(currentSection.id).explanation}</p>
            <ul className="space-y-1">
              {getSectionHelp(currentSection.id).points.map((point, index) => (
                <li key={index} className="text-sm text-gray-700">{point}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
            <p className="text-sm text-blue-900 font-medium">{getSectionHelp(currentSection.id).tip}</p>
          </div>
        </div>
      )}

      {/* Exercise Content */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-500">
              Ejercicio {currentExerciseIndex + 1} de {currentSection.exercises.length}
            </span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              ID: {currentSection.id}
            </span>
          </div>

          {renderExerciseContent()}
        </div>

        {/* Feedback Section */}
        {feedback && (
          <div className={`mt-6 p-4 rounded-lg border-2 ${
            feedback.isCorrect 
              ? 'bg-green-50 border-green-500' 
              : 'bg-red-50 border-red-500'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-3xl">
                {feedback.isCorrect ? '✅' : '❌'}
              </span>
              <div className="flex-1">
                <p className={`font-bold text-lg mb-2 ${
                  feedback.isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {feedback.isCorrect ? '¡Correcto!' : 'Incorrecto'}
                </p>
                
                {!feedback.isCorrect && (
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Respuesta correcta:</span>{' '}
                    <span className="text-green-700 font-semibold">{feedback.correctAnswer}</span>
                  </p>
                )}
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">Explicación:</span> {feedback.explanation}
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
              className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none"
            >
              ← Anterior
            </button>
            
            {!feedback && (
              <button
                onClick={checkAnswer}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                ✓ Verificar
              </button>
            )}
            
            <button
              onClick={nextExercise}
              disabled={isLastExercise}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none"
            >
              Siguiente →
            </button>
          </div>
          
          {isLastExercise && (
            <button
              onClick={finishExam}
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🏁 Finalizar Examen
            </button>
          )}
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-xs text-gray-500 text-center mb-3">Haz clic en cualquier ejercicio para navegar</p>
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
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2 scale-110'
                      : isAnswered
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
            <span>Respondida</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
            <span>Pendiente</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamView;
