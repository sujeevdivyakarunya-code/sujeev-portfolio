/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07070a',
        surface: {
          50: '#1f1f2c',
          100: '#161622',
          200: '#101018',
          300: '#0b0b10',
          400: '#07070a',
        },
        brand: {
          purple: '#8b5cf6',
          violet: '#7c3aed',
          cyan: '#06b6d4',
          emerald: '#10b981',
          coral: '#f43f5e',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 50px -10px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
