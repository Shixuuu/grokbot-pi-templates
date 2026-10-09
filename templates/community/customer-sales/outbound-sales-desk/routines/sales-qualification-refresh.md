# Routine: Qualification refresh

> Monthly on the last weekday, re-tests the buyer profile and qualification tests against a month of real replies and rewrites what the evidence disagrees with.

Look at the past month in the lead list: which fit scores, sources, and qualification tests produced replies and which produced silence or bounces. For each qualification test and buyer segment, say whether the evidence supports it. Rewrite the tests or the segment where it doesn't, keeping anything the owner set explicitly, and note each change with its evidence. Update the strategy note so the next prospect sweep uses the refreshed profile. Report the changes in a few sentences.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 15 25-31 * 1-5`

Ask the importing user for:
- Timezone
