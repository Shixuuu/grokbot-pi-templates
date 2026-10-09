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

const official = live.filter((t) => t.official);
const builtin = live.filter((t) => t.builtin);
const community = live.filter((t) => !t.official && !t.builtin);
const cats = {};
for (const t of community) (cats[t.category] ||= []).push(t);
const commOrder = Object.keys(cats).sort();
const groups = [
  ["official", "Official: listed on https://x.ai/bot/marketplace", official],
  ["builtin", "Built-in: starter templates in the Grok Bot app's template picker (research/in-app-builtin-starters.txt)", builtin],
  ...commOrder.map((c) => [`community/${c}`, `Community / ${c}: not on the x.ai marketplace`, cats[c]]),
];
const anchor = (k) => k.replace(/[^a-z0-9-]/g, "");

let md = `# Catalog\n\n${live.length} live Grok Bot templates converted to Pi packages (${cnt(live, (t) => t.fidelity === "full")} full recipe, ${cnt(live, (t) => t.fidelity === "metadata-only")} metadata-only, ${cnt(live, (t) => t.fidelity === "self-export")} self-export). ${cnt(T, (t) => t.status === "dead")} share links that no longer resolve are listed at the end. Machine-readable version: [catalog.json](catalog.json).\n\nColumns: **S/R/M/C** = skills / routines / memory seeds / connectors. **Fidelity**: \`full\` = complete recipe from the template's import API; \`metadata-only\` = only the public name and description were available.\n\n`;
md += `**${official.length} official** (x.ai/bot/marketplace) · **${builtin.length} built-in** in-app starters${builtin.some((t) => t.official) ? ` (${builtin.filter((t) => t.official).length} of them also on the marketplace, filed under official)` : ""} · **${community.length} community** (not on the marketplace)\n\n`;
md += groups.map(([k, , a]) => `- [${k}](#${anchor(k)}) (${a.length})`).join("\n") + "\n\n";
for (const [k, title, arr] of groups) {
  md += `## ${k}\n\n${title}\n\n| Template | Creator | What it does | S/R/M/C | Fidelity | Original | Sources |\n| --- | --- | --- | --- | --- | --- | --- |\n`;
  for (const t of [...arr].sort((a, b) => a.name.localeCompare(b.name))) {
    md += `| [${esc(t.name)}](${t.path})${t.tags ? ` \`${t.tags.filter((x) => x !== "trading").join(",")}\`` : ""} | ${esc(t.creator || "")} | ${short(t.description)} | ${t.skills}/${t.routines}/${t.memories}/${t.connectors.length} | ${t.fidelity} | ${t.url ? `[x.ai](${t.url})` : "— (self-export)"} | ${t.sources.length} |\n`;
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
const row = (k, a) => `| ${k} | ${a.length} | ${cnt(a, (t) => t.fidelity === "full")} | ${a.reduce((x, t) => x + t.skills, 0)} | ${a.reduce((x, t) => x + t.routines, 0)} |`;
const catRows = [row("**official** (x.ai/bot/marketplace) → `templates/official/`", official), row("**builtin** (in-app starters) → `templates/builtin/`", builtin), row("**community** (not on the marketplace) → `templates/community/`", community), ...commOrder.map((c) => row(`&nbsp;&nbsp;community/${c}`, cats[c]))];
const tot = (k) => live.reduce((a, t) => a + (typeof t[k] === "number" ? t[k] : t[k]?.length || 0), 0);
let counts = `<!-- counts:start -->\n_Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/04-index.mjs\`._\n\n` +
  `- **${cand.count}** unique share ids found, **${live.length}** live, **${cnt(T, (t) => t.status === "dead")}** dead links\n` +
  `- **${cnt(live, (t) => t.fidelity === "full")}** converted from the full recipe, **${cnt(live, (t) => t.fidelity === "metadata-only")}** metadata-only (full fetch failed), **${cnt(live, (t) => t.fidelity === "self-export")}** hand-written self-export (the user's Primary Bot, no share link)\n` +
  `- **${official.length}** official (listed on x.ai/bot/marketplace), **${builtin.length}** built-in in-app starters${builtin.some((t) => t.official) ? ` (${builtin.filter((t) => t.official).map((t) => t.name).join(", ")} is also on the marketplace and stays in official/, tagged builtin)` : ""}, **${community.length}** community (not on the marketplace)\n` +
  `- Totals: ${tot("skills")} skills, ${tot("routines")} routines (${tot("scheduledRoutines")} with a cron expression in the text), ${tot("memories")} memory seeds, ${tot("connectors")} connector references\n\n` +
  `### By section and category\n\n| Section / category | Templates | Full | Skills | Routines |\n| --- | --- | --- | --- | --- |\n${catRows.join("\n")}\n\n` +
  `### By source (a template can appear in many sources)\n\n| Source | Ids listed | Live here | Full |\n| --- | --- | --- | --- |\n${srcRows.join("\n")}\n`;
if (val) {
  const l = val.loader || [], c = val.cli || [];
  counts += `\n### Validation (Pi ${val.piVersion}, ${val.generatedAt.slice(0, 10)})\n\n- Resource load with Pi's own \`DefaultResourceLoader\`: **${cnt(l, (r) => r.ok)}/${l.length}** templates load with every skill, prompt, AGENTS.md and APPEND_SYSTEM.md and no diagnostics\n- CLI end-to-end (\`pi -p --approve\` against a local mock model): **${cnt(c, (r) => r.ok)}/${c.length}** (${cnt(c, (r) => r.official)} official, ${cnt(c, (r) => r.builtin && !r.official)} builtin, ${cnt(c, (r) => !r.official && !r.builtin)} community): persona in the system prompt, all skills advertised, routine prompt expanded with arguments\n- Details: [validation/results.json](validation/results.json)\n`;
}
counts += "<!-- counts:end -->";
const rp = path.join(ROOT, "README.md");
let readme = fs.readFileSync(rp, "utf8");
readme = readme.replace(/<!-- counts:start -->[\s\S]*<!-- counts:end -->/, counts);
fs.writeFileSync(rp, readme);
console.log("CATALOG.md + README counts updated");
