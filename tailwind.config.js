/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#FF00E6",
          blue: "#00FFFF",
          purple: "#8B5CF6",
        },
        dark: "#0a0a0f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(139, 92, 246, 0.6)",
      },
    },
  },
  plugins: [],
};
