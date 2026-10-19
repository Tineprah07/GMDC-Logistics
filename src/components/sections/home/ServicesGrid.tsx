import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

// A different soft colour per service tile
const tileTones = [
  "bg-brand-50 text-brand-600",
  "bg-accent-soft text-accent-ink",
  "bg-sky-50 text-sky-700",
  "bg-rose-50 text-rose-700",
  "bg-violet-50 text-violet-700",
  "bg-teal-50 text-teal-700",
];

/** All six services as cards with a route-style accent strip that grows on hover. */
export function ServicesGrid() {
  return (
    <Section tone="plain" aria-labelledby="services-title" className="pt-8 sm:pt-10 lg:pt-12">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow number="01">Services</Eyebrow>
          <h2 id="services-title" className="text-[2rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem]">
            The right service for the job
          </h2>
        </div>
        <p className="max-w-sm text-muted lg:text-right">
          Six services, one team, door to door. Every job is quoted on request.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-6 pl-7 transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-card",
                // Accent strip on the left edge, short at rest and full height on hover
                "before:absolute before:top-6 before:bottom-6 before:left-0 before:w-1 before:origin-top before:scale-y-[0.3] before:rounded-r-full before:bg-brand-600 before:transition-transform before:duration-300 hover:before:scale-y-100",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={cn("flex size-12 items-center justify-center rounded-control", tileTones[index % tileTones.length])}>
                  <Icon name={service.icon} filled className="text-[1.5rem]" />
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name="north_east" className="text-[1.1rem]" />
                </span>
              </div>
              <h3 className="mt-5 text-lg">{service.title}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{service.summary}</p>
              {service.featured && (
                <span className="mt-4 w-fit rounded-full bg-accent px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide text-ink uppercase">
                  Main service
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
