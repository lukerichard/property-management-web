const pillars = [
  {
    title: "Owner Dashboard",
    description: "Portfolio snapshot, occupancy, cash flow, and urgent tasks in one place.",
  },
  {
    title: "Tenant & Lease Ops",
    description: "Lease lifecycle, renewals, reminders, and communication history.",
  },
  {
    title: "Maintenance Workflows",
    description: "Intake, triage, assignment, vendor coordination, and SLA tracking.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Property Management Platform</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Stitch design → production web app, on a reusable company standard.
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          This project is bootstrapped with the standard stack for future web products: Next.js + TypeScript + Tailwind,
          feature-folder architecture, GitHub CI flow, and Vercel deployment.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
              <h2 className="text-lg font-medium text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-sm text-cyan-100">
          Next step: import your Stitch UI artifacts (project/export/screens) and map them into `src/features/*` routes.
        </div>
      </section>
    </main>
  );
}
