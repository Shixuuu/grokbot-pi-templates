#!/usr/bin/env node
// Build CATALOG.md and the counts section of README.md from catalog.json (+ validation/results.json if present).
import fs from "node:fs";
import path from "node:path";
import { ROOT, readJson, writeText } from "./lib/util.mjs";

const cat = readJson(path.join(ROOT, "catalog.json"));
const cand = readJson(path.join(ROOT, "data", "candidates.json"));
const val = readJson(path.join(ROOT, "validation", "results.json"), null);
const T = cat.templates;
const live = T.filter((t) => t.status === "live");
const cnt = (a, f) => a.filter(f).length;
const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const short = (s, n = 140) => { s = esc(s); return s.length > n ? s.slice(0, n - 1) + "…" : s; };

const cats = {};
for (const t of live) (cats[t.category] ||= []).push(t);
const order = ["official", ...Object.keys(cats).filter((c) => c !== "official").sort()];

let md = `# Catalog\n\n${live.length} live Grok Bot templates converted to Pi packages (${cnt(live, (t) => t.fidelity === "full")} full recipe, ${cnt(live, (t) => t.fidelity !== "full")} metadata-only). ${cnt(T, (t) => t.status === "dead")} share links that no longer resolve are listed at the end. Machine-readable version: [catalog.json](catalog.json).\n\nColumns: **S/R/M/C** = skills / routines / memory seeds / connectors. **Fidelity**: \`full\` = complete recipe from the template's import API; \`metadata-only\` = only the public name and description were available.\n\n`;
md += order.map((c) => `- [${c}](#${c}) (${cats[c].length})`).join("\n") + "\n\n";
for (const c of order) {
  md += `## ${c}\n\n| Template | Creator | What it does | S/R/M/C | Fidelity | Original | Sources |\n| --- | --- | --- | --- | --- | --- | --- |\n`;
  for (const t of cats[c].sort((a, b) => a.name.localeCompare(b.name))) {
    md += `| [${esc(t.name)}](${t.path}) | ${esc(t.creator || "")} | ${short(t.description)} | ${t.skills}/${t.routines}/${t.memories}/${t.connectors.length} | ${t.fidelity} | [x.ai](${t.url}) | ${t.sources.length} |\n`;
  }
  md += "\n";
}
const dead = T.filter((t) => t.status === "dead");
if (dead.length) {
  md += `## Dead links (not converted)\n\n| Name | Share link | Note |\n| --- | --- | --- |\n` + dead.map((t) => `| ${esc(t.name)} | ${t.url} | ${esc(t.note)} |`).join("\n") + "\n";
}
writeText(path.join(ROOT, "CATALOG.md"), md);

// README counts block
const srcRows = Object.entries(cand.sourceStats || {}).map(([s, v]) => {
  const ids = live.filter((t) => t.sources.includes(s));
  return `| ${s} | ${v.unique ?? "error"} | ${ids.length} | ${cnt(ids, (t) => t.fidelity === "full")} |`;
});
const catRows = order.map((c) => `| ${c} | ${cats[c].length} | ${cnt(cats[c], (t) => t.fidelity === "full")} | ${cats[c].reduce((a, t) => a + t.skills, 0)} | ${cats[c].reduce((a, t) => a + t.routines, 0)} |`);
const tot = (k) => live.reduce((a, t) => a + (typeof t[k] === "number" ? t[k] : t[k]?.length || 0), 0);
let counts = `<!-- counts:start -->\n_Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/04-index.mjs\`._\n\n` +
  `- **${cand.count}** unique share ids found, **${live.length}** live, **${cnt(T, (t) => t.status === "dead")}** dead links\n` +
  `- **${cnt(live, (t) => t.fidelity === "full")}** converted from the full recipe, **${cnt(live, (t) => t.fidelity !== "full")}** metadata-only (full fetch failed)\n` +
  `- **${cnt(live, (t) => t.official)}** official (listed on x.ai/bot/marketplace), **${cnt(live, (t) => !t.official)}** community\n` +
  `- Totals: ${tot("skills")} skills, ${tot("routines")} routines (${tot("scheduledRoutines")} with a cron expression in the text), ${tot("memories")} memory seeds, ${tot("connectors")} connector references\n\n` +
  `### By category\n\n| Category | Templates | Full | Skills | Routines |\n| --- | --- | --- | --- | --- |\n${catRows.join("\n")}\n\n` +
  `### By source (a template can appear in many sources)\n\n| Source | Ids listed | Live here | Full |\n| --- | --- | --- | --- |\n${srcRows.join("\n")}\n`;
if (val) {
  const l = val.loader || [], c = val.cli || [];
  counts += `\n### Validation (Pi ${val.piVersion}, ${val.generatedAt.slice(0, 10)})\n\n- Resource load with Pi's own \`DefaultResourceLoader\`: **${cnt(l, (r) => r.ok)}/${l.length}** templates load with every skill, prompt, AGENTS.md and APPEND_SYSTEM.md and no diagnostics\n- CLI end-to-end (\`pi -p --approve\` against a local mock model): **${cnt(c, (r) => r.ok)}/${c.length}** (${cnt(c, (r) => r.official)} official, ${cnt(c, (r) => !r.official)} community): persona in the system prompt, all skills advertised, routine prompt expanded with arguments\n- Details: [validation/results.json](validation/results.json)\n`;
}
counts += "<!-- counts:end -->";
const rp = path.join(ROOT, "README.md");
let readme = fs.readFileSync(rp, "utf8");
readme = readme.replace(/<!-- counts:start -->[\s\S]*<!-- counts:end -->/, counts);
fs.writeFileSync(rp, readme);
console.log("CATALOG.md + README counts updated");
