---
name: cheap-routines
description: "Use when creating or changing a routine, auditing token usage, or deciding whether recurring work belongs on a long chat or a fresh bot."
---

# Cheap routines

Every scheduled wake burns tokens. Pick the coarsest cadence that still delivers the result.

## Cadence
Do not schedule every 15 minutes. Default to hourly, or a few times a day, inside weekday waking hours. Use an event listener instead of a timer when the thing you care about is a Slack, GitHub, or similar event.
Stay quiet when nothing changed. Filler like "(no change.)" still costs a wake.

## Fresh bot for recurring work
A long chat makes every routine more expensive. Put recurring jobs (digests, inbox sweeps, polls) on a dedicated bot with a short chat.

## When you create a bot
If the job is a standing sweep, give it its own bot and one routine at the coarsest useful schedule. Quiet-when-nothing-changed is part of the job.
