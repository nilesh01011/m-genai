/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {

      'xsxs': '361px',
      // => @media (min-width: 360px) { ... }

      "small-device": "400px",
      // => @media (min-width:400px) {...}

      'xss': '480px',
      // => @media (min-width: 480px) { ... }

      'xs': '576px',
      // => @media (min-width: 576px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mmd': '865px',
      // => @media (min-width: 865px) { ... }

      'slg': '992px',
      // => @media (min-width: 880px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1x1': '1350px',
      // => @media (min-width: 1350px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

