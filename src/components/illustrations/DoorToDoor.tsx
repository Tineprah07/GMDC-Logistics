import { Box, CartoonVan } from "@/components/illustrations/shared";

/** Cartoon: a GMDC van on the road, with a dotted route to a parcel left at a front door. */
export function DoorToDoor() {
  return (
    <svg
      viewBox="0 0 500 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a GMDC van delivering a parcel to a front door"
      className="size-full"
    >
      <rect width="500" height="400" className="fill-brand-50" />
      <circle cx="420" cy="78" r="34" className="fill-accent" opacity="0.9" />
      <g className="fill-white">
        <ellipse cx="108" cy="78" rx="48" ry="15" />
        <ellipse cx="132" cy="66" rx="28" ry="18" />
        <ellipse cx="290" cy="108" rx="40" ry="12" />
        <ellipse cx="308" cy="98" rx="22" ry="13" />
      </g>

      {/* Ground and road */}
      <rect y="292" width="500" height="108" className="fill-brand-100" />
      <rect y="322" width="500" height="50" className="fill-ink" opacity="0.88" />
      <path d="M0 347 H500" stroke="white" strokeWidth="3" strokeDasharray="20 14" opacity="0.75" />

      {/* House */}
      <g transform="translate(330 150)">
        <rect x="0" y="56" width="144" height="116" rx="4" className="fill-white" />
        <path d="M-14 62 L72 0 L158 62 Z" className="fill-brand-600" />
        <rect x="54" y="98" width="38" height="74" rx="3" className="fill-brand-900" />
        <circle cx="84" cy="138" r="3" className="fill-accent" />
        <rect x="14" y="90" width="28" height="28" rx="3" className="fill-brand-200" />
        <rect x="104" y="90" width="28" height="28" rx="3" className="fill-brand-200" />
        <path d="M28 90 V118 M14 104 H42 M118 90 V118 M104 104 H132" stroke="white" strokeWidth="2.5" />
      </g>

      {/* Parcel at the door with a delivered tick */}
      <Box x={384} y={296} w={34} h={26} />
      <circle cx="420" cy="280" r="13" className="fill-brand-600" />
      <path d="M414 280 l4 4 l8 -8" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Route from the van to the door */}
      <path
        d="M210 210 C 260 130, 360 120, 405 262"
        className="stroke-accent"
        strokeWidth="4"
        strokeDasharray="2 11"
        strokeLinecap="round"
        fill="none"
      />

      {/* Motion lines and van */}
      <path d="M10 262 H34 M2 282 H30 M14 302 H36" className="stroke-brand-300" strokeWidth="5" strokeLinecap="round" />
      <CartoonVan x={44} y={214} />
    </svg>
  );
}
