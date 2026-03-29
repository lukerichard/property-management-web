import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'docs', 'stitch', 'recordstore-prototype.json');
const outDir = path.join(root, 'public', 'recordstore-prototype');

const manifest = JSON.parse(await fs.readFile(src, 'utf8'));
await fs.mkdir(outDir, { recursive: true });

for (const screen of manifest.screens) {
  const resp = await fetch(screen.htmlUrl);
  const html = await resp.text();
  await fs.writeFile(path.join(outDir, `${screen.slug}.html`), html, 'utf8');
}

await fs.writeFile(path.join(outDir, 'index.json'), JSON.stringify(manifest, null, 2));
console.log('ok');
