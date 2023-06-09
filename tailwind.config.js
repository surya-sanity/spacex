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
        'light': 'white',
        'darkOverlay': '#1E1E1E',
        'space-brown': '#E6D9A2'
      },
      keyframes: {
        bumpOutAndSlideInUp: {
          '0%': { transform: 'translateY(10rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0.1 },
          '100%': { opacity: 1 },
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
        tilt: {
          '0%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        "bump-out-in-up": 'bumpOutAndSlideInUp 1s linear normal',
        "bump-out-in-right": 'bumpOutAndSlideInRight 700ms linear normal',
        "bump-out-in-left": 'bumpOutAndSlideInLeft 700ms linear normal',
        "fade-in": 'fadeIn 700ms linear normal',
        "tilt": 'tilt 700ms linear normal',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

