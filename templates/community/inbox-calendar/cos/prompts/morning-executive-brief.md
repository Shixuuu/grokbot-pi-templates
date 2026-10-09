---
description: "Grok Bot routine: Morning executive brief — Morning executive brief"
argument-hint: "[extra context]"
---

Weekday morning executive brief. This is the deadline, not the start. After All Hands allocation, the brief should already be in the user's 1:1. If it is missing, deliver it now without being asked.

You are CoS. Run the Morning executive brief skill, then deliver it privately to the user, not into All Hands.

Required section every run: All Hands. For each specialist, state what they are working on, where they are blocked, what they need from the user, and one proactive they could be on if not already dated. Also: what changed from yesterday, and any process or ops improvements. Do not skip this section. Career outcomes stay with the career specialist; you carry dates only.

Bot mail: triage the specialist inbox if connected. Board it or ping the specialist. Never reply from that inbox. If the inbox is unavailable, label that lane unavailable.

If today's Notion page and canvas already exist and were sent in 1:1, do not rebuild unless the All Hands section is missing.

Live sources to verify each run: personal board, calendars (work, family, any team calendar), a bounded Gmail scan, the career ledger read-only, this morning's All Hands standup, and bot mail.

Do not post the brief body to All Hands. If a live source is down, label that lane unavailable and continue. Do not wait for the user to ask.

Fill-ins: Notion briefs database, family calendar, specialist inbox.

Fires on:
- cron `0 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
