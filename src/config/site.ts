/**
 * Single source of truth for GMDC Logistics business details.
 * Edit values here and they update across the whole site.
 * Values wrapped in [SQUARE BRACKETS] are placeholders awaiting client confirmation.
 */

export const siteConfig = {
  name: "GMDC Logistics",
  shortName: "GMDC",
  tagline: "Same-day courier and small removals, 24/7",
  description:
    "GMDC Logistics is a 24/7 courier and logistics company handling day-to-day deliveries for businesses and the public. Reliable, affordable, quality service.",
  url: process.env.SITE_URL ?? "http://localhost:3000",

  owner: {
    name: "Gerald Jones Osei-Twum",
    role: "CEO",
  },

  yearsTrading: 2,

  phone: {
    display: "+44 7470 081443",
    displayLocal: "07470 081443",
    tel: "+447470081443",
  },

  whatsapp: {
    number: "447470081443",
    defaultMessage: "Hi GMDC Logistics, I'd like a quote for a delivery.",
  },

  // Not yet supplied. Email links are hidden while this contains "[".
  email: "[BUSINESS EMAIL]",

  hours: {
    summary: "Open 24/7",
    detail: "24 hours a day, 7 days a week, Monday to Sunday",
  },

  // NOT yet confirmed. To switch to UK-wide, set `regions` to
  // [{ name: "UK-wide", ... }] and update `summary`.
  areas: {
    summary: "the Midlands, North East, North West and South of England",
    regions: [
      { name: "Midlands" },
      { name: "North East" },
      { name: "North West" },
      { name: "South of England", note: "excluding London" },
    ],
  },

  vehicles: [
    { name: "SWB van", fullName: "Short wheelbase van" },
    { name: "LWB van", fullName: "Long wheelbase van" },
  ],

  insurance: "Goods-in-transit insured",

  // Add profile URLs when available. Empty values are not rendered.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
  },

  features: {
    // Keep false until real customer reviews exist.
    showTestimonials: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
