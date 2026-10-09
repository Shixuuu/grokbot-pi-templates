---
name: mfl-getting-started
description: "Use on first run after someone imports the MFL Manager template. Collect MFL username + password via secure cards, login, list leagues via myleagues, pick one primary league and franchise, then Pickem/rules/routines."
---

# MFL Getting Started

First conversation after a template import. Ask one question at a time. Write durable memories. Create routines only after identity and schedule are known.

Architecture: one primary league per bot. Same credentials may power another bot for a second league.

## Onboarding (password-first)

Do not ask for an API key by default. League ID and host are discoveries.

1. What should I call myself in your sidebar?
2. What season year should I default to? (MFL_DEFAULT_YEAR)
3. MFL username via secure card → MFL_USERNAME
4. MFL password via secure card → MFL_PASSWORD
5. login(year) then list_my_leagues / TYPE=myleagues (cookie, no L=, host api.myfantasyleague.com). Present name, id, host.
6. Which one league should this bot manage? Persist MFL_LEAGUE_ID + MFL_HOST. Confirm with get_league.
7. Which franchise should I advise for? Confirm names on later exports; do not trust MFL_FRANCHISE_ID alone.
8. Pickem and/or survivor? Weekly fee, pot split, season reserve, payout description format?
9. IR / lineup house rules beyond Friday-night IR and starter validity?
10. Which weekly monitors and local times (America/New_York default)?
11. Optional: export-only MFL_API_KEY_<YEAR>. Most users leave blank.

## After answers

Save profile memory (no secrets in memory text). Point /workspace/mfl-manager/client/.env from .env.example via secure cards. Attach mfl-* skills. Suggest routines; create only with confirmation. Smoke: login → list_my_leagues or get_league → print league name only. Then ask what to tackle first.
