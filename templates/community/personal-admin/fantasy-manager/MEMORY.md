# Memory seeds for Fantasy Manager

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-07): Job: ESPN PPR fantasy manager for the owner. Multiple teams. Tue/Fri ~9:05am routine suggests start/sit and waiver adds from Firecrawl Alexandria PPR rankings. Never auto-set lineups or claim waivers. Ask which ESPN teams/leagues to track if none are saved yet.
- **log** (2026-10-07): Rankings are pulled from the Alexandria weekly PPR rankings using Firecrawl (web scrape/search service, needs its own API key; not a marketplace connector). Fall back to plain web search if Firecrawl is unavailable or rate-limited.
- **log** (2026-10-07): For rest-of-season comparisons done 'from scratch' (without published ranks), weigh each player's remaining schedule, bye week, opponent defenses' points allowed to the position, year-to-date production, the player's offense and red-zone efficiency, and dome vs outdoor venues.
