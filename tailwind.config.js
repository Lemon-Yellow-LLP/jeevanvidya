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
      },
      backgroundImage: {
        'quotes-bg': "url('./assets/quotes-bg.png')",
      },
      boxShadow: {
        primary: '',
        secondary: '0px 4px 44px 0px rgba(50, 103, 227, 0.08)',
        modal: '0px 8px 11px -4px #0000000D',
        calendar: '0px 4px 14px 0px #0000001A',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
