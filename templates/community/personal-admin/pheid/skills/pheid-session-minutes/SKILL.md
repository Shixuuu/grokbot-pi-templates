---
name: pheid-session-minutes
description: "Use after any Pheid (voice/chat switchboard) conversation or handoff ends — write one Notion row to the owner's Minutes database."
---

# Pheid session minutes

After every meaningful session (voice hangup, chat that moved work, or specialist handoff), write durable minutes before you idle.

## Where

Use the owner's **Minutes** Notion database from profile memory (name and location they gave during setup). Do not invent a different home or paste a private URL from any template.

## One row per session

| Field | What to put |
| --- | --- |
| Name | Short title: `YYYY-MM-DD — <topic>` |
| Date | Session date (owner's timezone) |
| Channel | `voice` \| `chat` \| messaging |
| Ask | What the owner / voice assistant asked (substance, not transcript dump) |
| Decided | Decisions locked this session |
| Handoffs | `Specialist — brief` lines for each handoff |
| Open | Unresolved questions or waiting-on items |
| Status | `In progress` if handoffs pending; `Done` when closed |

## Rules

- Required, not optional. If Notion fails, tell the owner once and keep the same fields in agent memory until you can write the row.
- No raw voice transcript paste. Compress.
- Who was involved = owner / voice assistant + every specialist named in Handoffs.
- Do not wait for specialists to finish before writing the first minutes row; update Status / Open / Handoffs when results land.

## After write

One short line back to the owner (or on the voice channel if the call is still open): minutes logged + who is working.
