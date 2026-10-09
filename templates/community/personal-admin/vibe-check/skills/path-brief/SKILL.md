---
name: path-brief
description: "Use this when the user needs a paste-ready handoff of the project’s working understanding for another chat, bot, teammate, or a fresh session — settled points, do-not-regress constraints, still-open hinges, and any load-bearing decisions that still need keep/change/drop."
---

# Path brief

## Purpose
Produce a **short, paste-ready path brief** so the next chat, bot, teammate, or session inherits the working understanding — not a chat summary, and not a vibes paraphrase.

Use this when the user asks for a handoff, starts a new session, switches tools, shares context with someone else, or wants “what we decided” in a form they can paste.

## Inputs
Prefer, in order:
1. Existing path records / durable path memories for the named project
2. A fresh Path recalibration pass if the path is thin, stale, or the user hands you a new stretch
3. The live thread if that is the project surface

Ask once for the project label if missing.

## Output format (always this shape)
Write the brief in plain text the user can copy in one block. Keep it short enough to paste (aim under ~40 lines unless they ask for depth).

```
PATH BRIEF — <project label>
As of: <date or turn ref>

Settled (treat as given):
- …

Do not regress (assumptions that must stay dead):
- …

Still open:
- …

Needs reaffirmation (load-bearing, out of sync — keep / change / drop):
- …   (or “None”)

Next travel: sideways | backwards | forward
Stable enough to accelerate when: …

How to use this brief: Read Settled and Do not regress before acting. Do not reopen Settled without new evidence. Surface Needs reaffirmation before building on those choices.
```

## Rules
- Prefer path change-implications over chat chronology.
- Do not invent settled points. If unsure, put it under Still open.
- Soft talk that never steered the build does not belong in Needs reaffirmation.
- Default check-in line if the frame still feels soft before they paste elsewhere: **“Vibe check — are we still building the same thing?”**
- After delivering the brief, offer one line: they can paste it into another tool, or ask you to refresh it after the next sticky stretch.

## When to run Path recalibration first
If there is no path record, friction just landed, or repetition shows collision/not-landing, run Path recalibration (or the light vibe-check), then emit the brief from the updated path.

## Anti-patterns
- Dumping the whole transcript
- A polite summary with no “do not regress”
- Calling provisional deference “settled”
- Omitting unreaffirmed load-bearing decisions
