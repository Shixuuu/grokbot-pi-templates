#!/usr/bin/env node
// For every candidate share id:
//  1. GetPublicGrokBotTemplate (no auth) -> authoritative name/description/avatar/published   -> data/public-meta.json
//  2. Official marketplace detail page (x.ai/bot/marketplace/bots/<slug>) -> memories, skill+routine summaries,
//     integrations as published by SpaceXAI                                                     -> data/marketplace-details.json
//  3. If a Cursor session exists (~/.pi/agent/grokbot-import/cursor-session.json), GetGrokBotTemplateImportDetails
//     + blob -> full recipe                                                                       -> data/raw/full-recipes/<id>.json (gitignored)
// Reuses pi-grokbot-import (vendor/pi-grokbot-import-src). Never prints tokens.
import fs from "node:fs";
import path from "node:path";
import { ROOT, readJson, writeJson, fetchText, nextFlight, pool, sleep } from "./lib/util.mjs";
import { getPublicGrokBotTemplate } from "../vendor/pi-grokbot-import-src/cursor-auth.mjs";
import { tryCursorImportDetails } from "../vendor/pi-grokbot-import-src/fetch-template.mjs";
import { getAccessToken, getSessionStatus } from "../vendor/pi-grokbot-import-src/cursor-auth.mjs";

const cand = readJson(path.join(ROOT, "data", "candidates.json"));
const metaPath = path.join(ROOT, "data", "public-meta.json");
const mpPath = path.join(ROOT, "data", "marketplace-details.json");
const meta = readJson(metaPath, {});
const mp = readJson(mpPath, {});
const refresh = process.argv.includes("--refresh");
const conc = Number(process.env.CONCURRENCY || 8);

// 1. Public metadata
const todo = cand.templates.filter((t) => refresh || !meta[t.shareId] || meta[t.shareId].status >= 500 || meta[t.shareId].error);
console.log(`public meta: ${todo.length} to fetch (${Object.keys(meta).length} cached)`);
let done = 0;
await pool(todo, conc, async (t) => {
  let r;
  for (let a = 0; a < 4; a++) {
    try { r = await getPublicGrokBotTemplate(t.shareId); } catch (e) { r = { status: 0, error: String(e.message || e) }; }
    if (r.status === 429 || r.status >= 500 || r.status === 0) { await sleep(2000 * (a + 1)); continue; }
    break;
  }
  const tpl = r.json?.template;
  meta[t.shareId] = tpl
    ? { status: r.status, name: tpl.name, description: tpl.description || "", avatarShape: tpl.avatarShape || "", avatarColor: tpl.avatarColor || "",
        published: tpl.published, activeVersion: tpl.activeVersion, ownerType: tpl.ownerType, createdAtMs: tpl.createdAtMs, updatedAtMs: tpl.updatedAtMs,
        ownerDisplayName: r.json.ownerDisplayName || undefined, checkedAt: new Date().toISOString() }
    : { status: r.status, error: r.json?.details?.[0]?.debug?.error || r.json?.code || r.error || "unknown", checkedAt: new Date().toISOString() };
  if (++done % 250 === 0) { console.log(`  ${done}/${todo.length}`); writeJson(metaPath, meta); }
});
writeJson(metaPath, meta);

// 2. Official marketplace detail pages
const slugs = [...new Set(cand.templates.filter((t) => t.marketplaceSlug).map((t) => t.marketplaceSlug))];
await pool(slugs.filter((s) => refresh || !mp[s]), 4, async (slug) => {
  try {
    const r = await fetchText(`https://x.ai/bot/marketplace/bots/${slug}`);
    const flight = nextFlight(r.text);
    // The detail object is the one whose id === slug and that carries instructions/memories/skills
    const re = new RegExp(`\\{"id":"${slug.replace(/[-]/g, "\\-")}","name":`, "g");
    let best = null;
    for (const m of flight.matchAll(re)) {
      try {
        const { rawDecodeAt } = await import("./lib/util.mjs");
        const obj = rawDecodeAt(flight, m.index);
        if ("skills" in obj && (!best || JSON.stringify(obj).length > JSON.stringify(best).length)) best = obj;
      } catch {}
    }
    mp[slug] = best ? { ...best, fetchedAt: new Date().toISOString() } : { error: `no detail object (HTTP ${r.status})` };
  } catch (e) { mp[slug] = { error: String(e.message || e) }; }
});
writeJson(mpPath, mp);
console.log(`marketplace details: ${Object.values(mp).filter((v) => !v.error).length}/${slugs.length}`);

// 3. Full recipes (only with a Cursor session). Resume-safe: successes are skipped, failures retried.
const st = getSessionStatus();
if (!st?.loggedIn || st.expired) {
  console.log("No valid Cursor session at ~/.pi/agent/grokbot-import/cursor-session.json -> skipping full-recipe fetch.");
} else if (!process.argv.includes("--no-full")) {
  const token = await getAccessToken();
  const dir = path.join(ROOT, "data", "raw", "full-recipes");
  fs.mkdirSync(dir, { recursive: true });
  const ids = cand.templates.map((t) => t.shareId).filter((id) => meta[id]?.status === 200 && !fs.existsSync(path.join(dir, `${id}.json`)));
  console.log(`full recipes: ${ids.length} to fetch`);
  let ok = 0, n = 0;
  await pool(ids, Number(process.env.FULL_CONCURRENCY || 3), async (id) => {
    let r;
    for (let a = 0; a < 6; a++) {
      try { r = await tryCursorImportDetails(id, { accessToken: token }); } catch (e) { r = { ok: false, reason: "exception", error: String(e.message || e) }; }
      const transient = !r.ok && (r.status === 429 || r.status >= 500 || r.reason === "exception" || r.reason === "blob-download-failed");
      if (!transient) break;
      await sleep(2000 * 2 ** a);
    }
    const failPath = path.join(dir, `${id}.failed.json`);
    if (r.ok && r.recipe) {
      const { blobGetUrl, ...details } = r.details || {};
      fs.writeFileSync(path.join(dir, `${id}.json`), JSON.stringify({ shareId: id, fetchedAt: new Date().toISOString(), details, recipe: r.recipe }));
      fs.rmSync(failPath, { force: true });
      ok++;
    } else {
      fs.writeFileSync(failPath, JSON.stringify({ shareId: id, reason: r.reason, status: r.status, message: r.message, error: r.error, at: new Date().toISOString() }));
    }
    if (++n % 200 === 0) console.log(`  ${n}/${ids.length} (ok ${ok})`);
  });
  console.log(`full recipes fetched this run: ${ok}/${ids.length}`);
}
