/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 10px 4px 0px rgba(0, 0, 0, 0.25);',
        '4xl': ' 5.69261px 5.69261px 3.25292px 0px rgba(0, 0, 0, 0.25);',
      }
    },
  },
  plugins: [],
}

 