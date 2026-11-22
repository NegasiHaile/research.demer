import Link from "next/link";

export const CONTACT_EMAIL = "research@demer.health";
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Partnership inquiry")}`;

export function Logo() {
  return (
    <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3" aria-label="DEMER research home">
      {/* Research mark: slanted "D" whose left stroke is built from speed dashes (same artwork as public/research-logo.svg) */}
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0 text-brand-600 sm:h-10 sm:w-10" aria-hidden="true">
        <g transform="translate(5 0) skewX(-10)" fill="currentColor">
          <path fillRule="evenodd" d="M28 8h6a24 24 0 0 1 0 48h-6ZM31 19h3a13 13 0 0 1 0 26h-3Z" />
          <path
            d="M16 10.5h12.5M20 17.7h8.5M11 17.7h4M16 24.8h12.5M13 32h15.5M18 39.2h10.5M16 46.3h12.5M7 46.3h4M16 53.5h12.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <circle cx="9" cy="10.5" r="2.5" />
          <circle cx="8" cy="24.8" r="2.5" />
          <circle cx="11" cy="39.2" r="2.5" />
          <circle cx="10" cy="53.5" r="2.5" />
        </g>
      </svg>
      <span className="flex items-center gap-1.5 sm:gap-2">
        {/* Official DEMER block-letter wordmark (from demer.health), recolored blue.
            Explicit width keeps the 1630:336 ratio so it never collapses or stretches in flex. */}
        <svg
          viewBox="115 220 1630 336"
          className="h-4 w-[78px] shrink-0 text-brand-600 sm:h-[22px] sm:w-[107px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M115 220H280A168 168 0 0 1 280 556H115V421H193V486H280A98 98 0 0 0 280 290H193V354H115ZM193 354H286A33.5 33.5 0 0 1 286 421H193Z" />
          <path d="M467 220H723V287H544V354H699V421H544V489H723V556H467V421H544V354H467Z" />
          <path d="M766 220H848L932 365L1018 220H1101V556H1023V345L932 487L843 345V556H766Z" />
          <path d="M1144 220H1400V287H1221V354H1376V421H1221V489H1400V556H1144V421H1221V354H1144Z" />
          <path d="M1447 220H1638A100.5 100.5 0 0 1 1638 421H1630L1745 556H1648L1524 421V556H1447V421H1524V354H1631A33.5 33.5 0 0 0 1631 287H1524V354H1447Z" />
        </svg>
        <span className="text-base leading-none font-semibold tracking-tight text-brand-600 sm:text-[22px]">
          research
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader({ current }: { current?: "focus" }) {
  const onFocus = current === "focus";
  return (
    <header className="shrink-0 border-b border-paper-line">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Logo />
        <Link
          href="/focus"
          aria-current={onFocus ? "page" : undefined}
          className={`shrink-0 text-sm font-medium underline-offset-4 transition hover:text-brand-600 hover:underline sm:text-base ${
            onFocus ? "text-brand-600 underline decoration-2" : "text-ink"
          }`}
        >
          Where we focus?
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="shrink-0 border-t border-paper-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-5 py-3 text-xs text-ink-mute sm:flex-row sm:px-6 sm:py-4 sm:text-sm">
        <span>
          © 2026{" "}
          <a href="https://demer.health" className="font-medium text-brand-600 transition hover:text-brand-700 hover:underline">
            Demer Health
          </a>
          . All rights reserved.
        </span>
        <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-brand-600">
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}

export function PartnerButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CONTACT_HREF}
      className={`grain-solid inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:px-7 sm:py-3.5 sm:text-base ${className}`}
    >
      Partner with us
    </a>
  );
}
