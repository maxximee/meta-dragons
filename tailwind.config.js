module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'app-ads.txt'
  ],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
};
