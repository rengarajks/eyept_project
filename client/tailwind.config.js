/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#131313",
          "200": "#030014",
          "300": "rgba(255, 255, 255, 0.48)",
          "400": "rgba(255, 255, 255, 0.08)",
          "500": "rgba(255, 255, 255, 0)",
        },
        white: "#fff",
        whitesmoke: "#f3f3f3",
        yellowgreen: "#bfd72a",
        black: "#000",
        violet: "#e789e9",
        lightslategray: "#8c959f",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        rubik: "Rubik",
        kadwa: "Kadwa",
        lexend: "Lexend",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "70xl": "89px",
        "41xl": "60px",
      },
    },
    fontSize: {
      xs: "12px",
      "41xl": "60px",
      "61xl": "80px",
      mini: "15px",
      xl: "20px",
      "6xl": "25px",
      "23xl": "42px",
      lg: "18px",
      "101xl": "120px",
      "3xs": "10px",
      sm: "14px",
      "7xs": "6px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
