# GMDC Logistics

Marketing website for GMDC Logistics, a 24/7 UK courier and small removals company.

Built with Next.js (App Router), TypeScript, Tailwind CSS and Google Material Symbols icons. Deployed on Vercel.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

Copy `.env.example` to `.env.local` and fill in values as features need them.

## Editing business details

| What                                                         | Where                        |
| ------------------------------------------------------------ | ---------------------------- |
| Phone, WhatsApp, email, hours, areas, vehicles, social links | `src/config/site.ts`         |
| Show or hide testimonials                                    | `src/config/site.ts` (`features.showTestimonials`) |
| Services (titles, summaries, descriptions, benefits)         | `src/data/services.ts`       |
| Brand colours and fonts                                      | `src/styles/globals.css`     |
| Logo                                                         | `src/components/brand/Logo.tsx` and `src/app/icon.svg` |
| Photos                                                       | `public/images/`             |

Values in `[SQUARE BRACKETS]` are placeholders waiting for confirmation from the client.

## Project structure

```
src/
  app/              Routes (pages, layouts, API routes), favicon (icon.svg)
  components/
    ui/             Generic building blocks: Container, Button, Section...
    brand/          Logo and wordmark
    layout/         Site-wide chrome: header, footer, mobile menu, floating WhatsApp
    sections/       Page sections: hero, services grid, FAQ, CTA banner...
    forms/          Quote and contact form components
  config/           site.ts: the single source of truth for business details
  data/             Content collections: services (later FAQs, testimonials, posts)
  lib/              Helpers: contact link builders, validation, utilities
  styles/           Global CSS and Tailwind theme tokens
public/
  images/           Static images (swap in real van photos here)
```

Where future features go:

- **Quote and contact forms**: components in `src/components/forms`, server handling in `src/app/api/<name>/route.ts`, shared validation schemas in `src/lib/validation`.
- **FAQs, testimonials, blog posts**: data files in `src/data`, routes in `src/app`.
- **Email sending and third-party APIs** (e.g. Resend, Google Maps): wrappers in `src/lib`, keys in environment variables.
- **Customer accounts or tracking**: not in version 1. If added, routes go under `src/app/(account)` and auth code under `src/lib/auth`.
