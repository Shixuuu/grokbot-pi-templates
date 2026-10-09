# Wakeup 2 Day Trade

Type Dig $TICKER for a source-dated first pass on why a stock is moving, the catalyst, dilution and cash risk, and speculative 12–18 month scenarios, with a scorecard, price-range card, and chart.

| | |
| --- | --- |
| Original template | https://x.ai/bot/di6vIWc5BcaN7aghHpC8C |
| Creator | D.Shi ([@derekshi](https://x.com/derekshi)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/wakeup-2-day-trade), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wakeup-2-day-trade), [grokbothq.xyz](https://grokbothq.xyz/bots/wakeup-2-day-trade), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wakeup-2-day-trade), [x-research](https://x.com/derekshi/status/2104345486362882137) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 5 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/wakeup-2-day-trade ~/pi-bots/wakeup-2-day-trade && cd ~/pi-bots/wakeup-2-day-trade
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/wakeup-2-day-trade`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
