/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
//import themes from 'daisyui/src/theming/themes'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Oswald', 'Open Sans'],
      'serif':['Raleway']
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#aaa57b',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
}
