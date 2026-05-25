/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Slate 900
          dark: '#020617',
        },
        secondary: {
          DEFAULT: '#334155', // Slate 700
        },
        accent: {
          DEFAULT: '#2E5BFF', // Blue 600
          dark: '#1D4ED8', // Blue 700
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
