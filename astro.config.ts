import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://www.dreugeniavila.com',
  base: '/',
  output: 'static',
  trailingSlash: 'never',

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
