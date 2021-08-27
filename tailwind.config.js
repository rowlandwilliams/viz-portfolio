const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ["LibreFranklin"],
        inter: ["Inter"],
        "tt-interfaces-regular": ["TTInterfaces-Regular"],
        "tt-interfaces-demi": ["TTInterfaces-Demi"],
        "tt-interfaces-bold": ["TTInterfaces-Bold"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      transitionProperty: {
        width: "width",
        padding: "padding",
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
    },
  },
  variants: {
    extend: { stroke: ["hover", "focus"] },
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
