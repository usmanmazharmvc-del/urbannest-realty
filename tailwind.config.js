/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B3954',
        gold: '#D4AF37',
        blue: '#1E5F74',
        lightGray: '#F8F9FA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(0,0,0,0.1)',
        card: '0 20px 35px -10px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}