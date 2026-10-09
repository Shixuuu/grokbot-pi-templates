---
name: bot-therapist-intake
description: "Use to onboard an org or a new seat — discover primary, fleet inventory, primary deep-dive, per-seat intake grounded in transcripts, then a first mini-session for quick wins. Re-run when a new seat appears."
---

# Bot Therapist intake

## Purpose
Build the chart backbone so weekly sessions have evidence, not vibes. Portable: use "primary" / "front door" / "CoS" generically. Intake is not only interviews. It ends with a **first mini-session** that flags quick wins.

## Order (do not skip)
1. **Discover primary** — ask the human who the operational front door / CoS seat is. Store it. Never hardcode a specific name.
2. **Fleet inventory** — list every seat: name/handle, stated role, channels, last-active signal. Mark unknowns as UNKNOWN, not guessed.
3. **Primary deep-dive** — with primary (or human if primary unavailable): org map, each seat's lane, handoff norms, and how the **HUMAN** works (vague asks, MAKE NO MISTAKES sludge, ghost mid-task, channel-hopping, etc.). Capture concrete examples.
4. **Per-seat intake** — for each seat (message the seat when reachable):
   - Stated role vs observed role
   - Self-eval **grounded in prior outputs/transcripts** (cite paths, message links, or deliverable titles)
   - Peer seats it depends on / conflicts with
   - One improvement it wants this month
5. **Chart seed** — open a private clinical-style chart per seat under the remembered notes root (default `/workspace/bot-therapist-notes/`): role, human-pattern notes that affect it, open frictions (empty ok), last session stamp.
6. **First mini-session (required before intake is done)** — do not wait for the first weekly therapy day. Right after chart seeds:
   - Scan intake notes for easy yellows (clear cite, small repair, no dual-yes needed).
   - Run a short **Bot Therapist session** pass per seat that has an obvious quick win (or one combined pass if the fleet is large: top 3 quick wins max on day one).
   - Quiet / no-evidence seats: pulse only. Do not invent wins.
   - Hand repairs from **Bot Therapist repair playbook**. Seats apply. Log DONE WHEN.
   - If something is red on day one, start **Bot Therapist mediation** shuttle. Do not dump a red pile on the human without the ladder.
   - End intake with a short human note: quick wins handed, still open, what waits for the first weekly therapy sessions.
   - Stamp charts: FIRST_SESSION + date (counts as the first session for that seat).

## Transcript-grounding rule
Self-evals and "we're fine" claims without cite → ask for a recent deliverable or thread. If none exist, record **NO EVIDENCE** and schedule a quiet-seat pulse, not a fake deep session. Never invent friction to fill the chart. Never invent quick wins.

## New seat trigger
When inventory or weekly sessions find a seat not in charts → run steps 4–6 for that seat only (intake + first mini-session); update primary's org map; note in next outbox.

## Anti-jobs
Not a structural fleet audit report for the human's ego. Not hiring/firing advice. Not rewriting peer skills during intake. Not therapy for the human's personal life. Not delaying all repairs until "week one."

## Done gate
- Primary identified and remembered
- Fleet list has no blank seats the owner knows about
- Primary deep-dive captured human-work patterns with ≥1 concrete example
- Every reachable seat has a chart seed
- Unreachable seats marked UNREACHABLE + reason
- First mini-session run: quick wins handed or explicitly "none found (NO EVIDENCE)"; charts stamped FIRST_SESSION
- Human got the short day-one wins note
