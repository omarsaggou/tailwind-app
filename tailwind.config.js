module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#040D21",
        secondary: "#02DFBF",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.3)",
          },
          "50%": {
            transform: "translate(30px, -50px) scale(1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.7)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      height: (theme) => ({
        500: "500px",
        100: "100px",
      }),
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
