/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#101c22',
        'slate-950': '#030712',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.15)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.15)',
      }
    },
  },
  plugins: [],
}