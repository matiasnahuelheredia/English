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
  const [allAnswers, setAllAnswers] = useState({});
  const [checkedExercises, setCheckedExercises] = useState(new Set());

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
        explanation: 'En narrativas de seguridad usamos diferentes tiempos para describir incidentes:',
        points: [
          '🔹 Past Simple: Acciones de seguridad COMPLETADAS y SECUENCIALES',
          '   • Eventos del incidente uno tras otro → "detected the breach, blocked access, sent alert"',
          '   • Acciones completas → "The firewall blocked the attack"',
          '   • Palabra clave: "then" (entonces), secuencia de eventos',
          '',
          '🔹 Past Continuous: Ataques EN PROGRESO que fueron INTERRUMPIDOS',
          '   • Ataque en curso → "The hacker was accessing when..."',
          '   • Se combina con Past Simple (interrupción) → "was downloading files when firewall blocked"',
          '   • Palabra clave: "when" + acción que interrumpe, "while" + otra acción continua',
          '   • Momento específico → "At 3am, the malware was spreading"',
          '',
          '🔹 Past Perfect: Vulnerabilidad que existía ANTES del ataque',
          '   • Primera acción de dos eventos → "They had exposed (1º) the port before the attack (2º)"',
          '   • Causa del incidente → "The breach succeeded because they hadn\'t updated the patch"',
          '   • Palabra clave: "before", "after", "already", "by the time"',
          '   • Estado previo → "Someone had stolen the credentials" (antes del acceso)',
          '',
          '🔹 Past Perfect Continuous: DURACIÓN del ataque antes de detección',
          '   • Énfasis en tiempo del ataque → "had been running for hours when detected"',
          '   • Actividad continua → "The malware had been encrypting files since midnight"',
          '   • Palabra clave: "for" + duración, "since" + momento inicial',
          '   • Impacto acumulado → "had been stealing data for weeks (mucho daño)"'
        ],
        tip: '💡 CONTEXTO DE SEGURIDAD: ¿Ataque interrumpido? → Past Continuous. ¿Pasos del incidente? → Past Simple. ¿Vulnerabilidad previa? → Past Perfect. ¿Tiempo del ataque? → Past Perfect Continuous'
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
    const exerciseKey = `${currentSectionIndex}-${currentExerciseIndex}`;
    const savedAnswer = allAnswers[exerciseKey] || '';
    setUserAnswer(savedAnswer);
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
      highlightedText = highlightedText.replace(regex, '<span class="bg-green-100 text-green-800 px-1 rounded font-semibold">$1</span>');
    });

    return highlightedText;
  };

  const renderExerciseContent = () => {
    if (currentSection.type === 'multiple-choice') {
      return (
        <div className="space-y-4">
          <p 
            className="text-lg text-gray-800 mb-4"
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
          <p 
            className="text-lg text-gray-800"
            dangerouslySetInnerHTML={{
              __html: highlightKeywords(currentExercise.sentence.replace('_______', `<span class="font-bold text-blue-600">${currentExercise.firstLetter}_______</span>`))
            }}
          />

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
            __html: highlightKeywords(currentExercise.sentence).replace(/_______ \(/g, '<span class="font-bold text-blue-600">_______</span> (')
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

export default ExamView2;
