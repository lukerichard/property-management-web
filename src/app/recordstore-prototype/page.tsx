import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

type Screen = { slug: string; title: string };

type Manifest = { projectId: string; screens: Screen[] };

function getManifest(): Manifest {
  const p = path.join(process.cwd(), "public", "recordstore-prototype", "index.json");
  return JSON.parse(fs.readFileSync(p, "utf8")) as Manifest;
}

export default function RecordstorePrototypeIndex() {
  const m = getManifest();
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-white">Record Store Prototype</h1>
      <p className="mt-2 text-slate-300">Stitch project: {m.projectId}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {m.screens.map((s) => (
          <Link key={s.slug} href={`/recordstore-prototype/${s.slug}`} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-400/40">
            <p className="text-white">{s.title}</p>
            <p className="text-xs text-slate-400">/{s.slug}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
