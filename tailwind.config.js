/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8e8',
          100: '#f9edc4',
          200: '#f3d98a',
          300: '#e8c050',
          400: '#d4a843',
          500: '#c49a35',
          600: '#a67c2a',
          700: '#855f22',
          800: '#6e4e20',
          900: '#5c411f',
        },
        navy: {
          50: '#eef2ff',
          100: '#d9e2fc',
          200: '#b3c5f9',
          300: '#7da0f4',
          400: '#4a7aed',
          500: '#2558d9',
          600: '#1a3fb8',
          700: '#163296',
          800: '#142b7a',
          900: '#0f1f55',
          950: '#0a1333',
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(196, 154, 53, 0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(196, 154, 53, 0.3), 0 0 80px rgba(196, 154, 53, 0.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
