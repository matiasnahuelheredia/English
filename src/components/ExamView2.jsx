import React, { useState, useEffect } from 'react';
import { getExam2Sections, getTotalExam2Exercises } from '../data/examData2';

const ExamView2 = () => {
  const [sections] = useState(getExam2Sections());
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [completedExercises, setCompletedExercises] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  const currentSection = sections[currentSectionIndex];
  const currentExercise = currentSection?.exercises[currentExerciseIndex];
  const totalExercises = getTotalExam2Exercises();
  const progress = (completedExercises / totalExercises) * 100;

  const getSectionHelp = (sectionId) => {
    const helpContent = {
      'cybersecurity-narrative': {
        title: '📚 Cómo resolver: Narrative Tenses (Cybersecurity)',
        example: 'The hacker _______ (access) our database when the firewall blocked him.',
        solution: 'was accessing',
        explanation: 'En narrativas de ciberseguridad usamos diferentes tiempos:',
        points: [
          '🔹 Past Continuous: Ataques en progreso interrumpidos → "was accessing"',
          '🔹 Past Perfect: Acciones anteriores → "had encrypted the files"',
          '🔹 Past Perfect Continuous: Duración de monitoreo/ataque → "had been monitoring"',
          '🔹 Past Simple: Acciones completadas → "detected, reported, patched"'
        ],
        tip: '💡 Palabras clave: "when" (interrupción), "before the breach" (anterior), "for hours" (duración)'
      },
      'cybersecurity-present-perfect': {
        title: '📚 Cómo resolver: Present Perfect (Cybersecurity)',
        example: 'How long _______ (the system / be) under attack?',
        solution: 'has the system been',
        explanation: 'En contexto de seguridad:',
        points: [
          '🔹 Simple: Experiencias de ataques, vulnerabilidades detectadas → "have experienced"',
          '🔹 Continuous: Duración de monitoreo, investigación → "have been investigating"',
          '🔹 Verbos de estado: use (usar), protect (proteger) → pueden ser simple o continuous',
          '🔹 "How long" con ataques/monitoreo activo → Continuous'
        ],
        tip: '💡 Si enfatiza DURACIÓN de investigación/ataque → Continuous. Si es RESULTADO detectado → Simple'
      },
      'cybersecurity-future': {
        title: '📚 Cómo resolver: Future Forms (Cybersecurity)',
        example: 'By Friday, we will install / will have installed the security patches.',
        solution: 'will have installed',
        explanation: 'En planificación de seguridad:',
        points: [
          '🔹 Future Continuous: Instalación/escaneo en progreso en momento específico',
          '🔹 Future Perfect: Parches/auditorías completadas ANTES de deadline',
          '🔹 "By [date/time]" con seguridad → Future Perfect (completado)',
          '🔹 "At [time]" durante mantenimiento → Future Continuous (en progreso)'
        ],
        tip: '💡 Deadlines de seguridad usan "by" → Future Perfect. Ventanas de mantenimiento → Continuous'
      },
      'cybersecurity-word-order': {
        title: '📚 Cómo resolver: Word Order (Cybersecurity)',
        example: 'is / Our firewall / updated / automatically / always',
        solution: 'Our firewall is always automatically updated',
        explanation: 'Orden de adverbios en contexto técnico:',
        points: [
          '🔹 Frecuencia (always, rarely): DESPUÉS de BE, ANTES de otros verbos',
          '🔹 Opinión (Fortunately, Surprisingly): Al PRINCIPIO',
          '🔹 Modo (automatically, securely): Después de frecuencia o verbo',
          '🔹 Tiempo (next Monday, this week): Al FINAL'
        ],
        tip: '💡 En seguridad: Sistema + BE + Frecuencia + Modo + Acción + Tiempo'
      },
      'cybersecurity-adverbs': {
        title: '📚 Cómo resolver: Adverbs (Cybersecurity)',
        example: 'Have you ever / even tried penetration testing?',
        solution: 'ever',
        explanation: 'Adverbios en contexto de seguridad:',
        points: [
          '🔹 ever (experiencias de seguridad) vs even (incluso)',
          '🔹 specially (diseñado específicamente) vs especially (particularmente vulnerable)',
          '🔹 hardly (apenas detectado) vs hard (trabajar intensamente)',
          '🔹 still (aún vulnerable) vs yet (todavía no parcheado - final)',
          '🔹 in the end (finalmente bloqueamos) vs at the end (al final del escaneo)',
          '🔹 nearly (casi hackeado) vs near (cerca del servidor)'
        ],
        tip: '💡 Contexto técnico: lee toda la frase, piensa en SIGNIFICADO de seguridad'
      },
      'cybersecurity-mixed': {
        title: '📚 Cómo resolver: Mixed Grammar (Cybersecurity)',
        example: 'Your network doesn\'t have encryption, does / doesn\'t it?',
        solution: 'does',
        explanation: 'Gramática variada en ciberseguridad:',
        points: [
          '🔹 The + adjective para sistemas → "The vulnerable" (sistemas)',
          '🔹 Question tags: Negativo → positivo (doesn\'t have → does it)',
          '🔹 Such + a + adj + noun → "such a serious breach"',
          '🔹 Auxiliar en respuestas debe coincidir con tiempo usado',
          '🔹 "did + verb" para ENFATIZAR advertencias → "I did warn you!"'
        ],
        tip: '💡 En seguridad, el énfasis es crítico - "did warn", "does matter"'
      },
      'cybersecurity-vocabulary': {
        title: '📚 Cómo resolver: Cybersecurity Vocabulary',
        example: 'A f_______ monitors and controls network traffic.',
        solution: 'firewall',
        explanation: 'Vocabulario esencial de ciberseguridad:',
        points: [
          '🔹 firewall (cortafuegos) - protección de red',
          '🔹 malware (software malicioso) - virus, troyanos, etc.',
          '🔹 phishing (suplantación) - emails fraudulentos',
          '🔹 encryption (cifrado) - proteger datos',
          '🔹 vulnerability (vulnerabilidad) - debilidades explotables',
          '🔹 ransomware (secuestro de datos) - pide rescate',
          '🔹 backup (respaldo) - copia de seguridad',
          '🔹 authentication (autenticación) - verificar identidad'
        ],
        tip: '💡 El contexto describe la FUNCIÓN del término - usa pistas técnicas en la oración'
      }
    };

    return helpContent[sectionId] || null;
  };

  useEffect(() => {
    setUserAnswer('');
    setFeedback(null);
  }, [currentSectionIndex, currentExerciseIndex]);

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

    setFeedback({
      isCorrect,
      explanation: currentExercise.explanation,
      correctAnswer: Array.isArray(currentExercise.correctAnswer) 
        ? currentExercise.correctAnswer.join(' / ') 
        : currentExercise.correctAnswer
    });

    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setCompletedExercises(prev => prev + 1);
  };

  const nextExercise = () => {
    if (currentExerciseIndex < currentSection.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentExerciseIndex(0);
    } else {
      // Examen completado
      alert(`¡Examen completado!\n\nCorrectas: ${score.correct}\nIncorrectas: ${score.incorrect}\nPuntuación: ${Math.round((score.correct / totalExercises) * 100)}%`);
    }
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">🔐 Cybersecurity English Exam</h1>
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
        <div className="mt-6 flex justify-center gap-4">
          {!feedback ? (
            <button
              onClick={checkAnswer}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Verificar Respuesta
            </button>
          ) : (
            <button
              onClick={nextExercise}
              className={`${
                isLastExercise
                  ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
              } text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              {isLastExercise ? 'Finalizar Examen' : 'Siguiente Ejercicio →'}
            </button>
          )}
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {sections.map((section, sectionIdx) => (
            <div key={section.id} className="flex items-center">
              <div className={`flex items-center gap-1 px-3 py-2 rounded-lg ${
                sectionIdx === currentSectionIndex
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : sectionIdx < currentSectionIndex
                  ? 'bg-green-100'
                  : 'bg-gray-100'
              }`}>
                <span className={`text-xs font-semibold ${
                  sectionIdx === currentSectionIndex ? 'text-blue-700' : 'text-gray-600'
                }`}>
                  {sectionIdx + 1}
                </span>
                {sectionIdx < currentSectionIndex && (
                  <span className="text-green-600 text-sm">✓</span>
                )}
              </div>
              {sectionIdx < sections.length - 1 && (
                <div className="w-4 h-0.5 bg-gray-300 mx-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamView2;
