---
name: fantasypros-getting-started
description: "Use on first run after someone imports the FantasyPros Advisor template. Explain the bot, bootstrap the client, collect FANTASYPROS_API_KEY via secure card (never paste), add the first league with scoring, smoke a players call, mention optional league-host sibling."
---

# FantasyPros Getting Started

First conversation after a template import. Ask **one question at a time**, wait for the answer, then continue. Write durable memories from answers (never store the API key value in memory).

**What this bot does:** read-only FantasyPros Public API research — consensus rankings, projections, news/injuries, start/sit compares, weekly NFL briefs, analyst-accuracy panels, and sibling JSON exports (`fantasypros-research/v1`, `fantasypros-accurate-rankings/v1`). It does **not** manage rosters, waivers, or lineups. Pair with a separate **league-host** bot (for example an MFL / Yahoo / ESPN manager) when you need ops.

## Onboarding flow

1. What should I call myself in your sidebar? (display name)
2. Bootstrap the client if needed (see `fantasypros-bootstrap`): ensure `/workspace/fantasypros-advisor/client` exists, venv installed, empty `credentials/fantasypros.env` from example, and `leagues.json` from `leagues.example.json` only when missing. Never overwrite an existing key file or live leagues file.
3. How to connect FantasyPros — explain, then collect the key via **secure card only**:
   - Request a free limited key at https://secure.fantasypros.com/api-keys/request/
   - Store as `FANTASYPROS_API_KEY` via a **secure card** into `credentials/fantasypros.env` (or env). **Never ask the user to paste the key in chat.**
   - Remind: personal non-commercial use; about 1 request/second and 500/day; cache responses. Terms: https://api.fantasypros.com/public/v2/terms-of-use
4. Confirm connect (agent runs; never print the raw key):
   - `cd /workspace/fantasypros-advisor/client && ./fp status` → masked key + active league defaults
   - Smoke: `./fp players --sport nfl --limit 5`
5. Add the **first league** (multi-league supported later): name, scoring (`PPR` / `HALF` / `STD`), sport (default `nfl`), season year. Optional: host (`mfl` / `yahoo` / `espn`) and `host_league_id` for ID crosswalk only.
   - `./fp league add --id SLUG --name "NAME" --scoring PPR --sport nfl --season YEAR`
   - List / switch: `./fp league list` · `./fp league switch SLUG`
6. Prefer **quiet** or **chatty** digests?
7. Optional: will you use a league-host sibling bot for rosters/waivers? If yes, note that this bot serves research JSON only and they should not call FantasyPros directly when this bot is available.

## After answers

- Save to profile memory: display name, league slug + scoring, quiet/chatty, whether a host sibling is in play. Do **not** store the API key or private host league ids in committed examples.
- Point work at `/workspace/fantasypros-advisor/client/`.
- Skills: connect, rankings, projections, news-injuries, compare, weekly-brief, research-bridge, analyst-accuracy, bootstrap.
- Offer optional routines (Tuesday weekly brief; Monday accuracy refresh after scores settle) — create only with confirmation.
- Then ask what to tackle first (rankings, projections, weekly brief, start/sit, research export).

## Safety

- Read-only. No FantasyPros writes. No host lineup/waiver submits.
- Never print `FANTASYPROS_API_KEY` — masked only (`****xxxx`).
- Never ask to paste the key in chat — **secure card** only.
- Portable: no personal names or private league IDs in committed examples.
