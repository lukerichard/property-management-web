import { tenants } from "@/lib/mock-data";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function TenantsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-white">Tenants</h1>
      <p className="mt-2 text-slate-300">Lease and payment visibility across your portfolio.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {tenants.map((tenant) => (
          <article key={tenant.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-medium text-white">{tenant.name}</h2>
                <p className="text-sm text-slate-400">{tenant.unit}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  tenant.status === "Late" ? "bg-rose-500/20 text-rose-200" : "bg-emerald-500/20 text-emerald-200"
                }`}
              >
                {tenant.status}
              </span>
            </div>

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-300">
                <dt>Lease ends</dt>
                <dd>{tenant.leaseEnd}</dd>
              </div>
              <div className="flex justify-between text-slate-300">
                <dt>Balance due</dt>
                <dd>{money.format(tenant.balanceDue)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </main>
  );
}
