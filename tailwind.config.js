/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  colors: {
    pink: '#0ff39e5'
  },
  plugins: [
    function ({ addComponents }) {
      // Use addComponents to define custom styles
      addComponents({
        '.grid-1-input': {
          padding: '1rem',
          width: '100%',
          height: '40px',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          color: 'black',
          border: '1px solid #000000ff',
        },
      });
      addComponents({
    '.grid-2-input': {
          padding: '1rem',
          width: '100%',
          height: '40px',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          color: 'black',
          border: '1px solid #000000ff',
        },
      });
    },
  ],
};
