# Routine: transcript-healthcheck

> Weekday morning scan of fleet transcripts for friction worth turning into skills, bots, or routines.

Run the Transcript healthcheck skill for the last 24 hours across the fleet. Propose skills, bots, or routines only when evidence supports them. Do not create anything until the user picks a proposal. Stay quiet when there is nothing useful to propose.

Fires on:
- cron `44 8 * * 1-5`

Ask the importing user for:
- Timezone
