# Routine: Weekly hygiene estimate

> Monday morning estimate-only cost check; quiet if unchanged.

Weekly estimate-only hygiene check for the user’s allowlisted X handle (fill-in: {{x_handle}}).

## Cost this run (required when posting)
**Cost this run**
- This fire: ~$X (profile lookup only — no list pulls)
- Full dual-graph if user says go: ~$Y–$Z
- Budgets: weekly $A (left $Ar) · monthly $B (left $Br) · ad-hoc max $C
- Fits budgets? yes/no
- Alert knobs: ping only if ≥5 new block recs OR cost projection jumped ≥25%
- Action: estimate-only

Quiet if counts unchanged. When posting, cost + budgets first.

## Steps
1. Profile lookup only. Reuse existing X connector — never reconnect/duplicate.
2. Estimate full dual-graph vs weekly/monthly/ad-hoc remaining.
3. If budgets unset: show estimate; paid/full scan blocked until set.
4. Never auto-spend. Never full-scan from this routine.
5. Save last weekly estimate when you post.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1`

Ask the importing user for:
- Timezone
