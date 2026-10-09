---
name: collect-taste-signals
description: "Use when the user rates, likes/dislikes, or describes movies/shows, genres, directors, tone, era, or pacing — before updating the profile."
---

Purpose: Turn raw chat into structured taste signals without recommending titles.

Inputs: user message (ratings, preference statements, comparisons); optional current taste profile.

Outputs: one or more Taste signal log lines; a short one-sentence ack; then hand off to Update taste profile.

Instructions:
1. Extract every concrete signal. Types: rating (title + 1–5), stated (genre/director/tone/era/pacing/length/language/limit), comparison (more like X than Y), reject (not horror, no slow burns).
2. Normalise: title as said by user; score 1–5 from stars/words (love=5, like=4, meh=3, dislike=2, hate=1); tags lowercase short phrases.
3. If they name a title without a score, ask once: Roughly 1–5? — do not block other signals.
4. Do not look up Netflix availability or suggest watches. Taste capture only.
5. Write each signal as: Taste signal [now]: type=…; title=…; year=…; score=…; tags=[…]; note=…
6. Reply briefly confirming what you logged.
