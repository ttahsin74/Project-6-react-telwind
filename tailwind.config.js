/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      backgroundImage: {
        "nav-bg":'radial-gradient(9917.17% 140.83% at 0.83% 0%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.15) 100%)',
      },
      fontFamily: {
        'raleway': 'Raleway',
        'oxanium': 'Oxanium',
      },
      boxShadow: {
        'navShadow': '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}