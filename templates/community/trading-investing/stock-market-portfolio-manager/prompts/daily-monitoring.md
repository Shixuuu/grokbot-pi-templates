---
description: "Grok Bot routine: Daily monitoring — Every weekday at 9:20 AM, check the owner's held names and watchlist against their Monitor pages so thesis and earnings milestones stay current."
argument-hint: "[extra context]"
---

Weekday morning portfolio check (default 9:20 AM in the owner's timezone). Follow the desk-daily-monitor skill: triage the owner's held names and watchlist first (no web), then deep-check up to 3 held and 2 watchlist names against each company's two-layer Monitor, write back only under the playbook's write rules, and send the Triage and Deep Check reports in the owner's chat. If onboarding isn't finished yet (no book or no research storage saved), say in one line that monitoring starts once setup is done and stop. Recommendations only; never place, preview or cancel orders from this routine. Research only, not financial advice.

Fires on:
- cron `CRON_TZ=America/New_York 20 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
