import { tickets } from "@/lib/mock-data";

function badgeColor(priority: "Low" | "Medium" | "High") {
  if (priority === "High") return "bg-rose-500/20 text-rose-200 border-rose-400/30";
  if (priority === "Medium") return "bg-amber-500/20 text-amber-200 border-amber-400/30";
  return "bg-emerald-500/20 text-emerald-200 border-emerald-400/30";
}

export default function MaintenancePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-white">Maintenance</h1>
      <p className="mt-2 text-slate-300">Track active requests and move work to resolution faster.</p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-800 text-slate-300">
            <tr>
              <th className="px-4 py-3">Ticket</th>
              <th className="px-4 py-3">Unit</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Updated</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-slate-800/80 text-slate-200">
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{ticket.issue}</p>
                  <p className="text-xs text-slate-400">{ticket.id}</p>
                </td>
                <td className="px-4 py-3">{ticket.unit}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2 py-1 text-xs ${badgeColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-4 py-3">{ticket.status}</td>
                <td className="px-4 py-3 text-slate-400">{ticket.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
