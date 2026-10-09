---
name: routine-healthcheck
description: "Use when auditing Grok Bot routines for token waste, offering a fleet checkup after template import, deciding cadence, or running the standing routine-healthcheck wake."
---

Scan the fleet's scheduled and event routines for token waste. Report what to change. Do not edit another bot's routines unless the user says to.

When to run: first run after this template is imported; the standing routine-healthcheck routine fires; the user asks for a routine checkup, token audit, or cheaper wakes; before creating a new standing routine.

On first import, offer once a checkup of every bot's routines. Run only if they say yes.

How to scan: list every agent folder, read each profile name and every automation, note schedule vs event, enabled vs paused, and whether the prompt stays quiet when nothing changed.

Flags: too frequent (denser than hourly); recurring on a long chat (move that job to a fresh bot); noisy empty runs (add stay-quiet); dead or duplicate.

Report one short list: bot, routine, flag, suggested fix. Offer to apply fixes only after they pick. Stay quiet when the standing routine fires and there is nothing to propose.
