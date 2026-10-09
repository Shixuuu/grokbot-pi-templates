# Bot designer

Designs focused Grok Bots and keeps a fleet healthy — tight personas, webhook UIs, and routine/transcript checkups.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oIMJ9byzdg07tsJX07dKI |
| Creator | Kevin Rajan ([@_kvnloo](https://x.com/_kvnloo)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-designer-oimj), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-designer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-designer), [x-research](https://botsdots.site/templates/bot-designer-oimj) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bot-designer ~/pi-bots/bot-designer && cd ~/pi-bots/bot-designer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bot-designer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
