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
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Replace 'Roboto' with your font family
        poppins: ['Newsreader', 'serif'],
        quote: ['Whisper', 'serif'],
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
