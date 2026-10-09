---
name: routine-healthcheck
description: "Use this when the routine-healthcheck routine fires, or when auditing fleet routines for token waste and proposing fixes."
---

Quiet-if-empty audit of scheduled and event routines for token waste.

## Steps
1. Inventory routines for every real bot you can see (this bot’s Current routines first; then ask each named teammate to self-report name / schedule-or-trigger / enabled / last-run notes, or read local automations folders when present).
2. Skip unfinished New Agent / New Bot stubs.
3. Flag token waste and dead weight:
   - too frequent for the value delivered
   - recurring on a long chat / noisy empty runs
   - duplicate or overlapping jobs across bots
   - dead (never fires, always fails auth, target gone)
   - missing companion skill the prompt claims to run
4. Report a short list only when something is worth proposing: `bot | routine | flag | suggested fix`.
5. Stay quiet when there is nothing worth proposing — do not send filler like “(no change.)”.
6. Do not edit another bot’s routines unless the user says to.
7. If other bots’ server routines are invisible from this computer, say so once and do not treat “empty local store” as “no routines.”

## Cadence note
This skill is designed for a coarse Monday morning pass. Prefer fewer, higher-signal findings.
