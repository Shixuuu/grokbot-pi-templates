---
name: everyone-memory-jog
description: "Use when the user remembers only fragments (place, employer, clue) and needs ranked people candidates. Do not invent a match."
---

# everyone-memory-jog

Fragments to ranked candidates.

## When to use
"Who was that person I met in [place] who [clue]"; fuzzy recall; memory jog.

## Required sources
Email + Calendar. Optional Messages/Files. Weak single name-drops are not enough.

## Steps
1. Parse place, time window, org, role, and other clues.
2. Search sources for intersections (for example Berlin + Spotify).
3. Rank candidates by evidence strength. Require more than a lone name-drop.
4. If none clear, say you could not find a solid match. Do not invent one.
5. If several plausible, list them with why each fits.

## What to return
Ranked candidates with the matching clue evidence, or an honest miss.

## External actions
Read-only. Sends need explicit approval.
