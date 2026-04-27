/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#778349",
        cinnabar: "#FE4A3B",
        darkblue: "#292B36",
        ivory: "#EBECEE",
      },
    },
  },
  plugins: [],
}