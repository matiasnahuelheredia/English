// Toast simple y lindo para reemplazar los alert() del navegador (que quedan
// feos). Crea un cartelito flotante abajo, con el estilo oscuro de la app, y
// se va solo. No usa React para poder llamarse desde cualquier lado.

export const toast = (message, type = 'info') => {
  try {
    if (typeof document === 'undefined') return;
    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.textContent = message;

    const border =
      type === 'error' ? '#ef4444' : type === 'success' ? '#9fef00' : '#2f3b52';

    Object.assign(el.style, {
      position: 'fixed',
      left: '50%',
      bottom: '24px',
      transform: 'translateX(-50%) translateY(12px)',
      background: '#1a2332',
      color: '#e5e7eb',
      border: `1px solid ${border}`,
      padding: '12px 18px',
      borderRadius: '10px',
      fontSize: '14px',
      lineHeight: '1.4',
      maxWidth: '90vw',
      whiteSpace: 'pre-line',
      textAlign: 'center',
      zIndex: '100000',
      boxShadow: '0 8px 24px rgba(0,0,0,.45)',
      opacity: '0',
      transition: 'opacity .18s ease, transform .18s ease',
      pointerEvents: 'none',
    });

    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Cuánto queda: un poco más si el mensaje es largo
    const ms = Math.min(6000, 2200 + message.length * 25);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(12px)';
      setTimeout(() => el.remove(), 220);
    }, ms);
  } catch {
    // Si algo falla, al menos que no se rompa nada
  }
};
