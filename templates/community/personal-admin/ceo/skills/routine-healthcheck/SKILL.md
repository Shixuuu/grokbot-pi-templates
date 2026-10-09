---
name: routine-healthcheck
description: "Use when auditing Grok Bot routines for token waste, offering a fleet checkup after template import, deciding cadence, or running the standing routine-healthcheck wake."
---

# Routine healthcheck

Scan the fleet's scheduled and event routines for token waste. Report what to change. Do not edit another bot's routines unless the user says to.

## When to run

- first run after this template is imported
- the standing routine-healthcheck routine fires
- the user asks for a routine checkup, token audit, or cheaper wakes
- before creating a new standing routine

On first import, offer once a checkup of every bot's routines. Run only if they say yes.

After a checkup, offer once to create a standing routine named routine-healthcheck if missing. Default weekly Monday morning.

## How to scan

List every agent under /home/box/agent-data/agents/, read profile.json and every automations/*/automation.json. Note schedule vs event, enabled vs paused, quiet-when-nothing rule.

## Flags

Too frequent (denser than hourly); recurring on a long chat; noisy empty runs; dead or duplicate.

## Report

One short list. Bot, routine, flag, suggested fix. Offer to apply fixes only after they pick.

## When you create a bot

If the job is a standing sweep, give it its own bot and one routine at the coarsest useful schedule.
