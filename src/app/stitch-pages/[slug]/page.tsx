import fs from "node:fs";
import path from "node:path";

type Screen = {
  index: number;
  screenId: string;
  imageUrl?: string;
  localHtmlPath?: string | null;
};

type StitchIndex = {
  screens: Screen[];
};

const BASE_PATH = process.env.GITHUB_ACTIONS === "true" ? "/property-management-web" : "";

function getIndex(): StitchIndex {
  const file = path.join(process.cwd(), "public", "stitch-html", "index.json");
  return JSON.parse(fs.readFileSync(file, "utf8")) as StitchIndex;
}

function withBasePath(url: string): string {
  return url.startsWith("/") ? `${BASE_PATH}${url}` : url;
}

export function generateStaticParams() {
  const data = getIndex();
  return data.screens.map((s) => ({ slug: `${s.index}-${s.screenId}` }));
}

export default async function StitchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getIndex();
  const found = data.screens.find((s) => `${s.index}-${s.screenId}` === slug);

  if (!found) {
    return <main className="mx-auto max-w-6xl px-6 py-10 text-slate-200">Screen not found.</main>;
  }

  return (
    <main className="min-h-screen bg-white">
      {found.localHtmlPath ? (
        <iframe src={withBasePath(found.localHtmlPath)} className="h-screen w-full border-0" title={slug} />
      ) : found.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={found.imageUrl} alt={slug} className="h-auto w-full" />
      ) : (
        <div className="p-6 text-slate-800">No HTML or image available for this screen.</div>
      )}
    </main>
  );
}
