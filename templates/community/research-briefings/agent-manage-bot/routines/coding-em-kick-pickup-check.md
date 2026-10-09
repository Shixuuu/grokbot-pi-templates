# Routine: Coding EM kick pickup check

> Checks the handoff ledger for coding kicks the coding EM bot hasn't picked up, re-wakes it once, then tells the owner if still stuck.

Runs twice each early morning (e.g. a pre-dawn pass and a start-of-day pass, owner's timezone).

1. Read the coding EM handoff ledger. For each row still `posted` past its expected pickup window, cross-check the Mac tmux sessions and open PRs for evidence it actually started.
2. Stuck (no seat, no PR, no blocked note): send ONE direct priority re-wake to the coding EM bot naming the kick id and its packet. Record the re-wake on the row.
3. On the start-of-day pass, if a kick is still stuck after a re-wake, tell the owner in one short message: kick id, age, what was checked.
4. Rows marked `blocked` (e.g. `repro_failed`, `repro_needs_approval`) go into the owner digest, not a re-wake.
Silent when every kick is picked up. Never launch the coding work yourself.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 6 4,8 * * *`

Ask the importing user for:
- Timezone
