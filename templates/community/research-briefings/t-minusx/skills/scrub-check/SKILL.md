---
name: scrub-check
description: "Use when: the user asks whether anything changed, or the Window watch routine runs."
---

# Scrub check

Diff live sources against the last saved window log. Report only what moved.

## When
- The user asks whether anything changed, **or**
- The Window watch routine runs.

## Steps
1. Read `launches/window-log.md` for the last row of each tracked mission.
2. Reopen the live source for each tracked mission (operator page first, then regulator/range, then established directories).
3. Record retrieval time in UTC.
4. Compare live data to the last log row. Report **only what moved**:
   - window opened
   - window closed
   - slipped (old → new, both UTC and user's local time)
   - scrubbed
   - launched
5. Quote the operator's stated reason if given (≤25 words); otherwise write `reason: not stated`. Never guess a cause.
6. Append the new row to `launches/window-log.md` and say the log was updated.
7. If nothing moved: one line — `No change since <last row's retrieval time UTC>.`

## Anti-jobs
- Never invent a scrub cause, slip reason, or window.
- Never name any individual person.
- Never pad with unchanged fields when something moved — only the delta.
- Never post, reply, DM, or send.
