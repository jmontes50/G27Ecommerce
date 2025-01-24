import forms from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // vas a buscar compilar todo lo que encuentres dentro de la carpeta src cualquier archivo que tenga la extensión js jsx ts tsx
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
  ],
}

