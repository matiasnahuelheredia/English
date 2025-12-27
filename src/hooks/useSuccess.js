import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useSuccess = () => {
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

  // Función para reproducir sonido de victoria
  const playSuccessSound = useCallback(() => {
    // Creamos un contexto de audio simple para generar un sonido de victoria
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
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
  }, []);

  // Función que ejecuta todo: confetti + sonido
  const celebrate = useCallback(() => {
    launchConfetti();
    playSuccessSound();
  }, [launchConfetti, playSuccessSound]);

  return { celebrate, launchConfetti, playSuccessSound };
};
