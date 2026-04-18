import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://avlindfors.com',
  server: { port: 1337 },
  integrations: [
    react(),
    sitemap({ filter: (page) => !page.includes('/print') }),
  ],
  output: 'static',
  redirects: {
    '/resume': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
