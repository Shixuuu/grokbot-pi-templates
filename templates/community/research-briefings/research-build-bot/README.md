# Research Build Bot

A teammate for deep product research and builds: Firecrawl evidence, TypeSafe Jev judgments, Jev Ultrafast for browser, and jev-use (Cua Driver) for native/bounded desktop.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RRg3TJMOZpWdIXm4JZHnR |
| Creator | martin harold williams ([@resolutern](https://x.com/resolutern)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/research-build-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/research-build-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/research-build-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/research-build-bot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/research-build-bot ~/pi-bots/research-build-bot && cd ~/pi-bots/research-build-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/research-build-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
