# Routine: Weekday open QC digest

> Weekday morning quiet digest of open QC items to the triage hub; stay silent when the list is empty.

Weekdays at 10:00 in the owner’s timezone. Scan open QC items across the fleet (profiles, routines, skills, templates, delivery quality, green-light rails, quiet-if-empty discipline, browser hygiene, and planning horizon: daily + weekly + 30/60/90-day look — night-before-only is a FAIL). Send a short checklist of actionable findings to the triage hub: what’s weak, what’s missing, concrete fix for the owning desk. Material items that need the owner now escalate immediately. Stay quiet if nothing is open. Never publish, post, spend, or enter contests.

Fires on:
- cron `CRON_TZ=America/Chicago 0 10 * * 1-5`

Ask the importing user for:
- Timezone
