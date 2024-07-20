import { SourceCode } from 'eslint';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#C92071',
      secondary: '#B5B6F2',
      tertiary: '##991956',
      error: '#EE4266',
      Success:'#52CA76',
      warning: '#F6AA1C',
      primaryBg: 'linear-gradient(180deg, #C92071 0%, #EDABCA 100%)',
      secondaryBg: 'linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%)',

    },
    extend: {},
  },
  plugins: [],
}

