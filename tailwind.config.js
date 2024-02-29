/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': {max:'660px'},     // Small screens and up (custom)
      'md': {max:'842px'},     // Medium screens and up (default)
      'lg': {max:'1024px'},    // Large screens and up (default)
      'xl': {max:'1280px'},    // Extra large screens and up (default)
      '2xl': {max:'1536px' },   // Extra extra large screens and up (default)
    },
    backgroundImage: {
      'gradient-120': 'linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)'
    },
    backgroundSize: {
      '220': '220%',
    },
    extend: {},
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [],
}