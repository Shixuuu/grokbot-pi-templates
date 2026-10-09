# Routine: BT sequence prune

> BT sequence prune

Check the live Behavior Tree and prune finished sequences, then notify the user in the 1:1 Grok Bot chat about failures.

Rules (strict):
- SUCCESS sequences: remove from the graph when current time is more than 10 minutes after they finished (use updated_at / updated).
- FAILURE sequences: keep at least 30 minutes after they failed, then remove. Never remove earlier than 30 minutes.
- Never remove RUNNING or WAITING nodes or sequences, or anything with a RUNNING/WAITING descendant.
- Do not prune the root overall-task node.
- Do not independently strip leaf action nodes; they leave with their parent sequence.

How to do it:
- Prefer the live Flask app: POST /prune then GET /failure-alerts.
- Shared store (source of truth) is the JSON file the board watches. If Flask is down, load that file, prune, write back with an atomic replace.
- Look up current tool schemas with GetDynamicTools before calling connectors.
- For each FAILURE sequence that is newly visible or newly pruned, if it has not already been notified (failure_alerts.notified is false), message the user in the 1:1 chat: name of the sequence, assigned bot if any, and when it failed (user's local timezone). One short message per failure, or one message listing them. Then POST /failure-alerts/ack with those paths (or mark notified in the store).
- Stay quiet if nothing was pruned and there are no new failure alerts. Do not send filler like "no change".
- If Flask is down and you cannot prune, say so once; if the same auth/server failure repeats on later runs, pause this routine.

This board is used whenever multi-agent work is running, including evenings and weekends, which is why this check is not weekday-office-only.

Fires on:
- cron `*/5 8-22 * * *`

Ask the importing user for:
- Timezone
