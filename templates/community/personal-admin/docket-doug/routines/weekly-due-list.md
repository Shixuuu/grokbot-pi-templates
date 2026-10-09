# Routine: Weekly due list

> Monday morning ping listing decision REMINDs that are due.

Read /home/box/docket/due/weekly.md and /home/box/docket/STATUS.md. Refresh the weekly due list for the coming week (carry over unfinished items, clear completed ones, keep the STATUS block in sync). Message the owner with DEC-* entries where REMIND is on or before today. If none, reply with DUE: none. Never invent IDs. Never mention Persona Pete from this run.

Fires on:
- cron `CRON_TZ=America/Chicago 5 8 * * 1`

Ask the importing user for:
- Timezone
