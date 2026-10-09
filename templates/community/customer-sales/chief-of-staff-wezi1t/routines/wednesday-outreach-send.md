# Routine: Wednesday outreach send

> Every Wednesday evening, rewrite weekly cold-email copy and send it from the dedicated outreach inbox to everyone still owed on the master list.

Wednesday-evening financial-planning outreach send from the dedicated outreach Gmail.

Before sending: prune true undeliverables from mailer-daemon only (not send-limit failures). Never send to permanently spam-blocked addresses or the dedicated outreach address itself. The user's personal address may receive only if they added themselves; never connect or read that inbox.

Write TWO fresh emails each week (creators + managers). Do not reuse prior week subjects/bodies. Log copy to a weekly-copy log. Locked voice/offer: CFA/CFP; cash flow, taxes, money after a strong year; no content/brand deals; soft overview close; subject contains "financial"; "financial planning" once in body; consistent professional sign-off.

Send this week's copy to everyone still owed on the active master list. Pace in small batches with pauses. Stop on Gmail send-limit; leave remainder active for follow-up. Skip anyone already delivered this week's copy. Coordinate via weekly_send marks so nobody is double-emailed.

Report in Chief of Staff chat: subjects, sent count, bounced skipped, send-limit hit?, active list size.

Fires on:
- cron `0 18 * * 3`

Ask the importing user for:
- Timezone
