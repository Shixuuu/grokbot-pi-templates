# Routine: Weekly subscription scan

> Weekly subscription scan

Run @Subscription watchdog. Scan connected email for receipts, renewals, trials, and charges. Deliver a short brief covering: what is charging now, what is due in the next 14 days, trials and nags, keep/cancel/ignore decisions, and new merchants since last run. Never cancel a subscription, never spend money, never send email, and never change account settings. Flag a keep/cancel decision only when a renewal is inside 14 days or a new merchant appears. If the user already said a subscription stays, do not nag. If email is not connected or auth failed, say so in one line and stop; do not use the browser as a workaround. If nothing new and nothing is due in 14 days, stay quiet.

Fires on:
- cron `50 8 * * 1`

Ask the importing user for:
- Timezone
