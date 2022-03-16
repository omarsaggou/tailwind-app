module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        '1/2': '1 1 50%',
        '1/4': '1 1 25%',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
