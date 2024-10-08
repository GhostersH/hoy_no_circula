/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        /* Media Queries Personalizadas */

        // tablet es el nombre de la pantalla y 768px es el tamaño minimo de la pantalla
        'tablet': {'min': '769px', 'max': '1023px'},
        // => @media (min-width: 769px and max-width: 1023px) { ... }

        // xs es el nombre de la pantalla y 880px es el tamaño maximo de la pantalla
        'xs': {'raw': '(max-width: 880px)'},
        // => @media (max-width: 880px) { ... }
        'xxs': {'raw': '(max-width: 400px)'}, // min-width
      },
      colors: {
        'custom-yellow': '#FFD45A',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
