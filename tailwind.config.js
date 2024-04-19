/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'font-inter': [ 'Inter', 'sans-serif'],
      roboto: "'Roboto', sans-serif",
      lato: "'Lato', sans-serif",
      poppins: "'Poppins', sans-serif",
      
    },
  

  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },
}

