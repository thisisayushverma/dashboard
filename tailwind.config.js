/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}', // App Router files
    './pages/**/*.{ts,tsx}', // Pages Router files
    './components/**/*.{ts,tsx}', // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
