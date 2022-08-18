/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "44px",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        subtle: "var(--subtle)",
        tint: "var(--tint)",
        background: "var(--background)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
}