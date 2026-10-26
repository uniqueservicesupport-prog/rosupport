import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always',
  },
  // devToolbar: false,  <-- Is line ko delete kar do
});
