# Grok Bot Builder

Want to build an effective Grok bot? Grok Bot Builder walks you from the job it should hold to the first task you give it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ivmB2e0MSDspxlI-oHf-2 |
| Creator | dcbk2la ([@DCBK2LA](https://x.com/DCBK2LA)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-builder-ivmb), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-builder-ivmb), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-builder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bot-builder-ivmb) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grok-bot-builder ~/pi-bots/grok-bot-builder && cd ~/pi-bots/grok-bot-builder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grok-bot-builder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
