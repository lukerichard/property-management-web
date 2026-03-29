import fs from "node:fs";
import path from "node:path";

type Screen = { slug: string; title: string };
type Manifest = { screens: Screen[] };

function getManifest(): Manifest {
  const p = path.join(process.cwd(), "public", "recordstore-prototype", "index.json");
  return JSON.parse(fs.readFileSync(p, "utf8")) as Manifest;
}

export function generateStaticParams() {
  return getManifest().screens.map((s) => ({ slug: s.slug }));
}

export default async function PrototypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getManifest().screens.find((s) => s.slug === slug);
  if (!found) return <main className="p-6">Not found</main>;

  const basePath = process.env.GITHUB_ACTIONS ? "/property-management-web" : "";
  const src = `${basePath}/recordstore-prototype/${slug}.html`;

  return (
    <main className="min-h-screen bg-white">
      <iframe src={src} title={found.title} className="h-screen w-full border-0" />
    </main>
  );
}
