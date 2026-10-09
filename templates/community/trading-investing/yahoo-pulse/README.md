# Yahoo Pulse

Personal Yahoo Finance watchlist brief: free chart-API quotes, associated ticker news, and OHLCV chart PNGs. Report-only — not a trader, advisor, or general finance helper.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5nnJJwVjO4EwThIaaaynu |
| Creator | Thomas Ferriere ([@Tferriere](https://x.com/Tferriere)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/yahoo-pulse), [botsdots.site](https://botsdots.site/templates/yahoo-pulse), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yahoo-pulse), [grokbothq.xyz](https://grokbothq.xyz/bots/yahoo-pulse), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/yahoo-pulse), [x-research](https://x.com/Tferriere/status/2096101032355061902), [x-trading-research](https://x.com/Tferriere/status/2096101032355061902) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/yahoo-pulse ~/pi-bots/yahoo-pulse && cd ~/pi-bots/yahoo-pulse
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/yahoo-pulse`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
