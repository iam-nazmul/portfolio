import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://iam-nazmul.github.io/portfolio/ — base must match the repo name.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
