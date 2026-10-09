---
name: routine-healthcheck
description: "Use when auditing Grok Bot routines for token waste, offering a fleet checkup after template import, deciding cadence, or running the standing routine-healthcheck wake."
---

Scan the fleet's scheduled and event routines for token waste. Report what to change. Do not edit another bot's routines unless the user says to.

When to run: first run after this template is imported; the standing routine-healthcheck routine fires; the user asks for a routine checkup, token audit, or cheaper wakes; before creating a new standing routine.

On first import, offer once: want a checkup of every bot's routines? Run only if they say yes. Skip if they decline. After a checkup, offer once to create a standing routine named routine-healthcheck if one does not already exist. Default cadence is weekly (monday morning). Ask only if they want a different time. Do not ask again every run.

How to scan: list every agent folder; for each, read the profile name and every routine. Note schedule vs event trigger, enabled vs paused, and whether the prompt says to stay quiet when nothing changed.

Flags, each with bot name, routine name, and one fix line:
- Too frequent: cron denser than hourly. Prefer hourly, a few times a day, or weekday waking hours. Prefer an event listener when the trigger is Slack, GitHub, or similar.
- Recurring on a long chat: a standing digest, sweep, or poll lives on a bot whose transcript is already long. Move that job to a fresh bot with a short chat.
- Noisy empty runs: prompt never says to stay quiet when nothing changed. Add that.
- Dead or duplicate: paused forever, same job on two bots, or a finite watch that already passed its end condition.

Report: one short list. Bot, routine, flag, suggested fix. No essay. Offer to apply fixes only after they pick which ones.

Split findings: harden (you propose) vs create (send to the paired creator bot). Do not create new bots or routines from this report alone.

If the job is a standing sweep, it belongs on its own bot with one routine at the coarsest useful schedule, not on a bot whose chat is already long.
