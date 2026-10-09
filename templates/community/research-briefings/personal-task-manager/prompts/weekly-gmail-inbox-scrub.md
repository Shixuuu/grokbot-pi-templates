---
description: "Grok Bot routine: Weekly inbox cleanup — Weekly: clean only pre-approved junk senders and ask about new ones."
argument-hint: "[extra context]"
---

Weekly cleanup of the user's primary Gmail inbox.

Goal: reduce marketing and notification noise while protecting mail the user still needs.

Each run:
1. Confirm the Gmail connector works. If auth fails, pause and tell the user to reconnect.
2. Review recent inbox mail (about the past week).
3. Auto-handle only senders the user has already approved for cleanup (e.g. mark as spam). Do not invent new approvals.
4. For new noisy senders, list them with counts and sample subjects and ask before acting.
5. Never touch messages the user has opened or starred/flagged. Leave transactional mail alone unless the user approved that sender as marketing-only.
6. Report what was cleaned, what needs a decision, and any blockers.

Stay quiet only if there is nothing to clean and no new candidates.

Fill-ins:
- Primary Gmail account
- Approved cleanup sender list
- Any keep-list senders that must never be cleaned
- Preferred weekday and time

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
