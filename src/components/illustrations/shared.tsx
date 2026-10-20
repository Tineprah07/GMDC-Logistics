/**
 * Shared pieces for the hero illustrations. Colours come from theme tokens
 * (fill-brand-*, fill-accent...) so the drawings follow any palette change.
 * Cardboard is a fixed neutral tan, since boxes are brown whatever the brand.
 */

export const CARDBOARD = "#D9A066";
export const CARDBOARD_DARK = "#B9824B";
export const TAPE = "#F3D7AE";

/** A cardboard box with tape, drawn from its top-left corner. */
export function Box({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={CARDBOARD} />
      <rect x={x} y={y} width={w} height={h * 0.18} rx="3" fill={CARDBOARD_DARK} />
      <rect x={x + w / 2 - w * 0.08} y={y} width={w * 0.16} height={h} fill={TAPE} opacity="0.9" />
    </g>
  );
}

/** Side view of a cartoon GMDC van, about 225 x 115 units, drawn from its top-left corner. */
export function CartoonVan({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="112" cy="112" rx="112" ry="8" className="fill-ink" opacity="0.15" />
      {/* Cargo body and cab */}
      <rect x="0" y="0" width="152" height="92" rx="12" className="fill-white" />
      <path d="M148 22 H186 Q204 22 212 44 L222 72 V92 H148 Z" className="fill-white" />
      <path d="M158 31 H183 Q195 31 200 45 L205 58 H158 Z" className="fill-brand-200" />
      {/* Brand stripe and name */}
      <rect x="0" y="56" width="222" height="11" className="fill-brand-600" />
      <text x="18" y="40" className="fill-brand-600 font-heading" fontSize="22" fontWeight="800" letterSpacing="-0.5">
        GMDC
      </text>
      <path d="M92 26 h12 M88 32 h16 M92 38 h12" className="stroke-accent" strokeWidth="3" strokeLinecap="round" />
      {/* Lights and bumper */}
      <rect x="213" y="75" width="9" height="7" rx="2" className="fill-accent" />
      <rect x="204" y="84" width="22" height="10" rx="4" className="fill-ink" />
      <rect x="0" y="84" width="14" height="10" rx="4" className="fill-ink" />
      {/* Wheels */}
      {[44, 176].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="94" r="19" className="fill-ink" />
          <circle cx={cx} cy="94" r="8" className="fill-brand-100" />
        </g>
      ))}
    </g>
  );
}
