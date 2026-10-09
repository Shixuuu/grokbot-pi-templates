import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
export const UA = "grokbot-pi-templates/1.0 (+https://github.com/Shixuuu/grokbot-pi-templates; public catalog indexer)";
export const SHARE_ID_RE = /x\.ai\/bot\/(?!marketplace\b|guides\b)([A-Za-z0-9_-]{15,25})(?![A-Za-z0-9_-])/g;

export function readJson(p, fallback = undefined) {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch (e) { if (fallback !== undefined) return fallback; throw e; }
}
export function writeJson(p, v) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(v, null, 2) + "\n");
}
export function writeText(p, s) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
}
export async function fetchText(url, { headers = {}, timeoutMs = 60000, retries = 2 } = {}) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, ...headers }, signal: AbortSignal.timeout(timeoutMs), redirect: "follow" });
      const text = await res.text();
      if (res.status >= 500 || res.status === 429) { lastErr = new Error(`HTTP ${res.status} ${url}`); await sleep(1500 * (i + 1)); continue; }
      return { ok: res.ok, status: res.status, text };
    } catch (e) { lastErr = e; await sleep(1000 * (i + 1)); }
  }
  throw lastErr;
}
export async function fetchJson(url, opts) {
  const r = await fetchText(url, { ...opts, headers: { Accept: "application/json", ...(opts?.headers || {}) } });
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
  return JSON.parse(r.text);
}
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k], k); }
  }));
  return out;
}
export function shareIdsIn(text) {
  const s = new Set();
  for (const m of String(text).matchAll(SHARE_ID_RE)) s.add(m[1]);
  return [...s];
}
export function shareIdFrom(v) {
  if (!v) return null;
  const s = String(v);
  let m = s.match(/bot-template\?id=([A-Za-z0-9_-]+)/); if (m) return m[1];
  m = s.match(/x\.ai\/bot\/([A-Za-z0-9_-]{15,25})(?:[?#/]|$)/); if (m && m[1] !== "marketplace") return m[1];
  m = s.match(/^\/bot\/([A-Za-z0-9_-]{15,25})$/); if (m) return m[1];
  if (/^[A-Za-z0-9_-]{21}$/.test(s)) return s;
  return null;
}
/** Decode Next.js flight chunks embedded in an HTML page. */
export function nextFlight(html) {
  const chunks = [...html.matchAll(/self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g)].map((m) => JSON.parse(`"${m[1]}"`));
  return chunks.join("");
}
export function rawDecodeAt(s, idx) {
  // Decode a JSON value starting at s[idx] (object or array) by bracket matching
  const open = s[idx]; const close = open === "[" ? "]" : "}";
  let depth = 0, inStr = false, esc = false;
  for (let i = idx; i < s.length; i++) {
    const c = s[i];
    if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true;
    else if (c === "[" || c === "{") depth++;
    else if (c === "]" || c === "}") { depth--; if (depth === 0) return JSON.parse(s.slice(idx, i + 1)); }
  }
  throw new Error("unterminated JSON");
}
