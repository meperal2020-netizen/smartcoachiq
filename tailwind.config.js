/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // App Router + src/
  ],
  theme: {
    extend: {
      colors: {
        brand:   { DEFAULT: "#2563eb", dark: "#1e3a8a", light: "#93c5fd" }, // Azul tecnológico
        sport:   { DEFAULT: "#16A34A", dark: "#166534", light: "#86efac" }, // Verde deportivo
        passion: { DEFAULT: "#dc2626", dark: "#991b1b", light: "#fca5a5" }, // Rojo competitivo
        premium: { DEFAULT: "#f59e0b", dark: "#b45309", light: "#fcd34d" }, // Oro premium
        neutral: { dark: "#111827", mid: "#666666", light: "#f5f5f5" },     // Grises
      },
      fontFamily: {
        // por si añades Inter más adelante
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      }
    },
  },
  plugins: [],
};
