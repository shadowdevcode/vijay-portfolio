/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
    '!./node_modules/**',
    '!./api/**',
    '!./dist/**',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#18181b',   // Zinc 900
        secondary: '#71717a', // Zinc 500
        accent: '#2563eb',    // Blue 600
        background: '#fafafa', // Zinc 50
        card: '#ffffff',
      },
    },
  },
  plugins: [],
};
