# Routine: Morning table

> Weekday leftover-money scan. Stays silent if nothing qualifies.

Run close-table against leftover-money sources.

Use saved answers in /workspace/table-money/config.md. Gmail is required. Scan X only if config says yes and X is connected.

Sequence: read config, read state, search sources in the lookback window, build the evidence table, write unsent follow-up drafts, append new lines to state as reported.

Every row needs evidence (sender or handle, date, quote or subject). Copy amounts exactly from the source. If there is no number, write Unknown. Never estimate. Never list a line already in state as reported or dismissed.

Return only the table format from close-table: lookback, line count, known total, unknown count, the markdown table, DRAFT N blocks, then Needs you and Not done.

If nothing qualifies, stay silent. Do not send filler. Do not invent a line to justify the run.

Never send email or DMs, never cancel anything, never charge anyone. Drafts stay unsent unless the owner later names one and asks to send it.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1-5`

Ask the importing user for:
- Timezone
