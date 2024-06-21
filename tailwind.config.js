/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Custom colors
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#FBBF24",
        muted: "#6B7280",
      },
      fontFamily: {
        // Custom fonts
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      animation: {
        // Custom animations
        spin: "spin 2s linear infinite",
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0, transform: "translateY(-20px)" },
          "50%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
