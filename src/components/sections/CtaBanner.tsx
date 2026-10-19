import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { quoteHref } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
};

const points = [siteConfig.hours.detail, siteConfig.insurance, "Quotes by WhatsApp, form or phone"];

/** Closing call to action used at the bottom of most pages: text card with the van photo on the right. */
export function CtaBanner({
  title = "Need something moved today?",
  subtitle = "Tell us what needs moving and where. We'll come back with a clear quote.",
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="on-dark relative isolate grid overflow-hidden rounded-panel bg-brand-900 shadow-raised lg:grid-cols-2">
          {/* Dashed route curving in from the top-left corner */}
          <svg
            aria-hidden="true"
            viewBox="0 0 300 200"
            className="absolute -top-6 -left-6 -z-10 h-48 w-72 text-accent/30"
            fill="none"
          >
            <path d="M0 40 C 90 40, 120 160, 290 150" stroke="currentColor" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
          </svg>

          <div className="px-6 py-10 sm:px-12 sm:py-14 lg:px-14">
            <Eyebrow tone="light" number="03">
              Get in touch
            </Eyebrow>
            <h2 id="cta-title" className="text-3xl leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-white/75 sm:text-[1.0625rem]">{subtitle}</p>

            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[0.9375rem] text-white/90">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <Icon name="check" className="text-base" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={quoteHref} variant="accent" size="lg">
                Get a quote
              </ButtonLink>
              <ButtonLink href={whatsappHref()} variant="whatsapp" size="lg">
                <WhatsAppIcon className="size-5" />
                WhatsApp us
              </ButtonLink>
              <a
                href={telHref()}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 px-2 font-bold text-white hover:text-accent"
              >
                <Icon name="call" filled />
                {siteConfig.phone.displayLocal}
              </a>
            </div>
          </div>

          <div className="relative min-h-64 sm:min-h-80">
            <Image src="/images/hero-van.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[35%_center]" />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-brand-900/50 to-transparent max-lg:bg-linear-to-b" />
          </div>
        </div>
      </Container>
    </section>
  );
}
