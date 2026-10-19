"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/icons/Icon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ButtonLink } from "@/components/ui/Button";
import { IconSquare } from "@/components/ui/SectionHeading";
import { mainNav, quoteHref } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { telHref, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

/** Full-screen menu for small screens. Traps focus, locks scroll, closes on Escape or link click. */
export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      opener?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
        <Link href="/" onClick={onClose}>
          <Logo />
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex size-10 items-center justify-center rounded-control border border-line text-ink hover:border-ink-soft"
        >
          <Icon name="close" className="text-2xl" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <nav aria-label="Main" className="flex-1 overflow-y-auto px-4 py-3 sm:px-6">
        <ul className="divide-y divide-line-soft">
          {mainNav.map((item) =>
            item.href === "/services" ? (
              <li key={item.href}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setServicesOpen((value) => !value)}
                  className={cn(mobileLinkClasses, "w-full justify-between")}
                >
                  Services
                  <Icon
                    name="expand_more"
                    className={cn("text-2xl text-subtle transition-transform", servicesOpen && "rotate-180")}
                  />
                </button>
                <ul id="mobile-services" hidden={!servicesOpen} className="mb-3 grid gap-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={onClose}
                        aria-current={pathname === `/services/${service.slug}` ? "page" : undefined}
                        className="flex min-h-12 items-center gap-3 rounded-control px-2 text-[0.9375rem] font-medium text-ink-soft hover:bg-soft aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-700"
                      >
                        <IconSquare name={service.icon} className="size-9 [&>.icon]:text-[1.15rem]" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="flex min-h-11 items-center gap-1 px-2 text-sm font-semibold text-brand-700"
                    >
                      View all services
                      <Icon name="arrow_forward" />
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={mobileLinkClasses}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="shrink-0 space-y-3 border-t border-line bg-soft px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
        <div className="grid grid-cols-2 gap-3">
          <ButtonLink href={whatsappHref()} variant="whatsapp" size="lg" fullWidth onClick={onClose}>
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </ButtonLink>
          <ButtonLink href={quoteHref} size="lg" fullWidth onClick={onClose}>
            Get a quote
          </ButtonLink>
        </div>
        <a
          href={telHref()}
          className="flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-ink"
        >
          <Icon name="call" filled className="text-brand-600" />
          Call {siteConfig.phone.displayLocal} · {siteConfig.hours.summary}
        </a>
      </div>
    </div>
  );
}

const mobileLinkClasses =
  "flex min-h-14 items-center text-lg font-semibold text-ink aria-[current=page]:text-brand-700";
