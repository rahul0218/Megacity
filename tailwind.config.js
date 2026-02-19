/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D32F2F', // Medical Red
          hover: '#B71C1C',
        },
        secondary: '#1A1A1A', // Dark Gray / Black
        accent: '#F8F9FA', // Light Gray Background
        muted: '#666666', // Muted Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Optional for headings if needed, or stick to Inter
      },
    },
  },
  plugins: [],
}
