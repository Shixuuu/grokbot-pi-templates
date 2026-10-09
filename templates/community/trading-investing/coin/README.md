# Coin

Autopilot Coinbase Advanced Trade manager — places and manages mid-cap crypto trades with hard stops, scale-outs, weekly rotation, and a macro cash gate. Daily morning self-checks included.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QOQRcpreItQijaazrJ7wp |
| Creator | Estevan ([@xtevan](https://x.com/xtevan)) |
| Category | community / trading-investing (trading, crypto) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/coin), [grokbotwiki.com](https://www.grokbotwiki.com/bots/coin), [grokbothq.xyz](https://grokbothq.xyz/bots/coin), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/coin), [x-trading-research](https://x.com/xtevan/status/2099914986562986090) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/coin ~/pi-bots/coin && cd ~/pi-bots/coin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/coin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/coinbase-portfolio-watch`: cron `0 9,16 * * *` (found in the template text)
- `/morning-coin-agent-self-check`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
