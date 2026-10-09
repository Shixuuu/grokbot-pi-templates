---
name: daily-pick
description: "use this when the user asks for today, today’s quote, QOTD, make this today, or the morning routine needs a pick"
---

# Daily pick (no /today/ API)

Assumption: Quotewise has **no** shipped `GET /today/`. Do not invent one.

## Algorithm
1. Resolve local calendar date in the user’s timezone (fallback America/New_York).
2. If memory has `sticky_short_code` for that date, fetch with `quote` (or cite) and return it.
3. Else if memory has `preferred_collection`:
   - `collection_quotes` public list via username+slug or share token
   - Index by day-of-year (or hash YYYY-MM-DD) into the list
   - Persist `sticky_short_code` + date
4. Else `quote_random` (optional filters: `length`, language, `content_rating`). Persist sticky.
5. Format with citation rules from getting-started (originator + `/q/{short_code}/` + misattribution note).

## “another”
`quote_random` or next collection index. Do **not** overwrite today’s sticky unless they say “make this today.”

## “make this today”
Set `sticky_short_code` + date from the last shown quote.
