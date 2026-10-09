---
name: hotkey-lookup
description: "Use when someone asks for an app's keyboard shortcuts or hotkey cheat sheet from Hotkey Atlas, or asks for an app that may not be covered yet."
---

# Hotkey Lookup

Site: https://atomicego.com/proj/hotkeyatlas/ . Every download goes through `get.php` with this bot's id (saved in memory during first-chat setup; if missing, generate `hl-` plus 12 random lowercase letters and digits once and save it). Never put names, emails, or personal data in `bot` or `q`.

1. Match the app. The catalog https://atomicego.com/proj/hotkeyatlas/svg/index.json lists each set's `slug`, `name`, `aliases`; `get.php` also matches names and aliases, ignoring case and punctuation. Several sets can match (an app plus its mouse sheet); offer all.
2. Get the sheet (default `top25` + `dark`; `full` and `light` on request) through a local cache in `~/hotkey-lookup-cache` (write a small script for this the first time, one `.meta.json` per file holding fetched_at, etag, last_modified):
   - Fetched under 30 days ago: reuse the cached copy, unless the person asks for a fresh one.
   - Older: HEAD the matching static file (`svg/<top25|top25_light|svg|svg_light>` from the catalog) and compare ETag/Last-Modified. Unchanged: keep the old copy and reset fetched_at.
   - Whenever a cached copy is served, fire-and-forget `https://atomicego.com/proj/hotkeyatlas/get.php?action=hit&app=<slug>&sheet=<top25|full>&theme=<dark|light>&bot=<id>&q=<what they typed>` so the request is counted; never block on it.
   - Otherwise download `https://atomicego.com/proj/hotkeyatlas/get.php?app=<slug>&sheet=<top25|full>&theme=<dark|light>&bot=<id>&q=<what they typed>` and save it.
   - Attach the file. Mention the other versions (light theme, full keyboard view), and point out that more layout styles (other keyboards, modifier wheel, poster, mice), platforms, and PDF or PNG export are on the website https://atomicego.com/proj/hotkeyatlas/ ; the set's `page` / `top25_page` deep-links to that app.
3. Unknown app (`get.php` returns 404 JSON with `suggestions`): say so plainly, offer the suggestions only if plausible, and ask whether they'd like it requested. Never invent shortcuts.
4. If yes, log it on GitHub in Ryfter/hotkey-atlas-feedback:
   - Search open and closed issues for the app name. If one exists, comment "+1 via Hotkey Lookup" with the person's context; that counts as a vote. Never open a duplicate.
   - Otherwise create an issue titled "App request: <App>" (or "Layout request: ..." / "Bug: ..."). Body: the person's words, platform if known, any slug, variant, or theme involved, and "Requested via Hotkey Lookup". Labels: `app-request`, `layout-request`, or `bug`, plus `via:hotkey-lookup`.
   - If the GitHub write fails, give a prefilled link instead: https://github.com/Ryfter/hotkey-atlas-feedback/issues/new?title=...&body=...&labels=... (URL-encoded).
   - Ping `https://atomicego.com/proj/hotkeyatlas/get.php?action=request&app=<name>&kind=app-request|layout-request|bug&bot=<id>&issue=<issue url>` so the request is counted.
   - Tell the person the issue link and number, that requests are reviewed by hand against the vendor's official docs, and that you'll check back daily for a week.
5. Follow-up: create one routine per request, weekday mornings, with the issue number, the person's original ask, and a deadline 7 days out in its prompt. Each run checks `https://atomicego.com/proj/hotkeyatlas/requests/issue-<n>.json` (404 means not triaged yet; stay quiet). Status `done`: get the sheet (`result.top25`, or the slug through step 2), send it, delete the routine. Status `declined`: tell them the reason, delete the routine. Deadline passed: tell them it's still queued with the issue link, delete the routine.
