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
    }
  },
  variants: {},
  plugins: []
}
