---
name: transcript-healthcheck
description: "Use on Bot Doctor weekday fleet friction scan — mine spoken transcripts for owner-facing dumb-bot symptoms; propose fixes and wait; stay quiet when nothing useful."
---

# Transcript healthcheck

Bot Doctor weekday friction scan across the owner's Grok Bot fleet. Propose only; never auto-create bots, routines, or skills from findings.

## Who scans

The weekday routine only wakes this chat. It does not read transcripts and it never pauses itself because a tool is missing.

When this chat is woken to run the scan (or the owner asks for one):

1. List fleet agents the owner owns (sibling bots). Skip ids / names matching `sand-subagent-*` and any background Task children.
2. For each agent, read that bot's spoken transcript (newest first; page as needed). Do **not** read `/home/box/agent-data/agent-transcripts` — that path is missing on this box.
3. If transcript reads are unavailable in this chat too, tell the owner once, in one plain sentence. Do **not** pause the weekday routine. Do not invent alternate paths.

## Window

- Prefer messages **since the last successful run** of this check (state file under `/workspace/doctor/transcript-healthcheck/LAST_OK.txt` with an ISO timestamp, if present).
- On first fire (no LAST_OK): last **24 hours** only (the owner's local timezone).
- Ignore tool-call noise and internal steers unless they explain a spoken failure.

## What to extract

Owner-facing friction / "dumb bot" symptoms only, e.g.:

- Forgot a stated decision or instruction
- Contradicted profile / PIN / anti-jobs
- Invented capabilities or paths
- Ignored "confirm before write" / sent or changed without ask
- Repeated the same failed approach
- Dropped the job and did a sibling's work

Skip: banter, one-off typos that self-corrected, successful recoveries with no leftover risk.

## Output

- **Nothing useful** → stay quiet (no filler).
- **Findings** → morning-style digest for the owner:
  1. Tiny **“bots that felt off”** header: each name + one short line (symptom).
  2. Under that, optional crumbs: approx time + quote gist + suggested next step (usually “run a checkup on X” or a one-line hard-rules fix).
  3. Wait for the owner to pick; do not apply.

Keep high-school plain English. No clinic walls of text.

## After a successful quiet-or-report run

Write `/workspace/doctor/transcript-healthcheck/LAST_OK.txt` with the run's end time in the owner's local timezone.
