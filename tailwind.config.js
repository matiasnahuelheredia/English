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
          'bg': '#141d2b',
          'card': '#1e2d3d',
          'sidebar': '#111927',
          'green': '#9fef00',
          'green-hover': '#b8ff1a',
          'text': '#d1d5db',
          'text-dim': '#9ca3af',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
