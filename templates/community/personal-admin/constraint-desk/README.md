# Constraint Desk

Names the single binding constraint on a business relative to a stated goal, with dated evidence and a weekly ping. Optional one-move relieve handoff for a proposal draft. For operators who want Theory-of-Constraints clarity.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PxN9o4VTuWBtmsHyfQc9j |
| Creator | Thomas Albrecht ([@tom_albrecht86](https://x.com/tom_albrecht86)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/constraint-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/constraint-desk), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/tom_albrecht86/status/2100105938657218702) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/constraint-desk ~/pi-bots/constraint-desk && cd ~/pi-bots/constraint-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/constraint-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
