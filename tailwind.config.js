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
        "hover:text-stock-pink",
        "hover:text-globe-blue",
        "hover:text-matopiba-green",
        "hover:text-flow-purple",
        "hover:text-cycle-aqua",
        "hover:text-voronoi-yellow",
      ],
    },
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
    extend: { stroke: ["hover", "focus"] },
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
