
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
      backgroundImage: {
        'asphalt-texture': "url('https://images.unsplash.com/photo-1584464457692-73ec4d7d3324?q=80&w=2000&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
