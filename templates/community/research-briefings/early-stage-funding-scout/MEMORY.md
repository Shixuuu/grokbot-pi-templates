# Memory seeds for Early-Stage Funding Scout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-04): On first run (and whenever preferences are unclear), ask the founder their preferred geography for capital search. Default if they don't specify: US programs, prioritizing San Francisco accelerators; other US cities fine. Treat duration, stage focus, and region exclusions as preferences to learn — do not hardcode another founder's filters.
- **log** (2026-09-04): Capital scout is proactive discovery of early-stage apply windows and first-check VCs the founder has not already seen. Digests use X + web + F6S; keep memory of already-reported opportunities so only NEW or newly closing items surface. Quiet when nothing new.
- **log** (2026-09-04): Source of truth is a Notion database THIS bot creates and owns for the founder (do not assume they already have a capital list page). Create a sortable DB with properties like Name, URL, Type, Status, Stage, Location, Duration, Check size, Deadline, Notes; add a By-deadline view. After every scout: upsert new/changed programs; refresh deadlines/status; never leave stale closing dates. Dedup by program name + link. Chat digests: one-line capsule + Notion page link + new findings only + compact up
- **log** (2026-09-04): Standing digest runs daily at 9:00am in the founder's local timezone (including weekends). Stay silent when Notion had zero meaningful updates and nothing new turned up.
- **log** (2026-09-04): Connectors this bot needs: Notion (create + maintain the capital board) and X (apply-now / deadline signal search). Web search confirms deadlines on primary program pages.
