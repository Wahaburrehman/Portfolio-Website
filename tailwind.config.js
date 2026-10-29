/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#02020f", brand: "#0000ff", mint: "#4fc3b0" },
      fontFamily: {
        display: ['"Instrument Serif"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ["Inter", "sans-serif"],
        urdu: ['"Noto Nastaliq Urdu"', "serif"],
      },
    },
  },
  plugins: [],
};
