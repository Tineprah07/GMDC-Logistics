import { cn } from "@/lib/utils";

/**
 * Every Material Symbol the site uses. The font request in the root layout is
 * subset to exactly these names, so add a name here before using a new icon.
 * Browse icons at https://fonts.google.com/icons (Rounded style).
 */
export const iconNames = [
  "add",
  "arrow_forward",
  "bolt",
  "chat",
  "call",
  "check",
  "chevron_left",
  "chevron_right",
  "close",
  "co_present",
  "construction",
  "expand_more",
  "home",
  "local_shipping",
  "location_on",
  "mail",
  "menu",
  "north_east",
  "pause",
  "play_arrow",
  "request_quote",
  "route",
  "schedule",
  "shopping_bag",
  "trip_origin",
  "verified_user",
  "weekend",
] as const;

export type IconName = (typeof iconNames)[number];

export const iconFontHref =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,300..600,0..1,0" +
  `&icon_names=${[...iconNames].sort().join(",")}&display=block`;

type IconProps = {
  name: IconName;
  /** Solid style, like the Font Awesome icons on M. Gyamprah Enterprise. */
  filled?: boolean;
  className?: string;
};

/** Decorative Google Material Symbol. Size it with text-* classes. */
export function Icon({ name, filled = false, className }: IconProps) {
  return (
    <span aria-hidden="true" className={cn("icon", filled && "icon-filled", className)}>
      {name}
    </span>
  );
}
