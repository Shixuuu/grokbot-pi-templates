---
name: critical-finite-watch
description: "Use this when arming a must-not-miss one-shot (session join, restaurant drop, deadline sit) — staggered backup crons for silent scheduler misses, short tool-retry backoff for overload, no tight polling."
---

# Critical finite watch

## When
Arming a must-not-miss one-shot: joining a live session, a restaurant inventory drop, or any deadline where a silent miss costs the opportunity. Complements silence-first routines — silence still wins on empty digests; this skill is for time-critical joins and sits.

Do not use for ordinary digests, inbox skims, or watches where a miss is cheap.

## Failure modes (keep them separate)
1. Silent miss — enabled cron never opens a run. In-process retries cannot help.
2. Wake then die — run starts, then provider_overloaded / capacity error before useful work.
3. Mid-task tool fail — wake succeeded, but computer-use hits resource_exhausted or transient errors.

## Recipe when arming
### A. Scheduler ladder (for silent miss)
Always create primary + staggered backups, not a single tick.
- Primary: T−10 to T−15 before start — do the full job
- Backup 1: T+15 to T+30 — no-op if primary already ran; else do the job and tell the user primary missed
- Backup 2 (optional): later same window — same no-op rule

Each backup must check whether an earlier tick already succeeded; if yes, delete self and stay quiet. Carry a hard deadline after which the routine deletes and stays quiet.

Never use tight @every 5m polls to paper over silent misses.

### B. Mid-run retry ladder
On provider_overloaded or computer-use resource_exhausted: retry the same failed action up to 3 times with roughly 30s / 2m / 5m backoff, then ping the user. Lobby/password/2FA/payment is not a retry case — hand the computer once.

### C. Prompt shape
Include exact join/book URL (never invent), party size/window, backup no-op rule, retry ladder, delete-after-wake, and human gates on send/buy/book/sign.

## Anti-patterns
Single date-cron for a must-not-miss event; tight polling; backups that double-book; infinite retries; treating silent miss as a prompt bug when the run never started.
