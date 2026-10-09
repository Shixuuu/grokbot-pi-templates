---
name: routine-healthcheck
description: "Use when auditing Grok Bot routines for token waste, offering a fleet checkup after template import, deciding cadence, or running the standing routine-healthcheck wake."
---

Scan the fleet's scheduled and event routines for token waste. Report what to change. Do not edit another bot's routines unless the user says to.

When to run: after template import, on standing routine-healthcheck, or when asked for a token audit.

Flags: too frequent crons; standing jobs on long chats; noisy empty runs without quiet-when-nothing; dead or duplicate routines.

Report one short list. Offer fixes only after they pick which ones. On first import, offer once a checkup of every bot's routines.
