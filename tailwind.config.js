/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        dark: '#0A0A0A',
        cream: '#F5F0E8',
      },
    },
  },
  plugins: [],
}