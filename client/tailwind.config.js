/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'r-3xl': '2px 4px 2px 0px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
