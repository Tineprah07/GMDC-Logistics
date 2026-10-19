import { cacheLife } from "next/cache";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/icons/Icon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { companyLinks, legalLinks, serviceLinks, type NavLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { mailtoHref, telHref, whatsappHref } from "@/lib/contact";

export function Footer() {
  const mailto = mailtoHref();

  return (
    <footer className="on-dark border-t border-brand-800 bg-brand-900 text-[0.9rem] text-white/70">
      <Container className="pt-16 pb-8 lg:pt-18">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block rounded-control">
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-white/60">
              A 24/7 courier and logistics company handling day-to-day deliveries and small removals for businesses
              and the public. Reliable, affordable, quality service.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-[0.8rem] font-medium text-white">
              <li className="inline-flex items-center gap-1.5 rounded-control border border-white/15 bg-white/5 px-3 py-1.5">
                <Icon name="verified_user" filled className="text-brand-200" />
                {siteConfig.insurance}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-control border border-white/15 bg-white/5 px-3 py-1.5">
                <Icon name="schedule" filled className="text-brand-200" />
                {siteConfig.hours.summary}
              </li>
            </ul>
          </div>

          <FooterLinks title="Services" links={serviceLinks} />
          <FooterLinks title="Company" links={companyLinks} />

          <div className="col-span-2 lg:col-span-1">
            <h2 className={headingClasses}>Get in touch</h2>
            <ul className="space-y-1">
              <li>
                <a href={telHref()} className={contactLinkClasses}>
                  <Icon name="call" filled className="text-brand-200" />
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={contactLinkClasses}>
                  <WhatsAppIcon className="size-[1.1rem] shrink-0 text-brand-200" />
                  WhatsApp us
                </a>
              </li>
              {mailto && (
                <li>
                  <a href={mailto} className={contactLinkClasses}>
                    <Icon name="mail" filled className="text-brand-200" />
                    {siteConfig.email}
                  </a>
                </li>
              )}
              <li className="flex min-h-10 items-center gap-2.5">
                <Icon name="schedule" filled className="text-brand-200" />
                {siteConfig.hours.detail}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.8rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

const headingClasses = "mb-4 text-[0.75rem] font-semibold tracking-[0.14em] text-white uppercase";

const contactLinkClasses = "inline-flex min-h-10 items-center gap-2.5 text-white/85 transition-colors hover:text-white";

function FooterLinks({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className={headingClasses}>{title}</h2>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-flex min-h-9 items-center transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
