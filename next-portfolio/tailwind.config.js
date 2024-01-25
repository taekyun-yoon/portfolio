/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/*.{js,ts,jsx,tsx,mdx}',
    

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}