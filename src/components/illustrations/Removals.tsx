import { Box } from "@/components/illustrations/shared";

/** Cartoon: a hand trolley stacked with boxes, a sofa, a lamp and a plant, ready to move. */
export function Removals() {
  return (
    <svg
      viewBox="0 0 500 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of boxes on a hand trolley next to a sofa, ready for a small removal"
      className="size-full"
    >
      <rect width="500" height="400" className="fill-brand-50" />
      <circle cx="250" cy="200" r="165" className="fill-white" opacity="0.65" />
      <rect y="318" width="500" height="82" className="fill-brand-100" />
      <ellipse cx="250" cy="322" rx="220" ry="8" className="fill-ink" opacity="0.08" />

      {/* Plant */}
      <g transform="translate(46 222)">
        <ellipse cx="26" cy="20" rx="12" ry="30" transform="rotate(-25 26 20)" className="fill-brand-500" />
        <ellipse cx="44" cy="14" rx="11" ry="32" transform="rotate(18 44 14)" className="fill-brand-600" />
        <ellipse cx="34" cy="8" rx="9" ry="28" className="fill-brand-300" />
        <path d="M14 46 H58 L52 98 H20 Z" className="fill-accent" />
      </g>

      {/* Hand trolley with stacked boxes */}
      <g>
        <Box x={140} y={244} w={70} h={74} />
        <Box x={146} y={180} w={60} h={64} />
        <Box x={152} y={130} w={50} h={50} />
        <path d="M132 112 V322 H222" className="stroke-ink" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M120 112 H144" className="stroke-ink" strokeWidth="7" strokeLinecap="round" />
        <circle cx="146" cy="330" r="15" className="fill-ink" />
        <circle cx="146" cy="330" r="6" className="fill-brand-100" />
        {/* "This way up" arrows on the bottom box */}
        <path d="M162 290 v-14 l-5 6 M162 276 l5 6 M190 290 v-14 l-5 6 M190 276 l5 6" stroke="#8A5A2B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Sofa */}
      <g transform="translate(262 206)">
        <rect x="18" y="0" width="160" height="66" rx="18" className="fill-brand-500" />
        <rect x="8" y="50" width="180" height="54" rx="14" className="fill-brand-600" />
        <rect x="-6" y="34" width="34" height="76" rx="14" className="fill-brand-700" />
        <rect x="168" y="34" width="34" height="76" rx="14" className="fill-brand-700" />
        <path d="M98 54 V100" className="stroke-brand-700" strokeWidth="3" opacity="0.5" />
        <rect x="10" y="108" width="10" height="10" rx="2" className="fill-ink" />
        <rect x="176" y="108" width="10" height="10" rx="2" className="fill-ink" />
        <rect x="34" y="22" width="40" height="26" rx="8" className="fill-accent" transform="rotate(-8 54 35)" />
      </g>

      {/* Floor lamp */}
      <g transform="translate(452 120)">
        <path d="M-22 0 H22 L30 40 H-30 Z" className="fill-accent" />
        <path d="M0 40 V196" className="stroke-ink" strokeWidth="5" strokeLinecap="round" />
        <path d="M-16 198 H16" className="stroke-ink" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Small box on the floor */}
      <Box x={226} y={286} w={40} h={32} />
    </svg>
  );
}
