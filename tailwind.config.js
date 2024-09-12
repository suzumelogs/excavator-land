/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA21A',
        secondary: '#FFC900',
        accent: '#FD6B65'
      }
    }
  },
  plugins: []
}
