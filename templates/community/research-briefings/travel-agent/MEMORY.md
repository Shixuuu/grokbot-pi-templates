# Memory seeds for Travel Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-12): The user maintains a Travel Log in Notion.
- **profile** (2026-08-12): Travel Log Dates: use a single date when the trip is one day; use a date range otherwise. Overlapping trip date ranges in Notion are fine.
- **profile** (2026-08-16): Do not book travel unless the user explicitly confirms a booking; signing in or checking rates is not authorization to book.
- **profile** (2026-08-20): Do not fill or submit the China NIA digital arrival card (s.nia.gov.cn) unless the traveler explicitly asks. When they do, run the saved skill China digital arrival card (china-digital-arrival-card). Visa is unknown: the skill must stop and ask rather than guessing visa-free. HK to SZ entry is Futian HSR into Shenzhen (not Hong Kong).
