import { Icon, type IconName } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Section number shown in the eyebrow, e.g. "01" */
  number?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** For use on dark sections. */
  tone?: "dark" | "light";
  /** Heading level; defaults to h2. Use "h1" for page intros. */
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  number,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const centred = align === "center";
  const light = tone === "light";

  return (
    <div className={cn("max-w-2xl", centred && "mx-auto text-center", "mb-10 sm:mb-12", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} centred={centred} number={number}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        id={id}
        className={cn(
          "leading-[1.1] tracking-[-0.02em] text-balance",
          Heading === "h1" ? "text-4xl font-extrabold sm:text-5xl" : "text-[2rem] sm:text-[2.5rem]",
          light && "text-white",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-[1.05rem]", light ? "text-white/75" : "text-muted")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Small uppercase label used above headings: a round arrow mark, an optional
 * section number ("01") and the label, like a stop on a route.
 */
export function Eyebrow({
  children,
  tone = "dark",
  centred = false,
  number,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  centred?: boolean;
  number?: string;
}) {
  const light = tone === "light";
  return (
    <p
      className={cn(
        "mb-3 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.16em] uppercase",
        light ? "text-white" : "text-brand-600",
      )}
      data-centred={centred || undefined}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-5 items-center justify-center rounded-full",
          light ? "bg-accent text-ink" : "bg-brand-600 text-white",
        )}
      >
        <Icon name="arrow_forward" className="text-[0.8rem]" />
      </span>
      {number && <span className={light ? "text-accent" : "text-accent-ink"}>{number}</span>}
      {children}
    </p>
  );
}

const iconSquareTones = {
  soft: "border-brand-100 bg-brand-50 text-brand-700",
  filled: "border-brand-600 bg-brand-600 text-white",
  white: "border-line bg-white text-brand-600",
  glass: "border-white/20 bg-white/10 text-white",
} as const;

/** Square icon tile (56px by default), as used on M. Gyamprah Enterprise. */
export function IconSquare({
  name,
  tone = "soft",
  className,
}: {
  name: IconName;
  tone?: keyof typeof iconSquareTones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-control border",
        iconSquareTones[tone],
        className,
      )}
    >
      <Icon name={name} filled className="text-[1.65rem]" />
    </span>
  );
}
