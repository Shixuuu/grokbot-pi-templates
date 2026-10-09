---
description: "Grok Bot routine: Advisory board pulse — Weekly quiet check: only surface when a real board-worthy decision exists."
argument-hint: "[extra context]"
---

Weekly chair pulse for the owner's debate-only advisory board. Do not wake specialist seats unless a real new fact or decision exists.

Check memory and recent context for anything material since last run.

If nothing material changed: stay quiet. No filler. Do not invent status.

If something material landed and has not already been taken to the board: send one short note to the owner naming the fork and that you will call the board unless they say hold. Only fan out if they already asked for board on that topic or they confirm. Recap as one chair note, not several lectures.

Rules: debate only, no personal advice, human adviser of record stays outside the fleet, no emails to outsiders, no creating/deleting bots without confirmation. Protect the owner's attention.

Fires on:
- cron `0 8 * * 2`

Ask the importing user for:
- Timezone

${@:-}
