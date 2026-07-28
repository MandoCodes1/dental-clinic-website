import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://www.draeugeniavila.com',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  // Pair 'file' with trailingSlash 'never' so routes build as `en.html` (served at
  // /en with no redirect), instead of `en/index.html` (which the host 301s to /en/).
  build: { format: 'file' },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), icon()],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
