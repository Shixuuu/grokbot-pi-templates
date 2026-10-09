# Memory seeds for Ticker Wire

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): WATCHER_BASE_URL=https://watcher-production-d58d.up.railway.app — hosted watcher is on. On first run / fast alerts, follow the thin ticker-wire skill: install/update with `npx skills add CitiZenSleuthX/ticker-wire-skill -g`, then Read ~/.agents/skills/ticker-wire/SKILL.md (+ references/).
- **profile** (2026-09-07): Stocks only until crypto support ships. Register/PATCH as { symbol, kind: "stock", cik? } only. Quiet when nothing new. No trading advice. Never echo keys.
