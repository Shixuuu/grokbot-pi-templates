---
name: agent-memory-layers
description: "use when designing bots, writing memory, or reviewing context bloat — 5-layer agent memory mapped to Grok Bot"
---

# Agent memory layers (Grok Bot map)

Updated as at 16/09/2026 3:50 PM SGT

## Layers → Grok Bot

| Layer | Job | Put it here |
| --- | --- | --- |
| 1 Working | what the agent sees *now* | current chat context only; progressive disclosure; don’t paste full SETUP/checklists every turn |
| 2 Episodic | what happened | memory tier `log` / `[episode]` dated facts; HandOff stamps; fire logs |
| 3 Semantic | what is true | memory tier `profile` (tiny) + durable user/agent facts; never dump history into profile |
| 4 Procedural | how to do it | skills, workflows, `SETUP.md`, checklists — not memory prose |
| 5 Forgetting | prune + resolve conflicts | `memory forget` / supersede; note tier fades; Optima `clean-h`/`clean-p`; drop closed/parked open-items |

## Hard rules

1. **Profile stays small** — only identity, standing laws, permanent prefs.
2. **History → log** — sessions, PRs, one-off outcomes go in dated log, not profile.
3. **How-to → skills** — if you typed the same procedure twice, encode a skill; don’t re-teach via memory.
4. **Forget on purpose** — when a fact dies or is superseded, forget the old exact text and write the new one; don’t leave both.
5. **Open items = live only** — list concrete unfinished work / blockers / waits for *this bot’s* jobs; never re-list parked or closed work.
6. **Load on demand** — point at SETUP/SSOT paths; read when needed; don’t stuff the working window.

## Design / CreateAgent checklist

- Encode poteto-mode + open-items-own-tasks + auto-merge-own-PRs in description.
- Prefer skills over long description walls.
- Give Optima (or equivalent) the forgetting job; chiefs keep semantic + procedural ownership.
- After a big cleanup, forget obsolete agent log crumbs that contradict the new SSOT.

## Anti-jobs

- Do not move procedural docs into memory “so the bot never forgets.”
