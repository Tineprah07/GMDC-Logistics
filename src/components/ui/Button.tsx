import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-brand-600 text-white border-brand-600 hover:bg-brand-700 hover:border-brand-700 hover:-translate-y-px",
  accent: "bg-accent text-ink border-accent hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-px",
  whatsapp:
    "bg-whatsapp-dark text-white border-whatsapp-dark hover:bg-whatsapp-darker hover:border-whatsapp-darker hover:-translate-y-px",
  outline: "bg-white text-ink border-line hover:border-ink-soft",
  "outline-light": "bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white",
  white: "bg-white text-ink border-white hover:bg-brand-50 hover:-translate-y-px",
} as const;

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-13 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: keyof typeof sizes = "md",
  fullWidth = false,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-bold leading-tight",
    "transition-all duration-200 ease-brand",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
  );
}

/**
 * A link styled as a button. Internal paths use next/link; tel:, mailto: and
 * external URLs render a plain anchor (external ones open in a new tab).
 */
export function ButtonLink({
  href,
  variant,
  size,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(buttonClasses(variant, size, fullWidth), className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...rest}
    >
      {children}
    </a>
  );
}
