module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["IBM Plex Sans"],
      },
      flex: {
        "1/2": "1 1 50%",
        "1/4": "1 1 25%",
        "1/3": "1 1 33%",
        "2/3": "1 1 66%",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "950px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#040D21",
        secondary: "#02DFBF",
        third: "#431F49",
        ogray: "#F6F9FE",
        mybg: "#052862",
        from_cl: "#040d21",
        to_cl: "#052861",
        stat: "#F8F9FA",
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
