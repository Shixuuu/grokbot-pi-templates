# Routine: Weekday SaaS leak check

> Weekday daytime check for new receipt or renewal signals so fresh charges and cancel candidates surface quickly.

Run a SaaS receipt scan against connected mail for the last 7 days. Update the inventory. If a new confirmed charge of about $20 per month equivalent or more appears, or a clear cancel or downgrade candidate shows up, draft a short findings note for the owner. Prepare renegotiation text only if they previously asked for drafts — do not send. If nothing material changed, stay quiet.

Fill-ins:
- Preferred alert channel
- Minimum dollar threshold to notify

Fires on:
- cron `3 10 * * 1-5`

Ask the importing user for:
- Timezone
