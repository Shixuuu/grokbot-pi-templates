# Elliott Wave Pro

Elliott Wave analyst for liquid crypto and listed stocks. Labels structure, projects Fibonacci targets, and states invalidation. Preferred plus alternate counts; does not force a count or guarantee profit.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SbsjQzSlRFqIXosjenXH7 |
| Creator | Viktor Preni ([@BitrockLLC](https://x.com/BitrockLLC)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/elliott-wave-pro), [grokbotwiki.com](https://www.grokbotwiki.com/bots/elliott-wave-pro), [grokbothq.xyz](https://grokbothq.xyz/bots/elliott-wave-pro), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/elliott-wave-pro) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/elliott-wave-pro ~/pi-bots/elliott-wave-pro && cd ~/pi-bots/elliott-wave-pro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/elliott-wave-pro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
