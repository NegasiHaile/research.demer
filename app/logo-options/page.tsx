// TEMPORARY: logo comparison page. Delete this folder once a logo is chosen.
import type { ReactNode } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const options: { key: string; name: string; idea: string; mark: ReactNode }[] = [
  {
    key: "A",
    name: "Lab flask + pulse",
    idea: "Research (flask) holding a heartbeat (health).",
    mark: (
      <g {...stroke} strokeWidth={4.5}>
        <path d="M24 8h16" />
        <path d="M28 8v16L13.5 49a5 5 0 0 0 4.3 7.5h28.4a5 5 0 0 0 4.3-7.5L36 24V8" />
        <path d="M18 43h8l3-6 5 12 3-6h9" />
      </g>
    ),
  },
  {
    key: "B",
    name: "Magnifier + plus",
    idea: "Investigating health. Plus is blue, not a red cross.",
    mark: (
      <g {...stroke}>
        <circle cx="27" cy="27" r="18" strokeWidth={5} />
        <path d="M40 40l14 14" strokeWidth={7} />
        <path d="M27 19v16M19 27h16" strokeWidth={5} />
      </g>
    ),
  },
  {
    key: "C",
    name: "D + pulse",
    idea: "DEMER monogram with a heartbeat running through it.",
    mark: (
      <g {...stroke}>
        <path d="M16 10h14a22 22 0 0 1 0 44H16Z" strokeWidth={5} />
        <path d="M4 32h14l4-9 6 18 4-9h28" strokeWidth={4.5} />
      </g>
    ),
  },
  {
    key: "D",
    name: "Solid tile + pulse",
    idea: "Same family as the shop icon: a filled blue tile with a white heartbeat.",
    mark: (
      <>
        <rect x="4" y="4" width="56" height="56" rx="14" fill="currentColor" />
        <path d="M12 33h11l4-10 7 20 4-10h14" {...stroke} stroke="#fff" strokeWidth={4.5} />
      </>
    ),
  },
];

function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="115 220 1630 336" className="h-5.5 w-auto" fill="currentColor" aria-hidden="true">
        <path d="M115 220H280A168 168 0 0 1 280 556H115V421H193V486H280A98 98 0 0 0 280 290H193V354H115ZM193 354H286A33.5 33.5 0 0 1 286 421H193Z" />
        <path d="M467 220H723V287H544V354H699V421H544V489H723V556H467V421H544V354H467Z" />
        <path d="M766 220H848L932 365L1018 220H1101V556H1023V345L932 487L843 345V556H766Z" />
        <path d="M1144 220H1400V287H1221V354H1376V421H1221V489H1400V556H1144V421H1221V354H1144Z" />
        <path d="M1447 220H1638A100.5 100.5 0 0 1 1638 421H1630L1745 556H1648L1524 421V556H1447V421H1524V354H1631A33.5 33.5 0 0 0 1631 287H1524V354H1447Z" />
      </svg>
      <span className="text-[22px] leading-none font-semibold tracking-tight">research</span>
    </span>
  );
}

export default function LogoOptions() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Logo options</h1>
      <p className="mt-1 text-ink-soft">Pick a letter. The last row shows the wordmark alone, with no icon.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {options.map((o) => (
          <section key={o.key} className="rounded-2xl border border-paper-line bg-white p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="font-semibold">
                {o.key}. {o.name}
              </h2>
              <span className="text-xs text-ink-mute">{o.idea}</span>
            </div>
            <div className="mt-6 flex items-center gap-3 text-brand-700">
              <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">{o.mark}</svg>
              <Wordmark />
            </div>
            <div className="mt-6 flex items-end gap-5 text-brand-700">
              <svg viewBox="0 0 64 64" className="h-24 w-24" aria-hidden="true">{o.mark}</svg>
              <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">{o.mark}</svg>
              <svg viewBox="0 0 64 64" className="h-4 w-4" aria-hidden="true">{o.mark}</svg>
              <span className="rounded-lg bg-brand-700 p-2 text-white">
                <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">{o.mark}</svg>
              </span>
            </div>
          </section>
        ))}

        <section className="rounded-2xl border border-paper-line bg-white p-6 sm:col-span-2">
          <h2 className="font-semibold">E. Wordmark only (like demer.health)</h2>
          <div className="mt-6 text-brand-700">
            <Wordmark />
          </div>
        </section>
      </div>
    </main>
  );
}
