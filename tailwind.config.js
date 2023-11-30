/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green1" : "#39DB4A",
        "green" : "#0099CC",
        "red": "#ff6868",
        "secondary": "#555",
        "primary": "#0099CC",
        "primary2": "#fcfcfc",
      }

      
    
    },
  },
  plugins: [require("daisyui")],
}

