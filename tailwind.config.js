module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      colors: {
        apple: "#62aa4a",
        mariner: "#2877da",
        hopbush: "#c867b1"
      }
    },
    scale: {
      "50": "0.5",
      "100": "1"
    }
  },
  plugins: [
    // Variables
    require("tailwind-css-variables")(),

    // Transforms
    require("tailwindcss-transforms")(),

    // CSS Grid
    require("./styles/plugins/css-grid")({
      grids: [3, 4, 5, 6, 8, 12],
      gaps: {
        0: "0",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        "2-x": "0.5rem",
        "2-y": "0.5rem",
        "4-x": "1rem",
        "4-y": "1rem",
        "6-x": "1.5rem",
        "6-y": "1.5rem",
        "8-x": "2rem",
        "8-y": "2rem"
      },
      variants: ["responsive"]
    })
  ]
};
