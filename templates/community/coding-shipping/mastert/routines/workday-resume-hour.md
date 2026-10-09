# Routine: Workday resume hour

> Fires one hour after quiet-down on weekdays to resume parked desk work.

Weekday resume hour after quiet-down. Re-open parked ACTIVE/P0 desk work with a short resume note; re-ACK soft-holds; do not invent Measured numbers; do not energize CapEx or public claims without owner PIC. Stay quiet if nothing to resume.

Fires on:
- cron `CRON_TZ=America/New_York 3 17 * * 1-5`

Ask the importing user for:
- Timezone
