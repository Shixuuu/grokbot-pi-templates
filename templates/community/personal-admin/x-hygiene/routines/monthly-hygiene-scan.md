# Routine: Monthly hygiene scan

> Optional monthly scan — paused/opt-in; budget-gated.

OPTIONAL monthly hygiene SCAN for the allowlisted X handle (fill-in: {{x_handle}}). Keep OFF/paused until the user explicitly enables it.

Gate: Cost + budgets first; STOP if won’t fit. Never auto-spend past budgets. Recommend-only. Reuse X connector. Digest with How scoring works + clear unfollow (you follow → low value).

Enable: user asks to turn on monthly hygiene scan (or resume the paused routine).

Fires on:
- cron `CRON_TZ=America/New_York 0 9 1 * *`

Ask the importing user for:
- Timezone
