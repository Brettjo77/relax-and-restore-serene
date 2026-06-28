// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Hosted on GitHub Pages with the custom domain www.lisasrelaxrestoremassage.co.uk
// (served at the root, so base is '/'). The public/CNAME file claims the domain.
export default defineConfig({
  site: 'https://www.lisasrelaxrestoremassage.co.uk',
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Astro's built-in sharp service generates responsive WebP/AVIF at build time.
    responsiveStyles: true,
  },
});
