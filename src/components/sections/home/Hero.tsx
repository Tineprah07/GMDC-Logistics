import Link from "next/link";
import { HeroQuote } from "@/components/forms/HeroQuote";
import { HeroSlideshow } from "@/components/sections/home/HeroSlideshow";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

// Short names for the "Popular jobs" chips under the quote search
const popular = [
  { slug: "same-day-express-courier", label: "Same-day courier" },
  { slug: "small-removals", label: "Small removals" },
  { slug: "multi-drop-parcel-delivery", label: "Multi-drop" },
  { slug: "trade-construction-deliveries", label: "Trade deliveries" },
].filter((chip) => services.some((service) => service.slug === chip.slug));

/** Split hero: headline and quote search on the left, a photo and illustration slideshow on the right. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-br from-brand-50 via-soft to-accent-soft/50" />

      <Container className="grid items-center gap-14 pt-10 pb-10 sm:pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pt-20 lg:pb-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.8rem] font-bold text-ink shadow-soft">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-600" />
            </span>
            Open 24/7 · Same-day courier &amp; small removals
          </p>

          <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-bold tracking-[-0.04em] sm:text-[3.3rem] xl:text-[3.75rem]">
            Same-day courier and small removals,{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              24/7.
              {/* Road-sign yellow underline */}
              <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 -z-10 h-3 rounded-full bg-accent/70" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
            Reliable, affordable deliveries for businesses and the public across {siteConfig.areas.summary}. Fully
            insured and ready when you are.
          </p>

          <div className="mt-8 max-w-[38rem]">
            <HeroQuote />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-bold text-ink-soft">Popular jobs:</span>
            {popular.map((chip) => (
              <Link
                key={chip.slug}
                href={`/services/${chip.slug}`}
                className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-3.5 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-600"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>

        <HeroSlideshow />
      </Container>
    </section>
  );
}
