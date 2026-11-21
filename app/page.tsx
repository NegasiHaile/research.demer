import Image from "next/image";
import Link from "next/link";

const CONTACT_EMAIL = "research@demer.health";
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Partnership inquiry")}`;

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="DEMER research home">
      {/* Research mark: magnifier + heartbeat, in the DEMER shop's ocean blue */}
      <Image src="/research-logo.svg" alt="" width={44} height={44} unoptimized priority className="h-11 w-11" />
      <span className="flex items-center gap-2">
        {/* Official DEMER block-letter wordmark (from demer.health), recolored blue */}
        <svg viewBox="115 220 1630 336" className="h-[22px] w-auto text-brand-700" fill="currentColor" aria-hidden="true">
          <path d="M115 220H280A168 168 0 0 1 280 556H115V421H193V486H280A98 98 0 0 0 280 290H193V354H115ZM193 354H286A33.5 33.5 0 0 1 286 421H193Z" />
          <path d="M467 220H723V287H544V354H699V421H544V489H723V556H467V421H544V354H467Z" />
          <path d="M766 220H848L932 365L1018 220H1101V556H1023V345L932 487L843 345V556H766Z" />
          <path d="M1144 220H1400V287H1221V354H1376V421H1221V489H1400V556H1144V421H1221V354H1144Z" />
          <path d="M1447 220H1638A100.5 100.5 0 0 1 1638 421H1630L1745 556H1648L1524 421V556H1447V421H1524V354H1631A33.5 33.5 0 0 0 1631 287H1524V354H1447Z" />
        </svg>
        <span className="text-[22px] leading-none font-semibold tracking-tight text-brand-500">research</span>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex h-svh flex-col overflow-hidden">
      <header className="border-b border-paper-line">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />
          <a
            href={CONTACT_HREF}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:border-brand-600 hover:text-brand-600"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex min-h-0 flex-1 items-center justify-center px-6 py-[3vh]">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-display font-semibold text-ink">
            Global AI must <span className="font-serif font-normal italic text-brand-600">see</span> Ethiopian disease,
            <br className="hidden sm:block" /> and be proven safe before it reaches care.
          </h1>

          <p className="mt-[3vh] max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            We research health AI safety for Ethiopian communities. We build evaluation benchmark datasets and
            provide high-quality, clinician-led data annotation.
          </p>

          <a
            href={CONTACT_HREF}
            className="mt-[4vh] inline-flex items-center rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Partner with us
          </a>
        </div>
      </main>

      <footer className="border-t border-paper-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-6 py-4 text-sm text-ink-mute sm:flex-row">
          <span>© 2026 Demer Health. All rights reserved.</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-brand-600">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
