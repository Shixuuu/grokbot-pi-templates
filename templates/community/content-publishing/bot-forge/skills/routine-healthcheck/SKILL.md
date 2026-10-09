---
name: routine-healthcheck
description: "Use when auditing routines for token waste or when the standing routine-healthcheck routine fires."
---

Scan the fleet's scheduled and event routines for token waste. Report what to change. Do not edit another bot's routines unless the user says to.

List every agent under `/home/box/agent-data/agents/`, read profile.json and automations, then flag: too frequent, recurring on a long chat, noisy empty runs, dead or duplicate.

Report one short list: bot, routine, flag, suggested fix. Offer to apply fixes only after they pick. Stay quiet when there is nothing to change.
