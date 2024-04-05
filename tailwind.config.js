/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': 'rgb(100, 5, 30)',
        'primary1': 'rgb(6, 0, 0)',
      }
    },
    fontFamily: {
      'hero-font' : 'Abril',
      'developer' : 'Tangerine',
    }
  },
  plugins: [],
}

