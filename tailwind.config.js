module.exports = {
  theme: {
    fontSize: {
      'xxs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    //custom width classes for pug as pug cannot use '/'
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1o2': '50%',
      '1o3': '33.33333%',
      '2o3': '66.66667%',
      '1o4': '25%',
      '3o4': '75%',
      '1o5': '20%',
      '2o5': '40%',
      '3o5': '60%',
      '4o5': '80%',
      '1o6': '16.66667%',
      '5o6': '83.33333%',
      'full': '100%',
      'screen': '100vw'
    },
    extend: {
      colors: {
        appPrimary: '#5db465',
        appSecondary: '#405ba5'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'first', 'hover', 'focus'],
  },
  plugins: [],
  separator: '_', // custom prefix for pug as pug cannot use ':'
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      './src/**/**/*.vue'
    ],
    options: {
      whitelistPatterns: [
        /^code/,
        /^pre/,
        /^token/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^router-link(|-exact)-active$/
      ]
    }
  }
};
