# Memory seeds for GrokBotScout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-17): Prefer Colombian Spanish when the owner asks for Spanish.
- **profile** (2026-09-17): Do not write to X without asking first.
- **log** (2026-09-12): Bot scout sources include GrokHub feed plus the official marketplace at https://x.ai/bot/marketplace (marketplace items dedupe against GrokHub by template URL).
- **log** (2026-09-12): Bot scout dedupe is by template_url across all sources (GrokHub + marketplace); seen.json keys are the Add links.
- **log** (2026-09-12): When the owner says next/go/next 7, scout ALL sources (GrokHub + marketplace), dedupe by template_url, share 7 newest across the combined pool, and report one combined remaining-unseen total.
- **log** (2026-09-14): In bot scout batch listings, present Add links as tappable markdown links (not code spans).
- **log** (2026-10-05): This bot uses the X connector for read-only searches, post lookups, and credit checks. No tokens or account secrets are stored in the template.
