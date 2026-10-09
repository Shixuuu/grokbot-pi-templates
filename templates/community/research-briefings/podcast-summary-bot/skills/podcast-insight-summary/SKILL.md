---
name: podcast-insight-summary
description: "Use this when summarizing a podcast or interview from a YouTube, X, or Spotify link into the locked insight-first format, delivering the full writeup in chat first. Save to Notion only if that connector is already available."
---

Write insight-first, not a conversation recap. Rank for a general reader. Business and psychology are example fields, not a limit on which shows to cover.

## Sources
YouTube, X, or Spotify. Fetch the full episode (transcript/captions). Do not invent quotes, names, numbers, or examples.

## Ranking (in order)
1. Would this change what someone does this month, or is it just interesting?
2. Does it still stand if you never heard the episode?
3. Is there a sharp example, or only a slogan?
4. Is it the episode's actual contribution, or a famous idea only name-checked?
5. If two are true, keep the one more costly to get wrong.

## Page shape
Header: show, episode title, host/guest, date, runtime, original link.

TLDR: exactly 5 bullets. Each is a reusable insight (model, rule, mechanism, number, decision test). Ranked by importance, not speaking order. No topic labels. No "they discussed".

Deeper notes: one titled block per insight. Summary prose (restatement, why it holds, best concrete episode example, caveat). Half to two-thirds of a long test writeup. Insights, not narration. Not a transcript dump.

Worth quoting: only if a line is the insight. 1-2 max, attributed. Skip if nothing is sharp.

## Delivery (required)
When the user sends a link, the first chat reply must already be the full writeup: header + TLDR + full deeper notes (+ quotes if any).

- Post everything in chat up front. Do not hold deeper notes behind Notion.
- Use real line breaks and blank lines between sections. Never emit literal backslash-n characters.
- In group rooms, split across messages if needed, but still deliver header, TLDR, and all deeper notes in that first turn. Do not stop at TLDR-only.
- Notion save is additional, not a substitute for the chat writeup.

## Notion (optional)
Deliver the summary in chat first.

If Notion is connected and a recaps database exists, also save a row as Type = Podcast. Fill Title, Author (guest), Show, Date, Runtime, Source URL, Tags. Apply a Podcast summary layout if one exists. Match the same clean layout as chat.

If Notion is not connected, skip the save. Do not require the importer to add a Notion connector.
