import Image from "next/image";
import Link from "next/link";
import { HeroQuote } from "@/components/forms/HeroQuote";
import { Icon, type IconName } from "@/components/icons/Icon";
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

/**
 * Split hero: headline and quote search on the left; on the right a van photo
 * with a dashed delivery route drawn across it, ending at two info cards.
 */
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

        <div className="relative mx-auto w-full max-w-xl pb-8 lg:max-w-none lg:pb-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-brand-900 shadow-raised lg:aspect-[5/4]">
            <Image
              src="/images/hero-van.jpg"
              alt="A white long wheelbase van parked on a city street"
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[35%_center]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-brand-900/45 via-transparent to-brand-900/10" />

            {/* Dashed delivery route from bottom-left to top-right */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 320"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
              fill="none"
            >
              <path
                d="M40 285 C 120 280, 140 200, 210 190 S 330 150, 355 45"
                className="stroke-accent"
                strokeWidth="3"
                strokeDasharray="2 9"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <RoutePin className="bottom-[6%] left-[7%]" />
            <RoutePin className="top-[10%] right-[8%]" />
          </div>

          <FloatingCard
            className="bottom-0 -left-2 sm:-left-6 lg:bottom-6"
            icon="trip_origin"
            iconClass="bg-brand-50 text-brand-600"
            title="Same-day collection"
            text="Any time, day or night"
          />
          <FloatingCard
            className="-top-5 -right-2 sm:-right-6"
            icon="verified_user"
            iconClass="bg-accent-soft text-accent-ink"
            title="Delivered, insured"
            text="Goods-in-transit cover"
          />
        </div>
      </Container>
    </section>
  );
}

function RoutePin({ className }: { className: string }) {
  return (
    <span aria-hidden="true" className={`absolute flex size-4 items-center justify-center ${className}`}>
      <span className="absolute size-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
      <span className="relative size-3 rounded-full border-2 border-white bg-accent" />
    </span>
  );
}

function FloatingCard({
  className,
  icon,
  iconClass,
  title,
  text,
}: {
  className: string;
  icon: IconName;
  iconClass: string;
  title: string;
  text: string;
}) {
  return (
    <div className={`absolute flex items-center gap-3 rounded-card bg-white py-3 pr-5 pl-3 shadow-raised ${className}`}>
      <span className={`flex size-11 shrink-0 items-center justify-center rounded-control ${iconClass}`}>
        <Icon name={icon} filled className="text-[1.35rem]" />
      </span>
      <span>
        <span className="block font-heading text-[0.9375rem] font-bold text-ink">{title}</span>
        <span className="block text-[0.8rem] text-muted">{text}</span>
      </span>
    </div>
  );
}
