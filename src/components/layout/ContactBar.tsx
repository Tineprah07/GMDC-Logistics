import { Icon } from "@/components/icons/Icon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";

/**
 * Always-available contact shortcuts: a floating WhatsApp button on tablet and
 * desktop, and a sticky Call / WhatsApp bar on phones.
 */
export function ContactBar() {
  return (
    <>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message GMDC Logistics on WhatsApp"
        className="fixed right-6 bottom-6 z-30 hidden size-14 items-center justify-center rounded-full bg-whatsapp-dark text-white shadow-raised transition-transform duration-200 hover:scale-105 hover:bg-whatsapp-darker md:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {/* Spacer so the fixed bar never covers the end of the page */}
      <div aria-hidden="true" className="h-[4.5rem] bg-brand-900 md:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <a
          href={telHref()}
          aria-label={`Call ${siteConfig.phone.display}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-control border border-line bg-white text-[0.9375rem] font-semibold text-ink"
        >
          <Icon name="call" filled className="text-brand-600" />
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-control bg-whatsapp-dark text-[0.9375rem] font-semibold text-white"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
