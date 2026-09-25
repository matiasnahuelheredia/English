import { useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';

export const useSuccess = () => {
  // Un único AudioContext reutilizable: crear uno nuevo por cada acierto haría
  // que el navegador (Chrome permite ~6) deje de reproducir el sonido.
  const audioContextRef = useRef(null);
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      audioContextRef.current = new AudioCtx();
    }
    // Si quedó suspendido (política de autoplay), reanudarlo
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }
    return audioContextRef.current;
  }, []);
  // Función para lanzar confetti
  const launchConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  // Confetti más chico, para festejar cada respuesta correcta sin saturar
  const launchMiniConfetti = useCallback(() => {
    confetti({
      particleCount: 70,
      spread: 75,
      startVelocity: 45,
      origin: { y: 0.75 },
      zIndex: 9999,
    });
  }, []);

  // Función para reproducir sonido de victoria
  const playSuccessSound = useCallback(() => {
    // Reutilizamos el mismo contexto de audio para todos los festejos
    const audioContext = getAudioContext();
    if (!audioContext) return;

    // Melodía ascendente de victoria
    const notes = [
      { freq: 523.25, time: 0, duration: 0.1 },    // C5
      { freq: 659.25, time: 0.1, duration: 0.1 },  // E5
      { freq: 783.99, time: 0.2, duration: 0.15 }  // G5
    ];

    notes.forEach(({ freq, time, duration }) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = freq;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + time);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + time + duration);
      
      oscillator.start(audioContext.currentTime + time);
      oscillator.stop(audioContext.currentTime + time + duration);
    });
  }, [getAudioContext]);

  // Función que ejecuta todo: confetti + sonido
  const celebrate = useCallback(() => {
    launchConfetti();
    playSuccessSound();
  }, [launchConfetti, playSuccessSound]);

  // Festejo chico: confetti mini + sonido, para cada acierto
  const celebrateSmall = useCallback(() => {
    launchMiniConfetti();
    playSuccessSound();
  }, [launchMiniConfetti, playSuccessSound]);

  return {
    celebrate,
    celebrateSmall,
    launchConfetti,
    launchMiniConfetti,
    playSuccessSound,
  };
};
