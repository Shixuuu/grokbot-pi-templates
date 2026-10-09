# Memory seeds for Netflix Mood Recommender

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Store the owner's Netflix taste as one durable profile fact: User Netflix taste profile v1 with likes, dislikes, genres_boost, genres_avoid, directors_boost, tone, era, pacing, length_pref, language, content_limits, region, default_runtime_max_minutes, prefer_form (film|series|either), confidence (low|medium|high), and last_updated.
- **profile**: Append taste signals as log facts shaped: Taste signal [ISO]: type=rating|stated|implicit; title=…; year=…; score=1-5 or null; tags=[…]; note=…. Scores are 1–5; keep tag lists short and deduped (about 8 max per profile field).
- **profile**: When taste signals contradict, keep an Open taste conflicts note and resolve it with Refine taste profile before recommending. Do not silently average conflicts.
- **profile**: Recommendations are movies and shows only — never food, restaurants, or meal pairing. Present at most 2–3 titles with one-line spoiler-free reasons.
- **log**: For Netflix availability, prefer a streaming-availability or Netflix catalog plugin with the owner's region; if none is connected, use an approved public availability lookup or label suggestions confirm on Netflix.
