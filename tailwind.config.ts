import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "main-red": "#FFA0A0",
      "sub-yellow": "#FFFBE7",
      "main-pink": "#E6A2B7",
      "pink-800": "#EBB5C5",
      "pink-600": "#F0C7D4",
      "pink-200": "#FAECF1",
      "pink-100": "#FDF6F8",
      "sub-purple": "#A496C5",
      "purple-800": "#B6ABD1",
      "purple-600": "#C8C0DC",
      "purple-100": "#F6F5FA",
      "purple-200": "#EDEAF3",
      "gray-100": "#F5F5F5",
      "gray-200": "#EFEFEF",
      "gray-300": "#E5E5E5",
      "gray-500": "#D9D9D9",
      "gray-600": "#AAAAAA",
      "gray-700": "#777777",
      "gray-900": "#444444",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
