/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:'#eff3ff',
        secondary:'#',    
      },
      backgroundImage:{
        "bg-card":"url('/src/assets/download.svg')"
    },
    
    boxShadow :{
      boxShadows : "3px 10px 20px 0px rgba(35, 100, 210, 0.3)"
    }
    },
  },
  plugins: [],
}

