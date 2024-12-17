import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   color1: "#257180",
    //   color2: "#F2E5BF",
    // },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#257180",
        color2: "#F2E5BF",
        color3: {
          "1": "#ffc82c",
          "2": "#7e5bef",
        },
      },
      spacing: {
        "5x": "5px",
        "15x": "15px",
        "25x": "25px",
        "10%": "10%",
        "30%": "30%",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
