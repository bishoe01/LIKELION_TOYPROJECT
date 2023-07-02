/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js', './src/**/*.jsx', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#FE3F02',
        searchNotice: '#737373',
        searchRealNotice: '#3c3c3c',
        timeBorder: '#5a5a5a',
        placeCard: '#28272B',
      },
      backgroundImage: {
        'choco': "url('/public/images/choco.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

