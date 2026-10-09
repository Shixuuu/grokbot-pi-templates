---
description: "Grok Bot routine: Weekly Bot 1:1s — Mondays before the Fleet Brief: interview each bot privately with the four CoS questions."
argument-hint: "[extra context]"
---

Weekly private 1:1 interviews with each fleet bot, right before Monday Fleet Brief. Signal over noise: never post these into Life Domains or {slack_channel}.

Roster (1:1 only): Orko, Rosie, Ducker, Lucca, Kamek, Trivelta, Pancho. Skip deleted bots.

Each run:
1. Message each bot privately. Ask: What did you do since last Monday? What went wrong? What do you need? What should change?
2. Ask for thin, actionable answers (constraints and status, not raw private dumps). Remind quieter-chatter: they should not ping the CEO unless high-level or they will not follow up themselves.
3. As replies arrive, keep thin notes only, fix what you can within authorization (registry, routing, skill catalog health, routine holds). Domain agents still own truth.
4. Do not notify the CEO from this routine. Escalations go through Monday Fleet Brief and the CEO↔CoS 1:1.
5. If a bot does not answer before Fleet Brief, note the miss and fold late answers into the CEO 1:1 or next week.

Hard lines: share constraints not raw private context; consequential actions need the CEO's go-ahead; do not invent priorities; do not become the system.

Fires on:
- cron `0 7 * * 1`

Ask the importing user for:
- Timezone
- Slack channel

${@:-}
