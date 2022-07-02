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
    boxShadow: {
      sidebar: "rgba(0, 0, 0, 0.1) 1.95px 0px 2.2px",
    },
  },
  plugins: [],
}
