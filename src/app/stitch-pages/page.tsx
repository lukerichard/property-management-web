import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

type Screen = {
  index: number;
  screenId: string;
  imageUrl?: string;
  localHtmlPath?: string | null;
};

type StitchIndex = {
  projectId: string;
  screens: Screen[];
};

function getIndex(): StitchIndex | null {
  try {
    const file = path.join(process.cwd(), "public", "stitch-html", "index.json");
    return JSON.parse(fs.readFileSync(file, "utf8")) as StitchIndex;
  } catch {
    return null;
  }
}

export default function StitchPagesIndex() {
  const data = getIndex();

  if (!data) {
    return <main className="mx-auto max-w-6xl px-6 py-10 text-slate-200">No Stitch pages available yet.</main>;
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-white">Stitch Pages</h1>
      <p className="mt-2 text-slate-300">Project {data.projectId} mapped into website routes.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {data.screens.map((s) => {
          const slug = `${s.index}-${s.screenId}`;
          return (
            <Link
              key={slug}
              href={`/stitch-pages/${slug}`}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-400/40"
            >
              <p className="text-sm text-slate-400">Screen #{s.index}</p>
              <p className="truncate text-white">{s.screenId}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
