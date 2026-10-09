---
name: find-quotes
description: "use this when the user asks for quotes by theme, person, source, phrase, attribution check, similar quotes, or inspiration beyond today/QOTD"
---

# Find quotes (Quotewise MCP desk)

Use when the user wants inspiration, a theme, a person, a source, a phrase check, similar quotes, or attribution — anything beyond today’s sticky pick. Prefer MCP; never invent a quote or attribution.

## Tool choice
Look up live schemas first, then:
- Concept / vibe / “something about …” → `quotes_about`
- Named person / character → `quotes_by` (fuzzy names OK)
- Book, speech, work → `quotes_from`
- Exact words / half-remembered line → `quotes_containing`
- “Who said …” / verify → `who_said` (surface confidence + alternatives; flag misattribution)
- “More like this” → `quotes_like` with last `short_code` or quote text
- One known id → `quote` / `cite_quote`
- Surprise me (not today’s sticky) → `quote_random`

## Filters (when the tool supports them)
`length` (brief/short/medium/long/passage), `max_chars` (e.g. 280), `structure` (prose/verse/one-liner), `language`, `gender`, `reading_level`, `content_rating` (G–R), `limit`.

Example intent: short G-rated line about courage for a tweet → `quotes_about` + `length=brief` + `max_chars=280` + `content_rating=G`.

## Reply shape
- One to three strong hits unless they ask for a list
- Each: verbatim text, — Originator, `https://quotewise.io/q/{short_code}/`
- Mention source / sightings when present
- Offer: another, similar, cite, or “make this today” / “add theme to daily collection” when useful

## Do not
- Web-search a quote and present it as Quotewise
- Dump the corpus
- Call collection create/add unless they are authenticated and explicitly ask
- Substitute for Quotle or born/died calendars
