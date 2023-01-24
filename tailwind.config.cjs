/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-20": "#fff3c7f9",
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "gray-900": "#222222",
        "gray-1000": "#1B1513",
        "primary-100": "#FA7066",
        "primary-300": "#F5554A",
        "primary-500": "#e74345",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132"
      },
      backgroundImage: (theme) => ({
        "gradient-redyellow": "linear-gradient(90deg, rgba(231, 67, 69, 1) 0%, rgba(238, 191, 130, 1) 100%);",
        "gradient-redblack": "radial-gradient(circle at 49% 50%, rgba(231, 67, 69, 1) 16%, rgba(0, 0, 0, 1) 80%)",
        "gradient-redwhite": "radial-gradient(circle at 49% 50%, rgba(231, 67, 69, 1) 16%, rgba(255, 255, 255, 1) 80%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "footer-bg": "url('./assets/footer-bg.jpg')"
        
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        staminatext: "url('./assets/staminaText.png')",
        circles: "url('./assets/Circles.png')",
        AbstractWaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
      }
    },
    screens: {
      xxs: "350px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1250px",
      xl: "1400px",
      xxl: "1700px"
    },
    boxShadow: {
      'black-shadow': '1px 10px 15px -5px rgba(0, 0, 0, .7)',
    },
    backgroundImage: {
      'card-1': "url('./assets/HomePageGraphic.png')",
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}