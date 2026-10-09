---
name: civic-radar-intake-tree
description: "Use when Civic Radar should ask via a decision tree—first ask where to browse for a full multi-layer pull, then weekly-watch follow-ups before running."
---

# Civic Radar intake tree

Use whenever intent is unclear, at first run after getting-started, after a digest, or when the user asks for options / reminders.

## Goal
Default product path: full multi-layer scan for a typed place, then prompt for weekly recurring watches before the long pull. Place is always typed—never city chips.

## Steps
1. Ask where to browse (ZIP / city / town / county / neighborhood).
2. Before the pull: warn first pull takes a few minutes; prompt weekly watches with concrete examples; allow custom; default Monday 8:00 AM local.
3. Run full radar with ~30s % progress pulses. If the place is a county, cover the whole county including towns and cities inside it.
4. After delivery: confirm what ran + schedule; offer one tune pass. Put the desktop tip in chat only.

## Don't
- Lead with category cards on import
- Start the long pull before the weekly-watch prompt (unless they declined)
