const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        "bg-stock-pink",
        "bg-globe-blue",
        "bg-matopiba-green",
        "text-stock-pink",
        "text-globe-blue",
        "text-matopiba-green",
        "border-stock-pink",
        "border-globe-blue",
        "border-matopiba-green",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ["LibreFranklin"],
        inter: ["Inter"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      "stock-pink": "#ff0082",
      "globe-blue": "#4d87d1",
      "matopiba-green": "#7ead8e",
      "flow-purple": "#6348cd",
      "cycle-aqua": "#90f0e0",
      "voronoi-yellow": "#f8e7b1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
