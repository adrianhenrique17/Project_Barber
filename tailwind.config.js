/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(255,255,255)", // ou a cor desejada
        foreground: "rgb(34,34,34)", // ou a cor desejada
      },
    },
  },
  plugins: [],
}
