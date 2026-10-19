"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

// `label` is shown in the compact dropdown; `service` goes in the WhatsApp message
const jobTypes = {
  courier: { label: "Courier", service: "Same-day courier" },
  removal: { label: "Removal", service: "Small removal" },
  other: { label: "Other", service: "Something else" },
} as const;

/**
 * Search-style quick quote in the hero: two postcodes and a job type, sent as a
 * ready-written WhatsApp message. Works with no backend.
 */
export function HeroQuote() {
  const id = useId();
  const [missing, setMissing] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const from = String(data.get("from") ?? "").trim();
    const to = String(data.get("to") ?? "").trim();
    const type = String(data.get("type") ?? "courier") as keyof typeof jobTypes;

    setMissing(!from || !to);
    if (!from || !to) return;

    const message = [
      `Hi ${siteConfig.name}, I'd like a quote.`,
      `Service: ${jobTypes[type].service}`,
      `Collection: ${from.toUpperCase()}`,
      `Delivery: ${to.toUpperCase()}`,
    ].join("\n");

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Quick quote"
        className="grid grid-cols-1 gap-2 rounded-card border border-line bg-white p-2 shadow-card sm:grid-cols-2 xl:flex xl:items-center xl:gap-0 xl:rounded-full"
      >
        <Field id={`${id}-from`} name="from" label="Collection postcode" placeholder="From postcode" icon="trip_origin" invalid={missing} />
        <RouteConnector />
        <Field id={`${id}-to`} name="to" label="Delivery postcode" placeholder="To postcode" icon="location_on" invalid={missing} />
        <Divider />
        <div className="relative flex items-center rounded-control border border-line-soft bg-soft/60 xl:rounded-none xl:border-0 xl:bg-transparent">
          <label htmlFor={`${id}-type`} className="sr-only">
            Job type
          </label>
          <select
            id={`${id}-type`}
            name="type"
            className="h-12 w-full cursor-pointer appearance-none bg-transparent pr-8 pl-3 text-[0.9375rem] font-semibold text-ink focus:outline-none xl:w-auto"
          >
            {Object.entries(jobTypes).map(([value, job]) => (
              <option key={value} value={value}>
                {job.label}
              </option>
            ))}
          </select>
          <Icon name="expand_more" className="pointer-events-none absolute right-2 text-muted" />
        </div>
        <button
          type="submit"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 font-bold text-white shadow-card transition-colors hover:bg-brand-700"
        >
          <WhatsAppIcon className="size-5" />
          Get quote
        </button>
      </form>

      {missing ? (
        <p role="alert" className="mt-3 px-2 text-sm font-semibold text-red-700">
          Please add both postcodes so we can quote.
        </p>
      ) : (
        <p className="mt-3 px-2 text-sm text-muted">
          We&apos;ll reply on WhatsApp. Rather talk?{" "}
          <a href={telHref()} className="font-bold text-ink underline-offset-4 hover:underline">
            Call {siteConfig.phone.displayLocal}
          </a>
        </p>
      )}
    </div>
  );
}

/** Short dashed route between the From and To fields (wider screens). */
function RouteConnector() {
  return (
    <span aria-hidden="true" className="hidden shrink-0 items-center text-accent-ink xl:flex">
      <span className="w-2.5 border-t-2 border-dotted border-current" />
      <Icon name="arrow_forward" className="-ml-1 text-[0.95rem]" />
    </span>
  );
}

function Divider() {
  return <span aria-hidden="true" className="hidden h-7 w-px shrink-0 bg-line xl:block" />;
}

function Field({
  id,
  name,
  label,
  placeholder,
  icon,
  invalid,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  icon: "trip_origin" | "location_on";
  invalid: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 pr-1 pl-3 rounded-control border border-line-soft bg-soft/60 xl:rounded-none xl:border-0 xl:bg-transparent">
      <Icon name={icon} filled className={icon === "trip_origin" ? "text-brand-600" : "text-accent-ink"} />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        required
        placeholder={placeholder}
        autoComplete="postal-code"
        autoCapitalize="characters"
        aria-invalid={invalid || undefined}
        className={cn(
          "h-12 w-full min-w-0 bg-transparent text-[0.9375rem] text-ink uppercase placeholder:text-muted placeholder:normal-case focus:outline-none",
        )}
      />
    </div>
  );
}
