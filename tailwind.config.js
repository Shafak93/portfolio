module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "night",
      "cupcake",
    ],
    mytheme: {
      primary: "#0FCFEC",
      secondary: "#19D3AE",
      accent: "#3A4256",
      neutral: "#3d4451",
      "base-100": "#ffffff",
    },
  },
  plugins: [require("daisyui")],
}

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: [
//       "dark",
//       "cupcake",
//     ],
//       mytheme: {
//         primary: "#a991f7",
//         secondary: "#f6d860",
//         accent: "#37cdbe",
//         neutral: "#3d4451",
//         "base-100": "#ffffff",
//       },
//     },
//   plugins: [require("daisyui")],
// }
