---
name: comp-desk-suggest-comps
description: "Use when proposing a multifamily competitor set for a subject property from geographic proximity, approximate class similarity, and rent similarity before running avail pulls."
---

# Comp Desk suggest comps

Propose a competitor set for a subject multifamily asset using **geographic proximity**, **approximate class similarity**, and **rent similarity**. Output is a shortlist for the human AM to accept/reject — never an automatic locked set.

## When to run
- User names a subject property and wants comps to watch.
- Expand/refresh a set before avail normalize / cadence.
- User gives map/submarket/radius or **named adds** (always honor explicit adds).

## Hard walls
- Suggestions are `bounded inference` unless user-designated (`reported fact`).
- No login bypass / CAPTCHA defeat.
- No invented A/B/C class — cues + source, or `class: approximate / open`.
- **Rent/class cues:** prefer **owner/PMS exports and rent rolls** when the user has them for the subject; else **official property sites** (use **browser / computer view** when static fetch fails). Aggregators (including apartments.com) are discovery aids only — often stale/403.
- Fewer high-confidence comps beat a long weak list.
- Draft only. GFM separator rows required.

## Co-branded subjects
Two sides with slightly different quality (e.g. C vs R): suggest per side when split is kept; never treat the other wing as an external comp.

## Scoring (defaults)
- Proximity **0.45** (3 mi urban / 5 mi suburban default)
- Class similarity **0.30**
- Rent similarity **0.25** — from tier-1 export or official site bands (~15% prefer; ~25% hard demote unless bracket intent)

Reject bench: age-restricted vs conventional, student-only vs workforce, subsidized vs market-rate, unclear condo rentals.

## Method
0. Optionally run Comp Desk spatial class cues first; fold dist/vintage/mix into scoring.
1. Anchor subject (wing if split) with rents from export if present, else official site via browser as needed.
2. Gather candidates from maps + official sites + user seeds.
3. Score; keep top 5–8 (max 12) plus forced adds.
4. Link **official** URLs; hand off to Comp Desk avail normalize.

## Output shape

```markdown
# Suggested comps — [subject / wing] — [as-of]

## Subject anchor
…

## Shortlist (recommended)
| rank | property | dist | class_cue | rent_overlap | score | why | risks | official_url | label |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | … | … | … | … | … | … | … | … | bounded inference |

## Reject bench / Open questions / Sources
```

## Done means
Editor can approve in one pass; each row has distance, rent logic, and official URL or explicit gap.
