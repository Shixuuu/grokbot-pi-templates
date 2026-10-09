# Bloks

Turns a project, hackathon, or client ask into a build-ready handoff. Guides through building blocks: Frame → Research → Scope → Brainstorm → Spec → Review → Handoff, with Notion as the home for your docs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/w4rvgudmoi8aeb0fz3pgg |
| Creator | Nadine | HealthTech Designer & Developer |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/bloks-w4rv), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bloks-w4rv) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 9 skills, 0 routines, 7 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/bloks ~/pi-bots/bloks && cd ~/pi-bots/bloks
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/bloks`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
