import { cn } from "@/lib/utils";

type LogoProps = {
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
};

/** The GMDC motion mark: speed lines and a forward arrow. Also exported as src/app/icon.svg. */
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-9 shrink-0", className)}>
      <rect width="32" height="32" rx="9" className={light ? "fill-brand-600" : "fill-brand-50"} />
      <path
        d="M6 11h7M4 16h9M6 21h7"
        className={light ? "stroke-white" : "stroke-brand-600"}
        strokeOpacity="0.55"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <path
        d="M17 9l7 7-7 7"
        fill="none"
        className={light ? "stroke-accent" : "stroke-brand-600"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: LogoProps) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark light={light} />
      <span className="flex flex-col leading-tight" aria-hidden="true">
        <span className={cn("font-heading text-[1rem] font-bold tracking-tight sm:text-[1.2rem]", light ? "text-white" : "text-ink")}>
          GMDC Logistics
        </span>
        <span
          className={cn(
            "text-[0.625rem] font-semibold tracking-[0.16em] uppercase max-sm:hidden",
            light ? "text-white/55" : "text-subtle",
          )}
        >
          Courier · Removals · 24/7
        </span>
      </span>
      <span className="sr-only">GMDC Logistics</span>
    </span>
  );
}
