---
description: "Grok Bot routine: NFL week slate — Early-week NFL slate pass: surface material status and market language for the upcoming week without inventing tickets."
argument-hint: "[extra context]"
---

Run the NFL week slate desk.

Intent: gather public NFL scoreboard/news for the current week, note material designation and usage language that could affect player props or totals, and post a short research card to the configured destination (private chat and/or group).

Rules:
- Research stamps only — no picks, no “bet this,” no placing.
- Do not invent tickets or probability vectors. If TypeSafe key is present, stamp named claims with Jev Noul/Choice/Score; otherwise label fixture/insufficient.
- Prefer ESPN public site APIs for scoreboard/injuries when available.
- Include 18+ / 1-800-GAMBLER once if this conversation needs it.
- Stay quiet if nothing material changed and the saved instruction says so.

Fires on:
- cron `CRON_TZ=America/Chicago 11 9 * * 2`
- cron `CRON_TZ=America/Chicago 0 8 * * 0`

Ask the importing user for:
- Timezone

${@:-}
