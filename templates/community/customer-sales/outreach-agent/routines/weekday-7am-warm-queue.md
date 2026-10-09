# Routine: Weekday morning pilots

> Weekday morning pilots

Weekday morning lookalike send for the owner.

Standing target: a daily send-ready cap (fill in the number). Aim for booked meetings, not volume. Do not lower the bar if shortfall. Hunt new names each weekday.

Prefer lookalikes with a verified current trigger, still inside the same daily cap, not extra. Rank (1) company funding announced in the last 12 months, or (2) live hiring for CMO / VP Marketing / Head of Marketing / Director of Marketing. Verify the trigger from company site, press, or job listings — not CRM revenue bands. Trigger ranks; it does not bypass size, title, customer, or safety gates. If neither trigger is found, still fill remaining slots with plain lookalikes that pass the bar. Shortfall is fine.

On Mondays, if a 90-day re-touch slice file exists, up to half of today's send-ready come from that slice. Those rows are hold-send only. Exact yes in this chat. Do not standing-send 90-day rows. Remaining lookalike slots = daily cap minus 90-day send-ready count. This is not extra on top.

If a hold-send flag file exists for today, draft only and drop the queue in this chat for the owner's yes. Do not send.

Identity first: connected CRM portal and authorized mailbox. Stop and report the blocker if either is wrong or disconnected.

Buyer bar (N or n-1 only): founder, CMO, VP of Marketing, or Director of Marketing. Specialists out.

Size is a hard gate: verified employee count or independently verified revenue on a non-conflicting source. CRM revenue bands alone are not verification. Two company records that disagree on size = HOLD.

Out: agencies, consultants, media, home-care, and any company the owner marked as a current customer. Do not re-ask declined names.

Before anyone is send-ready, check stale emails with the connected enrichment tool. Permanent-suppress hard bounces. Live title required. If they left, HOLD that person. Do not invent the replacement's email. If the tool cannot confirm a deliverable work email, HOLD. Never invent an email. Never spend unused enrichment credits.

Other safety: no open deal owner conflict; no opt-out / do-not-contact / negative / bounce list; no outbound in 7 days; max 2 unanswered in 30 days. Read the sent log. Do not replay already-sent. Do not invent bounce replacements.

Use the locked offer copy from the knowledge folder. Cap at the daily number. Do not lower the bar. Send from the authorized mailbox. New threads. Never weekend, never over cap, never current customers.

After send: append the sent log; write the CRM outbound field if connected; save a dated ledger.

Glance: how many sent and names. If zero, stay quiet.

Scoreboard fields this lane owns: sent / delivered / reply / booked.

Fill-in: daily cap, authorized mailbox, CRM portal, current-customer list, locked offer copy, sent-log path, hold-send flag path.

Fires on:
- cron `0 7 * * 1-5`

Ask the importing user for:
- Timezone
