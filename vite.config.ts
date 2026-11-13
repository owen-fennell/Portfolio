import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// `base` must match the GitHub Pages path: https://owen-fennell.github.io/Portfolio/
// If the site ever moves to a custom domain or a user site repo, change it to '/'.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
