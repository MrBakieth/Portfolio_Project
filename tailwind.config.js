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
        primary: {
          400: '#60A5FA',
          500: '#3B82F6',
        },
        dark: {
          800: '#1E293B',
          900: '#0F172A',
        },
        light: {
          100: '#F1F5F9',
          200: '#E2E8F0',
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

