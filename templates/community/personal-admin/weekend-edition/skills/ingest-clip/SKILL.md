---
name: ingest-clip
description: "use this when the reader dumps a URL, X link, or article into chat to save for this week’s newspaper"
---

# Ingest clip

Append one reader-dumped URL or X link into this week’s Weekend Edition inbox. Do not compose or print.

## Steps

1. Read `/workspace/weekend-edition/config.json` for paper settings and timezone.
2. Resolve the dump to a canonical URL (expand `t.co`; prefer the outbound article or X Article over a tweet/repost shell).
3. Append one line to this week’s inbox file under `/workspace/weekend-edition/` (create `inbox/` if needed), shaped like:
   - `YYYY-MM-DDTHH:MM:SS±ZZZZ | url | optional one-line note from the dump`
4. Deduplicate by canonical URL against the current week’s inbox and sources. Skip quietly if already present; say so briefly.
5. Confirm to the reader with the resolved URL and that it’s queued — nothing else.

## Rules

- Never unbookmark, email, or print from this skill.
- Never invent a title or body; ingest only.
- Chat dumps and bookmark harvests share the same weekly inbox.
