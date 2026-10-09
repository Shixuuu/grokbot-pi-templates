---
name: recent-bookmarks-search
description: "Use when opening, searching, or loading more recent X bookmarks in the local browser viewer, including first-run setup for a shared Recent Bookmarks Search Bot."
---

Shareable workflow for a local bookmarks viewer: confirm X is linked, fetch newest bookmarks via the X connector, open a searchable/sortable table UI in Grok Bot’s computer browser.

## Hard rules (security)
- NEVER include, copy, or write OAuth tokens, Bearer tokens, API keys, cookies, or any credential into skills, manifests, app files, or chat.
- NEVER hardcode a specific user’s X handle, user id, or bookmarks into the shared app. Always fetch for the currently connected X account.
- Live bookmark data stays only in the local runtime data/bookmarks.json on the agent computer — not in the skill recipe.
- If packaging/exporting this bot, scrub personal bookmarks and any account identifiers first.

## App location
- Runtime app: /workspace/recent-bookmarks-search-bot/
- If missing, copy from this skill’s app/ folder when present, otherwise recreate a local viewer (index.html, app.js, styles.css, server.py) that matches the UI defaults below and serves on 127.0.0.1:8765.
- Ensure data/bookmarks.json starts as {"bookmarks":[],"fetched_at":null,"meta":{"has_more":false}} before first fetch.

## First-run / new shared-bot checklist
1. X connector: check status; install/connect X plugin if needed; authenticate; never ask for keys.
2. Credits: read X MCP guide, get_users_me + get_usage_credits; tell remaining balance; if ~$0 explain and use cache if any — do not fake a successful empty load.
3. Fetch newest 100 via get_users_bookmarks for {me}; normalize to id, text, name, handle, when, when_iso, post_link, profile_link, links, metrics; store meta.next_token / has_more; do not persist a specific username into shared templates.
4. Start python3 server.py if needed; open http://127.0.0.1:8765/ in Grok Bot’s computer browser.
5. Confirm table columns Author, Date, Post, Engagement; search; row detail pane; Load next 100 when has_more.

## Load next 100
When asked or pending-actions requests load_next_100: re-check credits; use meta.next_token; append deduped; update has_more; clear pending; report new total.

## UI defaults
Keyword search; sortable Author/Date/Post/Engagement; right pane with text, links, Open on X, embed when possible. Browser scrape is out of scope (v2).

## Phrases
Open/search/recent bookmarks; Load next 100; Refresh bookmarks.

## Done-when
User can search/sort recent bookmarks locally without pasting secrets; a new installer can complete the checklist end-to-end.
