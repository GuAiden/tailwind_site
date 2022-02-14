module.exports = {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'MontSerrat': ['Montserrat']
    }
  },
  plugins: [],
}
