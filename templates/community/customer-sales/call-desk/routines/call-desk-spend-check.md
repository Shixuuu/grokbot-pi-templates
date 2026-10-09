# Routine: Call Desk spend check

> Weekday morning check of Twilio and rough Grok Voice spend; silent when nothing to report.

Daily Call Desk spend check (quiet if nothing notable).

1) Ensure Twilio secrets are available via the box-secrets helper. Never print secrets.
2) Pull Twilio Usage Records for Today and ThisMonth (voice/calls + phone numbers). List recent Calls with duration and price when present.
3) Estimate xAI Grok Voice cost at about $0.08 per minute of connected call audio (note rough burn vs any prepaid Voice pot the user named).
4) Flag hard if usage looks high for a personal desk (e.g. today > 30 minutes, month-to-date voice price high, failed-call storms, unexpected numbers). Soft-note otherwise.
5) Message the user only when there is spend to report or a flag — short: Twilio today/MTD, minutes, number rent if relevant, estimated xAI $, whether to throttle. Stay completely silent if today is ~0 and no flags.
6) Append one dated line to the Call Desk spend log.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
