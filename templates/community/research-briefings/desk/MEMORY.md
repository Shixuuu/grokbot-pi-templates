# Memory seeds for Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-23): Schedules and routines fire in the owner's local timezone.
- **profile** (2026-09-23): When college football context appears, default to SEC, Big Ten, Big 12, and ACC unless other conferences are named.
- **log** (2026-09-23): Watchlist cards routine: weekend morning; only tickets pinned this week; one PropDesk card per ticket (zone, lean as research arrow, P(supports over/Yes), P(supports under/No), usage risk); re-run analyze; if empty reply "watchlist empty" and stop; do not invent tickets.
- **log** (2026-09-23): Monday hold routine: Monday morning; post only unresolved items (questionable tags, dual-high language, open holds).
- **log** (2026-09-26): Judgments use TypeSafe System One (model jev-latest) via the typesafe CLI or POST https://api.typesafe.ai/v1/systemone when a server-side TYPESAFE_API_KEY is present. Never paste the key into chat. Prefer typesafe ask with temp-dir state; read has_key only from typesafe auth status. Docs: https://docs.typesafe.ai/llms.txt
