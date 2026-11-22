import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PartnerButton, SiteFooter, SiteHeader } from "../_components/site";

export const metadata: Metadata = {
  title: "Our focus | Demer Health Research",
  description:
    "Our research focus: healthcare communication, medical imaging (X-ray, MRI), chronic disease data, and lifestyle and wellness data such as sleep, diet and exercise.",
  alternates: { canonical: "/focus" },
};

const icon = {
  viewBox: "0 0 24 24",
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const areas: { title: string; body: string; tags: string[]; icon: ReactNode }[] = [
  {
    title: "Healthcare communication",
    body: "Patient–doctor conversations and consultations. We test whether AI understands, explains and advises safely in real Ethiopian clinical settings.",
    tags: ["Patient–doctor dialogue", "Consultations"],
    icon: (
      <svg {...icon}>
        <path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M17 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-4-3h-3a2 2 0 0 1-2-2" />
      </svg>
    ),
  },
  {
    title: "Medical imaging",
    body: "X-ray and MRI studies, read and labeled by clinicians, to measure how imaging AI performs on Ethiopian patients.",
    tags: ["X-ray", "MRI"],
    icon: (
      <svg {...icon}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M12 6v12M8 9c1.5.8 2.7.8 4 0 1.3.8 2.5.8 4 0M7.5 12.5c1.8.9 3.2.9 4.5 0 1.3.9 2.7.9 4.5 0M8 16c1.5.8 2.7.8 4 0 1.3.8 2.5.8 4 0" />
      </svg>
    ),
  },
  {
    title: "Chronic disease data",
    body: "Long-term patient records that show whether AI tracks progression and risk accurately for our population.",
    tags: ["Long-term conditions", "Progression & risk"],
    icon: (
      <svg {...icon}>
        <path d="M3 3v18h18" />
        <path d="m7 15 3.5-4 3 2.5L20 7" />
      </svg>
    ),
  },
  {
    title: "Lifestyle & wellness data",
    body: "Sleep, diet and exercise data that shape health outcomes, so AI advice fits how people in Ethiopia actually live.",
    tags: ["Sleep", "Diet", "Exercise"],
    icon: (
      <svg {...icon}>
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
        <path d="M8 11h2l1-2 2 4 1-2h2" />
      </svg>
    ),
  },
];

// Same torn-paper top edges used on demer.health cards
const tornEdges = [
  "polygon(0 4%, 30% 1%, 62% 4%, 74% 1.5%, 86% 3.5%, 100% 0.5%, 100% 100%, 0 100%)",
  "polygon(0 1.5%, 18% 4%, 44% 0.5%, 70% 3.5%, 100% 1%, 100% 100%, 0 100%)",
  "polygon(0 3%, 22% 0.5%, 40% 3.5%, 66% 1%, 100% 4%, 100% 100%, 0 100%)",
  "polygon(0 1%, 25% 3.5%, 52% 1%, 78% 4%, 100% 1.5%, 100% 100%, 0 100%)",
];

export default function Focus() {
  return (
    <div className="flex min-h-svh flex-col lg:h-svh lg:overflow-hidden">
      <SiteHeader current="focus" />

      <main className="flex min-h-0 flex-1 items-center px-5 py-[max(2rem,5vh)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[clamp(1.5rem,0.9rem+2.2vw,2.75rem)] leading-tight font-semibold tracking-tight text-ink">
              Where health AI must prove itself on <span className="text-brand-600">Ethiopian data</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-lg">
              We build benchmarks, test models and annotate data across four areas where local context changes
              what safe, accurate AI looks like.
            </p>
          </div>

          <div className="mt-[max(2rem,5vh)] grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {areas.map((a, i) => (
              <article
                key={a.title}
                className="relative isolate flex flex-col px-5 pt-7 pb-5 transition duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 lg:px-6 lg:pt-8 lg:pb-6"
              >
                {/* Grain paper backdrop with a slightly torn top edge, as on demer.health */}
                <div aria-hidden="true" className="grain-card-brand absolute inset-0 -z-10" style={{ clipPath: tornEdges[i % tornEdges.length] }} />
                <span className="grid h-10 w-10 place-items-center bg-brand-600 text-white">{a.icon}</span>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-ink">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.body}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {a.tags.map((t) => (
                    <li key={t} className="bg-white/55 px-2.5 py-1 text-xs font-medium text-ink-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-[max(2rem,5vh)] text-center">
            <PartnerButton />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
