import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: { port: 1337 },
  integrations: [react()],
  output: 'static',
  redirects: {
    '/resume': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
