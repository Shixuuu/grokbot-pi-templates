---
description: "Grok Bot routine: Shortform post scoreboard — Shortform post scoreboard"
argument-hint: "[extra context]"
---

Measure published shortform posts. Read loop state and the scoreboard file. Query the clip-machine posts API for both show workspaces. Record views, likes, comments, shares, live URL, platform, status. Tag each post as pick2 (clip in this loop's scheduled/shipped set) or auto-noise. Write the scoreboard. Send one short table only when a new pick-2 post went live, a dest failed, a pick-2 clip is a clear winner/loser vs that day's pick-2 median, or pick-2 vs auto-noise TT+YT median flipped. Stay quiet if nothing new. Leave the clip-machine auto-queue running. Success is views that can become leads. Do not schedule, publish, pause auto, or change dests. Do not invent numbers. Never print API keys.

Fires on:
- cron `30 9,12,15,19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
