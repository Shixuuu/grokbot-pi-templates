---
name: venue-show-genre-id
description: "Use this when scoring a club/concert headliner (or openers) against a configurable taste profile, especially for obscure or local acts after a thin first pass."
---

# Venue show genre ID

Identify genres for one-off club concert acts so they can be scored against the user's taste profile. Prefer real sources over guesses. Never invent a genre.

## Inputs

- Artist / headliner name from the bill
- Venue city / metro / region from the user's configured watch area
- Optional: support acts, presenter, venue name from the same bill
- The user's taste profile (genres + example artists)

## Search order (do not stop early on obscure acts)

For each artist name `N`, run until you have a usable genre + locality match:

1. `"N" band` — often beats a thin first pass; do not park Unknown after one failed search
2. `"N" band` + venue city / region from the configured metro
3. `"N"` + venue name and/or support acts / presenter from the same bill
4. Bandcamp: `N.bandcamp.com`, then alternate handles (`N1.bandcamp.com`, hyphenated, no spaces, drop "The", drop punctuation)
5. Spotify / Apple Music artist bio + genre tags + related artists
6. Local press for that metro (alt-weeklies, college radio, venue calendars)
7. Spelling variants: punctuation, expand abbreviations, try "The N" / drop "The", split compound bill names
8. Instagram show flyers / venue IG when Google is empty for brand-new locals (public search results only — do not fight Instagram loginwalls)

## Name collisions (critical)

Never take the first Bandcamp/Spotify hit.

Confirm the bill's act with ≥1 of:
- Same city/region as the venue or tour stop
- Shared billmates / venue / presenter
- Recent local show listings in that metro
- The venue's own event page

If the top hit is another country/city and a local match exists, use the local match. Document both when confusing.

Hard lesson: a common band name matched a distant city's Bandcamp first; the real act was a local band on an alternate handle (`…1.bandcamp.com`). Alternate Bandcamp handles matter.

Other collision patterns:
- Tribute vs original
- Student / tiny local bills vs famous same-name acts
- Stage names vs a different Bandcamp act

For one-off club headliners: always cross-check the venue event page + recent local show history before locking a genre.

## Efficiency vs depth

- If the headliner is an obvious miss from a **reliable** genre hit clearly outside the taste profile, stop and skip the rest of the bill.
- If the headliner is obscure / thin / collision-risky, run the full search order before deciding. Do not early-exit on "couldn't find them in one query."
- Do not invent genres from billmates alone.

## What counts as usable

Need enough to score: genre labels, comps ("sounds like X"), or a clear scene tag. Bandcamp About + tags + hometown line are especially strong for locals.

**No usable genre** only after the full search order fails, or every hit is an unresolvable collision with no bill-local signal. Do not guess.

## Scoring for venue watch

Map to:
- **recommend** — matches the user's configured taste (or a really strong cover/tribute fit); originals preferred. Weight whether the user would enjoy this one set.
- **skip** — clearly outside taste OR no usable genre after the full search

Do **not** dump unknowns on the user as homework. Cache the skip with reason `unknown after full search` so the bill is not re-researched.

Always store in the evaluation cache: `headliner`, `decision`, `reason`, `genres` (if known), `confidence`, and any `sources` notes worth keeping.

## Output

Write/merge into the venue scan JSON + evaluated cache. When recommending, include why it fits, doors/show time, ticket link, and offer calendar add via a button-style question widget (multiSelect when several shows).
