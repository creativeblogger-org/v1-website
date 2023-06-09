/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/_error.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coco: ["Coco"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
