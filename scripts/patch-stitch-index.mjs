import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "public", "stitch-html", "index.json");
const data = JSON.parse(await fs.readFile(file, "utf8"));

for (const s of data.screens) {
  const localName = `${s.index}-${s.screenId}.html`;
  const p = path.join(process.cwd(), "public", "stitch-html", localName);
  try {
    await fs.access(p);
    s.localHtmlPath = `/stitch-html/${localName}`;
  } catch {
    // keep existing fallback
  }
}

await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
console.log("patched");
