/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue' : '#1C1E53',
        'btn-orange' : '#FCD980',
        'dark-blue-font' : '#282938',
        'card-benefit' : '#F4F6FC'
      },
      backgroundImage: {
        'login-page' : "url('/public/img/bg-1.png')"
      }
      
    },
  },
  plugins: [],
};
