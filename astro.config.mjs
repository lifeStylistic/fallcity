import { defineConfig } from 'astro/config';

// Update `site` to the real public domain once it is registered.
// It is used to build absolute URLs for SEO canonical tags and Open Graph images.
export default defineConfig({
  site: 'https://fallscityfourlane.org',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
