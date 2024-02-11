/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorGreen: 'hsl(75, 94%, 57%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        colorGrey: 'hsl(0, 0%, 20%)',
        colorDarkGrey: 'hsl(0, 0%, 12%)',
        colorOffBlack: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        fontInter: ['Inter', 'sans-serif'],
      },
      screens: {
        mmobile: '325px',
      },
    },
  },
  plugins: [],
};
