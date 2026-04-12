/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'timber-wolf': '#DBD8D0',
        'sage-green': '#7F8F6E',
        'tobacco-brown': '#6C593D',
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
