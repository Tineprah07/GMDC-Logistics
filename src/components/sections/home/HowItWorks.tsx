import { Icon, type IconName } from "@/components/icons/Icon";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

const steps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "chat",
    title: "Tell us what needs moving",
    text: "Send the details by WhatsApp, the quote form or a quick phone call.",
  },
  {
    icon: "request_quote",
    title: "Get a clear quote, fast",
    text: "We come back with a clear price for your job, so you know where you stand.",
  },
  {
    icon: "local_shipping",
    title: "We collect and deliver",
    text: "Door to door in a goods-in-transit insured van, any time of day or night.",
  },
];

/**
 * Three steps laid out as stops along a dashed road: horizontal on wider
 * screens, vertical on phones.
 */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="bg-brand-50/70 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-xl text-center">
          <Eyebrow number="02" centred>
            How it works
          </Eyebrow>
          <h2 id="how-title" className="text-[2rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem]">
            From your message to their door
          </h2>
        </div>

        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {/* The road: vertical on phones, horizontal between the first and last stop on wider screens */}
          <span
            aria-hidden="true"
            className="absolute top-7 bottom-7 left-7 border-l-[3px] border-dashed border-brand-300 md:top-7 md:right-[16.66%] md:bottom-auto md:left-[16.66%] md:border-t-[3px] md:border-l-0"
          />

          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-[3px] border-brand-600 bg-white text-brand-600 shadow-soft">
                <Icon name={step.icon} filled className="text-[1.5rem]" />
                <span className="absolute -top-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full bg-accent font-heading text-xs font-bold text-ink">
                  {index + 1}
                </span>
              </span>
              <div className="pt-2 md:pt-0">
                <h3 className="text-lg">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted md:mx-auto">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
