import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand palette: blue, matched to the EV logo mark.
        brand: {
          blue: '#0F6BA8', // primary: buttons, links, eyebrows, active nav
          deep: '#0B3A5C', // deep navy: headings, hovers, filled CTAs
          sky: '#2E8BC4', // bright accent: icons, stars, dots, tints
          light: '#E5F0F8', // pale tint: chips, hover surfaces, rings
        },
        cream: '#FBF8F3',
        ink: '#1E2A28',
        sage: '#5B6B69',
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
