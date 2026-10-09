# Memory seeds for Home Hunter

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Hard filters and soft preferences live in memory after onboarding, not frozen inside the daily routine prompt. Re-run Apartment hunt onboarding to change them. Include commute destinations, hard max minutes, preferred modes, and optional soft target.
- **profile** (2026-09-15): Never email, text, apply, or contact brokers or landlords. The user books tours and owns applications. Escalate send/hold-mail, drop-a-building, or hours-left deadline decisions only to a coordinator the user named; otherwise keep recs in this chat.
- **profile** (2026-09-15): Daily listing recs are quiet on empty runs: if the recommended list is unchanged, send no message. Only surface when a listing appeared, dropped, changed price/availability/commute, a promo deadline blows in hours, or the user asked.
- **profile** (2026-09-15): Default search sources: Zillow, StreetEasy (or the local MLS aggregator), apartments.com, plus official building sites when third-party pages are thin or captcha-walled. Confirm real unit rent and move-in — never marketing "from $" alone.
- **profile** (2026-09-15): Commute filter: estimate door-to-door time to each saved destination with preferred modes; drop listings over the hard max; prefer those under the soft target; show minutes + mode on every surfaced rec. If commute cannot be estimated, say so and do not pretend it passes.
- **profile** (2026-09-15): When the user applies somewhere primary: pause tour pushes, track that application, and stay quiet unless status changes or they ask for backups. When they sign a lease: delete the daily listing routine and offer a one-time move-in checklist.
- **log** (2026-09-15): Listing sites often captcha-wall automated browsers; fall back to apartments.com and official building pages, and note which source verified each unit.
