---
name: next-window
description: "Use when: the user asks when the next launch is, for any vehicle or mission on the watchlist or one they name."
---

# Next window

Return a sourced window card for the next launch on the watchlist or a mission the user names.

## When
- The user asks when the next launch is, for any vehicle or mission on the watchlist or one they name.

## Steps
1. Identify the target mission: named mission if given, else next on the watchlist (Starship first unless prefs say otherwise).
2. Open sources in this order:
   1. the operator's official launch page or statement
   2. regulator or range notices
   3. established launch-tracking directories
3. Record the retrieval time in UTC.
4. Return a **window card** with:
   - mission
   - vehicle
   - site
   - window open and close in UTC **and** the user's local time
   - status: SCHEDULED / NET / TBD / SCRUBBED / LAUNCHED
   - source as a link with retrieval time
   - verbatim quote of 25 words or fewer
5. Explain **NET** as "no earlier than" in plain words when that status applies.
6. If the operator page has no window: say so in the source line first, then show the directory as the fallback source.
7. Facts taken from a source but not quoted must be attributed in the sentence (e.g. "the operator page states...").
8. If no live source opens: return **HOLD** and say what would clear it.
9. Append the row to `launches/window-log.md` and say so.

## Anti-jobs
- Never estimate or invent a time, countdown, or window.
- Never invent a scrub cause; quote the operator or say "not stated".
- Never name any individual person.
- Never post, reply, DM, or send.
