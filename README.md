# High-Performance Dental Clinic Website

**Live site**: [dreugeniavila.com](https://www.dreugeniavila.com)

Professional, bilingual website for the dental clinic of Dra. Eugenia Vila in El Palo, Málaga, Spain.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (static output)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with a custom brand theme
- **Icons**: [Astro Icon](https://www.astroicon.dev/) (Tabler set)
- **Fonts**: Inter and Fraunces, self-hosted via [Fontsource](https://fontsource.org/)
- **Hosting**: GitHub Pages via GitHub Actions, custom domain managed through Cloudflare

## Features

- **Bilingual**: Spanish by default (unprefixed routes) and English under `/en/`, via a custom i18n layer
- **Single source of truth for content**: every translatable string is typed in one file (`src/content/site.ts`), and every route lives in one map (`src/i18n.ts`)
- **Responsive**: mobile-first, built for all screen sizes
- **SEO**: per-page title/description, canonical and `hreflang` alternates, Open Graph tags, and a generated sitemap
- **Performance**: static site generation for fast loads
- **Image optimization**: handled by Astro's asset pipeline
- **Type safety**: TypeScript throughout, including the content model

## Project Structure

```
/
├── public/                   # served as-is: CNAME, _headers, robots.txt, og.jpg, documents/
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/           # brand, service and gallery (before/after) images
│   │   └── styles/
│   │       └── global.css    # Tailwind layers + reusable component classes
│   ├── components/
│   │   ├── screens/          # one composition per page (Home, About, Services, ...)
│   │   └── *.astro           # section and UI components (Header, Footer, Hero, ...)
│   ├── content/
│   │   └── site.ts           # all copy for both locales, typed by the SiteCopy interface
│   ├── data/
│   │   ├── reviews.ts        # live patient reviews consumed by the site
│   │   └── source/           # raw source material (cv.txt, reviews.csv, reviews.json)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # <head>, SEO, Header/Footer, view transitions
│   │   └── LegalLayout.astro # wrapper for the Markdown legal pages
│   ├── pages/
│   │   ├── *.astro, *.md      # Spanish routes (unprefixed)
│   │   └── en/               # English routes (/en/...)
│   ├── config.ts             # non-translated facts: SITE, CLINIC, SERVICES, waLink()
│   ├── i18n.ts               # Lang type, ROUTES map, nav keys, language helpers
│   └── env.d.ts
├── astro.config.ts
├── tailwind.config.js
└── package.json
```

### How it is organized

Three files hold the things that change most often:

- `src/config.ts`: facts that are the same in every language (domain, clinic contact details, the list of services and their icons).
- `src/i18n.ts`: the `ROUTES` map is the single source of truth for the bilingual URL pairs; the navigation, the language toggle and the `hreflang` tags all derive from it.
- `src/content/site.ts`: all translatable copy, keyed by locale. The shared `SiteCopy` type keeps Spanish and English structurally identical, so a missing translation is a compile error.

Each file under `src/pages/` is a thin route that renders a screen (`src/components/screens/`) with an explicit language; the screen composes the reusable section components and wraps them in `BaseLayout`.

## Development

```bash
npm install        # install dependencies
npm run dev        # start the local dev server
npm run build      # build the production site to dist/
npm run preview    # preview the production build locally
npm run check      # type-check (astro check) + ESLint + Prettier
npm run fix        # auto-fix ESLint and Prettier issues
```

## Deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The custom domain `www.dreugeniavila.com` is configured through `public/CNAME` and served through Cloudflare.

## Acknowledgements

Originally bootstrapped from the [AstroWind](https://github.com/arthelokyo/astrowind) template, since rebuilt around a custom bilingual content model.
