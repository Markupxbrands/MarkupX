/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        'brigenden-expanded': "'Brigenden Expanded', sans-serif",
      },
    },
  },
  plugins: [],
}

