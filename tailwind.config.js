/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A6572',
          dark: '#2a3942',
        },
        accent: {
          DEFAULT: '#1A8ACA',
          dark: '#1577b3',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
