---
name: inkpress
description: "use this when spinning up a live hourly topic board (tips, videos, posts) with Treg search plus a ShareNow fullstack worker. Also use for hourly curated feeds. Do not use for a one-off search or a static page with no cron."
---

# Inkpress

Press any topic into a live hourly board. Treg pulls sources. Gemini keeps useful notes. ShareNow fullstack hosts the page, database, and hourly trigger.

Requires ShareNow fullstack skill 1.21.0+ (check https://sharenow.today/api/skill/version). Credentials stay in ~/.sharenow/credentials. Never print keys. Worker env (mode-600 JSON): TREG_TOKEN, GEMINI_API_KEY, optional INGEST_SECRET.

## What you ship

One ShareNow fullstack app:
- worker.js — fetch, score, store, render HTML
- web/scroll.js — static endless-scroll client via code.assets
- schema.sql — posts + meta (first deploy only)
- fullstack.yaml — D1, secrets, hourly-refresh cron `0 * * * *`, code.assets: web

Tabs typically: X, Threads, YouTube, Instagram. Date rail uses the owner's local timezone. History upserts; the hourly job must not wipe the table.

## Spin up

1. Name the topic. Write 4–6 search queries.
2. Pick Treg endpoints with `treg catalog search` then `treg catalog get`. Prefer high reliability and low price.
3. Scaffold fullstack.yaml, schema.sql, worker.js, web/scroll.js. No secrets or .bak files in the project folder.
4. Deploy with the ShareNow fullstack ship helper and secrets-from a mode-600 JSON file.
5. Hourly: Treg → keep posts that mention the topic → Gemini score keepers → upsert. Server-render HTML. Call Treg at https://treg.to/call/<id> with X-Treg-Token.
6. ShareNow cron is the only clock. Do not add a chat-agent routine for hourly refresh.

## Page (ink-grid)

Light mode, white paper, #111 ink, #e0e0e0 1.5px borders, no radius/shadow/serif. Funnel Display for headlines, Inter for body. Top bar + feed + date rail with enough left padding.

Do not set spa: true on Worker-rendered boards. Do not invent titles, photos, or stats. Do not put secrets in page JS.

## Done when

The live URL is light ink-grid, tabs work, scroll.js is a static asset, embeds play on the branded host, and hourly cron is `0 * * * *`.
