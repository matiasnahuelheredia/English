import React, { useState, useEffect, useRef } from 'react';
import { getExercisesByTense } from '../data/exercises';
import { getVocabularyByTopic } from '../data/vocabularyData';
import MatchExercise from './MatchExercise';
import ExamView from './ExamView';
import ExamView2 from './ExamView2';
import Introduction from './Introduction';
import ConflictWarfareExercise from './ConflictWarfareExercise';
import AdjectivesExercise from './AdjectivesExercise';

const ExerciseView = ({ tenseId }) => {
  // Si es la introducción, mostrar el componente Introduction
  if (tenseId === 'introduction') {
    return <Introduction />;
  }

  // Si es conflict-warfare, mostrar el componente ConflictWarfareExercise
  if (tenseId === 'conflict-warfare') {
    return <ConflictWarfareExercise />;
  }

  // Si es adjectives, mostrar el componente AdjectivesExercise
  if (tenseId === 'adjectives') {
    return <AdjectivesExercise />;
  }

  // Si es un ejercicio de tipo match, usar el componente especializado
  if (tenseId === 'weather-match') {
    return <MatchExercise tenseId={tenseId} />;
  }

  // Si es el examen, usar el componente ExamView
  if (tenseId === 'exam') {
    return <ExamView />;
  }

  // Si es el examen 2 (cybersecurity), usar el componente ExamView2
  if (tenseId === 'exam2') {
    return <ExamView2 />;
  }

  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [isReversed, setIsReversed] = useState(true);
  const [isVocabulary, setIsVocabulary] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [initialCountdown, setInitialCountdown] = useState(20);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [vocabularyImage, setVocabularyImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [remainingVocabExercises, setRemainingVocabExercises] = useState([]);
  
  const inputRef = useRef(null);
  const initialTimerRef = useRef(null);
  const initialIntervalRef = useRef(null);
  const feedbackTimerRef = useRef(null);
  const feedbackIntervalRef = useRef(null);

  // Función para obtener imagen relacionada con la palabra
  const fetchVocabularyImage = async (word) => {
    try {
      setImageLoading(true);
      // Usar Pexels API sin necesidad de key para imágenes básicas
      // O usar una URL de búsqueda directa
      const searchTerm = encodeURIComponent(word);
      const imageUrl = `https://source.unsplash.com/featured/400x300/?${searchTerm}`;
      
      setTimeout(() => {
        setVocabularyImage(imageUrl);
        setImageLoading(false);
      }, 100);
    } catch (error) {
      console.error('Error loading image:', error);
      setVocabularyImage(null);
      setImageLoading(false);
    }
  };

  // Función para limpiar todos los timers
  const clearAllTimers = () => {
    if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
    if (initialIntervalRef.current) clearInterval(initialIntervalRef.current);
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    if (feedbackIntervalRef.current) clearInterval(feedbackIntervalRef.current);
  };

  // Función para iniciar el countdown inicial de vocabulario
  const startInitialCountdown = (exercise) => {
    clearAllTimers();
    setInitialCountdown(20);
    let currentCount = 20;
    
    initialIntervalRef.current = setInterval(() => {
      currentCount -= 1;
      setInitialCountdown(currentCount);
      
      if (currentCount <= 0) {
        clearInterval(initialIntervalRef.current);
      }
    }, 1000);
    
    initialTimerRef.current = setTimeout(() => {
      clearInterval(initialIntervalRef.current);
      setInitialCountdown(0);
      
      // Timeout: mostrar respuesta y contar como incorrecta
      if (exercise && exercise.englishWord) {
        let correctAnswers = [];
        if (isReversed) {
          correctAnswers = [exercise.englishWord];
        } else {
          correctAnswers = Array.isArray(exercise.spanishWord) ? exercise.spanishWord : [exercise.spanishWord];
        }
        
        setFeedback({
          isCorrect: false,
          message: '⏱️ Se acabó el tiempo. ' + exercise.explanation,
          correctAnswer: correctAnswers.join(' / '),
          userAnswerText: ''
        });
        setShowAnswer(true);
        
        setStats(prev => ({
          correct: prev.correct,
          incorrect: prev.incorrect + 1
        }));
        
        // Pasar a siguiente pregunta después de 3 segundos
        feedbackTimerRef.current = setTimeout(() => {
          loadNewQuestion();
        }, 3000);
      }
    }, 20000);
  };

  useEffect(() => {
    clearAllTimers();
    
    const vocabTopics = ['clothes-fashion', 'airport', 'weather', 'illnesses-injuries', 'cinema', 'dependent-prepositions', 'education', 'food-cooking', 'houses', 'money', 'personality', 'relationships', 'sport', 'the-body', 'transport', 'word-building', 'work', 'adverbs-phrases', 'business'];
    const isVocabTopic = vocabTopics.includes(tenseId);
    setIsVocabulary(isVocabTopic);

    let loadedExercises = [];
    if (isVocabTopic) {
      loadedExercises = getVocabularyByTopic(tenseId);
      setRemainingVocabExercises([...loadedExercises]);
    } else {
      loadedExercises = getExercisesByTense(tenseId);
    }
    
    setExercises(loadedExercises);
    
    setUserAnswer('');
    setUserAnswers([]);
    setFeedback(null);
    setIsReversed(true);
    setShowAnswer(false);
    setCountdown(20);
    setStats({ correct: 0, incorrect: 0 });
    
    if (loadedExercises.length > 0) {
      const randomIndex = Math.floor(Math.random() * loadedExercises.length);
      const exercise = loadedExercises[randomIndex];
      setCurrentExercise(exercise);
      
      if (isVocabTopic) {
        startInitialCountdown(exercise);
        // Cargar imagen para vocabulario
        if (exercise.englishWord) {
          if (exercise.imageUrl) {
            setVocabularyImage(exercise.imageUrl);
            setImageLoading(false);
          } else {
            fetchVocabularyImage(exercise.englishWord);
          }
        }
      }
    }
    
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    
    return () => clearAllTimers();
  }, [tenseId]);

  const handleToggleDirection = () => {
    clearAllTimers();
    setIsReversed(!isReversed);
    setUserAnswer('');
    setUserAnswers([]);
    setFeedback(null);
    setShowAnswer(false);
    setCountdown(20);
    // Reset remaining exercises when changing direction
    if (isVocabulary) {
      setRemainingVocabExercises([...exercises]);
    }
    loadNewQuestion();
  };

  const loadNewQuestion = () => {
    const exercisesToUse = isVocabulary && remainingVocabExercises.length > 0 
      ? remainingVocabExercises 
      : exercises;
    
    if (exercisesToUse.length > 0) {
      clearAllTimers();
      
      const randomIndex = Math.floor(Math.random() * exercisesToUse.length);
      const exercise = exercisesToUse[randomIndex];
      setCurrentExercise(exercise);
      setUserAnswer('');
      setUserAnswers([]);
      setFeedback(null);
      setShowAnswer(false);
      setCountdown(20);
      
      // Iniciar countdown inicial solo para vocabulario
      if (isVocabulary && exercise.englishWord) {
        startInitialCountdown(exercise);
        // Cargar imagen para vocabulario
        if (exercise.imageUrl) {
          setVocabularyImage(exercise.imageUrl);
          setImageLoading(false);
        } else {
          fetchVocabularyImage(exercise.englishWord);
        }
      }
      
      // Hacer focus en el input después de un breve delay
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  };

  const handleAnswerChange = (selectedValue, inputIndex = null, isDropdown = false) => {
    if (inputIndex !== null || isDropdown) {
      const newAnswers = [...userAnswers];
      newAnswers[inputIndex] = selectedValue;
      setUserAnswers(newAnswers);
    } else {
      setUserAnswer(selectedValue);
    }
    setFeedback(null);
  };

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim().replace(/\s+/g, ' ');
  };

  const checkAnswer = () => {
    if (!currentExercise) return;

    // Detener el countdown inicial cuando se verifica la respuesta
    clearAllTimers();
    setInitialCountdown(0);

    // Para ejercicios de vocabulario
    if (isVocabulary && currentExercise.englishWord) {
      const answer = Array.isArray(userAnswer) && userAnswer.length > 0 ? userAnswer[0] : userAnswer;
      
      if (!answer || answer.trim() === '') {
        setFeedback({
          isCorrect: false,
          message: 'Por favor completa la respuesta',
          correctAnswer: isReversed ? currentExercise.englishWord : (Array.isArray(currentExercise.spanishWord) ? currentExercise.spanishWord.join(', ') : currentExercise.spanishWord)
        });
        return;
      }

      const normalizedUserAnswer = normalizeAnswer(answer);
      let isCorrect = false;
      let correctAnswers = [];

      if (isReversed) {
        correctAnswers = [currentExercise.englishWord];
        isCorrect = normalizeAnswer(currentExercise.englishWord) === normalizedUserAnswer;
      } else {
        correctAnswers = Array.isArray(currentExercise.spanishWord) ? currentExercise.spanishWord : [currentExercise.spanishWord];
        isCorrect = correctAnswers.some(correct => normalizeAnswer(correct) === normalizedUserAnswer);
      }

      setFeedback({
        isCorrect,
        message: isCorrect ? '¡Correcto! ' + currentExercise.explanation : 'Incorrecto. ' + currentExercise.explanation,
        correctAnswer: correctAnswers.join(' / '),
        userAnswerText: answer
      });

      // Actualizar estadísticas
      setStats(prev => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        incorrect: prev.incorrect + (isCorrect ? 0 : 1)
      }));

      // Si la respuesta es correcta, eliminar del pool y pasar a la siguiente
      if (isCorrect) {
        // Remover el ejercicio actual del pool de vocabulario
        const updatedRemaining = remainingVocabExercises.filter(ex => ex !== currentExercise);
        setRemainingVocabExercises(updatedRemaining);
        
        // Mostrar mensaje si completó todos
        if (updatedRemaining.length === 0) {
          setTimeout(() => {
            alert('¡Felicitaciones! Has completado todas las palabras correctamente. 🎉\n\nEstadísticas finales:\nCorrectas: ' + (stats.correct + 1) + '\nIncorrectas: ' + stats.incorrect);
            // Reiniciar el vocabulario
            setRemainingVocabExercises([...exercises]);
            setStats({ correct: 0, incorrect: 0 });
          }, 100);
        }
        
        feedbackTimerRef.current = setTimeout(() => {
          loadNewQuestion();
        }, 5000);
      } else {
        // Si es incorrecta, iniciar countdown y timer para mostrar respuesta después de 20 segundos
        setCountdown(20);
        let currentCount = 20;
        
        feedbackIntervalRef.current = setInterval(() => {
          currentCount -= 1;
          setCountdown(currentCount);
          
          if (currentCount <= 0) {
            clearInterval(feedbackIntervalRef.current);
          }
        }, 1000);

        feedbackTimerRef.current = setTimeout(() => {
          setShowAnswer(true);
          clearInterval(feedbackIntervalRef.current);
        }, 20000);
      }
      
      return;
    }
    
    // Para ejercicios con inputs de texto (array de respuestas)
    if (Array.isArray(currentExercise.correctAnswer)) {
      if (!userAnswers || userAnswers.length === 0 || userAnswers.every(ans => !ans || ans.trim() === '')) {
        setFeedback({
          isCorrect: false,
          message: 'Por favor completa todas las respuestas',
          correctAnswer: currentExercise.correctAnswer.join(' ... ')
        });
        return;
      }

      const allCorrect = currentExercise.correctAnswer.every((correct, idx) => {
        const userAns = userAnswers[idx];
        if (!userAns || userAns.trim() === '') return false;
        return normalizeAnswer(userAns) === normalizeAnswer(correct);
      });

      setFeedback({
        isCorrect: allCorrect,
        message: allCorrect ? '¡Correcto! ' + currentExercise.explanation : 'Incorrecto. ' + currentExercise.explanation,
        correctAnswer: currentExercise.correctAnswer.join(' ... '),
        userAnswerText: userAnswers.join(' ... '),
        tense: currentExercise.tense
      });
      return;
    }
    
    // Para ejercicios con dropdown (puede ser único o múltiple)
    // Contar cuántos dropdowns hay
    const dropdownCount = currentExercise.sentenceParts?.filter(p => p.type === 'dropdown').length || 0;
    
    if (dropdownCount > 1) {
      // Múltiples dropdowns: verificar que todos estén completados
      if (!userAnswers || userAnswers.length === 0 || userAnswers.some(ans => ans === undefined || ans === '' || ans === '-1')) {
        setFeedback({
          isCorrect: false,
          message: 'Por favor completa todas las respuestas'
        });
        return;
      }

      // Verificar que todas las respuestas sean correctas
      const allCorrect = userAnswers.every((ans, idx) => {
        const selectedOption = currentExercise.options[parseInt(ans)];
        return selectedOption === currentExercise.correctAnswer;
      });

      setFeedback({
        isCorrect: allCorrect,
        message: allCorrect ? '¡Correcto! ' + currentExercise.explanation : 'Incorrecto. ' + currentExercise.explanation,
        correctAnswer: currentExercise.correctAnswer,
        tense: currentExercise.tense
      });
    } else {
      // Dropdown único: usar el primer elemento del array o userAnswer
      const answer = userAnswers && userAnswers.length > 0 ? userAnswers[0] : userAnswer;
      
      if (answer === undefined || answer === '' || answer === '-1') {
        setFeedback({
          isCorrect: false,
          message: 'Por favor selecciona una respuesta'
        });
        return;
      }

      const selectedOption = currentExercise.options[parseInt(answer)];
      const isCorrect = selectedOption === currentExercise.correctAnswer;

      setFeedback({
        isCorrect,
        message: isCorrect ? '¡Correcto! ' + currentExercise.explanation : 'Incorrecto. ' + currentExercise.explanation,
        correctAnswer: currentExercise.correctAnswer,
        tense: currentExercise.tense
      });
    }
  };

  const getTenseTitle = () => {
    const titles = {
      'present-simple': 'Present Simple',
      'present-continuous': 'Present Continuous',
      'present-simple-continuous-mix': 'Present Simple & Continuous Mix - Action and Non-Action Verbs',
      'present-perfect': 'Present Perfect',
      'present-perfect-continuous': 'Present Perfect Continuous',
      'past-simple': 'Past Simple',
      'past-continuous': 'Past Continuous',
      'past-perfect': 'Past Perfect',
      'past-perfect-continuous': 'Past Perfect Continuous',
      'future-simple': 'Future Simple',
      'future-continuous': 'Future Continuous',
      'future-perfect': 'Future Perfect',
      'future-perfect-continuous': 'Future Perfect Continuous',
      'first-conditional': 'First Conditional',
      'second-conditional': 'Second Conditional',
      'third-conditional': 'Third Conditional',
      'question-forms': 'Question Forms',
      'mixed-tenses': 'Mixed Tenses - All Practice',
      'clothes-fashion': 'Clothes and Fashion - Vocabulary',
      'airport': 'Airport - Vocabulary',
      'weather': 'Weather - Vocabulary',
      'illnesses-injuries': 'Illnesses and Injuries - Vocabulary',
      'cinema': 'Cinema - Vocabulary',
      'dependent-prepositions': 'Dependent Prepositions - Vocabulary',
      'education': 'Education - Vocabulary',
      'food-cooking': 'Food and Cooking - Vocabulary',
      'houses': 'Houses - Vocabulary',
      'money': 'Money - Vocabulary',
      'personality': 'Personality - Vocabulary',
      'relationships': 'Relationships - Vocabulary',
      'sport': 'Sport - Vocabulary',
      'the-body': 'The Body - Vocabulary',
      'transport': 'Transport - Vocabulary',
      'word-building': 'Word Building - Vocabulary',
      'work': 'Work - Vocabulary',
      'adverbs-phrases': 'Adverbs and Adverbial Phrases - Vocabulary',
      'business': 'Business - Vocabulary',
      'present-perfect-past-simple-2': 'Present Perfect & Past Simple (2) - Word Order',
    };
    return titles[tenseId] || 'Ejercicios';
  };

  const getTenseStructure = () => {
    const structures = {
      'present-simple': {
        affirmative: 'Subject + verb (base form) / verb + s/es (3rd person)',
        negative: 'Subject + do/does + not + verb (base form)',
        interrogative: 'Do/Does + subject + verb (base form)?',
        example: 'I work / She works / Do you work?'
      },
      'present-continuous': {
        affirmative: 'Subject + am/is/are + verb + ing',
        negative: 'Subject + am/is/are + not + verb + ing',
        interrogative: 'Am/Is/Are + subject + verb + ing?',
        example: 'I am working / She is working / Are you working?'
      },
      'present-simple-continuous-mix': {
        affirmative: 'Present Simple: Subject + verb(s) | Present Continuous: Subject + am/is/are + verb+ing',
        negative: 'Present Simple: don\'t/doesn\'t + verb | Present Continuous: am/is/are + not + verb+ing',
        interrogative: 'Present Simple: Do/Does + subject + verb? | Present Continuous: Am/Is/Are + subject + verb+ing?',
        example: 'Action verbs: I\'m eating (now) vs I eat (habit) | Non-action verbs: I like (NOT I\'m liking)'
      },
      'present-perfect': {
        affirmative: 'Subject + have/has + past participle',
        negative: 'Subject + have/has + not + past participle',
        interrogative: 'Have/Has + subject + past participle?',
        example: 'I have worked / She has worked / Have you worked?'
      },
      'present-perfect-continuous': {
        affirmative: 'Subject + have/has + been + verb + ing',
        negative: 'Subject + have/has + not + been + verb + ing',
        interrogative: 'Have/Has + subject + been + verb + ing?',
        example: 'I have been working / She has been working'
      },
      'past-simple': {
        affirmative: 'Subject + verb + ed (regular) / irregular form',
        negative: 'Subject + did + not + verb (base form)',
        interrogative: 'Did + subject + verb (base form)?',
        example: 'I worked / She went / Did you work?'
      },
      'past-continuous': {
        affirmative: 'Subject + was/were + verb + ing',
        negative: 'Subject + was/were + not + verb + ing',
        interrogative: 'Was/Were + subject + verb + ing?',
        example: 'I was working / They were working'
      },
      'past-perfect': {
        affirmative: 'Subject + had + past participle',
        negative: 'Subject + had + not + past participle',
        interrogative: 'Had + subject + past participle?',
        example: 'I had worked / Had you worked?'
      },
      'past-perfect-continuous': {
        affirmative: 'Subject + had + been + verb + ing',
        negative: 'Subject + had + not + been + verb + ing',
        interrogative: 'Had + subject + been + verb + ing?',
        example: 'I had been working / Had you been working?'
      },
      'present-perfect-past-simple-2': {
        affirmative: 'Present Perfect: have/has + past participle | Past Simple: verb + ed (regular) / irregular form',
        negative: 'Present Perfect: haven\'t/hasn\'t + past participle | Past Simple: didn\'t + verb (base form)',
        interrogative: 'Present Perfect: Have/Has + subject + past participle? | Past Simple: Did + subject + verb?',
        example: 'Present Perfect (experience, unfinished time): I have visited Paris | Past Simple (finished time): I visited Paris in 2020'
      },
      'future-simple': {
        affirmative: 'Subject + will + verb (base form)',
        negative: 'Subject + will + not (won\'t) + verb (base form)',
        interrogative: 'Will + subject + verb (base form)?',
        example: 'I will work / Will you work?'
      },
      'future-continuous': {
        affirmative: 'Subject + will + be + verb + ing',
        negative: 'Subject + will + not + be + verb + ing',
        interrogative: 'Will + subject + be + verb + ing?',
        example: 'I will be working / Will you be working?'
      },
      'future-perfect': {
        affirmative: 'Subject + will + have + past participle',
        negative: 'Subject + will + not + have + past participle',
        interrogative: 'Will + subject + have + past participle?',
        example: 'I will have worked / Will you have worked?'
      },
      'future-perfect-continuous': {
        affirmative: 'Subject + will + have + been + verb + ing',
        negative: 'Subject + will + not + have + been + verb + ing',
        interrogative: 'Will + subject + have + been + verb + ing?',
        example: 'I will have been working for 10 years'
      },
      'first-conditional': {
        affirmative: 'If + present simple, will + verb (base form)',
        negative: 'If + don\'t/doesn\'t + verb, will + not + verb',
        interrogative: 'What + will + subject + verb + if + present?',
        example: 'If it rains, I will stay home'
      },
      'second-conditional': {
        affirmative: 'If + past simple, would + verb (base form)',
        negative: 'If + didn\'t + verb, would + not + verb',
        interrogative: 'What + would + subject + verb + if + past?',
        example: 'If I were rich, I would travel'
      },
      'third-conditional': {
        affirmative: 'If + past perfect, would + have + past participle',
        negative: 'If + hadn\'t + past participle, wouldn\'t + have + past participle',
        interrogative: 'What + would + subject + have + done + if + past perfect?',
        example: 'If I had known, I would have helped'
      }
    };
    return structures[tenseId] || null;
  };

  if (!currentExercise) {
    return (
      <div className="bg-htb-card border border-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">{getTenseTitle()}</h2>
        <p className="text-htb-text-dim">Cargando ejercicio...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{getTenseTitle()}</h2>
            <p className="text-sm sm:text-base text-htb-text-dim">
              {isVocabulary
                ? (isReversed 
                    ? 'Traduce la siguiente palabra del español al inglés.'
                    : 'Traduce la siguiente palabra del inglés al español.')
                : (tenseId === 'question-forms'
                    ? 'Ordena las palabras en el orden correcto para formar la pregunta.'
                    : 'Completa la siguiente oración seleccionando la opción correcta.')}
            </p>
          </div>
        </div>

        {/* Sección de estadísticas y toggle para vocabulario */}
        {isVocabulary && (
          <div className="mt-4 flex flex-col gap-4">
            {/* Indicador de palabras restantes */}
            <div className="flex items-center justify-center gap-4 p-3 bg-htb-sidebar rounded-lg border border-htb-green/30">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="text-sm font-semibold text-htb-green">Palabras por aprender</p>
                  <p className="text-2xl font-bold text-white">{remainingVocabExercises.length} / {exercises.length}</p>
                </div>
              </div>
            </div>
            
            {/* Estadísticas en tiempo real */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-htb-green"></div>
                <span className="font-semibold text-htb-green">{stats.correct}</span>
                <span className="text-htb-text-dim">Correctas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="font-semibold text-red-500">{stats.incorrect}</span>
                <span className="text-htb-text-dim">Incorrectas</span>
              </div>
            </div>
            
            {/* Barra de progreso visual */}
            {(stats.correct + stats.incorrect) > 0 && (
              <div className="w-full max-w-md mx-auto sm:mx-0">
                <div className="flex h-6 rounded-full overflow-hidden bg-htb-sidebar">
                  <div 
                    className="bg-htb-green transition-all duration-500 flex items-center justify-center text-xs text-htb-bg font-semibold"
                    style={{ width: `${(stats.correct / (stats.correct + stats.incorrect)) * 100}%` }}
                  >
                    {stats.correct > 0 && `${Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)}%`}
                  </div>
                  <div 
                    className="bg-red-500 transition-all duration-500 flex items-center justify-center text-xs text-white font-semibold"
                    style={{ width: `${(stats.incorrect / (stats.correct + stats.incorrect)) * 100}%` }}
                  >
                    {stats.incorrect > 0 && `${Math.round((stats.incorrect / (stats.correct + stats.incorrect)) * 100)}%`}
                  </div>
                </div>
              </div>
            )}
            
            {/* Toggle de dirección */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-medium text-htb-text">
                {isReversed ? 'ES → EN' : 'EN → ES'}
              </span>
              <button
                onClick={handleToggleDirection}
                className="relative inline-flex items-center h-8 w-16 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg"
                style={{ backgroundColor: isReversed ? '#9fef00' : '#374151' }}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full transition-transform ${
                    isReversed ? 'translate-x-9 bg-htb-bg' : 'translate-x-1 bg-white'
                  }`}
                />
              </button>
              <span className="text-xs sm:text-sm font-medium text-htb-text">
                Cambiar dirección
              </span>
            </div>
          </div>
        )}

        {/* Grammar Structure Help */}
        {!isVocabulary && getTenseStructure() && (
          <div className="mt-4 bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-htb-green text-xl">📖</span>
              <h3 className="text-sm font-bold text-htb-green uppercase tracking-wide">Estructura Gramatical</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-htb-card rounded p-3 border border-gray-800">
                <p className="font-semibold text-htb-green mb-1">✓ Afirmativa</p>
                <p className="text-htb-text text-xs leading-relaxed">{getTenseStructure().affirmative}</p>
              </div>
              <div className="bg-htb-card rounded p-3 border border-gray-800">
                <p className="font-semibold text-red-500 mb-1">✗ Negativa</p>
                <p className="text-htb-text text-xs leading-relaxed">{getTenseStructure().negative}</p>
              </div>
              <div className="bg-htb-card rounded p-3 border border-gray-800">
                <p className="font-semibold text-blue-400 mb-1">? Interrogativa</p>
                <p className="text-htb-text text-xs leading-relaxed">{getTenseStructure().interrogative}</p>
              </div>
            </div>
            <div className="mt-3 bg-htb-sidebar border border-htb-green/30 rounded p-2">
              <p className="text-xs text-htb-text-dim">
                <span className="font-semibold text-htb-green">Ejemplo:</span> 
                <span className="ml-1 text-htb-text italic">{getTenseStructure().example}</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-6">
        <div className="mb-6">
          <div className="flex-1">
            {/* Contador inicial solo para vocabulario */}
            {isVocabulary && initialCountdown > 0 && !feedback && (
              <div className="mb-4 p-3 rounded-md bg-htb-sidebar border border-htb-green/30 text-center">
                <p className="text-sm text-htb-green">
                  ⏱️ Tienes <span className="font-bold text-htb-green text-lg">{initialCountdown}</span> segundo{initialCountdown !== 1 ? 's' : ''} para responder
                </p>
              </div>
            )}
            
            {isVocabulary && currentExercise.englishWord ? (
              // Renderizado para vocabulario
              <div className="flex flex-col gap-4">
                {/* Imagen del vocabulario */}
                {vocabularyImage && !imageLoading && (
                  <div className="flex justify-center mb-4">
                    <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-htb-green w-full max-w-md">
                      <img 
                        src={vocabularyImage} 
                        alt={currentExercise.englishWord}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        onError={(e) => {
                          console.log('Image failed to load');
                          e.target.style.display = 'none';
                        }}
                        onLoad={() => console.log('Image loaded successfully')}
                      />
                    </div>
                  </div>
                )}
                
                {imageLoading && (
                  <div className="flex justify-center mb-4">
                    <div className="w-full max-w-md h-48 sm:h-56 md:h-64 bg-htb-sidebar animate-pulse flex items-center justify-center rounded-lg border border-gray-800">
                      <span className="text-htb-text-dim">Cargando imagen...</span>
                    </div>
                  </div>
                )}
                
                <span className="text-white font-medium text-base sm:text-lg">
                  {isReversed 
                    ? `Translate to English: ${Array.isArray(currentExercise.spanishWord) ? currentExercise.spanishWord[0] : currentExercise.spanishWord}`
                    : `Translate to Spanish: ${currentExercise.englishWord}`
                  }
                </span>
                <input
                  type="text"
                  ref={inputRef}
                  value={userAnswer || ''}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  className="border border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-htb-green w-full bg-htb-bg text-white"
                  placeholder="Tu respuesta..."
                  disabled={feedback !== null}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !feedback) {
                      checkAnswer();
                    }
                  }}
                />
              </div>
            ) : (
              // Renderizado para ejercicios normales
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3 text-sm sm:text-base">
                {currentExercise.sentenceParts?.map((part, partIndex) => {
                  if (part.type === 'text') {
                    return <span key={partIndex} className="text-white text-lg">{part.content}</span>;
                  } else if (part.type === 'input') {
                    const inputIndex = currentExercise.sentenceParts
                      .slice(0, partIndex)
                      .filter(p => p.type === 'input').length;
                    
                    return (
                      <input
                        key={partIndex}
                        type="text"
                        value={userAnswers[inputIndex] || ''}
                        onChange={(e) => handleAnswerChange(e.target.value, inputIndex)}
                        className="border border-gray-300 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-htb-green min-w-[120px] sm:min-w-[150px] bg-htb-bg text-white"
                        placeholder="..."
                        disabled={feedback !== null}
                      />
                    );
                  } else {
                    // Dropdown
                    const dropdownIndex = currentExercise.sentenceParts
                      .slice(0, partIndex)
                      .filter(p => p.type === 'dropdown').length;
                    
                    return (
                      <select
                        key={partIndex}
                        value={userAnswers[dropdownIndex] ?? '-1'}
                        onChange={(e) => handleAnswerChange(e.target.value, dropdownIndex, true)}
                        className="dropdown-custom text-base"
                        disabled={feedback !== null}
                      >
                        <option value="-1" disabled></option>
                        {currentExercise.options?.map((option, optIndex) => (
                          <option key={optIndex} value={optIndex}>
                            {option}
                          </option>
                        ))}
                      </select>
                    );
                  }
                })}
              </div>
            )}

            {/* Mostrar la respuesta después de 10 segundos solo en vocabulario */}
            {isVocabulary && showAnswer && !feedback && (
              <div className="mt-4 p-4 rounded-md bg-htb-sidebar border border-htb-green/30">
                <p className="font-semibold text-htb-green text-base mb-2">
                  💡 Respuesta:
                </p>
                <p className="text-white text-base">
                  {isReversed 
                    ? currentExercise.englishWord
                    : (Array.isArray(currentExercise.spanishWord) 
                        ? currentExercise.spanishWord.join(' / ') 
                        : currentExercise.spanishWord)
                  }
                </p>
                <p className="text-sm text-htb-text-dim mt-2 italic">
                  {currentExercise.explanation}
                </p>
              </div>
            )}

            {/* Mostrar contador regresivo solo en vocabulario cuando hay feedback incorrecto pero no se ha mostrado la respuesta */}
            {isVocabulary && feedback && !feedback.isCorrect && !showAnswer && (
              <div className="mt-4 p-3 rounded-md bg-htb-sidebar border border-htb-green/30 text-center">
                <p className="text-sm text-htb-text">
                  Next answer in <span className="font-bold text-htb-green text-lg">{countdown}</span> second{countdown !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            {/* Mostrar mensaje de espera cuando la respuesta es correcta en vocabulario */}
            {isVocabulary && feedback && feedback.isCorrect && (
              <div className="mt-4 p-3 rounded-md bg-htb-sidebar border border-htb-green/30 text-center">
                <p className="text-sm text-htb-green">
                  ⏳ Cargando siguiente pregunta en 5 segundos...
                </p>
              </div>
            )}

            {feedback && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  feedback.isCorrect
                    ? 'bg-htb-sidebar border border-htb-green'
                    : 'bg-htb-sidebar border border-red-500'
                }`}
              >
                <p
                  className={`font-semibold text-lg ${
                    feedback.isCorrect ? 'text-htb-green' : 'text-red-500'
                  }`}
                >
                  {feedback.isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                </p>
                {/* Mostrar el tiempo verbal solo en Mixed Tenses */}
                {tenseId === 'mixed-tenses' && feedback.tense && (
                  <p className="text-sm text-htb-green font-semibold mt-1 bg-htb-card inline-block px-3 py-1 rounded border border-htb-green/30">
                    📚 {feedback.tense}
                  </p>
                )}
                <p className="text-base text-htb-text mt-2">{feedback.message}</p>
                {!feedback.isCorrect && showAnswer && (
                  <>
                    <p className="text-base text-htb-text mt-3">
                      <strong>Respuesta correcta:</strong> {feedback.correctAnswer}
                    </p>
                    {feedback.userAnswerText && (
                      <p className="text-base text-htb-text mt-2">
                        <strong>Tu respuesta:</strong> {feedback.userAnswerText}
                      </p>
                    )}
                  </>
                )}
                {!isVocabulary && !feedback.isCorrect && (
                  <>
                    <p className="text-base text-htb-text mt-3">
                      <strong>Respuesta correcta:</strong> {feedback.correctAnswer}
                    </p>
                    {feedback.userAnswerText && (
                      <p className="text-base text-htb-text mt-2">
                        <strong>Tu respuesta:</strong> {feedback.userAnswerText}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}

            <div className="mt-6 flex gap-3">
              {!feedback ? (
                <button
                  onClick={checkAnswer}
                  className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Verificar respuesta
                </button>
              ) : (
                <>
                  {/* Mostrar botón de siguiente pregunta solo si no es vocabulario o si es vocabulario pero ya pasaron los timers */}
                  {(!isVocabulary || (isVocabulary && !feedback.isCorrect && showAnswer)) && (
                    <button
                      onClick={loadNewQuestion}
                      className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      Siguiente pregunta →
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseView;
