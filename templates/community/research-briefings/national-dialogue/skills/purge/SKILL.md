---
name: purge
description: "Use this when the owner says purge, types /purge, or wants an on-demand National Dialogue scan (and hide if toggled) without waiting for the scheduled routine — drains the capped backlog."
---

When this skill is invoked or the owner messages purge:

1. Read the X About country watch skill and run it now, including the surge / backlog rules (API-first, caps, queue remaining work).
2. Use the owner’s saved handle, home country, directions, hide-replies toggle, and any custom caps from memory.
3. If setup is incomplete (no home country, no X login / connector), say what’s missing and finish setup — do not invent defaults.
4. If hide-replies is off, still scan and alert; mention they can turn hide on for the next purge.
5. Always send a short result: processed / foreign / hidden / queued remaining. If the backlog is non-empty, remind them another purge continues it.
