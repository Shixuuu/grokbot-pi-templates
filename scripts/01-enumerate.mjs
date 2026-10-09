#!/usr/bin/env node
// Enumerate Grok Bot templates from every known public source and merge by share id.
// Output: data/raw/<source>.* (gitignored snapshots) and data/candidates.json (committed).
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, fetchText, fetchJson, readJson, writeJson, shareIdsIn, shareIdFrom, nextFlight, rawDecodeAt, pool } from "./lib/util.mjs";

const RAW = path.join(ROOT, "data", "raw");
fs.mkdirSync(RAW, { recursive: true });
const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1].split(",") : null;
const useCache = process.argv.includes("--cache");

async function cached(name, fn) {
  const p = path.join(RAW, name);
  if (useCache && fs.existsSync(p)) return fs.readFileSync(p, "utf8");
  const v = await fn();
  fs.writeFileSync(p, typeof v === "string" ? v : JSON.stringify(v));
  return typeof v === "string" ? v : JSON.stringify(v);
}
const gh = (repo, file) => `https://raw.githubusercontent.com/${repo}/HEAD/${file}`;

const SOURCES = {
  // Official SpaceXAI marketplace (x.ai/bot/marketplace + category pages). Detail pages fetched in 02-enrich.
  async "xai-marketplace"() {
    const cats = ["", "/operations", "/marketing", "/sales", "/engineering", "/personal", "/design", "/product", "/recruiting-people", "/from-grok-bot-team"];
    const bySlug = new Map();
    const home = (await fetchText("https://x.ai/bot/marketplace")).text;
    for (const m of home.matchAll(/\/bot\/marketplace\/([a-z0-9-]+)["?]/g)) if (m[1] !== "bots" && !cats.includes(`/${m[1]}`)) cats.push(`/${m[1]}`);
    for (const c of cats) {
      const html = await cached(`xai-marketplace${c.replace("/", "_") || "_home"}.html`, async () => (await fetchText(`https://x.ai/bot/marketplace${c}`)).text);
      const flight = nextFlight(html);
      let idx = 0;
      while ((idx = flight.indexOf('"templates":[', idx)) !== -1) {
        const arr = rawDecodeAt(flight, idx + '"templates":'.length);
        for (const t of arr) if (t?.id && t.addHref && !bySlug.has(t.id)) bySlug.set(t.id, t);
        idx += 12;
      }
      for (const m of flight.matchAll(/"(?:id)":"([a-z0-9-]+)","name":"((?:[^"\\]|\\.)*)"[^{}]*?"addHref":"([^"]+)"/g)) {
        if (!bySlug.has(m[1])) bySlug.set(m[1], { id: m[1], name: JSON.parse(`"${m[2]}"`), addHref: m[3] });
      }
    }
    return [...bySlug.values()].map((t) => ({
      shareId: shareIdFrom(t.addHref), name: t.name, description: t.description || t.summary || "",
      creator: { name: t.creatorName || "", handle: t.handle || "" }, category: (t.categories || [])[0] || "",
      tags: t.categories || [], official: true, marketplaceSlug: t.id,
      listingUrl: `https://x.ai/bot/marketplace/bots/${t.id}`,
    }));
  },
  async "grokbottemplates.app"() {
    const d = JSON.parse(await cached("grokbottemplates.app.json", async () => (await fetchText("https://grokbottemplates.app/api/v1/templates.json")).text));
    return d.items.map((t) => ({
      shareId: shareIdFrom(t.add_href) || shareIdFrom(t.share_url), name: t.name, description: t.description || t.tagline || "",
      creator: { name: t.sharer?.name || "", handle: t.sharer?.handle || "" }, category: t.primary_category, tags: t.tags || [],
      integrations: t.integrations || [], cadence: (t.tag_facets?.structure || []).join(","), listingUrl: t.url,
      marketplaceSlug: (t.source?.url || "").match(/marketplace\/bots\/([A-Za-z0-9_-]+)/)?.[1],
    }));
  },
  async "botsdots.site"() {
    const d = JSON.parse(await cached("botsdots.site.json", async () => (await fetchText("https://botsdots.site/catalog.json")).text));
    return d.templates.map((t) => ({
      shareId: shareIdFrom(t.add), name: t.name, description: t.summary || "", creator: { name: t.creator?.name || "", handle: t.creator?.handle || "" },
      category: t.category, integrations: t.integrations || [], cadence: t.cadence, risk: t.risk, official: !!t.official, listingUrl: t.page,
    }));
  },
  async "grokbotwiki.com"() {
    const d = JSON.parse(await cached("grokbotwiki.com.json", async () => (await fetchText("https://www.grokbotwiki.com/bots/catalog.json")).text));
    return d.entries.map((t) => ({
      shareId: t.id || shareIdFrom(t.shareUrl), name: t.name, description: t.officialSummary || t.summary || "",
      creator: { name: t.author?.name || "", handle: t.author?.handle || "" }, category: t.category, tags: t.tags || [],
      integrations: t.integrations || [], listingUrl: `https://www.grokbotwiki.com/bots/${t.slug}`,
    }));
  },
  async "grokbothq.xyz"() {
    const d = JSON.parse(await cached("grokbothq.xyz.json", async () => (await fetchText("https://grokbothq.xyz/api/v1/index.json")).text));
    return d.bots.map((t) => ({
      shareId: shareIdFrom(t.open), name: t.name, description: t.description || t.tagline || "",
      creator: { name: t.builder?.name || (typeof t.builder === "string" ? t.builder : "") || "", handle: t.builder?.handle || "" },
      category: t.category, integrations: t.integrations || [], listingUrl: t.page,
    }));
  },
  async "grokbot-templates.com"() {
    const txt = await cached("grokbot-templates.com.json", async () => {
      const all = [];
      for (let page = 1; page < 200; page++) {
        const d = await fetchJson(`https://grokbot-templates.com/api/templates?page=${page}&pageSize=100`);
        const items = d?.data?.items || [];
        all.push(...items);
        if (items.length === 0 || all.length >= (d.data.total || 0)) break;
      }
      return all;
    });
    return JSON.parse(txt).map((t) => ({
      shareId: t.shareId || shareIdFrom(t.shareUrl), name: t.name, description: t.description || "",
      creator: { name: "", handle: t.twitterHandle || "" }, category: t.category, listingUrl: "https://grokbot-templates.com/",
    }));
  },
  async "templatebot.lol"() {
    const txt = await cached("templatebot.lol.txt", async () => (await fetchText("https://templatebot.lol/llms.txt")).text);
    const out = [];
    for (const block of txt.split(/\n### /).slice(1)) {
      const name = block.split("\n")[0].trim();
      const id = shareIdsIn(block)[0];
      if (!id) continue;
      const meta = block.match(/- Meta: ([^\n]*)/)?.[1] || "";
      out.push({
        shareId: id, name, description: (block.match(/- Description: ([^\n]*)/)?.[1] || "").replace(/\.\.\.$/, "…"),
        category: meta.split("·")[0].trim(), creator: { name: (meta.match(/by ([^·]+)/)?.[1] || "").trim(), handle: "" },
        integrations: (meta.match(/integrations: (.*)$/)?.[1] || "").split(",").map((s) => s.trim()).filter(Boolean),
        listingUrl: `https://templatebot.lol/bot/${id}`,
      });
    }
    return out;
  },
  async "kydlikebtc/awesome-grokbot"() {
    const d = JSON.parse(await cached("kydlikebtc.json", async () => (await fetchText(gh("kydlikebtc/awesome-grokbot", "catalog.json"))).text));
    const items = Array.isArray(d) ? d : Object.values(d).find(Array.isArray);
    return items.map((t) => ({ shareId: t.bot_id || shareIdFrom(t.import), name: t.name, description: t.official_summary || t.summary || "",
      creator: { name: t.author?.name || "", handle: t.author?.handle || "" }, category: t.category, tags: t.tags || [], listingUrl: "https://github.com/kydlikebtc/awesome-grokbot" }));
  },
  async "majiayu000/awesome-grok-bot"() {
    const d = JSON.parse(await cached("majiayu000.json", async () => (await fetchText(gh("majiayu000/awesome-grok-bot", "catalog.json"))).text));
    const items = Array.isArray(d) ? d : Object.values(d).find(Array.isArray);
    return items.map((t) => ({ shareId: shareIdFrom(t.import), name: t.name, description: t.summary || "",
      creator: { name: t.author?.name || "", handle: "" }, category: t.category, tags: t.tags || [], listingUrl: "https://github.com/majiayu000/awesome-grok-bot" }));
  },
  async "Maimuzamilhu/awesome-grok-bot-templates"() {
    const d = JSON.parse(await cached("maimuzamilhu.json", async () => (await fetchText(gh("Maimuzamilhu/awesome-grok-bot-templates", "catalog.json"))).text));
    const items = Array.isArray(d) ? d : Object.values(d).find(Array.isArray);
    return items.map((t) => ({ shareId: shareIdFrom(t.add || t.import || t.url || t.shareUrl), name: t.name, description: t.summary || t.description || "",
      creator: { name: t.creator?.name || "", handle: t.creator?.handle || "" }, category: t.category, listingUrl: "https://github.com/Maimuzamilhu/awesome-grok-bot-templates" }));
  },
  async "cs68614-hash/awesome-grokbot-templates"() {
    const md = await cached("cs68614.md", async () => (await fetchText(gh("cs68614-hash/awesome-grokbot-templates", "README.md"))).text);
    const out = [];
    for (const m of md.matchAll(/^- \[([^\]]+)\]\(https:\/\/x\.ai\/bot\/([A-Za-z0-9_-]{15,25})\)\s*[—-]?\s*([^\n]*)$/gm)) {
      out.push({ shareId: m[2], name: m[1], description: m[3].replace(/\s*\[@[^\]]+\]\([^)]*\)\s*$/, "").trim(), listingUrl: "https://github.com/cs68614-hash/awesome-grokbot-templates" });
    }
    return out;
  },
  async "ZeroPointRepo/GrokBotDev"() {
    const dir = path.join(RAW, "GrokBotDev");
    if (!(useCache && fs.existsSync(dir))) {
      fs.rmSync(dir, { recursive: true, force: true });
      execFileSync("git", ["clone", "-q", "--depth", "1", "https://github.com/ZeroPointRepo/GrokBotDev", dir]);
    }
    const tdir = path.join(dir, "content", "templates");
    const out = [];
    for (const f of fs.readdirSync(tdir)) {
      const s = fs.readFileSync(path.join(tdir, f), "utf8");
      const fm = s.split(/^---$/m)[1] || "";
      const g = (k) => { const m = fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, "m")); return m ? m[1] : ""; };
      const id = shareIdFrom(g("share_url"));
      if (!id) continue;
      out.push({ shareId: id, name: g("name"), description: g("description") || g("tagline"), category: g("primary_category"),
        creator: { name: "", handle: (fm.match(/handle:\s*"?([^"\n]+)"?/) || [])[1] || "" }, listingUrl: `https://grokbot.dev/t/${g("slug")}` });
    }
    return out;
  },
  // Teammate (Side) research drop + any manual additions.
  async "x-research"() {
    const out = [];
    for (const f of ["research/x-findings.json", "research/x-findings.md", "research/extra-share-ids.txt"]) {
      const p = path.join(ROOT, f);
      if (!fs.existsSync(p)) continue;
      const s = fs.readFileSync(p, "utf8");
      if (f.endsWith(".json")) {
        try {
          const j = JSON.parse(s);
          const walk = (v) => {
            if (Array.isArray(v)) return v.forEach(walk);
            if (v && typeof v === "object") {
              const id = shareIdFrom(v.shareId || v.share_id || v.shareUrl || v.share_url || v.url || v.link || v.add || "");
              if (id) out.push({ shareId: id, name: v.name || v.title || "", description: v.description || v.summary || "", listingUrl: v.source || v.post || v.url || "", via: f });
              Object.values(v).forEach(walk);
            }
          };
          walk(j);
        } catch {}
      }
      for (const id of shareIdsIn(s)) out.push({ shareId: id, listingUrl: f, via: f });
    }
    return out;
  },
};

const prev = readJson(path.join(ROOT, "data", "candidates.json"), { templates: [] });
const merged = new Map(only ? prev.templates.map((t) => [t.shareId, t]) : []);
const sourceStats = {};
for (const [name, fn] of Object.entries(SOURCES)) {
  if (only && !only.includes(name)) continue;
  try {
    const rows = (await fn()).filter((r) => r.shareId);
    sourceStats[name] = { listed: rows.length, unique: new Set(rows.map((r) => r.shareId)).size };
    for (const r of rows) {
      const cur = merged.get(r.shareId) || { shareId: r.shareId, sources: [] };
      if (!cur.sources.some((s) => s.source === name)) cur.sources.push({ source: name, listingUrl: r.listingUrl || "", name: r.name || "", category: r.category || "" });
      for (const k of ["name", "description", "cadence", "risk"]) if (!cur[k] && r[k]) cur[k] = r[k];
      if (r.creator && (!cur.creator || (!cur.creator.name && r.creator.name))) cur.creator = r.creator;
      if (r.official) cur.official = true;
      if (r.marketplaceSlug && !cur.marketplaceSlug) cur.marketplaceSlug = r.marketplaceSlug;
      cur.integrations = [...new Set([...(cur.integrations || []), ...(r.integrations || []).map(String)])];
      cur.tags = [...new Set([...(cur.tags || []), ...(r.tags || []).map(String)])];
      // Keep the first-seen category per source for categorisation later
      cur.categories = { ...(cur.categories || {}), [name]: r.category || "" };
      merged.set(r.shareId, cur);
    }
    console.log(`${name}: ${sourceStats[name].listed} rows, ${sourceStats[name].unique} unique ids`);
  } catch (e) {
    sourceStats[name] = { error: String(e.message || e) };
    console.error(`${name}: FAILED ${e.message}`);
  }
}
const templates = [...merged.values()].sort((a, b) => a.shareId.localeCompare(b.shareId));
writeJson(path.join(ROOT, "data", "candidates.json"), { generatedAt: new Date().toISOString(), count: templates.length, sourceStats: only ? { ...prev.sourceStats, ...sourceStats } : sourceStats, templates });
console.log(`TOTAL unique share ids: ${templates.length}`);
