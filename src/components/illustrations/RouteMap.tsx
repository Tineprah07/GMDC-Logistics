/** Cartoon: a street map with a direct route from collection to a delivery pin, and a 24/7 clock badge. */
export function RouteMap() {
  return (
    <svg
      viewBox="0 0 500 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a map with a direct delivery route and a 24/7 clock"
      className="size-full"
    >
      <defs>
        <clipPath id="route-map-card">
          <rect x="40" y="36" width="420" height="328" rx="26" />
        </clipPath>
      </defs>

      <rect width="500" height="400" className="fill-brand-50" />
      <rect x="40" y="44" width="420" height="328" rx="26" className="fill-ink" opacity="0.07" />
      <rect x="40" y="36" width="420" height="328" rx="26" className="fill-white" />

      <g clipPath="url(#route-map-card)">
        {/* Parks and blocks */}
        <rect x="160" y="140" width="80" height="62" rx="10" className="fill-brand-100" />
        <rect x="290" y="244" width="70" height="60" rx="10" className="fill-brand-100" />
        {/* Streets */}
        <g className="stroke-soft-2" strokeWidth="16" strokeLinecap="round">
          <path d="M20 120 H480 M20 222 H480 M20 318 H480" />
          <path d="M140 20 V380 M262 20 V380 M380 20 V380" />
        </g>
        <path d="M20 170 C 140 150, 300 330, 480 280" className="stroke-soft-2" strokeWidth="10" fill="none" />
      </g>

      {/* Route */}
      <path
        d="M96 222 H262 V120 H380"
        className="stroke-brand-600"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M96 222 H262 V120 H380"
        stroke="white"
        strokeWidth="2.5"
        strokeDasharray="6 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Start point */}
      <circle cx="96" cy="222" r="13" className="fill-white stroke-brand-600" strokeWidth="6" />

      {/* Van on the way */}
      <g transform="translate(262 172)">
        <circle r="24" className="fill-brand-600" />
        <rect x="-13" y="-8" width="16" height="13" rx="2" fill="white" />
        <path d="M3 -3 H9 L13 2 V5 H3 Z" fill="white" />
        <circle cx="-7" cy="7" r="3.2" className="fill-brand-900" />
        <circle cx="8" cy="7" r="3.2" className="fill-brand-900" />
      </g>

      {/* Delivery pin */}
      <g transform="translate(380 120)">
        <ellipse cx="0" cy="4" rx="12" ry="4" className="fill-ink" opacity="0.15" />
        <path d="M0 2 C -18 -18, -22 -30, -22 -40 A22 22 0 0 1 22 -40 C 22 -30, 18 -18, 0 2 Z" className="fill-accent" />
        <circle cx="0" cy="-40" r="8" fill="white" />
      </g>

      {/* 24/7 clock badge */}
      <g transform="translate(112 112)">
        <circle r="46" className="fill-brand-900" />
        <circle r="46" className="stroke-accent" strokeWidth="5" fill="none" strokeDasharray="210 80" transform="rotate(-90)" />
        <text y="9" textAnchor="middle" className="fill-white font-heading" fontSize="26" fontWeight="800">
          24/7
        </text>
      </g>
    </svg>
  );
}
