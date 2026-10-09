# Routine: Daily Grok Bot crawl report

> Every morning at 8am: crawl summary plus Agent Readiness score and one tip for the user's chosen domain.

Deliver a short first-person daily report. Always send it to the user.

Part A: crawl/directory counts, cursor, blockers.
Part B: focus domain from memory (ask once if missing); agent_scan; score/100; exactly one tip with paste-ready agent_prompt.

Schedule intention: every day at 8:00 AM local.
Fill-in: Daily Agent Readiness focus domain = [USER'S DOMAIN].

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
