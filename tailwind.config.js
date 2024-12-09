/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      customOrange: '#f9efef'
    },
  },
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}