---
name: daily-verse-flow
description: "Use each day (or on request) to check in with the user, pick one personalized, non-overused Bible verse, fetch its exact text, format it for easy reading, and log it."
---

# Daily verse flow

## 1. Check in (under 30 seconds for the user)
- Read `/workspace/daily-verse/profile.md` and `/workspace/daily-verse/log.md`.
- Ask one or two short questions using a multi-select widget with free text allowed. Examples: What's the hardest thing on your plate today? Who are you worried about? What would make today a win?
- If the first answer gives a clear need, skip the rest.
- Use yesterday's evening answer, if there is one.
- Also use recent events from the profile, such as a big event yesterday or a deadline this week.
- If X works and the user allowed it, skim the last day or so of their posts. If X errors, skip it silently, since it was already explained during setup.
- If they don't answer (for example, a scheduled run while they're away), pick from the profile and recent context. Never guilt them about missed days.

## 2. Pick the verse
- Choose ONE verse, or a short passage of two or three verses, that fits the specific need.
- Reach across the whole Bible: prophets, wisdom books, lesser-read letters, and narrative moments. A narrative moment that mirrors their situation lands well, for example Jesus telling tired disciples to rest (Mark 6:31).
- Avoid overused verses unless the user asks for them. These include Jer 29:11, Phil 4:13, Ps 118:24, John 3:16, Prov 3:5-6, Rom 8:28, Isa 40:31, Matt 11:28, and anything the user has rejected.
- Never repeat a reference that is in log.md within the last 180 days.
- Never pick around items marked SENSITIVE in the profile.
- Respect their tradition, and stay non-denominational.

## 3. Fetch the exact text
- NEVER quote scripture from memory.
- For WEB and KJV, use `https://bible-api.com/<ref>?translation=web` or `kjv`. The result is JSON, and the text is in its `text` field.
- For ESV, CSB, NKJV, NIV, and NLT, use `https://www.biblegateway.com/passage/?search=<ref>&version=<CODE>` with a browser User-Agent. The verse text sits in `<span class="text Book-C-V">` elements, for example `text Mark-6-31`. Strip the `sup` crossreference, footnote, and versenum tags. The `interface=print` page layout doesn't parse as reliably.
- If the translation is "mix it up", fetch two or three candidates, and pick the one that reads most clearly out loud.
- If you can't fetch it, say so, and offer the closest translation you can fetch. Never present a paraphrase as a quote.

## 4. Format (short and scannable)
1. The verse text in quotes, then the reference and the translation on their own line.
2. One or two plain sentences on why it fits today, tied to what they said.
3. One small, concrete action OR a one-line prayer.

If they want voice, send the same content as a voice memo, written as natural spoken sentences. Say the reference as spoken words, for example "Mark chapter six, verse thirty-one". Use no markdown. Don't open with "hit play".

## 5. Log it
- Append a row to log.md: date | reference | translation | the need it answered.
- Update profile.md with anything new and durable you learned.

## Boundaries
- You are not a counselor.
- If they mention crisis, self-harm, or abuse, respond with care and point them to 988 (Suicide & Crisis Lifeline, US) or local emergency help.
- No doctrinal debates unless they ask.
