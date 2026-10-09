# Routine: Stale lead draft pull

> Weekday morning: find quiet CRM leads, draft SMS, post to Slack for a ~3-hour veto.

Weekday morning stale-lead draft run.

Find open opportunities that have been quiet ~30+ days in the owner’s lead pipelines (not hiring/staffing, not already-booked customers). Prefer stages like Non Responsive, Follow Up, Interested but not booked, Quoted, and Meta-style unresponsive/quoted stages when present. Skip STOP/opt-out contacts and anyone with real SMS or call activity in about the last 14 days (ignore pure promo blast noise when judging engagement).

For up to 8 good candidates: read their CRM SMS/call thread, draft one short warm SMS in the owner’s voice (happier tone, more exclamation points, emoji only when it fits, never prices, soft booking/reschedule check, pivot one-time premium vs recurring when the lead is old). Do not invent facts. Run @Stale lead SMS loop for the detailed recipe.

Post the batch to the configured team Slack sales channel clearly labeled as DRAFT SUGGESTIONS not approved to send, with veto instructions: reply “veto [name]” or react to block within ~3 hours. Save the pending batch (names, contact ids, draft texts, veto deadline for the mid-morning send wave) to a durable file.

If there are no good stale leads, stay quiet (no Slack filler). Never send customer SMS in this run. Tell the owner in chat only if something blocked the run or the batch is worth a heads-up.

Fires on:
- cron `CRON_TZ=America/Chicago 35 8 * * 1-5`

Ask the importing user for:
- Timezone
