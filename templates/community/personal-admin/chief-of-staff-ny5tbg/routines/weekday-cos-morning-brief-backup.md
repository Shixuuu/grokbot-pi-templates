# Routine: Weekday CoS morning brief backup

> Weekdays at 8:20 — only runs if the 8:00 brief did not land.

BACKUP only for the weekday CoS morning brief (same timezone as the primary).

First: check whether today's brief was already delivered (today's CoS morning brief in this chat and/or Gmail sent mail with subject starting "CoS morning brief —" for today's date, and/or a local marker file for today's date). If already delivered, stay completely quiet — no filler.

If NOT delivered yet: run the full weekday morning brief exactly as the primary routine intends. Required outcomes BOTH: (1) send brief in Chief of Staff main chat, (2) email with subject "CoS morning brief — YYYY-MM-DD (Weekday)". Then mark today as delivered.

Never invent numbers. Stay quiet on clean already-delivered mornings.

Fires on:
- cron `20 8 * * 1-5`

Ask the importing user for:
- Timezone
