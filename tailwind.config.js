/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {

        'muli': ['Muli', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],

      }

    },
  },
  plugins: [],
}