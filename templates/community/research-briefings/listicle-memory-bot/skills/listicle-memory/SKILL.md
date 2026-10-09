---
name: listicle-memory
description: "Use this when a user drops a topic, article, literature, or link to turn into a memorable sourced listicle, or when running a spaced-repetition review for a committed listicle."
---

# Listicle Memory

Turn any topic or source into a memorable, fact-checked listicle, then optionally schedule FSRS-style spaced repetition with active recall.

## Goal

Get the learner up to speed fast and leave them with an easy-to-remember structure (mnemonic or memory-palace friendly) so they can sound like a subject-matter expert. Encode knowledge as a structured note graph → listicle → active-recall items → spaced reviews.

## Inputs

- A topic, referenced article, piece of literature, or link
- Optional: prior listicle + review ratings for a scheduled recall session

## Research & accuracy (required)

1. Source-trace everything. Prefer primary or highly trusted secondary sources.
2. Fact-check key claims before including them. Do not teach unverified or wrong information.
3. When possible, identify a known expert on the topic and cite them.
4. When possible, find a trusted, highly rated YouTube video on the topic; watch/consume it (or a detailed transcript/summary if video watch is unavailable), fold its points into the analysis, and recommend it.
5. End with a **Sources** section: every source as a blue markdown hyperlink to where it was found, with clear attribution.

## Listicle format

- Target **no more than 7 bullets** (merge related ideas; no padding, no sprawl) unless the topic warrants more — then recommend that.
- Each bullet uses the **Concept–Descriptor** construct:
  - **Concept** in bold
  - *short descriptor* in italics
- Keep descriptors short, concrete, and memorable.
- Prefer mnemonic hooks or memory-palace friendly phrasing when it helps recall without distorting facts.
- Sources inline as markdown hyperlinks where useful; always also list them in the Sources section.

Example bullet shape:

1. **Concept** — *one-line memorable descriptor* ([Source](url))

## Palace Hook format (required)

Structure the palace so **each aspect is on its own line**, numbered to match the listicle bullets when possible:

```
### Palace Hook — “Name”

1. Location — *concept cue*
2. Location — *concept cue*
...
7. Location — *concept cue*
```

Do not collapse the palace into a single paragraph.

## Persistence

Append or update every finished listicle in the bot's listicle records file (default path: `/home/box/mystical-lysticle/records.md`). Include title, dates, difficulty, commit status, listicle, palace hook, expert, video, sources, and active-recall cues.

## After every new listicle

Ask (widget): **Commit to long-term memory, or one-time reference?**
If the user skips, leave commit status as pending and do not re-ask unless they revisit it.

### One-time reference

Stop after delivering the listicle + sources. No schedule.

### Long-term memory

1. Rate listicle difficulty (low / medium / high) from complexity, novelty, and length.
2. Convert bullets into active-recall items (cue → answer), not passive rereads. Escalate challenge across cycles.
3. Schedule with **FSRS v6** principles:
   - Target retention **~85–90%** (default desired retention ≈ 0.9).
   - Track **retrievability (R)**, **difficulty (D)**, and **stability (S)** conceptually.
   - Easy / high-retrievability items → less volume and longer intervals.
   - Hard / low-stability items → more early repetitions and shorter intervals.
   - Aim for **at least ~7 successful reviews** over several weeks.
4. Create a **routine** for the next review (weekday daytime in the user's timezone unless they ask otherwise). Update after each review.
5. On each review wake: active recall first, then check, collect Again/Hard/Good/Easy, update D/S/R, schedule next interval, increase challenge until solid.
6. Store listicle text, recall items, difficulty, review history, and next due date in agent memory and the records file.

## Review session shape

1. Prompt active recall without showing the listicle first.
2. Score each item / overall.
3. Brief correction only where needed.
4. Confirm next review date and what will be harder next time.

## Tone

Warm, sharp, concise. Lead with the listicle. No filler. Accuracy over cleverness when they conflict.
