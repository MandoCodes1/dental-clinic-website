# Fully Functional Dental Clinic Website

**Live Site**: [https://www.dreugeniavila.com/](https://www.dreugeniavila.com/en/)

Built a professional website as a side project for a dental clinic in Málaga, Spain, using Astro, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Astro 5.0 (static site generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Astro Icon
- **Deployment**: Production deployment with custom domain

## Features

- **Internationalization**: Full bilingual support (Spanish/English) with dynamic language switching
- **Responsive Design**: Mobile-first, optimized for all devices
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Performance**: Static site generation for fast load times
- **Component Architecture**: Modular, reusable component system
- **Type Safety**: Full TypeScript implementation

## Technical Highlights

- Implemented custom i18n system for bilingual content management
- Built reusable component library with Astro components
- Optimized image handling and lazy loading
- Structured data markup for better search engine visibility
- Production deployment with custom domain configuration

## Project Structure

```
/
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── common/                 # Shared components (Analytics, Metadata, LanguageSwitcher, etc.)
│   │   ├── ui/                     # Base UI components (Button, Form, Timeline, etc.)
│   │   └── widgets/                # Page sections (Header, Footer, Hero, Features, Testimonials, etc.)
│   ├── data/
│   │   ├── navigation.ts
│   │   └── reviews.ts
│   ├── i18n/
│   │   ├── en.json
│   │   └── es.json
│   ├── integrations/
│   │   └── astrowind/              # AstroWind template customization
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── PageLayout.astro
│   │   └── MarkdownLayout.astro
│   ├── pages/
│   │   ├── en/                     # English routes
│   │   │   ├── index.astro
│   │   │   ├── ...
│   │   ├── index.astro
│   │   ├── ...
│   ├── types/
│   │   └── index.d.ts
│   ├── utils/
│   │   ├── i18n.ts
│   │   ├── images.ts
│   │   ├── images-optimization.ts
│   │   ├── ...
│   └── env.d.ts
├── public/
│   ├── _headers
│   └── robots.txt
├── .github/
│   └── workflows/
│       ├── deploy.yml              # GitHub Pages deployment pipeline
│       └── actions.yaml            # CI/CD checks
├── astro.config.ts
├── package.json
└── ...
```

---

## Acknowledgements

This project is built on the [AstroWind](https://github.com/arthelokyo/astrowind) template by [André B](https://github.com/prototypa). 
