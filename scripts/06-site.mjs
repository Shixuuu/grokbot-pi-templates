#!/usr/bin/env node
/**
 * Build the static catalog site into _site/ (or the dir given as argv[2]).
 *
 *   _site/index.html, app.js, app.css, setup.js, vendor/   copied from site/
 *   _site/data/index.json        slim search index (one entry per live template)
 *   _site/m/<section__...>.json   per-template file manifest: { path, ref, files: [{ p, s }] }
 *
 * Template files are NOT copied: the browser fetches them from raw.githubusercontent.com at
 * the commit the site was built from (`ref`), so the site never duplicates the 40k+ files.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.resolve(process.argv[2] || path.join(ROOT, "_site"));
const REPO = process.env.SITE_REPO || "Shixuuu/grokbot-pi-templates";
const REF = process.env.SITE_REF || process.env.GITHUB_SHA || execSync("git rev-parse HEAD", { cwd: ROOT }).toString().trim();

const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, "catalog.json"), "utf8"));
const avatars = JSON.parse(fs.readFileSync(path.join(ROOT, "site/avatars.json"), "utf8")).avatars;

fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, "site"), OUT, { recursive: true, filter: (p) => !p.endsWith("avatars.json") });
fs.mkdirSync(path.join(OUT, "data"), { recursive: true });
fs.mkdirSync(path.join(OUT, "m"), { recursive: true });

function walk(dir, base = dir, out = []) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) walk(p, base, out);
    else if (d.isFile()) out.push({ p: path.relative(base, p).split(path.sep).join("/"), s: fs.statSync(p).size });
  }
  return out;
}

const sectionOf = (t) => (t.official ? "official" : t.builtin || t.category === "builtin" ? "builtin" : "community");
const clip = (s, n) => {
  s = String(s || "").replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
};
export const manifestKey = (p) => p.replace(/^templates\//, "").replace(/\//g, "__");

const items = [];
let files = 0;
let bytes = 0;
for (const t of catalog.templates) {
  if (t.status !== "live" || !t.path) continue;
  const dir = path.join(ROOT, t.path);
  if (!fs.existsSync(dir)) throw new Error(`missing folder ${t.path}`);
  const list = walk(dir);
  files += list.length;
  bytes += list.reduce((a, f) => a + f.s, 0);
  fs.writeFileSync(path.join(OUT, "m", manifestKey(t.path) + ".json"), JSON.stringify({ path: t.path, ref: REF, files: list }));
  const av = (t.shareId && avatars[t.shareId]) || null;
  const sec = sectionOf(t);
  items.push({
    i: t.shareId || "",
    n: t.name,
    s: t.slug,
    p: t.path.replace(/^templates\//, ""),
    sec,
    b: t.builtin && sec !== "builtin" ? 1 : 0,
    c: ["builtin", "official"].includes(t.category) ? "" : t.category || "",
    t: (t.tags || []).filter((x) => x !== "trading"),
    d: clip(t.description, 240),
    cr: t.creator || "",
    h: t.creatorHandle || "",
    k: t.skills || 0,
    r: t.routines || 0,
    sr: t.scheduledRoutines || 0,
    m: t.memories || 0,
    x: (t.connectors || []).length,
    f: t.fidelity,
    a: av,
    nf: list.length,
    z: list.reduce((a, f) => a + f.s, 0),
  });
}
const index = { repo: REPO, ref: REF, generatedAt: new Date().toISOString(), count: items.length, items };
fs.writeFileSync(path.join(OUT, "data/index.json"), JSON.stringify(index));
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
console.log(JSON.stringify({ out: OUT, ref: REF, templates: items.length, files, mb: +(bytes / 1e6).toFixed(1), indexKB: Math.round(fs.statSync(path.join(OUT, "data/index.json")).size / 1024) }));
