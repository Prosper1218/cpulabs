/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            black: {
               default: "#0c0c0c",
               obsidian: "#0B1218",
            },
         },
      },
   },
   plugins: [],
};
