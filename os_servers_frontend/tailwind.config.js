/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:'#eff3ff'
      },
      backgroundImage:{
        "bg-card":"url('/src/assets/download.svg')"
    }
    },
  },
  plugins: [],
}

