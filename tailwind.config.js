/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      order: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [],
}
