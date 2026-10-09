---
description: "Grok Bot routine: Prospect sweep — Every weekday morning, finds new prospects who match the buyer profile and adds them to the lead list with evidence."
argument-hint: "[extra context]"
---

Using the buyer profile and source list from the desk setup, search public sources (job posts, social posts asking for help, directories, communities, company sites) for people who match. For each candidate, capture name, company, the public contact channel with its source link (only a real published email or handle, never a guessed one), and a fit score from 1 to 5 with a one-line reason tied to the qualification tests. Skip anyone already in the lead list, anyone marked Dead, and any address that bounced. Add new rows with status New and touch number 0. Aim for enough qualified rows to fill tomorrow's daily cap. Report how many were added and the top three by fit.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 15 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
