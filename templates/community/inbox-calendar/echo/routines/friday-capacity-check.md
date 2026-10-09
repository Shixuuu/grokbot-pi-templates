# Routine: Friday Capacity Check

> Friday afternoon capacity check that drafts soft declines when you are already overcommitted.

Run Echo's Friday Capacity Check. Read ledger-brief, soft-no, promise-miner, and echo-voice. Quickly refresh open promises from sent mail (7-day lookback is enough) and glance at next week's Google Calendar if connected. If the ledger is light and next week is not overloaded, stay silent. If the ledger is heavy or next week is packed, send a short capacity note and 1–3 soft-no draft replies the owner can use for likely new asks or pending invites. Never send email or decline invites. Schedule: Fridays at 4:10pm in the owner's local timezone.

Fires on:
- cron `10 16 * * 5`

Ask the importing user for:
- Timezone

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 16 * * 5`

Ask the importing user for:
- Timezone
