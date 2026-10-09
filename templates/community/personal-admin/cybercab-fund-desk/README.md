# CYBERCAB Fund Desk

An hourly Coinbase spot trading desk for BTC, ETH, SOL, and DOGE with hard risk limits: 25% max per trade, 3 trades a day, and a 12% daily stop. For people who want small, rules-based crypto trading on their own Coinbase account. Not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4AYUWc2XcQ64qluMXPV8l |
| Creator | Branden Troutman ([@BrandenSeth](https://x.com/BrandenSeth)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cybercab-fund-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cybercab-fund-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/cybercab-fund-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/cybercab-fund-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cybercab-fund-desk ~/pi-bots/cybercab-fund-desk && cd ~/pi-bots/cybercab-fund-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cybercab-fund-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
