import fs from "node:fs/promises";
import path from "node:path";

type StitchScreen = {
  index: number;
  screenId: string;
  htmlUrl?: string;
  imageUrl?: string;
};

type StitchManifest = {
  projectId: string;
  generatedAt: string;
  count: number;
  screens: StitchScreen[];
};

async function getManifest(): Promise<StitchManifest | null> {
  try {
    const filePath = path.join(process.cwd(), "docs", "stitch", "manifest.json");
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as StitchManifest;
  } catch {
    return null;
  }
}

export default async function StitchReviewPage() {
  const manifest = await getManifest();

  if (!manifest) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-semibold text-white">Stitch Review</h1>
        <p className="mt-2 text-slate-300">No Stitch manifest found yet.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-white">Stitch Review</h1>
      <p className="mt-2 text-slate-300">
        Project {manifest.projectId} · {manifest.count} screens · synced {new Date(manifest.generatedAt).toLocaleString()}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {manifest.screens.map((screen) => (
          <article key={screen.screenId} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
            <div className="border-b border-slate-800 px-4 py-3 text-sm text-slate-300">
              #{screen.index} · {screen.screenId}
            </div>
            {screen.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={screen.imageUrl} alt={`Stitch screen ${screen.index}`} className="h-auto w-full" />
            ) : (
              <div className="p-4 text-sm text-slate-400">No image preview available for this screen.</div>
            )}
            {screen.htmlUrl ? (
              <div className="p-4">
                <a
                  href={screen.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-300 hover:text-cyan-200"
                >
                  Open HTML artifact
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
