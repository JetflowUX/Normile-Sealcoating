
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#2A1635',
          'purple-light': '#452754',
          orange: '#E8743C',
          'orange-hover': '#D6632B',
          green: '#4A7C59',
          silver: '#D1D5DB',
          asphalt: '#121212',
          'asphalt-light': '#1E1E1E',
        }
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
