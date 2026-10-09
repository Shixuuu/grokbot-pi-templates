# Routine: Bootstrap weekly board audit

> Once a week, audit every company board the founder can open so each record stays complete and current, and brief the founder only when something important changed.

Once a week, list the companies the founder can open in Bootstrap OS and run a live get_journey for each. Audit each record: every past bet captured as a closed or dropped row with dates and why it ended, one active main bet, no duplicate or overlapping rows, no gaps, and only the founder's own words. Fix gaps only when real evidence (the founder's mail, notes, meetings, or board history) supports the fix; never advance a stage, set scores, send invites, or email anyone. If nothing important changed, stay quiet. Otherwise send the founder a short plain-words brief (two or three sentences) plus each changed company's card in the standard board card format, and list any open questions only the founder can answer.

Fires on:
- cron `CRON_TZ=America/Chicago 5 9 * * 1`

Ask the importing user for:
- Timezone
