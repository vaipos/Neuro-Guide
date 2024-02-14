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
        buttonColor: '#eb5e28',
        quizCardColor: '#72BCC2',
        startHere: '#DAD0C3',
        neutral: '#DACCB1',
        lightYellow: '#FFE4AD',
        lightRed: '#F5977A',
        lightBeige: '#FDF7EC',
        sage: '#929c90',
        darkblue: '#37406d',
        greenBlue: ' #7c8c88',
        dark:'#02066F',
        blue2: ':#242e39',
        green2: '#3d4d53',
        brown: '#a1b5d8',
        orange1: '#c2d8b9',
        maroon: '#9c5143'

      },
    },
  },
  plugins: [],
}
export default config
