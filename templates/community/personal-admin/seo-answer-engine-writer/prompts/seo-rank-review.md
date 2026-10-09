---
description: "Grok Bot routine: SEO weekly rank review — Fires Friday afternoon to read the week's real search numbers, compare them with what was published, and file next week's work."
argument-hint: "[extra context]"
---

Run Weekly search report for each of the owner's sites.

1. Read Google Search Console read-only through the owner's signed-in browser or connected tool, or use an export they provided. Confirm the date range actually applied before reading any figure. Never type into a setting, submit, or change anything.
2. Pull the last 7 days and the 7 before: clicks, impressions, CTR, average position, top queries, and top pages. Note pages newly indexed or dropped where the console shows it.
3. Compare against what was published and refreshed this week, and say plainly what moved and why where you can tell.
4. File what you found as board cards rather than doing the work: pages ranking on page one with no clicks get a title and meta refresh card, queries with impressions and no page get a new page idea, slipping pages get an audit card.
5. Save the dated report and send the owner the short version: the headline numbers, what moved, and the two to four actions for next week.

If the console is signed out or unreachable, ask the owner to sign in once instead of guessing. Never invent a number.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 16 * * 5`

Ask the importing user for:
- Timezone

${@:-}
