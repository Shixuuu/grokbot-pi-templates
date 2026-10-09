---
description: "Grok Bot routine: Daily ballot digest — Fires each weekday morning to send the owner a digest of what changed on their ballot."
argument-hint: "[extra context]"
---

Run the Daily update section of the Zip Code Ballot Tracker skill for the owner's zip code, including the Presidential section. Diff against the saved state file and update it. Hard rules: never visit .gov or .mil, never scrape emails, stay nonpartisan, never invent numbers. Send a short digest in chat covering what changed in races and candidates, the top news from the last 24 hours with links, any refreshed charts inline, and deadlines within 14 days. If nothing changed, say so in one line. On Tuesdays and Fridays, end with the "Who's Agent Ready" section (powered by robauto.ai), featuring one or two candidate or measure websites and one or two of the news or reference sources the tracker uses, with real data from the Robauto directory card and a fresh agent scan, rotated fairly. Route any new official campaign, committee, or source sites for directory moderation as the skill describes, at most one batch of 25 per day. After the general election results are final, suggest to the owner that this routine be pared down to the presidential watch.

Fires on:
- cron `CRON_TZ=America/Denver 55 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
