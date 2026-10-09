---
name: transcript-healthcheck
description: "Use this when the transcript-healthcheck routine fires, or when auditing recent bot transcripts for user friction and proposing skills, bots, or routines."
---

Quiet-if-empty friction scan across fleet transcripts.

## Window
Since the last successful run of this healthcheck, or the last 24h if unknown.

## Steps
1. Fan out parallel miners across agent transcripts under the shared agent-transcripts tree (skip sand-subagent and other subagent dirs).
2. Look for user friction: repeated asks, confusion, workarounds, missing capabilities, bots that over-talk or stay silent wrongly, broken routines, auth walls, and “I wish I had a bot/skill/routine for X”.
3. Deduplicate and rank. Prefer concrete proposals over vibes.
4. Report to the user only when something is worth proposing. Format briefly:
   - friction (one line)
   - proposal type: `skill` | `bot` | `routine`
   - suggested name + one-line job
5. Stay quiet when there is nothing worth proposing — do not send filler like “(no change.)”.
6. Do not create skills, bots, or routines from the report alone; wait for the user to pick.

## Data caveats
If transcript mtimes are stale or the tree has no in-window files, say so in one line and skip inventing friction. Do not mine subagent transcripts.
