const tailwindcss = require('tailwindcss');

module.exports = {
  content :["*"],
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}