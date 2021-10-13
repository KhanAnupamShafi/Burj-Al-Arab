module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Recursive"],
        body: ['"Open Sans"'],
      },
      textColor: {
        primary: "#243b55",
        secondary: "#d2b746",
        danger: "#e3342f",
        yellow: "#FAE500",
      },
      backgroundColor: {
        btn: "#7c6f55",
        primary: "#313a4d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
