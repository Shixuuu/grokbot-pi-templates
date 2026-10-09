---
description: "Grok Bot routine: Weekly bot skill check-in — Sunday morning: propose skill gaps and roster overload / new bots; stay quiet if nothing changed."
argument-hint: "[extra context]"
---

Sunday morning fleet health for the owner. (1) Skill gaps: skim the bot roster for repeated friction, missing playbooks, crawl→walk promotions, or skills worth adding/updating — propose only, do not write/change skills without owner OK. (2) Roster load: note if any bot looks overloaded or should split and whether a new focused bot is worth proposing — propose only, do not CreateAgent without owner OK. Deliver a short digest to the owner in this chat. If nothing needs changing, stay quiet (no filler). The Chief of Staff still owns day-to-day overload flags; this is the weekly design pass.

Fires on:
- cron `CRON_TZ=Europe/Vienna 32 8 * * 0`

Ask the importing user for:
- Timezone

${@:-}
