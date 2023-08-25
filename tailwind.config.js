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
        background: {
          1: 'linear-gradient(180deg, #E2EAF4 0%, rgba(226, 234, 244, 0.00) 100%)',
          2: 'linear-gradient(135deg, #0352A3 0%, #0084CB 100%, #0084CB 100%)',
          3: '#E2EAF4',
        },
        dialog: {
          1: '#ffffffcc',
        },
      },
      boxShadow: {
        primary: '0px 3px 48px 0px #0353a33d',
        secondary: '0px 4px 44px 0px #3267e314',
      },
    },
  },
  plugins: [],
};
