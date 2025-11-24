/** @type {import('tailwindcss').Config} */



export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          barSlide: {
            '0%': {transform: 'translateX(-500px)', opacity: 1},
            '100%': {transform: 'translateX(0px)', opacity: 1},
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          textDrop: {
            '0%': {transform: 'translateY(-150px)', opacity: 0},
            '100%': {transform: 'translateY(0px)', opacity: 1},
          },
          textSlide: {
            '0%': {transform: 'translateX(-100px)', opacity: 0},
            '100%': {transform: 'translateX(0px)', opacity: 1},
          },
          fadeOut: {
            '0%': {opacity: '1'},
            '100%': {opacity: '0'}
          }
        },
        animation: {
          textSlide: 'textSlide 1s ease-in-out forwards',
          textDrop: 'textDrop 1s ease-in-out forwards',
          fadeIn: 'fadeIn 1s ease-in-out forwards',
          fadeOut: 'fadeOut 1s ease-in-out',
          barSlide: 'barSlide 0.4s linear forwards'
        },
        fontFamily: {
          arimo: ['Arimo', 'sans-serif']
        },
        colors: {
          'purp': '#98bff7',
          'mid': '#86e0d7',
          'scale': '#319cad',
          'main': '#ADC9BA',
        }
      },
    },
    plugins: [],
  }