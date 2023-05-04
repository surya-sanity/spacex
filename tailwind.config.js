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
      },
      keyframes: {
        bumpOutAndSlideInUp: {
          '0%': { transform: 'translateY(10rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0.1 },
          '100%': { opacity: 0.3 },
        },
        bumpOutAndSlideInRight: {
          '0%': { scale: '2', transform: 'translateX(30rem)' },
          '40%': { scale: '1.5' },
          '100%': { scale: '1', transform: 'translateX(0rem)' },
        },
        bumpOutAndSlideInLeft: {
          '0%': { scale: '2', transform: 'translateX(-30rem)' },
          '40%': { scale: '1.5' },
          '100%': { scale: '1', transform: 'translateX(0rem)' },
        },
      },
      animation: {
        "bump-out-in-up": 'bumpOutAndSlideInUp 1s linear normal',
        "bump-out-in-right": 'bumpOutAndSlideInRight 700ms linear normal',
        "bump-out-in-left": 'bumpOutAndSlideInLeft 700ms linear normal',
        "fade-in": 'fadeIn 700ms linear normal',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

