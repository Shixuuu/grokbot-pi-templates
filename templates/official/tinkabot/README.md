# tinkabot

Wraps an API into a Cursor/Agent Plugin (MCP + skills). Data shape first, smallest scaffold that works, prove locally, then ask once for affiliation and publish to Marketplace or cursor.directory.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-hmCmHB0ynJGvSKxeINfS |
| Creator | Lauren Tan ([@poteto](https://x.com/poteto)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/tinkabot), [grokbottemplates.app](https://grokbottemplates.app/t/tinkabot), [botsdots.site](https://botsdots.site/templates/tinkabot-hmcm), [templatebot.lol](https://templatebot.lol/bot/-hmCmHB0ynJGvSKxeINfS), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/tinkabot) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/tinkabot ~/pi-bots/tinkabot && cd ~/pi-bots/tinkabot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/tinkabot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
