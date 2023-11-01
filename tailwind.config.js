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
    screens: {
      'ss': '280px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

 