/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "system-ui"],
        raleway: ["Raleway"],
      },
      colors: {
        bgdark: "#141619",
        textdark: "#fafafa",
      },
    },
  },
  plugins: [],
};
