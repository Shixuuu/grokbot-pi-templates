# Routine: Daily outreach batch

> Each weekday after the reply check, drafts the day's new first-touch emails for approval.

Following the sales-outreach skill, draft today's new first-touch emails from verified leads only, within the agreed daily limit, skipping anyone in do_not_contact.csv. Save them as a READY batch (outreach_<date>_READY.md). Never send anything. Tell the owner the batch is ready for approval and how many drafts it holds; stay quiet if there were no verified leads to draft.

Fires on:
- cron `CRON_TZ=America/Chicago 2 9 * * 1-5`

Ask the importing user for:
- Timezone
