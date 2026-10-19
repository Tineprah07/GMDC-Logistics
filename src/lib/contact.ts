import { siteConfig } from "@/config/site";

/** True while a config value is still an unfilled "[PLACEHOLDER]". */
export function isPlaceholder(value: string): boolean {
  return value.trim() === "" || value.includes("[");
}

export function telHref(): string {
  return `tel:${siteConfig.phone.tel}`;
}

export function whatsappHref(message: string = siteConfig.whatsapp.defaultMessage): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Returns null while the business email is still a placeholder. */
export function mailtoHref(subject?: string): string | null {
  if (isPlaceholder(siteConfig.email)) return null;
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${siteConfig.email}${query}`;
}
