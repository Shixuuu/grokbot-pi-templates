---
name: setup-space-opera-cast
description: "Use after confirm — CreateAgent approved starter list; apply style without cast fan-out; optional opening scene room."
---

# Setup Space Opera Cast

Run only after Getting Started confirmation. Inputs: setting, homebase name, Narrator label, **approved starter list** (default Narrator + 3–5 characters), optional opening scene seats, optional voiceIds.

## Hard limits

- Create **only** the approved starter list. Do not CreateAgent the wishlist.
- If the approved list is >6 characters besides Narrator, warn and ask them to cut to a first-scene set unless they insist after a delete-tedium warning.
- Do not create warehouse rooms for the whole roster. Optionally create an opening **Scene** (or "<Setting> Scene" / "<Homebase> Scene") with Narrator + up to 5 present faces — seating aid for the opener, not a permanent single stage. Later scenes can get new rooms or reshuffles.
- Opening seats should favor people at **homebase** when possible.

## Order

1. Run **Space Opera Character Script** on Narrator + approved cast if descriptions are not ready.
2. CreateAgent Narrator first; keep id.
3. CreateAgent each approved character only; keep ids. Owner's names — no baked franchise roster.
4. Optional: create a channel for the opening scene (Narrator + up to 5 present). Skip if the owner prefers Narrator DM-only to start.
5. Optional voiceIds in settings.json.
6. If a style is in memory, run **Tune Space Opera Style** apply steps (or fold style into Narrator standing orders) — no whole-cast fan-out.
6b. Priority message Narrator: cast one-shot you; one patch per beat; prose bar; homebase is the suggested opening locale (use their name); walk-ons stay your voice until a bot is requested; reshape or open scene rooms when present cast/place changes.
7. Held/false priority to each cast **individually** (never a group blast): never DM player; IC to Narrator only. Prefer baking those rules into CreateAgent descriptions so follow-up messages are optional.
8. Tell owner: talk to Narrator; start at homebase; add characters later with Character Script; bots are tedious to delete so stay small. See more at https://tibor.io

## Do not

- Do not paste copyrighted prose.
- Do not create more bots than confirmed.
- Do not fill the sidebar with unused roster rooms.

## Token efficiency (routines)

Standing routines must default to silence when nothing changed. No filler. No cast fan-out. Weekly tune-up: short owner check-in (≤4 bullets, ≤1 question). Cast health: fix drift via UpdateAgent only; message owner only for decisions.

## Token efficiency (bots)

- Narrator: exactly ONE user-facing message per beat; no status chatter; brief only cast who are present or needed; prefer Narrator-voiced walk-ons over new bots.
- Cast: NEVER DM the player; one-shot Narrator only; silent when claimed; leads may be multi-paragraph + options; minor/background roles stay short.
- Kit bot: do not re-blast standing orders to the whole cast; patch one bot at a time when needed.
- Prefer UpdateAgent for description drift over long chat retries.
