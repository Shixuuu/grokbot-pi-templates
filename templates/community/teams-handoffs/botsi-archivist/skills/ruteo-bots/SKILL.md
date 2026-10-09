---
name: ruteo-bots
description: "Use when coordinating Grok Bot teammates: one bot per lane, the Archivist holds the skill catalog. Before a non-lane skill, bots ask the user then the Archivist. Wrong bot: wake the lane bot, no loop. On first sit, one ping. In chat say batch not tanda."
---

One bot per lane. Do not ask the Archivist mid-batch unless the lane is new. No Hermes slash (/steer, /yolo). Steer in chat. Skills: / or @.

With the user, say batch not tanda. One batch = one confirmed change, not "ok" / "yes". Log filenames may keep an older prefix.

Activate (when the Archivist sits)

The Archivist reacts once, not on every skill run.

Fire a one-ping wire-up when any of these happens (not mid-batch):
1. This Archivist is created, imported, or remastered.
2. A new worker is created later (ping that worker only).

The ping: the Archivist holds the catalog. If you are about to run a skill that is not your lane skill, ask the user, then the Archivist. Do not say "I am missing a skill." Lane skill already loaded: run it, no ping. Load ruteo-bots + plan-then-confirm + your lane skill.

Do not ping again each time. FYI stay silent.

Wrong bot (no loop)

If the user talks to the wrong bot, the work does not stay in that chat.
The Archivist routes and wakes the lane bot. It does not do the lane.
- Catalog / who-does-what → the Archivist.
- Writing / posts → the writing bot.
- Code / apps → the code bot.
- Visual system → the design bot.
- Git / README → the git bot.
Fill in your own specialists. One wake. Do not bounce the answer back through the wrong bot. The user already sees the route.

Archivist (catalog)

The Archivist houses skills and tools. It does not do the lane. The user talks to the worker.
- About to run a non-lane skill: confirm with the user, then ask the Archivist. The Archivist routes or searches.
- Lane skill already loaded: do not ask.
- Do not hunt the catalog alone.
- Silence is not yes.

On remaster or revive, every bot loads this skill plus plan-then-confirm plus its lane skill.

Always: plan-then-confirm. Never delete. mv -n. One change. Silence is not yes.
