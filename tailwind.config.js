/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#E33439',
          black: '#122135',
        },
        gold: '#FFD63E',
        secondary: { green: '#147257', blue: '#065381', 1: '#F09444' },
        'dark-white': '#F5F5F5',
        foreground: {
          1: '#122135',
          2: 'rgba(18, 33, 53, 0.6)',
        },
        dialog: {
          1: 'rgba(255, 255, 255, 0.80)',
        },
        'gold': '#FFD63E',
        secondary: { green: '#147257', blue: '#065381' },
        'dark-white': '#F5F5F5',
      },
    },
    boxShadow: {
      primary: '',
      secondary: '0px 4px 44px 0px rgba(50, 103, 227, 0.08)',
      modal: '0px 8px 11px -4px #0000000D',
      calendar: '0px 4px 14px 0px #0000001A',
    },
  },
  plugins: [],
};
