import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      width: {
        "60": "60%",
        "40": "40%",
        "100": "100px",
        "200": "200px",
        "250": "250px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
      },
      height: {
        cus: "50px",
        "100": "100px",
        "200": "200px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
      },
      fontSize: {
        xxs: "0.65rem", // Menambahkan ukuran font lebih kecil dari text-xs
      },
      color: {
        biru: "rgb(17, 38, 61)",
      },
    },
  },
  plugins: [],
};
export default config;
