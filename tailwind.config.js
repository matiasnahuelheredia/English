/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'htb': {
          'dark': '#0f1419',
          'darker': '#090c10',
          'green': '#9fef00',
          'green-dark': '#7ac143',
          'cyan': '#00d9ff',
          'purple': '#a435f0',
          'red': '#ff3b3f',
          'gray-dark': '#1a1f2e',
          'gray': '#2e3440',
          'gray-light': '#4c566a',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'Courier New', 'monospace'],
        'hack': ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 10px #9fef00, 0 0 20px #9fef00, 0 0 30px #9fef00',
        'neon-cyan': '0 0 10px #00d9ff, 0 0 20px #00d9ff',
        'neon-purple': '0 0 10px #a435f0, 0 0 20px #a435f0',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 2s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
