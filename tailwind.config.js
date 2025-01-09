/** @type {import('tailwindcss').Config} */
export default {
  content: [
   " ./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff9800",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFALUT: "1rem",
          sm: "3rem"
        }
      },
      animation: {
        "spin-slow": "spin 40s linear infinite"
      }
    },
  },
  plugins: [],
};