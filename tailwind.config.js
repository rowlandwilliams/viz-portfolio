const colors = require("tailwindcss/colors");

const customColors = [
  "pink-500",
  "blue-500",
  "green-300",
  "indigo-500",
  "purple-300",
  "blue-300",
  "red-200",
  "yellow-300",
];

const safeColors = customColors
  .map((col) => [
    "bg-" + col,
    "text-" + col,
    "hover:border-" + col,
    "hover:text-" + col,
  ])
  .flat();

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: safeColors,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ["LibreFranklin"],
        inter: ["Inter"],
        "tt-interfaces-regular": ["TTInterfaces-Regular"],
        "tt-interfaces-italic": ["TTInterfaces-Italic"],
        "tt-interfaces-demi": ["TTInterfaces-Demi"],
        "tt-interfaces-bold": ["TTInterfaces-Bold"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
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
    extend: { stroke: ["hover", "focus"], width: ["hover"] },
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
