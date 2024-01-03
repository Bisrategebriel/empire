module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],
  screen: {

  },
  theme: {
    extend: {
      colors: {
        'emp-dark-orange': "#f94b1b",
        'emp-light-orange': '#f9b21b',
        'emp-orange': '#f7931e',
        'emp-light': '#fff4de',
        'emp-dark': '#264653'
      },
      
    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
}
