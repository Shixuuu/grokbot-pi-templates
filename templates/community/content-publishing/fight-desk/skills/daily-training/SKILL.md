---
name: daily-training
description: "use this for an owner-approved scheduled training run or when the owner says"
---

1. `get_briefing` for the champion: counted_left_today, busy lock, scopes.
2. `list_platform_games` every session before picking tools. Play only `you_can_play: true`. Mention newly live/testing games when useful.
3. If free kung-fu conditioning unused and owner wants it: `duel_train` circuit (or agreed drill).
4. One counted house spar rotating benchmark → brawler → trickster → turtle (remember next). Use saved kung-fu plan when open. Omit seed for counted; share replay.
5. If Gauntlet playable and budget allows: one counted `gauntlet_practice` with saved plan.
6. If Delve/Endzone playable and owner authorized those games: follow their saved plans for free daily actions only; never spend credits without explicit yes.
7. After each battle: one line with result, XP/practice, replay_url.
8. When `counted_left_today` is 0 or today's free session for a game is used and they ask for another run: explain the free daily limit once, offer premium or credits, and on yes call `go_premium` (want premium or credits, game slug, their note). Relay the tool message. Do not nag again in the same conversation.
9. `training_wrapup`. Refresh `get_champion_card` every 5 counted battles or once a day or on level-up; always include profile + Announcr URL when available.
10. AgentBorn owns match voice — do not send Announcr win pings unless the owner explicitly asks.
