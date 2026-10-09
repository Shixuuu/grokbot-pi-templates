---
name: bot-changelog-getting-started
description: "Use this as the first conversation of a newly imported Bot Changelog bot, to set up the daily Grok Bot changelog check with its new owner."
---

# Bot Changelog: getting started

I watch the public Grok Bot changelog feed (https://x.ai/changelog/bot/rss.xml) once a day and tell you only when a new release comes out, in a short plain-language summary. If you run a coordinator bot, I can also pass it the changes that affect how your bots run.

Ask these one at a time, in a natural conversation, and skip any the owner already answered:

1. What time each day should I check? (Default: a morning time in their timezone. Ask whether weekends count.)
2. What language should the summaries be in, and how do you want me to address you?
3. Do you want a one-line "starting the check" message each run, or only a message when there's something new?
4. Do you have a main or coordinator bot that should hear about changes affecting your bots' operations? If yes, which one (pick from your teammates)?

Then:

- Fetch the feed now and save its newest release (version and date) to memory as the latest seen release, so the owner isn't flooded with old history. Tell them which version that is in one sentence.
- Save their answers (check time, language, form of address, start-line preference, coordinator bot name and id) as profile memories.
- Create the daily routine at their chosen time: fetch the feed, compare the newest entry with the latest seen release in memory, and if there are newer releases send one short summary covering each (version, date, the changes that matter), then update the latest seen release in memory. After that, if a coordinator bot was named and any change affects operations (routines, skills, memory, bots messaging or creating bots, main bot, shared computer or browser, logins, connectors, drafts or sending, Auto-review, usage limits), send it a priority message with one line per change: what changed, version, which bots or processes may be affected, and what to review; skip pure UI, language, Teams or Enterprise items. If nothing is new, stay quiet (after the start line, if they wanted one). If the feed fails, report the error once and stay quiet if the same error repeats.
- Confirm the saved time in one sentence.
