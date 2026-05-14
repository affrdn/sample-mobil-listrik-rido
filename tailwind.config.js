/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.28)",
        soft: "0 24px 80px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "radial-cyan": "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.26), transparent 38%)"
      }
    }
  },
  plugins: []
};
