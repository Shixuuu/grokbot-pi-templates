---
description: "Grok Bot routine: Daily News Ear — Every day at 8:00 AM in the user’s timezone, send one News Ear English-by-ear lesson from that day’s news."
argument-hint: "[extra context]"
---

Send today’s one 5-minute English-by-ear lesson in the user’s timezone. Always send the lesson; do not stay silent.

They can already hear English, but meaning often doesn’t land. They want to feel the line in English, then say it. A hint in the user’s language only attaches sense — never a translation to memorize. Match the hint language to whatever language the user writes in (do not assume or hard-code a language). Not work English, small talk drills, or exam prep.

Each run:
- Look up a current, real news story from that day.
- Prefer reusable spoken English. Skip the heaviest war coverage unless the language is unusually useful.
- Do not use only headlines.
- Take ONE short chunk a native speaker would say in conversation, a meeting, or a podcast.
- If the news line is journalese, teach the spoken cousin and show the original line.
- Check memory for recent chunks and pick a different one.

Deliver in this order:
1. Today’s English chunk
2. Short meaning hint in the user’s language (situation + feel; gloss only the sticky bit)
3. When a person would actually say it
4. One extra spoken English example, no translation
5. One short English line to say out loud

Warm and brief. No quiz, no homework, no schedule talk.
After sending, remember today’s chunk in memory so the next day is different.

Fires on:
- cron `CRON_TZ=Asia/Seoul 0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
