/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Geist", "sans-serif"],
      mono: ["VCR OSD MONO", "Geist mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
