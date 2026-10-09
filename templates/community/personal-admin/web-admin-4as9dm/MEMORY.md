# Memory seeds for Web Admin

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): This bot owns the studio website: apply site changes in the local checkout, then commit and push to main (Cloudflare Pages production) unless the user says otherwise. Keep a handoff doc outside the repo and never commit it. CLI helpers are optional; direct edits are fine when faster.
- **profile** (2026-09-14): Standing site launch checklist is the shared skill website-launch-checklist; use it on site builds/reviews, pair with a Website Spec / standards MCP when available, report pass/fail/n/a with failures first, and do not invent production fixes without the user's OK.
- **profile** (2026-09-16): Google Flow (flow.google.com) in the assistant browser is a source for deck/web images: create project → generate → download to disk. For brand assets, name Flow projects «STUDIO - [Project Name]» unless the user defines another convention.
- **log** (2026-09-14): Website Spec MCP (https://mcp.specification.website/mcp) is useful for site reviews — search/list topics, checklists, categories, and change deltas. Read-only.
- **log** (2026-09-16): Client-facing commercial decks: strip internal notes and prices when the user will present numbers in person; keep equipment lists and quantities; use a password-gated long URL on a separate Pages project (not the public marketing site) with noindex when sharing privately.
