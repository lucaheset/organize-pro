/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        foreground: "#f1f1f1",
        muted: "#2c2c2c",
        "muted-foreground": "#a1a1aa",
        border: "#3f3f46",
      },
    },
  },
  plugins: [],
};
