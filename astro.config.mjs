// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Hosted on GitHub Pages as a PROJECT site: https://brettjo77.github.io/relax-and-restore-serene/
// `site` + `base` must match the repo path so assets/links resolve correctly.
// When moving to a custom domain, set site to that domain and base to '/'.
export default defineConfig({
  site: 'https://brettjo77.github.io',
  base: '/relax-and-restore-serene/',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Astro's built-in sharp service generates responsive WebP/AVIF at build time.
    responsiveStyles: true,
  },
});
