/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(255,255,255,0.2)',
        'secondary': 'rgba(255,255,255,0.3)',
        'primary-reverse': 'rgba(0,0,0,0.2)',
      },
      textColor: {
        'primary': 'rgba(250 204 21)',
      },
      fontSize: {
        '2xs': '.5rem',
      },
    },
  },
  plugins: [],
}