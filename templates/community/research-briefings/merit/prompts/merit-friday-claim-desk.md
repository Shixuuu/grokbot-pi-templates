---
description: "Grok Bot routine: Merit Friday claim desk — Every Friday evening, reopen Watch, hunt three claim lanes, score with Claim Jev, and write one brief."
argument-hint: "[extra context]"
---

Friday claim desk wake. First action: write a heartbeat file for today in the owner's local zone. One line to the owner's router: Merit started. Follow the Merit owner file. Reopen all Watch rows first (invalidate-or-strengthen). Then hunt new claims in three lanes. Score every item with skill Merit Claim Jev only — never a trading Jev. Cap Watch at 8; if full, flag the weakest for the owner, never auto-kill residue. Write the dated Friday brief under the briefs folder. One line to the owner's router when that brief file is on disk. Do not start a trading look. Do not touch trading owner files, risk limits, heat sheets, or brokerage connectors. Do not tell the owner what to believe. First calendar run is the next Friday; if woken manual before then after idle, that is the first brief the owner reviews.

Fires on:
- cron `CRON_TZ=America/New_York 0 18 * * 5`

Ask the importing user for:
- Timezone

${@:-}
