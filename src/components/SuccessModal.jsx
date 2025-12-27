import React, { useEffect } from 'react';

const SuccessModal = ({ isOpen, onClose, message = "Excellent! Correct Answer!" }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div 
        className="relative bg-htb-card border-2 border-htb-green rounded-xl shadow-2xl px-10 py-8 max-w-md mx-4 pointer-events-auto animate-bounce-in overflow-hidden"
        onClick={onClose}
      >
        {/* Efecto de brillo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-htb-green/10 to-transparent animate-shimmer"></div>
        
        {/* Contenido */}
        <div className="relative text-center">
          <div className="text-7xl mb-4 animate-pulse filter drop-shadow-lg">🎉</div>
          <h2 className="text-3xl font-bold mb-2 text-htb-green animate-pulse-slow">
            {message}
          </h2>
          <p className="text-htb-text text-lg font-medium">Keep it up! 🚀</p>
          
          {/* Decoración */}
          <div className="mt-4 flex justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-htb-green rounded-full animate-bounce"></span>
            <span className="inline-block w-2 h-2 bg-htb-green rounded-full animate-bounce delay-100"></span>
            <span className="inline-block w-2 h-2 bg-htb-green rounded-full animate-bounce delay-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
