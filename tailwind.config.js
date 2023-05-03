/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': 'black',
        'light': 'white'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

