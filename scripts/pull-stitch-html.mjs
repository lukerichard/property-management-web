import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "docs", "stitch", "manifest.json");
const outDir = path.join(root, "public", "stitch-html");

const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
await fs.mkdir(outDir, { recursive: true });

let ok = 0;
let skip = 0;
let fail = 0;

for (const s of manifest.screens) {
  if (!s.htmlUrl) {
    skip++;
    continue;
  }

  try {
    const resp = await fetch(s.htmlUrl);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const html = await resp.text();
    const fileName = `${s.index}-${s.screenId}.html`;
    await fs.writeFile(path.join(outDir, fileName), html, "utf8");
    ok++;
  } catch (err) {
    console.error("fail", s.index, s.screenId, String(err));
    fail++;
  }
}

await fs.writeFile(
  path.join(outDir, "index.json"),
  JSON.stringify(
    {
      projectId: manifest.projectId,
      generatedAt: new Date().toISOString(),
      count: manifest.count,
      pulled: ok,
      skipped: skip,
      failed: fail,
      screens: manifest.screens.map((s) => ({
        ...s,
        localHtmlPath: s.htmlUrl ? `/stitch-html/${s.index}-${s.screenId}.html` : null,
      })),
    },
    null,
    2
  )
);

console.log(JSON.stringify({ ok, skip, fail, outDir }, null, 2));
