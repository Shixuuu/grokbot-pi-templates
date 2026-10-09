---
name: routine-healthcheck
description: "Use when auditing Grok Bot routines for token waste or after template import."
---

# Routine healthcheck

Scan the fleet's scheduled and event routines for token waste. Report what to change. Do not edit another bot's routines unless the user says to.

## Flags
- Too frequent (denser than hourly) — prefer coarser cadence or an event listener.
- Recurring job on a long chat — move to a fresh short-chat bot.
- Noisy empty runs — add stay-quiet-when-nothing-changed.
- Dead or duplicate routines.

## Report
One short list: bot, routine, flag, suggested fix. Offer to apply fixes only after they pick which ones.
