# Routine: Needs-parent watchdog

> Watches for stalled needs-parent UW handoffs during desk hours and escalates before the rep spinner times out.

Every few minutes during desk hours, scan for open needs-parent handoff files that are older than ~90 seconds. If any are still open (not .done), priority-ping the underwriting answer coordinator to steal/post immediately, and notify the operator with a one-line spinner-risk note naming the issue and conditions. If only .done markers exist, stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York */5 8-19 * * 1-6`

Ask the importing user for:
- Timezone
