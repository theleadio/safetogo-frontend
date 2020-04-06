/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend:{
      colors:{
        white:{
          '100': '#f2f2f2',
          '200': '#e5e5e5',
          '300': '#f2f2f2',
          '400': '#ffffff',
          '500': '#e5e5e5',
          '600': '#cccccc'
        },
      }
    },
    zIndex:{
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '500': 500,
      '600': 600,
      '700': 700
    },
    boxShadow:{
      'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
      'card': '0 20px 25px -5px rgba(0, 0, 0, .1), 0 1px 5px 2px rgba(0, 25, 25, 0.2)',
      'round-2xl': '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .3)'
    }
  },
  variants: {},
  plugins: []
}
