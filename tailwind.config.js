/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          700: '#282828',
          800: '#1a1a1a',
          900: '#121212'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}