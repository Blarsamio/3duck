/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshiBlack: ['Satoshi-Black', 'sans-serif'],
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
        satoshiMedium: ['Satoshi-Medium', 'sans-serif']
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#E9ECEF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        cherry: '#ffc2cb',
        block: '#212529',
        salt: '#F8F9FA',
        raspberry: "#d32254",
        ablue: "#55b1ff",
        indigo: "#0c4c82",
        peach: "#F2C39F",
        cocoa: "#E07109",
        lavender: "#C9D3E9",
        mustard: "#f5c000",
        vanilla: "#fff2c2"
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
