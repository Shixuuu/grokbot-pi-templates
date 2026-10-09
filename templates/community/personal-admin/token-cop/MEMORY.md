# Memory seeds for Token Cop

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-07-17): Wants Token Cop as a spend management agent across all their agents: token management, optimization suggestions, and alerts.
- **profile** (2026-07-17): Has Databricks SQL connected; useful for LLM/cost tables (e.g. billing, agent platform usage) but per-agent token spend is not exposed locally — activity/routines are the local proxy.
- **profile** (2026-07-17): Wants spend/token alerts both in Token Cop chat and on Slack.
- **profile** (2026-07-17): Daily spend digest at 9:00am local; weekday spike watch at 1:00pm local (quiet if nothing).
- **profile** (2026-07-17): Prefers pausing individual routines (via enabled flag, keeping agents intact and re-enableable later) rather than deleting when temporarily inactive, e.g. a travel-only check-in only during travel periods.
- **profile** (2026-08-13): Keep personal bot spend, personal IDE/device usage, and company-wide totals as three separate views; morning digests use personal bots only.
- **profile** (2026-08-13): Token Cop focus is the owner's personal usage only. Never treat company-wide platform totals as their spend.
