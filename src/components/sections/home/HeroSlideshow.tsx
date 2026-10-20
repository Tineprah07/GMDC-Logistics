"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon, type IconName } from "@/components/icons/Icon";
import { DoorToDoor } from "@/components/illustrations/DoorToDoor";
import { Removals } from "@/components/illustrations/Removals";
import { RouteMap } from "@/components/illustrations/RouteMap";
import { cn } from "@/lib/utils";

type Card = { icon: IconName; title: string; text: string };

type Slide = {
  label: string;
  content: React.ReactNode;
  /** Floating info cards shown with this slide: top-right and bottom-left */
  cards: [Card, Card];
};

const SLIDE_MS = 6000;

const slides: Slide[] = [
  {
    label: "Our vans",
    content: <VanPhoto />,
    cards: [
      { icon: "verified_user", title: "Delivered, insured", text: "Goods-in-transit cover" },
      { icon: "trip_origin", title: "Same-day collection", text: "Any time, day or night" },
    ],
  },
  {
    label: "Door-to-door delivery",
    content: <DoorToDoor />,
    cards: [
      { icon: "home", title: "Door to door", text: "Homes and businesses" },
      { icon: "bolt", title: "Same-day delivery", text: "Urgent jobs welcome" },
    ],
  },
  {
    label: "Small removals",
    content: <Removals />,
    cards: [
      { icon: "weekend", title: "Small removals", text: "Flats, students, single items" },
      { icon: "local_shipping", title: "SWB & LWB vans", text: "Sized to your load" },
    ],
  },
  {
    label: "Open 24/7",
    content: <RouteMap />,
    cards: [
      { icon: "schedule", title: "Open 24/7", text: "Day and night, every day" },
      { icon: "route", title: "Point to point", text: "Direct, dedicated runs" },
    ],
  },
];

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

/**
 * Hero carousel: one photo and three illustrations, cross-fading every 6s.
 * Pauses on hover, keyboard focus, the pause button, or when the visitor
 * prefers reduced motion (then it never auto-plays).
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );

  const autoplay = playing && !reducedMotion;
  const advancing = autoplay && !hovered && !focused;

  useEffect(() => {
    if (!advancing) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [advancing]);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);
  const current = slides[index];

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="What GMDC Logistics does"
      className="relative mx-auto w-full max-w-xl sm:pb-8 lg:max-w-none lg:pb-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) setFocused(false);
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-brand-50 shadow-raised lg:aspect-[5/4]">
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}
            aria-hidden={i !== index}
            inert={i !== index}
            className={cn(
              "absolute inset-0 transition-[opacity,transform] duration-700 ease-brand motion-reduce:transition-none",
              i === index ? "scale-100 opacity-100" : "scale-[1.02] opacity-0",
            )}
          >
            {slide.content}
          </div>
        ))}

        {/* Controls */}
        <div className="absolute right-3 bottom-3 z-10 flex items-center gap-1 rounded-full bg-white/90 p-1 shadow-soft backdrop-blur-md sm:right-4 sm:bottom-4">
          <ControlButton label="Previous slide" onClick={() => go(index - 1)} icon="chevron_left" />
          <div className="flex items-center gap-1.5 px-1">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${slide.label}`}
                aria-current={i === index ? "true" : undefined}
                className="flex h-6 items-center"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-brand-600" : "w-2 bg-ink/25 hover:bg-ink/45",
                  )}
                />
              </button>
            ))}
          </div>
          <ControlButton label="Next slide" onClick={() => go(index + 1)} icon="chevron_right" />
          {!reducedMotion && (
            <ControlButton
              label={playing ? "Pause slideshow" : "Play slideshow"}
              onClick={() => setPlaying((value) => !value)}
              icon={playing ? "pause" : "play_arrow"}
            />
          )}
        </div>
      </div>

      {/* Floating cards: re-keyed per slide so they animate in with it */}
      <FloatingCard
        key={`top-${index}`}
        card={current.cards[0]}
        tone="accent"
        className="-top-5 -right-2 sm:-right-6"
      />
      <FloatingCard
        key={`bottom-${index}`}
        card={current.cards[1]}
        tone="brand"
        className="bottom-0 max-sm:hidden sm:-left-6 lg:bottom-6"
      />

      <p className="sr-only" aria-live={advancing ? "off" : "polite"}>
        {`Slide ${index + 1} of ${slides.length}: ${current.label}`}
      </p>
    </div>
  );
}

function ControlButton({ label, onClick, icon }: { label: string; onClick: () => void; icon: IconName }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-50 hover:text-brand-600"
    >
      <Icon name={icon} className="text-[1.15rem]" />
    </button>
  );
}

function FloatingCard({ card, tone, className }: { card: Card; tone: "brand" | "accent"; className: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute z-10 flex animate-fade-up items-center gap-3 rounded-card bg-white py-3 pr-5 pl-3 shadow-raised motion-reduce:animate-none",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-control",
          tone === "accent" ? "bg-accent-soft text-accent-ink" : "bg-brand-50 text-brand-600",
        )}
      >
        <Icon name={card.icon} filled className="text-[1.35rem]" />
      </span>
      <span>
        <span className="block font-heading text-[0.9375rem] font-bold text-ink">{card.title}</span>
        <span className="block text-[0.8rem] text-muted">{card.text}</span>
      </span>
    </div>
  );
}

/** Slide 1: the van photo with a dashed delivery route drawn across it. */
function VanPhoto() {
  return (
    <>
      <Image
        src="/images/hero-van.jpg"
        alt="A white long wheelbase van parked on a city street"
        fill
        preload
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover object-[35%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-brand-900/45 via-transparent to-brand-900/10" />
      <svg aria-hidden="true" viewBox="0 0 400 320" preserveAspectRatio="none" className="absolute inset-0 size-full" fill="none">
        <path
          d="M40 285 C 120 280, 140 200, 210 190 S 330 150, 355 45"
          className="stroke-accent"
          strokeWidth="3"
          strokeDasharray="2 9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <RoutePin className="bottom-[6%] left-[7%]" />
      <RoutePin className="top-[10%] right-[8%]" />
    </>
  );
}

function RoutePin({ className }: { className: string }) {
  return (
    <span aria-hidden="true" className={`absolute flex size-4 items-center justify-center ${className}`}>
      <span className="absolute size-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
      <span className="relative size-3 rounded-full border-2 border-white bg-accent" />
    </span>
  );
}
