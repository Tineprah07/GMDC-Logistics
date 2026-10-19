import { services } from "@/data/services";

export type NavLink = { label: string; href: string };

export const serviceLinks: NavLink[] = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

/** Primary navigation. "Services" renders as a dropdown of serviceLinks. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Areas We Cover", href: "/areas" },
  { label: "Contact", href: "/contact" },
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Areas We Cover", href: "/areas" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const quoteHref = "/quote";
