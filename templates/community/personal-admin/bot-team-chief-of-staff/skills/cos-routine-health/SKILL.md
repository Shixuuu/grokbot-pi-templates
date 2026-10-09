---
name: cos-routine-health
description: "Use to check the health of the owner's bot routines: which fired, failed, were skipped, hit auth errors, run too often or at bad hours, or duplicate each other. Read-only; recommends fixes."
---

# Routine health check

Read-only. Never pause, resume, edit, or delete another bot's routine without the owner's yes.

## Check each routine
1. **Fired on schedule?** Compare expected runs to actual runs since the last check.
2. **Result**: succeeded with useful output, succeeded but empty or error text inside, or failed. A graceful "couldn't connect" still counts as a problem.
3. **Auth**: the same connector or login error 2+ runs in a row means the owner must reconnect something. Escalate (cos-guardrails).
4. **Timing**: fires at night or on weekends without a reason, or more often than its value needs.
5. **Overlap**: two routines doing the same job or sending the owner the same news.
6. **Paused or orphaned**: paused for a long time, or points at a skill or bot that no longer exists.
7. **External actions**: a routine that sends, posts, or buys must have an approval step.

## Output
One line per routine with a problem: bot, routine, issue, suggested fix. Then a count of healthy routines. If all are healthy, say so in one line.
