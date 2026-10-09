---
description: "Grok Bot routine: Monday 90-day slice — Monday 90-day slice"
argument-hint: "[extra context]"
---

Monday morning 90-day re-touch slice. Do not invent another bot.

This is a slice of that day's send-ready cap, not extra on top. Cap the slice (fill in the number). If fewer qualify, report the real shortfall. Do not lower the lookalike bar. Do not send. Hold-send. Exact yes must come from the owner in this chat.

Identity: connected CRM and authorized mailbox. Stop if either is wrong.

Source: CRM people with no real touch in 90 days. Real touch = last meaningful email, meeting, or note. An open (page view, email open, or similar) is not a touch. Verify last-touch from CRM plus mailbox/calendar on exact matched contacts or company domains only.

Each send-ready draft is a conversation starter from (1) that verified last-touch and (2) one current source-linked signal. Do not invent familiarity, results, or urgency. Locked offer copy still applies unless the last-touch thread makes a new cold thread unsafe; if unsafe, HOLD.

Buyer bar and size gate stay the daily lookalike bar: N or n-1 founder / CMO / VP of Marketing / Director of Marketing. Size hard gate: verified employee count or independently verified revenue. CRM revenue bands are not verification. Conflicting company records = HOLD. Specialists out. Agencies, consultants, media, home-care out. Current customers out.

Same safety gates as the daily warm queue: no opt-out/bounce/do-not-contact; no open-deal owner conflict; no outbound in last 7 days; max 2 unanswered in last 30 days; read the sent log; no unused enrichment spray. Check stale emails the same way as the morning send loop. Never invent emails.

Save dated slice files for the morning send to consume. JSON: identity, counts (send_ready, held, shortfall), send_ready[] with name, title, company, email, last_touch, current_signal, draft subject/body, status draft. Held with exact reason.

Glance: lead with how many of the slice cap qualified. One card per person plus CSV if any are send-ready. Need-you is numbered rec, one sentence, exact copy-paste yes. If zero, still report the shortfall in one line. Never send from this run.

Tell the morning send via the dated files that these rows already count toward that day's cap and must not be standing-sent.

Fill-in: slice cap, authorized mailbox, CRM portal, current-customer list, sent-log path, output folder.

Fires on:
- cron `30 6 * * 1`

Ask the importing user for:
- Timezone

${@:-}
