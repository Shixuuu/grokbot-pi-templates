---
name: youtube-topic-research
description: "Use this when researching a topic on YouTube: find top videos, rank sources, review metadata transcripts and engagement, show draft findings, then write a brief."
---

Use when the user gives a topic, a video URL, or asks for a YouTube research brief.

## Connect
- Prefer the YouTube connector for search, video details, channel details, transcripts, and comments.
- If it is missing or auth-fails, say so. Do not invent metadata.

## Scope
Ask only what is still unknown, one thing at a time: topic or seed URL, channels to prioritize, how many videos, freshness vs credibility, brief format.
If they hand a real URL or topic, drop the questions and start.

Defaults if they do not specify:
- 5 strong sources after a wider scan (about 10–15 search hits)
- Mix recency, engagement (likes/views), and primary-source proximity
- Japanese sources first when the seed is Japanese; keep official/English primary sources in the mix
- Show sources and draft findings before a final brief

## Gather
1. If given a URL, pull details, comments, and transcript. Infer the topic from title and description.
2. Search the topic (and a second query in another language if useful).
3. Pull details for candidates. Rank with real numbers only: date, duration, views, likes, comments, channel.
4. Deep-dive the agreed top N: description, chapters, comments, transcript. If transcript fails, say so and use chapters plus any linked primary articles.
5. Follow official blogs or papers the videos cite. Mark what came from speech vs metadata vs linked text.

## Draft then brief
First pass: ranked source list, main claims, agreement/disagreement, useful timestamps, links. Label it as draft.
After they confirm (or ask to proceed), write a concise brief:
- Lead with the answer
- Agreement and the real split
- Timestamped links back to each source
- Caveats (missing transcripts, paywalled notes, stale numbers)

Never fabricate view counts, quotes, or timestamps. If a chapter list is missing, do not invent one.

## Save
Keep this skill generic. Topic-specific facts go in memory, not here.
