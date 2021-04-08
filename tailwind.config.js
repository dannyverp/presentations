// tailwind.config.js
const _ = require('lodash')
module.exports = {
  important: true,
  theme: {
    rotate: {
      '1/4': '90deg',
      '1/2': '180deg',
      '3/4': '270deg',
    },
    fontFamily: {
      'serif': ['Oswald', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
    }
  },
  plugins: [
    function({ addUtilities, config, e }) {
      const rotateUtilities = _.map(config('theme.rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities)
    }
  ]
}