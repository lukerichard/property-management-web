import { StatCard } from "@/components/ui/stat-card";
import { kpis, properties, tickets } from "@/lib/mock-data";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section>
        <h1 className="text-3xl font-semibold text-white">Portfolio Overview</h1>
        <p className="mt-2 text-slate-300">
          Real-time operations pulse across occupancy, revenue, and maintenance workflows.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Units" value={String(kpis.portfolioUnits)} hint="Across all properties" />
        <StatCard label="Occupancy" value={`${Math.round(kpis.occupancy * 100)}%`} hint="Portfolio average" />
        <StatCard label="Monthly Revenue" value={money.format(kpis.monthlyRevenue)} hint="Current run-rate" />
        <StatCard label="Open Tickets" value={String(kpis.openTickets)} hint="Needs owner attention" />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-medium text-white">Property Performance</h2>
          <div className="mt-4 space-y-3">
            {properties.map((property) => (
              <div key={property.id} className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{property.name}</p>
                    <p className="text-sm text-slate-400">{property.address}</p>
                  </div>
                  <p className="text-sm text-cyan-300">{Math.round(property.occupancyRate * 100)}% occupied</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-medium text-white">Urgent Maintenance Queue</h2>
          <div className="mt-4 space-y-3">
            {tickets.slice(0, 4).map((ticket) => (
              <div key={ticket.id} className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{ticket.issue}</p>
                    <p className="text-sm text-slate-400">
                      {ticket.unit} · {ticket.id}
                    </p>
                  </div>
                  <p className="text-xs text-cyan-300">{ticket.priority}</p>
                </div>
                <p className="mt-2 text-xs text-slate-400">Updated {ticket.updatedAt}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
