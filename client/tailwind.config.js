/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dankBlue-900': '#030136',
        'dankBlue-800': '#1c1a4a',
        'dankBlue-700' : '#35345e',
        'dankBlue-600' : '#4f4d72'


      },
      boxShadow: {
        'r-3xl': '2px 4px 2px 0px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
