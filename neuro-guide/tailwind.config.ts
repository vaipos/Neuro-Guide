import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '100': '200%',
    },
    extend: {
      colors: {
        custom: '#F3ECDF',
        progBar: '#79ADBB',
        buttonColor: '#eb5e28',
        quizCardColor: '#72BCC2',
        startHere: '#DAD0C3',
        neutral: '#DACCB1',
        midorange: '#e2b1a8',
        dustypurp: '#afb6cd',
        dustypink: '#ffbabc',
        teal: '#4b93ab',
        dullteal: '#aac4cb',
        greyish: '#90908f'



      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"),  require('tailwindcss-animated')],
}
export default config
