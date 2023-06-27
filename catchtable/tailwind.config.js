/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js', './src/**/*.jsx', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#FE3F02',
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

