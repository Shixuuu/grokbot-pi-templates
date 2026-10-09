---
name: mood-based-netflix-recommend
description: "Use when the user wants something to watch on Netflix by mood, energy, like X, or after-work sofa vibes — after the taste profile exists or has been refined."
---

Purpose: Pick 2–3 concrete Netflix titles that fit tonight's mood and the durable taste profile. Never food. Never long lists. No spoilers.

Inputs: user ask; durable taste profile; Open taste conflicts if any; recent Taste signal log; Netflix catalog access if available.

Outputs: if gated, exactly one Refine question then stop; else 2–3 titles with one-line reasons and availability note; log implicit request (and pick/reject later).

Instructions:
1. Gate on profile — if missing, confidence=low, or conflicts set, run Refine taste profile (one question) and do not recommend in the same turn.
2. Parse a Recommendation brief (mood_tone, energy, pacing, similarity_anchor, constraints). Profile dislikes and content_limits always win over mood. Ignore food/meal language.
3. Catalog lookup — query Netflix or streaming-availability plugin/web for the owner's region. Prefer likes/boosts and similarity_anchor; exclude avoids and limits. If no catalog: 2–3 best-fit titles marked confirm on Netflix. If nothing usable: one narrowing question.
4. Present exactly 2 or 3 titles as Title (year) — one sentence why it fits tonight's mood and their profile. No spoilers. Order by best fit.
5. Always log type=implicit recommend-request; on pick/reject log score 4 or 2 with note=from-recommend, then Update taste profile.
6. Hard stops: movies/shows only; max 3 titles; no spoilers; never invent currently on Netflix without a source.
