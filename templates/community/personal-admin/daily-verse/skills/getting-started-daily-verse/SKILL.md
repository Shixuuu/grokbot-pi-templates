---
name: getting-started-daily-verse
description: "Use on a daily-verse bot's first conversation with a new user, to get consent, learn who they are, set translation, delivery time and format, and schedule the daily verse routine."
---

# Getting started: daily verse bot

Run this as a short, warm conversation. Ask one thing at a time, and use tap-to-answer widgets with free text allowed. Keep messages short and scannable, and forgive typos. If the user hands you something real partway through (for example "just give me a verse"), help first and finish setup afterward.

## 1. Ask for consent before looking anything up
- Explain in one or two sentences what you would read and why: their X profile and recent posts, and public profiles such as LinkedIn.
- Promise plainly that you will never post, like, follow, or message anyone for them.
- Offer these options: X and public profiles, only X, only public profiles, or nothing ("I'll just tell you").
- Look up only what they allow.
- Run the lookup in the background, and keep going with steps 3 and 4 while it runs, so the user isn't left waiting.

## 2. Build the profile
### X (optional)
- An X connector can show as "connected" and still reject every request. One example is a 403 "client-not-enrolled" error, which means the developer app behind the connector has no API access.
- Try the connector once. If it errors, treat X as unavailable for now, and don't retry in a loop.
- Fallback when X is unavailable or not connected: web-search their handle. Search results, mirror sites, and link hubs (Linktree, their own site) often show the X bio and some recent posts. Note which facts came from a mirror, and when.
- Tell the user clearly what you DID learn, and lead with it (for example, "I know what you do: ..."). Then say which part you couldn't read, such as their recent posts. Never say you can't figure out who they are when you actually have their bio.
- Offer an easy workaround: they can send a screenshot of their profile, or paste a few recent posts.
- Don't push them to fix the connector. Name the cause in one plain sentence, and move on.

### Public web
- Do a web search on their name plus any role, organization, or city they share: LinkedIn, organization sites, news, and their personal site or blog.
- Capture only what the sources actually show: role and work pressures, family stage, recurring themes, recent wins or big events, city or region, and anything faith-related.
- Record the source for every note.

### Accuracy and sensitivity
- Never invent facts.
- Mark anything uncertain (an old article, a common name) as UNCERTAIN. Before using it, confirm the one or two most useful uncertain items with a single yes/no widget, such as family details.
- Mark critical press, lawsuits, and similar items as SENSITIVE. Never bring them up or pick verses around them.
- If a search turns up nothing or is ambiguous, ask instead of guessing.

### Files
- Save short notes to `/workspace/daily-verse/profile.md`.
- Create `/workspace/daily-verse/log.md` with a table header: Date | Reference | Translation | Need it answered.
- Keep everything personal in those two files, never in the bot profile, skills, or routine names.

## 3. Faith tradition and translation
- If you don't already know it, ask about their tradition or church background, and keep it optional and non-judgmental.
- Ask for their preferred translation, offering options such as ESV, NIV, NKJV, KJV, NLT, CSB, and "Mix it up, whatever reads best that day".
- If they choose "mix it up", pick per verse, and always cite the translation.
- For how to get exact text in each translation, see the daily verse flow skill.

## 4. Delivery time and format
- Ask what time they want the verse each day, in their local time zone.
- Ask whether they want text, a voice memo, or both.
- Offer an evening "how did today go?" question once, as a skippable widget. If they skip it, don't ask again.

## 5. Opening questions about their life
- Ask one or two quick questions, using a multi-select widget with free text allowed. Examples: What's weighing on you most right now? Who are you carrying or worried about? What season are you in?
- If their first answer already gives a clear need (for example "I'm tired"), skip the rest and deliver. Fewer taps is kinder.
- Add the answers to profile.md.

## 6. Set up the routine
- Read the `routines` skill first.
- Create a daily routine at the chosen time. A daily devotional is a personal habit, so run it all 7 days. If the user named an exact minute (for example 6:30), save it exactly.
- Its prompt says to run the daily verse flow skill and to read profile.md for their format and translation preferences.
- If they opted in, create an evening check-in routine as well.
- Confirm the time back to them in one sentence, with their time zone.

## 7. Give the first verse
Run the daily verse flow now, so their first verse arrives today.
