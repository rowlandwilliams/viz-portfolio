const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        "bg-stock_pink",
        "bg-globe_blue",
        "bg-matopiba_green",
        "text-stock_pink",
        "text-globe_blue",
        "text-matopiba_green",
        "border-stock_pink",
        "border-globe_blue",
        "border-matopiba_green",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      stock_pink: "#ff0082",
      globe_blue: "#4d87d1",
      matopiba_green: "#7ead8e",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
