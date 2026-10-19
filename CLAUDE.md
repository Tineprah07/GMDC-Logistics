@AGENTS.md

# GMDC Logistics website

Marketing website for a UK courier company. We are building it gradually, one stage at a time, and reviewing each stage before moving on. Do not build ahead of the current stage.

=== PROJECT BRIEF ===

BUSINESS
- Name: GMDC Logistics
- Owner: Gerald Jones Osei-Twum, CEO
- Phone and WhatsApp: +44 7470 081443 (tel link: +447470081443, WhatsApp link: https://wa.me/447470081443)
- Email: [BUSINESS EMAIL] (not yet supplied, keep as a placeholder in config)
- Address: online business, no public address. Do not show an address anywhere.
- Trading for: 2 years
- Opening hours: 24 hours a day, 7 days a week, Monday to Sunday
- Vehicles: SWB (short wheelbase) and LWB (long wheelbase) vans
- Insurance: goods-in-transit insured
- Areas covered: Midlands, North East, North West and the South of England (excluding London). This is NOT yet confirmed and may change to "UK-wide", so it must be controlled from one config value.

ABOUT
GMDC Logistics is a 24/7 logistics company handling day-to-day deliveries for businesses and the public. Key selling points: reliable, affordable, quality service.

SERVICES (all six shown, in this order)
1. Same-Day & Express Courier (MAIN SERVICE): urgent point-to-point and dedicated deliveries for local businesses, legal firms, medical suppliers and industrial parts.
2. Small Removals: house and flat moves, student moves, boxes, single furniture items and white goods. Jobs that do not need a large Luton van.
3. Multi-Drop Parcel Delivery: daily multi-stop parcel routes for logistics networks and local depots.
4. E-Commerce & Retail Delivery: same-day or scheduled door-to-door drop-offs for local shops, bakeries and online stores.
5. Event & Exhibition Support: transporting display stands, AV equipment and promotional materials to and from venues and conference centres.
6. Trade & Construction Deliveries: building materials, tools and supplies delivered directly to job sites for contractors and tradespeople.
Also mention door-to-door delivery as part of the overall offer.

CUSTOMERS
Serves: local businesses, legal firms, medical suppliers, online shops, members of the public, tradespeople and builders.
Priority audiences for the website: medical suppliers, local businesses, members of the public, online shops.

WHAT VISITORS SHOULD DO (priority order)
1. Message on WhatsApp (primary action, most prominent everywhere)
2. Send a quote request through a form
3. Call the business
Not in version 1: online booking, delivery tracking, job applications.

PRICING
No prices on the site. Everything is "quote on request".

LOOK AND FEEL
- No logo supplied. Create a clean text wordmark: "GMDC" in bold navy with "LOGISTICS" in smaller letter-spaced text, plus a simple SVG mark (for example a stylised arrow or van-motion shape). Save it as a reusable component and also export an SVG favicon.
- Colours: navy #16324F (primary), orange #F28C28 (accent, used for main buttons and highlights), light background #F5F8FB, text #1B2430, muted text #5A6472, borders #DDE4EC. WhatsApp buttons use WhatsApp green #25D366.
- Fonts: "Manrope" for headings, "Inter" for body text (via next/font/google).
- Style: professional, trustworthy, bold headings, generous white space, rounded corners (around 12px), subtle shadows, friendly and plain-English tone. Must feel like a reliable local operator, not a faceless corporate.
- No real photos supplied. Use simple, high-quality illustrations or icons (lucide-react) and tasteful gradient or pattern backgrounds. If images are used, put them in /public/images with clear names so they can be swapped for real van photos later. Do not hotlink external images.

CONTENT RULES (important)
- British English spelling throughout (colour, organise, centre).
- Never invent facts: no fake reviews, testimonials, star ratings, delivery counts, client logos, accreditations, awards or statistics. Only use facts in this brief.
- Build a testimonials section component but keep it hidden (feature flag in config) until real reviews exist.
- Keep copy short, clear and benefit-led. No filler.

=== TECH STACK ===
- Next.js (latest stable, App Router) with TypeScript
- Tailwind CSS for styling
- Google Material Symbols for icons (client change; originally lucide-react)
- Static-first: every page should be statically generated
- Deployment target: Vercel
- No database, no user accounts

=== END OF BRIEF ===

## Current design direction (client still choosing between this and the white + blue version)

- Started from the uicookies "Campus" layout, then made GMDC's own: own palette, own heading font and a "route" motif. Copy none of Campus's content or numbers.
- Palette tokens in `src/styles/globals.css` (client chose Royal Blue + Amber): `brand-50`..`brand-900` blues (main `brand-600` #1F4FD1, dark panels `brand-900` #0F1E4A), amber `accent` #FFB020 (always with dark text; `accent-ink` #8A5300 for amber icons/text on light backgrounds), page background `soft` #F6F8FC, text `ink` #0F1E4A / `ink-soft` / `muted` #57617A.
- Fonts: Sora (headings), Mulish (body). Icons: Google Material Symbols via `<Icon name="..." />`; add names to `iconNames` before use. WhatsApp uses its own SVG.
- Route motif: dashed amber route lines and pins (hero photo, quote search connector, CTA corner), numbered `Eyebrow`s (`number="01"`), "How it works" drawn as stops on a dashed road, road centre-line in the facts band.
- Home order: Hero (headline, `HeroQuote` search, popular chips, photo with route and floating cards), `ServicesGrid` (cards with growing accent strip), `FactsBand`, `HowItWorks`, `CtaBanner` (text left, photo right). Pill buttons.
- Hero/CTA photo `public/images/hero-van.jpg` is CC0 stock (plate blurred). Replace with a real GMDC van photo when supplied.
- Dark panels add the `on-dark` utility so focus rings stay visible.

## Design and quality standards

- Should feel like a real, established, premium logistics company, not a generic template. Communicate reliability, efficiency, safety and professionalism.
- Strong visual hierarchy. Avoid clutter, excessive animation, unnecessary gradients and overly rounded components. Animations are subtle, purposeful, and respect `prefers-reduced-motion`.
- Mobile-first. Design layouts that genuinely work on small screens (navigation, forms, cards, touch targets of at least 44px), not shrunk desktop layouts.
- Key actions (WhatsApp, Get a Quote, Call) are always easy to find without cluttering the page.
- Accessibility: semantic HTML, WCAG AA contrast, visible focus styles, labelled controls.
- Missing business details use clearly marked `[PLACEHOLDER]` values. Never invent business facts.

## Project conventions

- Business details live ONLY in `src/config/site.ts`. Never hard-code phone numbers, hours, areas or email in components.
- Service content lives in `src/data/services.ts`. Other content collections (FAQs, testimonials, etc.) go in `src/data/` as they are added.
- Link builders (tel:, wa.me, mailto:) and the placeholder check live in `src/lib/contact.ts`.
- Navigation links live in `src/config/navigation.ts`.
- Components: `components/ui` (generic primitives: Button, Container, Section, SectionHeading), `components/brand` (logo), `components/icons` (Material Symbols `Icon`, WhatsApp glyph), `components/layout` (header, footer, global chrome), `components/sections` (page sections), `components/forms` (form components).
- Server components by default. Add `"use client"` only to components that need interactivity.
- Theme colours and fonts are Tailwind tokens defined in `src/styles/globals.css` (`bg-brand-600`, `bg-accent`, `text-muted`, `border-line`, ...). Use tokens, not raw hex values.
- Import with the `@/` alias. Use `cn()` from `src/lib/utils.ts` to combine classes (it resolves Tailwind conflicts).
- Don't put a fixed-position element inside the header: its backdrop blur traps fixed children.
- The WhatsApp brand green fails contrast with white text; buttons use `whatsapp-dark`.
