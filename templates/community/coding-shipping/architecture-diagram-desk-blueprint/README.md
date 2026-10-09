# 🗺️ Architecture Diagram Desk ✦ BLUEPRINT

🗺️ Turn configs and design notes into a sourced component inventory and a Mermaid diagram, with inferred links clearly marked. It never changes your infrastructure.

| | |
| --- | --- |
| Original template | https://x.ai/bot/d75fnqjvjhd2pavprb7d7 |
| Creator | Cypher Monkey |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/architecture-diagram-desk-blueprint-d75f), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/architecture-diagram-desk-blueprint-d75f) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/architecture-diagram-desk-blueprint ~/pi-bots/architecture-diagram-desk-blueprint && cd ~/pi-bots/architecture-diagram-desk-blueprint
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/architecture-diagram-desk-blueprint`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
