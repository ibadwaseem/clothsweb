import { Container } from "postcss";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      Container: {
        center:true,
        padding:"20px"
      
      },
      colors:{
        accent : "#ff8f9C",
        blackish :"#1b1b1b",
      },
    },
    plugins: [],
    content: []
  } satisfies Config }  
