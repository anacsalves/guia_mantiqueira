import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          light: "#E2F5EE",
          regular: "#649181",
          dark: "#0D2223",
        },
        gray: {
          dark: "#4A4459",
          light: "#848484"
        }
      },
      fontFamily: {
        futuraLight: ['FuturaLight', 'sans-serif'],
        futuraMedium: ['FuturaMedium', 'sans-serif'],
        futuraBold: ['FuturaBold', 'sans-serif'],
        carolloMedium: ['CarolloMedium'],
      },
    },
  },
  plugins: [],
} satisfies Config;
