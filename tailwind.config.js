const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        "bg-stock-pink",
        "bg-globe-blue",
        "bg-matopiba-green",
        "bg-flow-purple",
        "bg-cycle-aqua",
        "bg-voronoi-yellow",
        "text-stock-pink",
        "text-globe-blue",
        "text-matopiba-green",
        "text-flow-purple",
        "text-cycle-aqua",
        "text-voronoi-yellow",
        "hover:border-stock-pink",
        "hover:border-globe-blue",
        "hover:border-matopiba-green",
        "hover:border-flow-purple",
        "hover:border-cycle-aqua",
        "hover:border-voronoi-yellow",
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
