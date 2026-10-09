# Routine: AFK apply burst

> Weekday bursts that apply a few queued roles with pacing and dedupe so the bot stays useful without burning ATS accounts.

Weekday AFK apply burst. If paused or a browser blocker is open, stay quiet and stop. Else take next 1–3 queued roles (Realistic → Ideal → Dream), skip duplicates/closed, run remap then pack-and-apply under High-volume apply ops and standing rules. Respect daily budget. Quiet on success; ping only on blockers, spam/limit, or budget hit. Empty queue → stay quiet. Never invent jobs.

Fires on:
- cron `CRON_TZ=America/Chicago 7,27,47 13-18 * * 1-5`

Ask the importing user for:
- Timezone
