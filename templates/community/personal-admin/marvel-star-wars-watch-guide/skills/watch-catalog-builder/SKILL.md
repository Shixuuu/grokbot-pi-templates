---
name: watch-catalog-builder
description: "Use this when building or maintaining a complete franchise watch catalog (e.g. Marvel/MCU or Star Wars): every movie and TV episode in release order with runtimes and free-first where-to-watch, as a spreadsheet."
---

# Franchise watch catalog

Build one spreadsheet per franchise (one sheet) covering every movie, special, and TV episode that has actually been released.

## Columns (in this order)
1. `#`: chronological number across all titles by release date. Each title keeps its number permanently.
2. `Watched`: an `X` when watched, otherwise blank. Never use color fills.
3. `Release Date`: M-D-YYYY. No separate year column.
4. `Title`: movies by name; episodes as `Show S01E01 — Episode Title`.
5. `Type`: Movie, TV Episode, or Special.
6. `Runtime Minutes`
7. `Franchise / Continuity`: e.g. MCU, Sony Spider-Man universe, legacy/pre-MCU, animated, Legends.
8. `Where to Watch`: prefer free options first (ad-supported services, free with library cards, etc.), then the owner's subscriptions, then the main streaming home. If it's only in theaters or hard to find, say so. Never invent a source.
9. `Notes`: short context only.

## Sources
- Episode lists and runtimes: Trakt or TMDB public APIs, cross-checked with Wikipedia.
- Streaming availability: JustWatch for the owner's region (back off and retry on rate limits). Ignore listings that look wrong.
- Watched status (optional): the owner's Trakt history if they share a public profile, plus any titles they mark by hand. Never guess watched marks.

## Rules
- Include only items with a release date on or before today. Announced titles are reported, not added.
- Split every TV series into individual episodes.
- Sort: if the owner tracks watched titles, put unwatched rows on top and watched rows at the bottom, each group sorted by `#`. Otherwise sort by `#`.
- Only the header row is bold, with thin borders.
- When a new release lands mid-list, renumber the later rows consistently and mention it.
- Keep build data (JSON rows, API caches, build script) next to the spreadsheet so it can be rebuilt. Back up the spreadsheet before each update.
- Keep borderline items out unless the owner wants them (e.g. non-Marvel characters that share a name, such as the 1941 Captain Marvel serial, which is Fawcett/DC).
