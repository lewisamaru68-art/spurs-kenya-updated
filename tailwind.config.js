/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        spursBlue: '#132257',
        spursSilver: '#a5acaf',
        spursWhite: '#ffffff'
      }
    },
  },
  plugins: [],
};