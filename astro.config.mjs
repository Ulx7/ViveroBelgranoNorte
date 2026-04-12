import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from "@sanity/astro";
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', 
  adapter: vercel(), 
  integrations: [
    react(),
    sanity({
      projectId: "okaztm0k",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});