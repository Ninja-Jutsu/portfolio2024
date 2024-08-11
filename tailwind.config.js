/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      order: {
        1: '1',
        2: '2',
        3: '3',
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Replace 'Roboto' with your font family
        poppins: ['Newsreader', 'serif'],
        quote: ['Whisper', 'serif'],
      },
      gridTemplateColumns: {
        'custom-layout': '400px 1fr',
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
