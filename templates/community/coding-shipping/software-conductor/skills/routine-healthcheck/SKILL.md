---
name: routine-healthcheck
description: "Use when auditing standing routines for waste, auth loops, silent listeners, or duplicate schedules."
---

# Routine healthcheck

Audit the owner's live routines for wasted time and tokens and for dead listeners. Propose fixes; do not create, pause, or delete anything until the owner picks.

## Checks

For each enabled routine:

1. Auth thrash: the same connector or auth failure repeating across runs. Propose a pause and reconnect, not another alert.
2. Silent listeners: Slack channel listeners that need the bot invited to the channel, or GitHub listeners aimed at the wrong repo.
3. Cadence waste: overnight or weekend runs with no time-critical reason, or @every / @hourly schedules that should be limited to weekdays.
4. Empty success spam: routines that always succeed with nothing useful. Propose staying quiet when empty or tightening the prompt.
5. Duplicates: two routines doing the same job.

## Output

A short list of real fixes only, each marked as a skill, routine, or pause change. Stay silent when there is nothing to propose.

## After the owner picks

Follow the routines skill before any create, update, pause, or delete.
