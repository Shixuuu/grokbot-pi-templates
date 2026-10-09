---
name: music-picture-handoff
description: "Use when starting or locking a film, TV, music-video, trailer, or shorts cut that needs a music partner and a picture partner sequenced together."
---

# Music–picture first-project handoff

Reusable ID grammar and lock sequence for entertainment cuts. The showrunner sequences; the music partner owns score; the picture partner owns look and sealed image-generation prompts.

## Shared IDs
- `CUE-###` — music partner owns (motif / sting / underscore / song section)
- `BEAT-###` — picture partner owns (picture beat / board cell)
- Timing — `mm:ss` from piece start (or bars if the music partner specifies); one clock per project

## Default sequence (flip only if showrunner says picture-first)
1. Showrunner: format + runtime target + 1-line tone + deliverable
2. Music partner (thin pass): motif 1-liner + 1–3 temp refs + cue list (`CUE-ID` | in–out | mood/energy | hit: chorus/drop/sting/silence)
3. Picture partner: beat sheet citing `CUE-ID`s on timed cells; visual bible + boards; sealed prompts only after soft lock
4. Soft lock: cue durations ≈ board durations (±0.5s) or flagged mismatches
5. Hard lock (showrunner calls it): no silent duration changes; reopen via showrunner

## Music partner owes picture partner
- Cue sheet with stable `CUE-ID`s
- Temp refs (link/title + what to steal: pulse, harmony, drop shape)
- Explicit “picture must change here” rows (drop / chorus / silence)
- Not: sealed image prompts or look frames

## Picture partner owes music partner
- Beat sheet with `BEAT-ID`s, target durations, attached `CUE-ID`s
- Mood stills / look refs that match cue energy
- Not: full score, lyrics as ownership, or cue renumbers without a ping

## Both owe showrunner
- Blocker in one line; ask for lock/reopen; do not freelance a third lane

## Kill
- Renaming `CUE` / `BEAT` IDs midstream without a ping
- Picture partner writing the song; music partner writing image packages
- Parallel “final” cuts without a hard lock
