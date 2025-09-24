/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF", // Deep Blue
          dark: "#1E3A8A",
          light: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#3B82F6", // Bright Blue
        },
        accent: {
          DEFAULT: "#10B981", // Success Green
        },
        charcoal: "#1F2937", // Neutral Dark
        surface: "#F9FAFB", // Neutral Light
        ink: "#374151", // Text Dark Gray
      },
    },
  },
  plugins: [],
};
