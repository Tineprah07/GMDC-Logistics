"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/icons/Icon";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconSquare } from "@/components/ui/SectionHeading";
import { mainNav, quoteHref } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { telHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-soft/90 backdrop-blur-md backdrop-saturate-150 transition-[box-shadow,border-color] duration-200",
          scrolled ? "border-line shadow-soft" : "border-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-3 lg:h-[4.75rem] lg:gap-6">
          <Link href="/" className="shrink-0 rounded-control">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  {item.href === "/services" ? (
                    <ServicesDropdown active={isActive(pathname, item.href)} />
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={navLinkClasses(isActive(pathname, item.href))}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref()}
              className="mr-3 hidden items-center gap-1.5 text-[0.9375rem] font-bold text-ink hover:text-brand-600 lg:inline-flex"
            >
              <Icon name="call" filled className="text-brand-600" />
              {siteConfig.phone.displayLocal}
            </a>
            <ButtonLink href={quoteHref} className="max-sm:min-h-10 max-sm:px-4 max-sm:text-sm">
              Get a quote
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-ink-soft sm:size-11 lg:hidden"
            >
              <Icon name="menu" className="text-2xl" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Outside <header>: its backdrop blur would trap a fixed-position child */}
      <MobileMenu open={mobileOpen} onClose={closeMobile} pathname={pathname} />
    </>
  );
}

function navLinkClasses(active: boolean) {
  return cn(
    "inline-flex h-10 items-center gap-0.5 rounded-full px-3 text-[0.9375rem] font-semibold whitespace-nowrap transition-colors xl:px-3.5",
    active ? "text-brand-600" : "text-ink-soft hover:text-brand-600",
  );
}

function ServicesDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(navLinkClasses(active), open && "text-brand-600")}
      >
        Services
        <Icon name="expand_more" className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>

      {/* pt-3 bridges the gap so the menu stays open while the pointer moves into it */}
      <div
        id="services-menu"
        hidden={!open}
        className="absolute top-full left-1/2 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
      >
        <div className="overflow-hidden rounded-card border border-line bg-white shadow-raised">
          <ul className="grid grid-cols-2 gap-1 p-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex gap-3.5 rounded-control p-3 transition-colors hover:bg-soft"
                >
                  <IconSquare name={service.icon} className="size-11 [&>.icon]:text-[1.35rem]" />
                  <span>
                    <span className="block text-sm font-semibold text-ink">{service.title}</span>
                    <span className="mt-0.5 block text-[0.8rem] leading-snug text-subtle">{service.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-line bg-soft px-6 py-3.5 text-sm">
            <span className="text-subtle">Every job is quoted on request.</span>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-500"
            >
              View all services
              <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
