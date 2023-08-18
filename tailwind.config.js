/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#E33439',
          black: '#373435',
        },
        'natural-black': '#212121',
        secondary: { green: '#147257', blue: '#065381' },
        'dark-white': '#F5F5F5',
        stroke: '#D9D9D9',
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
  