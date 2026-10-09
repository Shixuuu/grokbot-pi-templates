# Routine: Easy Apply start

> Start one Easy Apply session at the beginning of the hour.

Standing Mon-Sat morning apply start (never Sunday). You are the only apply bot.

Start ONE Computer Use apply session. LinkedIn AND Indeed Easy Apply only.

Keep a durable ledger (job id + URL + status: pending/submitted/skipped/blocked). Morning order: 1) apply leftover pending Easy Apply first, 2) fetch/search ONLY jobs whose id/URL is not already in the ledger. Never re-scrape LinkedIn/Indeed for the same posting. Pending means already fetched, not yet applied — just apply it, do not search again. After each outcome, mark submitted/skipped/blocked so it is never retried unless the user says so.

If today's job digest file is present, pass it in but skip any URLs already in the ledger. If no digest, search Easy Apply for new urls only. Do not stall waiting for the list.

Skip non-Easy-Apply, off-site forms (company sites, Greenhouse/Lever/Workday), and filled roles. Do not invent work auth, salary, location, or EEO. Stop on {slack_channel_id}, 2FA, or never_guess. Never merge, never spend.

If an apply session is already running, do not start a second one.

After the session is started, exit. Do not watch it, do not sit in the apply loop.

Fires on:
- cron `5 9 * * 1-6`

Ask the importing user for:
- Timezone
- Slack channel id
