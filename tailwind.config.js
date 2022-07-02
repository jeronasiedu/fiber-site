/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4d13d1",
        accent_bg: "#fbf8f3",
      },
      fontFamily: {
        body: ["inter", "sans-serif", "system-ui"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
}
