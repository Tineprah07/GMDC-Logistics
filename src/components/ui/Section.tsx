import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const tones = {
  /** Page background (sage), no borders */
  plain: "",
  white: "bg-white",
  soft: "bg-soft border-y border-line",
  dark: "on-dark bg-brand-900 text-white/75",
} as const;

type SectionProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
  containerClassName?: string;
  id?: string;
  "aria-labelledby"?: string;
};

/** Vertical page band with consistent spacing and an inner Container. */
export function Section({ children, tone = "white", className, containerClassName, ...rest }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
