/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024',
      xl: '1280',
      '2xl': '1536'
    },
    extend: {
      spacing:{
        13: '3.25rem'
      },
      fontSize:{
        '10xl': ['9rem', {lineHeight: '1.2'}],
      }
    },
  },
  plugins: [],
}

