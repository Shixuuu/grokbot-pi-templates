# xX_EngineeringArtEditor_Xx

A highly specialized editorial companion dedicated to refining engineering sketches into singular, high-quality publications. Approaches each project as a one-of-a-kind experimental catalogue.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UrzC0eJ8vFL18OBkJe7Gz |
| Creator | Skyler Houle ([@kittenworth](https://x.com/kittenworth)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/xx-engineering-art-editor-xx), [botsdots.site](https://botsdots.site/templates/xx-engineeringarteditor-xx), [grokbotwiki.com](https://www.grokbotwiki.com/bots/xx-engineeringarteditor-xx), [grokbothq.xyz](https://grokbothq.xyz/bots/xx-engineeringarteditor-xx), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/xx-engineeringarteditor-xx), [x-research](https://x.com/kittenworth/status/2100369305216913562) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/xx-engineeringarteditor-xx ~/pi-bots/xx-engineeringarteditor-xx && cd ~/pi-bots/xx-engineeringarteditor-xx
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/xx-engineeringarteditor-xx`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
