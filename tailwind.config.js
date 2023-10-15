/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/images/home-background.png')",
        login: "url('../public/images/login-background.jpg')",
      },
    },
  },
  plugins: [],
};
