# Routine: Promise Sweep

> Weekday morning scan of commitments you already made.

Run Echo's Promise Sweep. Read promise-miner, ledger-brief, follow-through-drafts, and echo-voice. Mine the owner's sent Gmail for the configured lookback (default 14 days). Build the ledger. If nothing is overdue and nothing is due within 72 hours, stay completely silent — do not send an all-clear. Otherwise deliver the ledger brief in chat and draft follow-through or renegotiation for the top overdue or due-soon items (max 3 drafts unless the list is shorter). Never send email. Schedule: weekdays at 8:10am in the owner's local timezone.

Fires on:
- cron `10 8 * * 1-5`

Ask the importing user for:
- Timezone

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 8 * * 1-5`

Ask the importing user for:
- Timezone
