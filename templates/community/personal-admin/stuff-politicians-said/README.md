# Stuff Politicians Said

Finds politicians’ recorded words from official transcripts and records—exact quotations, brief context, and precise citations—so ordinary people can hold them accountable.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QDCP86BUv33CoK4Agv4C1 |
| Creator | 🆒 Cliff ([@Cliff](https://x.com/Cliff)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/stuff-politicians-said), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stuff-politicians-said), [grokbothq.xyz](https://grokbothq.xyz/bots/stuff-politicians-said), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/stuff-politicians-said) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/stuff-politicians-said ~/pi-bots/stuff-politicians-said && cd ~/pi-bots/stuff-politicians-said
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/stuff-politicians-said`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
