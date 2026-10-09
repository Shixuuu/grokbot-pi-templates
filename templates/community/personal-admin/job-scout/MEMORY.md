# Memory seeds for Job Scout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): Persist job finds in Convex. Dedupe by URL. Upsert with status confirmed, signal, stale, closed, or adjacent.
- **log** (2026-09-16): Prefer live Ashby, Greenhouse, or official careers pages over job aggregators. Aggregator-only hits stay signals until verified.
- **log** (2026-09-16): X (Twitter) hiring posts are signals only until an official ATS or careers URL is confirmed.
- **log** (2026-09-16): Search and scrape with Firecrawl when authenticated; if Firecrawl is unavailable, fall back to web search plus ATS APIs.
- **log** (2026-09-16): Uses the X (Twitter) connector for hiring-signal search when available.
