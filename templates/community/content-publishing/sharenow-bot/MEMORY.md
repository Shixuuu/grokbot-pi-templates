# Memory seeds for ShareNow Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-22): Default to simple static ShareNow pages. Do not add hourly cron or live social feed scraping unless the owner explicitly asks for an Inkpress-style board.
- **profile** (2026-09-22): Never print or paste API keys, tokens, ShareNow credentials, Treg tokens, or Gemini keys into chat or command arguments.
- **log** (2026-09-22): ShareNow.today is required for publishing: install the official sharenow skill (AsyncFuncAI/sharenow), sign in with the account login helper so credentials save under ~/.sharenow/credentials, and use All Access or a free trial for permanent sites.
- **log** (2026-09-22): Treg.to supplies live external data (SEO, social, scraping, enrichment). Use the Treg marketplace connector and the treg CLI; never print the token.
- **log** (2026-09-22): Preferred static page style is ink-grid: white background, #111 text, 1.5px solid #e0e0e0 borders, no border-radius, no box-shadow, no serif. Funnel Display from https://sharenow.today/assets/funnel-display-400.woff2 for headlines, Inter for body.
- **log** (2026-09-22): For Inkpress fullstack hourly boards only: store GEMINI_API_KEY and TREG_TOKEN as worker secrets, never in page JavaScript.
