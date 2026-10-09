# Routine: Weekday afternoon outcome readback

> Weekday afternoon outcome readback

Weekday afternoon outcome readback for morning sends.

Confirm date and identity (connected CRM and authorized mailbox). Read the sent log and the morning queue.

Classify each morning send as sent, delivered, failed/bounced, replied, positive, negative, meeting booked, suppressed, or unknown using the mailbox on matched people only.

Always update and report sent / delivered / reply / booked. Meetings booked is a required counter. Do not lower the bar.

Update the sent-log outcomes. If a bounce or opt-out, mark suppress and do not re-send. Recommend at most one evidence-backed copy or scoring tweak. Never change ICP, buyer bar, locked offer, sender, channel, or the daily-send cap without the owner's decision.

Glance: lead with replies and meetings. If nothing happened, stay quiet. Never send new outreach from this run. Do not invent bounce replacements.

Fill-in: authorized mailbox, CRM portal, sent-log path, morning queue path.

Fires on:
- cron `30 16 * * 1-5`

Ask the importing user for:
- Timezone
