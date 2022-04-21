const colors = require('tailwindcss/colors');
const color = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: color.trueGray,
        untamed: {
          blue: '#52c5f0',
          glow: '#59c7d9',
        },
      },
      fontFamily: {
        geizer: ['Geizer', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  plugins: [],
};
