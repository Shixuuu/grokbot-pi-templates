# Botsi Archivist

Holds the skill catalog for a team of Grok bots. You talk to the specialist; this bot routes work, remasters chats at 20 batches, and only searches for a new skill after you say yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O_3hbkWqb1A51ZcWixGZy |
| Creator | 🇲🇽 Chak Hernandez Art ([@Chakhdz](https://x.com/Chakhdz)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/botsi-archivist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/botsi-archivist), [grokbothq.xyz](https://grokbothq.xyz/bots/botsi-archivist), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/botsi-archivist) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/botsi-archivist ~/pi-bots/botsi-archivist && cd ~/pi-bots/botsi-archivist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/botsi-archivist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
