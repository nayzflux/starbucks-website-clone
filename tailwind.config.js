/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magenta: '#eb81a5',
        gray: '#1e3932',
        'blue-purple': '#8f8bf4',
        'green': '#cbe678',
        'green-forest': '#006241',
        'light-green-forest': '#009e74',
        'green-light': '#d4e9e2',
        'very-soft-green': '#e1fccd',
        'soft-gray': '#00000094'
      }
    },
  },
  plugins: [],
}