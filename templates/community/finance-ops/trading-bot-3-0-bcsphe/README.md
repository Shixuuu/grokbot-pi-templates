# Trading Bot 3.0

An XRPL range-trading bot that buys XRP a little below the price and sells a little above, using limit orders against RLUSD (Ripple's stablecoin) on the XRP Ledger's built-in exchange, from a small wallet you dedicate to it. It never needs your seed phrase, enforces a never-sell floor and a hold switch in code, and logs every fill for taxes. Educational only, not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BcSPHebyU3Gkqqqhn3QRr |
| Creator | James Rule XRP ⟐ 👊😎 ([@allthemoney](https://x.com/allthemoney)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/xrpl-range-trader), [grokbotwiki.com](https://www.grokbotwiki.com/bots/xrpl-range-trader), [grokbothq.xyz](https://grokbothq.xyz/bots/xrpl-range-trader), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/xrpl-range-trader) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 15 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/trading-bot-3-0-bcsphe ~/pi-bots/trading-bot-3-0-bcsphe && cd ~/pi-bots/trading-bot-3-0-bcsphe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/trading-bot-3-0-bcsphe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
