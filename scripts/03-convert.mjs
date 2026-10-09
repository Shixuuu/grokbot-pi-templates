#!/usr/bin/env node
// Convert every enumerated Grok Bot template into a Pi package.
// Inputs: data/candidates.json, data/public-meta.json, data/raw/full-recipes/<id>.json (from 02-enrich)
// Output: templates/official/<slug>/, templates/community/<category>/<slug>/, catalog.json
// Pi mapping follows pi-grokbot-import (vendor/pi-grokbot-import-src): persona -> AGENTS.md + .pi/APPEND_SYSTEM.md,
// memories -> MEMORY.md, skills -> SKILL.md dirs, routines -> prompt templates + cron/systemd sketches, plugins -> connector notes.
import fs from "node:fs";
import path from "node:path";
import { ROOT, readJson, writeJson, writeText } from "./lib/util.mjs";
import YAML from "yaml";
import { toSkillSlug, toBotSlug } from "../vendor/pi-grokbot-import-src/schema.mjs";
import { TRANSFER_MATRIX } from "../vendor/pi-grokbot-import-src/import-bundle.mjs";

const cand = readJson(path.join(ROOT, "data", "candidates.json"));
const meta = readJson(path.join(ROOT, "data", "public-meta.json"));
const RECIPES = path.join(ROOT, "data", "raw", "full-recipes");
const OUT = path.join(ROOT, "templates");

const TAX = ["personal-admin", "research-briefings", "content-publishing", "coding-shipping", "inbox-calendar", "customer-sales", "finance-ops", "teams-handoffs"];
const CAT_PRIORITY = ["botsdots.site", "grokbotwiki.com", "Maimuzamilhu/awesome-grok-bot-templates", "kydlikebtc/awesome-grokbot", "majiayu000/awesome-grok-bot"];
const CAT_MAP = {
  engineering: "coding-shipping", developer: "coding-shipping", coding: "coding-shipping", "coding-dev": "coding-shipping",
  operations: "teams-handoffs", ops: "teams-handoffs", product: "teams-handoffs", "agent-team": "teams-handoffs",
  productivity: "personal-admin", assistants: "personal-admin", personal: "personal-admin", life: "personal-admin", "on-demand": "personal-admin", learning: "personal-admin", wellbeing: "personal-admin",
  money: "finance-ops", finance: "finance-ops", investor: "finance-ops", "saving-money": "finance-ops",
  sales: "customer-sales", business: "customer-sales",
  marketing: "content-publishing", marketer: "content-publishing", creative: "content-publishing", content: "content-publishing", creator: "content-publishing", design: "content-publishing", youtube: "content-publishing", seo: "content-publishing",
  research: "research-briefings", monitoring: "research-briefings", "decision-support": "research-briefings",
  email: "inbox-calendar", calendar: "inbox-calendar", inbox: "inbox-calendar",
};
function categoryOf(t) {
  const cats = t.categories || {};
  for (const s of CAT_PRIORITY) if (TAX.includes(cats[s])) return cats[s];
  for (const v of Object.values(cats)) if (TAX.includes(v)) return v;
  for (const v of Object.values(cats)) { const m = CAT_MAP[String(v).toLowerCase()]; if (m) return m; }
  return "uncategorized";
}

const yamlStr = (s) => JSON.stringify(String(s ?? "").replace(/\s+/g, " ").trim());
const oneLine = (s, n = 1024) => { const t = String(s ?? "").replace(/\s+/g, " ").trim(); return t.length > n ? t.slice(0, n - 1) + "…" : t; };
const PROMPT_VAR_RE = /\$\{(\d+|ARGUMENTS|@):-([^}]*)\}|\$\{@:(\d+)(?::(\d+))?\}|\$(ARGUMENTS|@|\d+)/;
const CRON_RE = /(?<![\w*/,-])((?:\*|\d{1,2}(?:[-,/]\d{1,2})*|\*\/\d+)\s+(?:\*|\d{1,2}(?:[-,/]\d{1,2})*|\*\/\d+)\s+(?:\*|\d{1,2}(?:[-,/]\d{1,2})*|\*\/\d+)\s+(?:\*|\d{1,2}(?:[-,/]\d{1,2})*|\*\/\d+)\s+(?:\*|[0-7](?:[-,/][0-7])*|\*\/\d+|(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:[-,](?:MON|TUE|WED|THU|FRI|SAT|SUN))*))(?![\w*/,-])/i;

function splitFrontmatter(content) {
  const m = String(content ?? "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fm: null, body: String(content ?? "") };
  let fm = null;
  try { const y = YAML.parse(m[1]); if (y && typeof y === "object" && !Array.isArray(y)) fm = y; } catch {}
  if (!fm) { // tolerant fallback: simple key: value lines
    fm = {};
    for (const line of m[1].split(/\r?\n/)) { const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/); if (kv) fm[kv[1]] = kv[2].replace(/^["']|["']$/g, ""); }
    fm.__unparsed = m[1];
  }
  return { fm, fmRaw: m[1], body: m[2] };
}
const PI_SKILL_KEYS = ["license", "compatibility", "metadata", "allowed-tools", "disable-model-invocation"];
function findSchedule(r) {
  const text = `${r.description || ""}\n${r.content || ""}`;
  const m = text.match(CRON_RE);
  if (m && /\d/.test(m[1])) return { cron: m[1].replace(/\s+/g, " "), how: "cron expression found verbatim in the routine text" };
  const line = text.split(/\n/).find((l) => /\b(schedule|every|daily|weekday|weekly|monthly|hourly|each (morning|day|week)|twice[- ]daily|mondays?|tuesdays?|wednesdays?|thursdays?|fridays?|saturdays?|sundays?|nightly|laborables|cada)\b/i.test(l));
  return { cron: null, cadenceText: line ? oneLine(line, 300) : null };
}
function uniq(name, used) { let n = name, i = 2; while (used.has(n)) n = `${name}-${i++}`.slice(0, 64); used.add(n); return n; }

function render(t, rec, info) {
  const { dir, fidelity, official, category } = info;
  const tpl = rec?.details?.template || {};
  const recipe = rec?.recipe || {};
  const m = meta[t.shareId] || {};
  const profile = recipe.profile || {};
  const name = profile.name || tpl.name || m.name || t.name || "Imported Bot";
  const description = profile.description ?? tpl.description ?? m.description ?? t.description ?? "";
  const title = profile.title || "";
  const creator = rec?.details?.creatorDisplayName || t.creator?.name || "";
  const handle = t.creator?.handle || "";
  const url = `https://x.ai/bot/${t.shareId}`;
  const files = {};
  const notes = [];

  // ---- skills
  const usedSkills = new Set();
  const skills = (recipe.skills || []).map((s) => {
    const { fm, fmRaw, body } = splitFrontmatter(s.content);
    const origName = fm?.name || s.name || "skill";
    const slug = uniq(toSkillSlug(origName), usedSkills);
    const fullDesc = String(fm?.description || s.description || origName);
    const desc = oneLine(fullDesc);
    const extra = {}, keep = {};
    for (const [k, v] of Object.entries(fm || {})) { if (k === "name" || k === "description" || k === "__unparsed") continue; (PI_SKILL_KEYS.includes(k) ? keep : extra)[k] = v; }
    const extraFm = fm?.__unparsed ? fm.__unparsed.split(/\r?\n/) : Object.keys(extra).length ? YAML.stringify(extra).trimEnd().split("\n") : [];
    let md = `---\nname: ${slug}\ndescription: ${yamlStr(desc)}\n${Object.keys(keep).length ? YAML.stringify(keep) : ""}---\n\n`;
    if (desc !== oneLine(fullDesc, 1e9)) md += `> Full original description: ${oneLine(fullDesc, 1e9)}\n\n`;
    if (extraFm.length) md += `<!-- original SKILL frontmatter (other keys):\n${extraFm.join("\n")}\n-->\n\n`;
    md += body.trim() ? body.trim() + "\n" : `_(The template shipped this skill with no body; only its name and description.)_\n`;
    if (!body.trim()) notes.push(`Skill \`${origName}\` has no body in the template.`);
    files[`skills/${slug}/SKILL.md`] = md;
    return { slug, origName, description: desc, chars: body.length };
  });
  const gsName = recipe.gettingStarted?.skill;
  const gsSkill = gsName ? skills.find((s) => s.origName === gsName || s.slug === toSkillSlug(gsName)) : null;

  // ---- routines
  const usedR = new Set();
  const routines = (recipe.routines || []).map((r) => {
    const slug = uniq(toSkillSlug(r.slug || r.name || "routine"), usedR);
    const sched = findSchedule(r);
    const content = String(r.content || r.prompt || "").trim();
    files[`routines/${slug}.md`] = `# Routine: ${r.name || slug}\n\n${r.description ? `> ${oneLine(r.description, 2000)}\n\n` : ""}${content}\n`;
    const safeInline = !PROMPT_VAR_RE.test(content);
    let p = `---\ndescription: ${yamlStr(oneLine(`Grok Bot routine: ${r.name || slug}${r.description ? " — " + r.description : ""}`, 300))}\nargument-hint: "[extra context]"\n---\n\n`;
    if (safeInline) p += `${content}\n\n\${@:-}\n`;
    else { p += `Run the "${r.name || slug}" routine. Read \`routines/${slug}.md\` from this template folder and follow it exactly.\n\nExtra context: \${@:-none}\n`; notes.push(`Routine \`${slug}\` contains \`$\`-patterns Pi would treat as template arguments, so its prompt points at \`routines/${slug}.md\` instead of inlining the text.`); }
    files[`prompts/${slug}.md`] = p;
    const runCmd = `cd /path/to/${path.basename(dir)} && pi -p "/${slug}"`;
    files[`cron/${slug}.cron`] = sched.cron
      ? `# Routine "${r.name || slug}" — ${sched.how}.\n# Times are in the user's local timezone in Grok Bot; set CRON_TZ if your host differs.\n${sched.cron} ${runCmd}\n`
      : `# Routine "${r.name || slug}": the template does not carry a machine-readable schedule\n# (Grok Bot sets it when the routine is created/enabled).${sched.cadenceText ? `\n# Cadence described in the template: ${sched.cadenceText}` : ""}\n# Fill in the five cron fields, then add to crontab -e:\n# M H DOM MON DOW ${runCmd}\n`;
    const onCal = sched.cron ? cronToOnCalendar(sched.cron) : null;
    files[`systemd/${slug}.service`] = `[Unit]\nDescription=Pi routine ${slug} (${oneLine(name, 80)})\n\n[Service]\nType=oneshot\nWorkingDirectory=%h/pi-bots/${path.basename(dir)}\nExecStart=/usr/bin/env pi -p "/${slug}"\n`;
    files[`systemd/${slug}.timer`] = `[Unit]\nDescription=Timer for Pi routine ${slug}\n\n[Timer]\n${onCal ? `OnCalendar=${onCal}` : `# Template has no machine-readable schedule.${sched.cadenceText ? ` Described cadence: ${sched.cadenceText}` : ""}\n# OnCalendar=Mon..Fri *-*-* 09:00:00`}\nPersistent=true\n\n[Install]\nWantedBy=timers.target\n`;
    return { slug, name: r.name || slug, description: r.description || "", cron: sched.cron, cadenceText: sched.cadenceText || null, inlined: safeInline };
  });

  // ---- memory
  const mem = Array.isArray(recipe.memory) ? recipe.memory : recipe.memory ? [{ kind: "profile", content: typeof recipe.memory === "string" ? recipe.memory : JSON.stringify(recipe.memory) }] : [];
  if (mem.length) {
    files["MEMORY.md"] = `# Memory seeds for ${name}\n\nPortable memories shipped with the Grok Bot template (verbatim). \`profile\` = durable facts/rules; \`log\` = dated notes.\n\n` +
      mem.map((x) => `- **${x.kind || "note"}**${x.createdAt ? ` (${x.createdAt})` : ""}: ${String(x.content ?? x.text ?? "").trim().replace(/\n/g, "\n  ")}`).join("\n") + "\n";
  }

  // ---- connectors
  const plugins = (recipe.plugins || []).map((p) => ({ name: p.name || "", pluginId: p.pluginId || p.id || "", description: p.description || "" }));
  if (plugins.length) {
    writeLater(files, "connectors.json", JSON.stringify({ note: "Grok Bot plugins/connectors referenced by this template. Not auto-configured in Pi; add equivalent MCP servers with `pi mcp add` or .pi/mcp.json.", plugins }, null, 2) + "\n");
    files["CONNECTORS.md"] = `# Connectors\n\nThe Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (\`pi mcp add <name> ...\` or \`.pi/mcp.json\`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.\n\n| Plugin | Grok plugin id | What the template says it is for |\n| --- | --- | --- |\n` +
      plugins.map((p) => `| ${p.name || "(unnamed)"} | \`${p.pluginId}\` | ${oneLine(p.description, 400).replace(/\|/g, "\\|")} |`).join("\n") + "\n";
  }

  // ---- persona
  const persona = [`# ${name}`, ""];
  if (title) persona.push(`**Title:** ${title}`, "");
  persona.push(description.trim() || "_(The template has no profile description.)_", "");
  if (gsSkill) persona.push(`On first run (or when the user is new), follow the \`${gsSkill.slug}\` skill (\`/skill:${gsSkill.slug}\`); it is this bot's getting-started flow.`, "");
  if (mem.length) persona.push("Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.", "");
  const appendSystem = persona.join("\n");
  const agents = [
    appendSystem,
    "## Skills", "", ...(skills.length ? skills.map((s) => `- \`${s.slug}\`: ${s.description}`) : ["_none_"]), "",
    "## Routines", "", ...(routines.length ? routines.map((r) => `- \`/${r.slug}\`: ${oneLine(r.name)}${r.cron ? ` (cron \`${r.cron}\`)` : ""}`) : ["_none_"]), "",
    ...(plugins.length ? ["## Connectors", "", ...plugins.map((p) => `- ${p.name || p.pluginId}: ${oneLine(p.description, 200)}`), "", "See `CONNECTORS.md`.", ""] : []),
    "## Running in Pi (conversion note)", "",
    "This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.", "",
  ].join("\n");
  if (fidelity === "full" || description.trim()) {
    files["AGENTS.md"] = agents;
    files[".pi/APPEND_SYSTEM.md"] = appendSystem;
  }
  files[".pi/settings.json"] = JSON.stringify({ skills: ["../skills"], prompts: ["../prompts"] }, null, 2) + "\n";

  const sources = t.sources.map((s) => s.source);
  const slug = path.basename(dir);
  files["package.json"] = JSON.stringify({
    name: `grokbot-${slug}`.slice(0, 214), version: `1.0.${tpl.activeVersion || m.activeVersion || 0}`, private: true,
    description: oneLine(description, 300), keywords: ["pi-package", "grok-bot-template"],
    pi: { skills: ["./skills"], prompts: ["./prompts"] },
    grokbot: { shareId: t.shareId, url, official, category, fidelity, creator: creator || undefined, creatorHandle: handle || undefined,
      activeVersion: tpl.activeVersion ?? m.activeVersion, sources, convertedWith: "grokbot-pi-templates scripts/03-convert.mjs (pi-grokbot-import 1.2.0 mapping)" },
  }, null, 2) + "\n";

  // ---- README
  const lost = [
    "Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.",
    "Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.",
    ...(plugins.length ? ["Connector auth/config: plugin names only (see `CONNECTORS.md`)."] : []),
  ];
  const readme = [
    `# ${name}`, "",
    `${oneLine(description, 2000)}`, "",
    `| | |`, `| --- | --- |`,
    `| Original template | ${url} |`,
    `| Creator | ${creator || "unknown"}${handle ? ` ([@${handle}](https://x.com/${handle}))` : ""} |`,
    `| Category | ${official ? "official (x.ai/bot/marketplace)" : `community / ${category}`} |`,
    `| Found via | ${t.sources.map((s) => (s.listingUrl && /^https?:/.test(s.listingUrl) ? `[${s.source}](${s.listingUrl})` : s.source)).join(", ")} |`,
    `| Fidelity | **${fidelity}**${fidelity === "full" ? ` (full recipe, template version ${tpl.activeVersion ?? "?"})` : " (full recipe couldn't be fetched; only public name and description)"} |`,
    `| Contents | ${skills.length} skills, ${routines.length} routines, ${mem.length} memory seeds, ${plugins.length} connectors |`, "",
    "## Use it in Pi", "",
    "```bash", `cp -r templates/${path.relative(OUT, dir)} ~/pi-bots/${slug} && cd ~/pi-bots/${slug}`, "pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/", "```", "",
    `Or install only the skills and routine prompts: \`pi install ./templates/${path.relative(OUT, dir)}\`. The persona in \`AGENTS.md\` applies only when you run Pi inside the folder.`, "",
    "## What was converted", "",
    "| Grok Bot | Pi |", "| --- | --- |",
    `| Profile / persona | \`AGENTS.md\`, \`.pi/APPEND_SYSTEM.md\` |`,
    `| Memory (${mem.length}) | \`MEMORY.md\` |`,
    `| Skills (${skills.length}) | \`skills/<name>/SKILL.md\`, full bodies |`,
    `| Routines (${routines.length}) | \`prompts/<name>.md\` (\`/name\`), verbatim text in \`routines/\`, schedule sketches in \`cron/\` and \`systemd/\` |`,
    `| Plugins (${plugins.length}) | \`CONNECTORS.md\`, \`connectors.json\` |`, "",
    ...(routines.length ? ["### Routine schedules", "", ...routines.map((r) => `- \`/${r.slug}\`: ${r.cron ? `cron \`${r.cron}\` (found in the template text)` : r.cadenceText ? `no cron in the template; described as "${r.cadenceText}"` : "no schedule in the template (set when enabled in Grok Bot)"}`), ""] : []),
    "## What did not translate", "", ...lost.map((l) => `- ${l}`), ...notes.map((n) => `- ${n}`), "",
    "Content belongs to the original creator; this is an automated format conversion for personal use with Pi.", "",
  ];
  files["README.md"] = readme.join("\n");
  return { name, description, creator, handle, skills, routines, memories: mem.length, plugins, notes, files, activeVersion: tpl.activeVersion ?? m.activeVersion };
}
function writeLater(files, k, v) { files[k] = v; }
function cronToOnCalendar(cron) {
  const [mi, h, dom, mon, dow] = cron.split(" ");
  const simple = (x) => /^\d+$/.test(x);
  if (!simple(mi) || !(simple(h) || /^\d+(,\d+)*$/.test(h)) || dom !== "*" || mon !== "*") return null;
  const days = { "*": "", "1-5": "Mon..Fri ", "0,6": "Sat,Sun ", "6,0": "Sat,Sun " };
  const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let d = days[dow];
  if (d === undefined) { if (/^[0-7](,[0-7])*$/.test(dow)) d = dow.split(",").map((x) => names[+x]).join(",") + " "; else return null; }
  return `${d}*-*-* ${h.split(",").map((x) => x.padStart(2, "0")).join(",")}:${mi.padStart(2, "0")}:00`;
}

// ---------------- main
fs.rmSync(OUT, { recursive: true, force: true });
const usedSlugs = new Map();
const catalog = [];
const failures = [];
const sorted = [...cand.templates].sort((a, b) => (a.official === b.official ? a.shareId.localeCompare(b.shareId) : a.sources.some((s) => s.source === "xai-marketplace") ? -1 : 1));
for (const t of sorted) {
  const official = t.sources.some((s) => s.source === "xai-marketplace");
  const m = meta[t.shareId] || {};
  const recPath = path.join(RECIPES, `${t.shareId}.json`);
  const rec = fs.existsSync(recPath) ? readJson(recPath) : null;
  const failPath = path.join(RECIPES, `${t.shareId}.failed.json`);
  const fail = fs.existsSync(failPath) ? readJson(failPath) : null;
  const category = official ? "official" : categoryOf(t);
  const base = { shareId: t.shareId, url: `https://x.ai/bot/${t.shareId}`, official, category: official ? "official" : category, sources: t.sources.map((s) => s.source) };
  if (m.status && m.status !== 200 && !rec) {
    catalog.push({ ...base, name: t.name || "", description: t.description || "", status: "dead", fidelity: "none", note: `public API HTTP ${m.status} ${m.error || ""}`.trim() });
    continue;
  }
  const fidelity = rec ? "full" : "metadata-only";
  if (!rec) failures.push({ shareId: t.shareId, reason: fail?.reason || "not-fetched", status: fail?.status });
  const nm = rec?.recipe?.profile?.name || m.name || t.name || "bot";
  let slug = official && t.marketplaceSlug ? t.marketplaceSlug : toBotSlug(nm).slice(0, 56).replace(/-+$/, "");
  const parent = official ? path.join(OUT, "official") : path.join(OUT, "community", category);
  const key = `${parent}/${slug}`;
  if (usedSlugs.has(key)) slug = `${slug}-${t.shareId.slice(0, 6).toLowerCase().replace(/[^a-z0-9]/g, "x")}`;
  usedSlugs.set(`${parent}/${slug}`, true);
  const dir = path.join(parent, slug);
  const r = render(t, rec, { dir, fidelity, official, category });
  if (fidelity !== "full") {
    // Metadata-only: never invent persona content. Write README + package + a stub AGENTS.md quoting the public description.
    r.files["AGENTS.md"] = `# ${r.name}\n\n> **Metadata-only conversion.** The full Grok Bot recipe for ${base.url} could not be fetched (${fail?.reason || "not fetched"}). Below is only the public description, not the bot's real instructions.\n\n${r.description}\n`;
    delete r.files[".pi/APPEND_SYSTEM.md"];
  }
  for (const [rel, content] of Object.entries(r.files)) writeText(path.join(dir, rel), content);
  catalog.push({
    ...base, name: r.name, slug, path: path.relative(ROOT, dir), description: oneLine(r.description, 500), creator: r.creator || undefined, creatorHandle: r.handle || undefined,
    status: "live", fidelity, activeVersion: r.activeVersion, skills: r.skills.length, routines: r.routines.length, memories: r.memories, connectors: r.plugins.map((p) => p.name || p.pluginId),
    scheduledRoutines: r.routines.filter((x) => x.cron).length, notes: r.notes.length ? r.notes : undefined,
  });
}
writeJson(path.join(ROOT, "catalog.json"), { generatedAt: new Date().toISOString(), count: catalog.length, templates: catalog });
writeJson(path.join(ROOT, "data", "convert-failures.json"), failures);
const c = (f) => catalog.filter(f).length;
console.log(JSON.stringify({ total: catalog.length, live: c((x) => x.status === "live"), dead: c((x) => x.status === "dead"), full: c((x) => x.fidelity === "full"), metadataOnly: c((x) => x.fidelity === "metadata-only"), official: c((x) => x.official), officialFull: c((x) => x.official && x.fidelity === "full") }));
