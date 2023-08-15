import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
 
    extend: {},
  },
  plugins: [],
} satisfies Config;
