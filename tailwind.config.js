module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
    },
    extend: {
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(0.5)",
          },
          "33%": {
            transform: "translate(10px, -20px) scale(0.7)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
