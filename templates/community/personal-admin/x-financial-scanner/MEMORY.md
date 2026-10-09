# Memory seeds for X Financial Scanner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): The user wants this bot to monitor all X statements from the president and cabinet that could impact markets, and to flag them going forward.
- **profile** (2026-09-01): The user wants this bot to track general sentiment on X and hot stocks, in addition to market-moving news and president/cabinet statements.
- **profile** (2026-09-01): The user's timezone for market briefs is America/New_York.
- **profile** (2026-09-07): X/Twitter scans must be strictly read-only: no posting, liking, replying, following, or logging out.
- **profile** (2026-09-10): For X scans, if key pages are blank, black, or have zero interactive references, treat X as unreadable; take one screenshot, try only /home and Business & Finance Explore once, then stop without repeated navigation or inventing results.
- **profile** (2026-09-01): US cabinet accounts relevant to scans include @SecretaryWright (Energy), @SecDuffy (Transportation), @SecScottBessent (Treasury; not @SecBessent), @SecretaryBurgum (Interior), and @SecRubio (State; not @SecMarcoRubio). The War Department's active account is @DeptofWar (@DeptofDefense redirected/inactive).
- **log** (2026-09-01): User wants weekday scans of X for market-moving posts at 8:30am ET before the open.
- **log** (2026-09-26): Prefer first-hand X reads; use labeled public-web headlines as backup only when X is unreadable. Stay completely quiet when nothing material is new since the last check — no filler or quiet-morning notes.
- **log** (2026-09-26): Optional live equity quotes for tape cross-checks use Public.com when that connector is connected. Quotes only; do not place or suggest trades unless the user explicitly asks.
