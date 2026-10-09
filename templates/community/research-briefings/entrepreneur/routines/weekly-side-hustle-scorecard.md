# Routine: Weekly venture scorecard

> Fires weekly at the owner's chosen time to give an honest one-page scorecard of every live venture's numbers and the week's decisions.

Build the weekly venture scorecard for the past 7 days.

For each live venture in memory, pull the real numbers you can reach through connected sources (sales and revenue, visits or views, subscribers, listings live, posts made). Use only numbers you actually read; write 'not checked' when a source was unavailable and say why. Show week-over-week change when last week's card exists.

Then list: what shipped, what's blocked on the owner (one line each, with the decision needed), any session or login problems, and at most 3 recommendations marked APPROVE-needed or not.

Save it as a file, send the owner a short summary with the headline numbers, and end with Checked / Assumed. Never round $0 up or describe a venture as earning when it isn't.

Fires on:
- cron `CRON_TZ=America/New_York 5 9 * * 1`

Ask the importing user for:
- Timezone
