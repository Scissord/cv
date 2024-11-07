/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vue: '#42b883',
        react: '#1082a7',
        node: '#fedb3f',
      }
    },
  },
  plugins: [
    daisyui,
  ],
  darkMode: "class",
};
