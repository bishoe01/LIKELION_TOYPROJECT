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
        'guidebook': "url('/public/images/guidebook.png')",
        'food1': "url('/public/images/foodcard1.jpg')",
        'food2': "url('/public/images/foodcard2.jpg')",
        'login': "url('/public/images/loginImage.jpg')",
        'planb': "url('/public/images/planb0.png')",
        'planb1': "url('/public/images/planb1.png')",
      },
    },
  },
  plugins: [
  ],
}

