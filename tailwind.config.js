/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008fff', // Replace this hex code with your desired primary color
      },
      fontFamily: {
        primary: ['Playfair Display', 'sans-serif'],
        secondary: ['Barlow SemiCondensed', 'sans-serif'],
        tertiary:['Galada', 'sans-serif']
      },
    },
  },
  plugins: [],
}
