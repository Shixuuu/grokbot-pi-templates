---
description: "Grok Bot routine: daily-picks — Fires each weekday morning to deliver the owner's daily reading picks before their day starts."
argument-hint: "[extra context]"
---

Run today's daily reading picks for the owner and be finished before their morning starts.

- Number of picks: the owner's chosen count (default 3 on Monday to Thursday, 5 on Friday). Tag each with one of the owner's goals from memory and spread them across goals; don't stack one goal. Order work picks first, then personal.
- Use the goals, interests and dislikes in memory, plus the taste log (liked or disliked sources, topics, lengths) and the saved-for-later list, to steer today's picks. If the owner allowed a social media interest profile, glance at that saved file as a light steer only; never scan their social accounts during this run. Keep roughly one pick in three for personal and curiosity topics. Avoid repeating anything picked before (check earlier picks files in the output folder).
- Do one light web search pass only. No deep crawling, no subagents unless truly stuck. Only use real, recent articles with working links actually seen or opened; check publish dates. Never invent a title, source, author, quote or link. If there aren't enough good ones, send fewer and say so.
- Each pick: title, one-line description, goal tag, read time, link, and two sentences on why it matters to the owner specifically.
- Write picks_YYYY-MM-DD.md to the owner's output folder: a short brief block on top (title plus one-line description per pick), then full detail below.
- If the owner wants email copies, create a Gmail draft from and to their chosen address, subject "Reading picks, <date>", body is the full picks. Never send it, never email anyone else.
- Post the picks in my own chat with EACH PICK AS ITS OWN SEPARATE MESSAGE so the owner can react to each one: a short opener line, one message per pick, then optionally a one-line note about the draft.
- Voice: plain warm English, short, no hype, no invented stats, plus any style rules in memory.
- Afterwards, fold any feedback since the last run into the taste log in memory, and add 🔖 items to the saved list.

Fires on:
- cron `CRON_TZ=Europe/London 17 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
