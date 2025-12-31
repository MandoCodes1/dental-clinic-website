# High-Performance Dental Clinic Website

**Live Site**: [dreugeniavila.com](https://www.dreugeniavila.com/en/)

Professional website for a dental clinic in Málaga, Spain.

## Tech Stack

- **Framework**: [Astro 5.0](https://astro.build/) (static site generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Astro Icon](https://www.astroicon.dev/)
- **Deployment**: GitHub Actions CI/CD with Cloudflare custom domain

## Features

- **Internationalization**: Dynamic bilingual support using a custom i18n system
- **Responsive Design**: Mobile-first, optimized for all devices/screen sizes
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Performance**: Static site generation for fast load times
- **Component Architecture**: Modular, reusable component system
- **Type Safety**: Full TypeScript implementation throughout
- **Image Optimization**: Automatic image optimization and lazy loading
- **Analytics Ready**: Built-in analytics integration support

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
│   │   ├── common/
│   │   ├── ui/
│   │   └── widgets/
│   ├── data/
│   │   ├── navigation.ts
│   │   └── reviews.ts
│   ├── i18n/
│   │   ├── en.json
│   │   └── es.json
│   ├── integrations/
│   │   └── astrowind/
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── PageLayout.astro
│   │   └── MarkdownLayout.astro
│   ├── pages/
│   │   ├── en/
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
│       ├── deploy.yml
│       └── actions.yaml
├── astro.config.ts
├── package.json
└── ...
```

---

## Acknowledgements

Built on the [AstroWind](https://github.com/arthelokyo/astrowind) template.
