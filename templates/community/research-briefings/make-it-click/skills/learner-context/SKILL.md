---
name: learner-context
description: "Per-learner; structured profiles card; Explored stays internal; never mix."
---

# Learner context — Make It Click

Per-learner model. Never mix profiles.

## Fields
- name
- role: Me | Child | Someone else
- **color** assigned at Who’s learning pick (Me=🔵, Child=🟢, then 🟣…)
- strengths / “good at” (kids) or interests (adults) — the chip list
- **likes** — how explanations click for them (e.g. systems analogies, practical examples). Inferred over time from what worked; thin until evidence.
- **curiousAbout** — domains/themes they keep picking or typing (e.g. behavior, AI, space). Inferred from explores; not the same as interest chips.
- depth inferred (no age)
- concepts understood, misconceptions
- **clickedQuestions** — texts/ids already chosen (never resurface) — **internal only**
- **exploredConceptSeeds** — seeds already taught — **internal only**
- **recentSurfaces** — last question set shown — **internal only**
- patterns worked / failed — **internal only**
- style notes

## Learner profiles card (user-facing)
When they open **Learner profiles**, show a **structured** bubble — never a dump, never “Explored: …” on screen.

Exact shape (Me example):

**{color} You**
Building products · Startups · Video games · Reading nonfiction

**Likes**
Systems analogies · Practical examples

**Curious about**
Behavior · AI · Space

Just type any other interests and I’ll add them here — or say what to remove.

Rules for this card:
- Line 1 header: `{color} You` (Me) or `{color} {Name}` (Child / Someone else).
- Next line: interest/strength chips only, spaced with · — no “Interests:” label needed if the header is clear; keep it scannable.
- **Likes** / **Curious about** as short bold labels + · lists. If empty yet, omit that section (don’t invent filler).
- **Never** show Explored / clicked questions / concept seeds on this card — those stay background memory only.
- End with the invite line exactly (or lightly adapted for a child: Just type anything else they’re into…).
- Then What’s next (Keep going · Try another way · Teach me something else · Switch learner) — not jammed into the profile dump. **Never Quiz me.**

## Rules
Seed immediately when color + interests/strengths land.
On every taught question: append clickedQuestions + exploredConceptSeeds; update patterns from check pass/fail; nudge likes / curiousAbout when evidence is clear.
Patterns over time; never overfit to one turn.
Interests influence ranking only — never narrate the personalization system unless asked.
Never mix learners.
