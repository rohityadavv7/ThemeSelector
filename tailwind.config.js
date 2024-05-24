/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

