/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // home
        vue: '#42b883',
        react: '#1082a7',
        node: '#fedb3f',

        // auth
        // make here colors

        // script
        "script-bg": '#ffffff',
        "script-bg-2": '#f9f9f9',
        "script-selected": '#e6e6e6'
      },
    },
  },
  darkMode: "class",
};
