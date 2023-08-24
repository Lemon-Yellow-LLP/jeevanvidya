/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#0084CB29',
        },
        secondary: {
          1: '#0084CB75',
        },
        accent: {
          orange: '#F09444',
          gold: '#FFD63E',
          white: '#F5F5F5',
        },
        foreground: {
          1: '#122135',
          2: '#122135CC',
        },
        dialog: {
          1: '#ffffffcc',
        },
      },
      boxShadow: {
        primary: '',
        secondary: '0px 4px 44px 0px #3267e314',
      },
    },
  },
  plugins: [],
};
