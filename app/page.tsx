import { PartnerButton, SiteFooter, SiteHeader } from "./_components/site";

export default function Home() {
  return (
    <div className="flex h-svh flex-col overflow-hidden">
      <SiteHeader />

      <main className="flex min-h-0 flex-1 items-center justify-center px-5 py-[max(1.5rem,4vh)] sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="text-display font-semibold text-ink">
            Global health AI must learn from and be tested on{" "}
            <span className="text-brand-600">Ethiopian data</span> before it
            reaches our clinics.
          </h1>

          <p className="mt-[max(1.25rem,3.5vh)] max-w-4xl text-[15px] leading-relaxed text-ink-soft sm:mt-[max(1.5rem,3.5vh)] sm:text-lg lg:text-xl">
            Diseases don&apos;t behave the same everywhere. A condition can
            present, progress and respond to treatment differently depending on
            geography, genetics and environment. We research health AI safety
            for Ethiopian communities: we build evaluation benchmark datasets,
            test models before deployment, and provide high-quality,
            clinician-led data annotation.
          </p>

          <PartnerButton className="mt-[max(2rem,5vh)]" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
