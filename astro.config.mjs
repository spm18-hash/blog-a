// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog-a-brown.vercel.app",
  output: "static",

  vite: {
    plugins: [tailwindcss({ optimize: true })],
  },

  prefetch: { prefetchAll: true },

  experimental: {
    svgo: true,
  },

  integrations: [sitemap()],
});