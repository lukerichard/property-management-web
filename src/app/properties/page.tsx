import { properties } from "@/lib/mock-data";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function PropertiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-white">Properties</h1>
      <p className="mt-2 text-slate-300">Your portfolio inventory and top-line metrics.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <article key={property.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-medium text-white">{property.name}</h2>
            <p className="mt-1 text-sm text-slate-400">{property.address}</p>

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-300">
                <dt>Units</dt>
                <dd>{property.units}</dd>
              </div>
              <div className="flex justify-between text-slate-300">
                <dt>Occupancy</dt>
                <dd>{Math.round(property.occupancyRate * 100)}%</dd>
              </div>
              <div className="flex justify-between text-slate-300">
                <dt>Revenue</dt>
                <dd>{money.format(property.monthlyRevenue)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </main>
  );
}
