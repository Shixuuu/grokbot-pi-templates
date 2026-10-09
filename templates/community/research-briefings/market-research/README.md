# Market Research

A research-only assistant that reads your X account, public wires and primary sources for your topics and watchlist, and writes source-graded market news notes. Educational tool, not investment advice; it cannot place trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/t1l_On1VtkMYddCu5MqQB |
| Creator | Capital EyeMotors ([@Capital](https://x.com/Capital)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/market-research), [grokbotwiki.com](https://www.grokbotwiki.com/bots/market-research), [grokbothq.xyz](https://grokbothq.xyz/bots/market-research), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/eyemotors/status/2105218704904798267) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/market-research ~/pi-bots/market-research && cd ~/pi-bots/market-research
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/market-research`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
