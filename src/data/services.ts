import type { IconName } from "@/components/icons/Icon";

/**
 * Service content, in display order. Copy uses only facts from the brief in CLAUDE.md.
 * `icon` is a Google Material Symbol name (see components/icons/Icon.tsx).
 */

export type Service = {
  slug: string;
  title: string;
  /** The main service is visually featured. */
  featured?: boolean;
  summary: string;
  description: [string, string];
  idealFor: string[];
  benefits: string[];
  icon: IconName;
};

export const services: Service[] = [
  {
    slug: "same-day-express-courier",
    title: "Same-Day & Express Courier",
    featured: true,
    summary: "Urgent point-to-point and dedicated deliveries, collected and delivered the same day.",
    description: [
      "When something has to get there today, we collect it and take it straight to its destination. Your item travels in a dedicated van, point to point, with no detours via a depot.",
      "We run 24 hours a day, 7 days a week, so urgent jobs can be booked at any hour, including evenings, weekends and nights.",
    ],
    idealFor: ["Local businesses", "Legal firms", "Medical suppliers", "Industrial and replacement parts"],
    benefits: [
      "Available 24/7, every day of the week",
      "Dedicated, direct point-to-point delivery",
      "Goods-in-transit insured",
      "SWB and LWB vans to suit the load",
    ],
    icon: "bolt",
  },
  {
    slug: "small-removals",
    title: "Small Removals",
    summary: "House, flat and student moves, single furniture items and white goods.",
    description: [
      "Not every move needs a large Luton van. We handle smaller moves, from a flat or student room to a few boxes, a single piece of furniture or a white goods appliance.",
      "Tell us what needs moving and where, and we'll give you a clear quote with no surprises.",
    ],
    idealFor: ["Flat and small house moves", "Student moves", "Single furniture items", "White goods"],
    benefits: [
      "Right-sized vans for smaller jobs",
      "Door-to-door service",
      "Goods-in-transit insured",
      "Clear quote before we start",
    ],
    icon: "weekend",
  },
  {
    slug: "multi-drop-parcel-delivery",
    title: "Multi-Drop Parcel Delivery",
    summary: "Daily multi-stop parcel routes for logistics networks and local depots.",
    description: [
      "We run daily multi-drop parcel routes, working alongside logistics networks and local depots to get parcels to their final addresses.",
      "With SWB and LWB vans available, we can match the vehicle to the size of the route.",
    ],
    idealFor: ["Logistics networks", "Local depots", "Regular parcel routes"],
    benefits: [
      "Daily multi-stop routes",
      "SWB and LWB vans for different route sizes",
      "Goods-in-transit insured",
    ],
    icon: "route",
  },
  {
    slug: "e-commerce-retail-delivery",
    title: "E-Commerce & Retail Delivery",
    summary: "Same-day or scheduled door-to-door drop-offs for shops and online stores.",
    description: [
      "We deliver for local shops, bakeries and online stores, door to door, either the same day or on a schedule that suits you and your customers.",
      "It's a straightforward way to offer reliable local delivery without running your own vans.",
    ],
    idealFor: ["Online shops", "Local shops", "Bakeries"],
    benefits: [
      "Same-day or scheduled delivery",
      "Door-to-door drop-offs",
      "Goods-in-transit insured",
      "Quote on request to fit your volumes",
    ],
    icon: "shopping_bag",
  },
  {
    slug: "event-exhibition-support",
    title: "Event & Exhibition Support",
    summary: "Display stands, AV equipment and promotional materials to and from venues.",
    description: [
      "We transport display stands, AV equipment and promotional materials to and from venues and conference centres.",
      "Because we work 24/7, we can fit around early set-ups and late breakdowns.",
    ],
    idealFor: ["Exhibitors", "Event organisers", "Conference and venue teams"],
    benefits: [
      "Available around early and late event schedules",
      "LWB vans for longer items and stands",
      "Goods-in-transit insured",
    ],
    icon: "co_present",
  },
  {
    slug: "trade-construction-deliveries",
    title: "Trade & Construction Deliveries",
    summary: "Building materials, tools and supplies delivered direct to the job site.",
    description: [
      "We deliver building materials, tools and supplies directly to job sites for contractors and tradespeople.",
      "Keep the work moving without leaving site to collect what you need.",
    ],
    idealFor: ["Contractors", "Tradespeople", "Builders"],
    benefits: [
      "Delivered direct to site",
      "Available 24/7",
      "SWB and LWB vans to suit the load",
      "Goods-in-transit insured",
    ],
    icon: "construction",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
