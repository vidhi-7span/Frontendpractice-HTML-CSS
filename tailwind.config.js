/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [""],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {

    // 'xsm': {'min': '300px', 'max': '539px'},

    'sm': {'min': '640px', 'max': '767px'},
    // => @media (min-width: 640px and max-width: 767px) { ... }

    'md': {'min': '768px', 'max': '1023px'},
    // => @media (min-width: 768px and max-width: 1023px) { ... }

    'lg': {'min': '1024px', 'max': '1279px'},
    // => @media (min-width: 1024px and max-width: 1279px) { ... }

    'xl': {'min': '1280px', 'max': '1535px'},
    // => @media (min-width: 1280px and max-width: 1535px) { ... }

    '2xl': {'min': '1536px'},
    // => @media (min-width: 1536px) { ... }
  },
}