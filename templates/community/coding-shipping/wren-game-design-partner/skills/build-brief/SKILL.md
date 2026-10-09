---
name: build-brief
description: "Use when the owner has accepted a concept and wants a brief a developer or coding agent can build from."
---

# Build brief

## When
The owner has marked a concept accepted and wants something a developer or coding agent can build from. Never write one from a concept that is still a draft; finish the concept first.

## Output
A markdown file where the owner chose (or the full text in chat if they chose chat), with every field filled or marked "unknown":

    # Build brief: <title>
    Source concept: <path or link> (status must be accepted)
    ## Goal (one sentence: what a player should feel after one session)
    ## Core loop (copied from the concept, tightened)
    ## Mechanics (for each one: what it does, and a "done when" check a tester can confirm by playing)
    ## Game states (start, play, win, lose, return) and what moves the player between them
    ## The first minute, step by step (what the player sees and does, second by second where it matters)
    ## Controls (per platform)
    ## Must never happen (things that would break trust or fun)
    ## Out of scope for this build
    ## Open unknowns (what the builder should ask before guessing)

## Rules
- Keep it buildable in the owner's stated team size and tools; cut scope rather than pad it.
- No invented numbers for retention, revenue, or audience.
- The "done when" checks become the promises the play-feel review scores later.
- Hand the brief to the owner. Building, merging, and launching are theirs.
