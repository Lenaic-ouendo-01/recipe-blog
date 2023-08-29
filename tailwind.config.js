/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily:{
        'header': "Playfair Display",
        'body' : "Montserrat"
      },
      colors: {
        case: '#F2994A',
      },
      screens: {
        'dl': '832px',
      },
    },
  },
  plugins: [],
}

