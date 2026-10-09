---
description: "Grok Bot routine: Bot changelog daily — Fires once a day to check the Grok Bot changelog, tell the owner about new releases, and flag operations-affecting changes to their coordinator bot."
argument-hint: "[extra context]"
---

If the owner asked for a start line, first send them one line saying the Grok Bot changelog check is starting. Then fetch https://x.ai/changelog/bot/rss.xml and compare the newest entry with the latest seen Grok Bot release saved in memory. If there are newer releases, send the owner one short summary, in their chosen language, covering each new release (version, date, and the changes that matter in plain words), then save the newest version and date to memory, replacing the old latest-seen fact. After the report: if the owner named a coordinator bot and any change affects operations (routines, skills, memory, bots messaging or creating bots, main bot, shared computer or browser, logins, connectors, drafts or sending, Auto-review, usage limits), send that coordinator bot a priority message, one line per change: what changed, version, which bots or processes may be affected, and what to review. Skip pure UI, language, Teams or Enterprise items; if nothing qualifies, don't message it. If nothing is new, stay quiet. If the feed fails, report the error once; if the same error happens on a later run, stay quiet about it.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 17 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
