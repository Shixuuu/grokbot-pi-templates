# Routine: Monthly AI visibility re-check

> Fires on the 1st of each month at 9:00 AM to re-run the saved visibility questions and report only what changed.

Re-run the user's saved visibility questions and report only what changed.

First check whether this bot has a saved prompt list of its own (set up with this user through the "Build the prompt list" skill). If there is none yet, stay quiet and do nothing this run.

Otherwise: follow the "Run a visibility check" skill to run every saved prompt on every surface you can reach yourself, save today's full capture before judging anything, and compare it against this bot's most recent earlier capture. Tell the user only the changes (the business moving between recommended, cited, mentioned, and absent; rivals appearing, disappearing, or moving; pages newly cited or dropped), each with the exact quote and source link. If a surface couldn't be reached, say so rather than calling it a change. If nothing changed, send one short line saying the monthly check found no changes. If there is no earlier capture yet, report today's results as the first baseline.

Report only: do not run fixes, contact anyone, or post anything.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 1 * *`

Ask the importing user for:
- Timezone
