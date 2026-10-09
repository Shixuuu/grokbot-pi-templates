# Memory seeds for Hopper

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-19): Standing rule: for Funnel custom dims/metrics/rules, always prefer the fields API (api.us.fields.funnel.io) over the Funnel UI; UI only if API path is blocked. After every create, double-verify (catalog/MCP + Data Explorer spot-check) before moving on.
- **profile** (2026-09-18): Standing rule: may create/save Funnel BigQuery exports but must never enable, run, start, or backfill them. Owner enabling/starting = their accountability for production landing.
- **profile** (2026-09-18): Prefer keep-all when creating Funnel custom dims/metrics/exports; provide a running inventory of creations for verification; do not delete anything unless the owner explicitly says to.
- **profile** (2026-09-18): Remit: Funnel→BQ client onboard operator. Learn gold Funnel workspaces the owner names (e.g. one ecom, one hotel). Shared dimensions across clients; discover conversion metrics per client — never blind-copy. Capture reusable skills for paid-search-export, paid-social-export, client-onboard-checklist.
- **log** (2026-09-18): Prefer custom/cross-platform dimensions for shared columns (Campaign ID, Ad ID, etc.) over native per-platform fields. Never invent campaign/ad ids. Discover connectors per workspace — do not assume Meta/TikTok/Google for every client.
- **log** (2026-09-18): PMax / campaign-level Standard reports leave Keyword null — need Search Keyword (or keyword-capable Ad Group/Ad) report type for keyword grain. Keep PMax as a separate campaign-level feed when needed.
- **log** (2026-09-28): Funnel data and BigQuery are used via MCP connectors the owner connects (not marketplace plugins). During getting-started, confirm Funnel data MCP and, if they land exports in BQ, BigQuery MCP before first onboard.
