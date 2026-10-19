import { Icon, type IconName } from "@/components/icons/Icon";
import { Container } from "@/components/ui/Container";

// Facts from the brief only. Never replace these with invented numbers.
const facts: { value: string; label: string; icon: IconName }[] = [
  { value: "24/7", label: "Open every day of the week", icon: "schedule" },
  { value: "Same day", label: "Collection and delivery", icon: "bolt" },
  { value: "SWB & LWB", label: "Vans to suit the load", icon: "local_shipping" },
  { value: "Insured", label: "Goods in transit", icon: "verified_user" },
];

/** Dark band of key facts with a faint road centre-line running through it. */
export function FactsBand() {
  return (
    <section aria-label="Key facts" className="relative isolate overflow-hidden bg-brand-900 py-12 sm:py-14">
      {/* Road markings: a dashed centre line across the band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 h-1 -translate-y-1/2 bg-[linear-gradient(90deg,rgb(255_193_69/0.18)_50%,transparent_50%)] bg-size-[56px_4px]"
      />

      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <li
              key={fact.value}
              className="flex items-center gap-4 rounded-card border border-white/10 bg-brand-900/80 px-5 py-4 backdrop-blur-sm"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                <Icon name={fact.icon} filled className="text-[1.4rem]" />
              </span>
              <span>
                <span className="block font-heading text-2xl font-bold tracking-tight text-white">{fact.value}</span>
                <span className="block text-sm text-white/70">{fact.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
