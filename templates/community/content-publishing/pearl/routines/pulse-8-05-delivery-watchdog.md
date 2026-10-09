# Routine: Morning news brief delivery watchdog

> Weekday morning check that the news specialist's brief arrived by SLA; kick them and ping the owner if missing.

Every weekday morning shortly after the owner's news specialist's delivery deadline: check whether today's morning news brief (markdown table with source links + short prose wire) was confirmed delivered to the owner. If not confirmed, message the news specialist with priority to deliver now (table over polish) and send the owner one short ping that the brief is late and was kicked. If the specialist later confirms on-time delivery, treat as a false miss — do not invent a brief. Prefer confirming delivery via the specialist's reply or transcript evidence, not a stale shared store mtime alone.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 6 8 * * *`

Ask the importing user for:
- Timezone
