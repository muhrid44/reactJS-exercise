/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': {'max': '768px'},
      '1xl': {'min':'768px','max': '1440px'},
      'lg' : '2560px',
      'md': '1440px',
      'sm': '640px',




    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}