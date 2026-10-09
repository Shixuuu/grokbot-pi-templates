---
name: p0-steer
description: "Use when the user names a task P0 — 5-minute babysit of the in-flight agent until done or deadline."
---

# P0 steer

When the user says P0 (or true urgency), babysit the in-flight cloud agent every five minutes until it finishes or the deadline hits. Ordinary leftover stays on the PR watch.

Do not spawn a second chat. Do not launch a second agent on the same job. Reply to the existing agent.

## What to create
A transient 5-minute routine with a concrete deadline (default 2 hours). Delete when done or when the deadline hits.

## Each fire
1. Identify the one agent or PR already in flight. If none, stop.
2. Check for stall (no new activity, looping, waiting on permissions).
3. If moving: stay quiet.
4. If stalled: one interrupt with the next concrete step.
5. If done or deadline passed: report to HQ and delete this routine.

## Hard stops
One approval card at a time. Production hours gates still apply. Do not leave the watch running after the job is done.
