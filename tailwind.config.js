import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New brand palette (the redesign).
        brand: {
          teal: '#0F6E6E',
          deep: '#0B4F4A',
          green: '#5E8C61',
          light: '#E8F1EE',
        },
        cream: '#FBF8F3',
        ink: '#1E2A28',
        sage: '#5B6B69',
        // Legacy AstroWind tokens, kept only until the old components are purged.
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        heading: ['Fraunces Variable', ...defaultTheme.fontFamily.serif],
        serif: ['Fraunces Variable', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        content: '70rem',
      },
    },
  },
  plugins: [typographyPlugin],
};
