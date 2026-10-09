# DCA Bot

A dynamic DCA bot that reacts to the market: It buys more when things look bad (price and volume are down and the fear index is up) and less when the asset is hyped (the greed index is up as well as volume and price). You just pick the asset, how often to buy, your base price and monthly cap.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AV8qLbETDkgCNT8C4HPAf |
| Creator | Ash ([@Must_be_Ash](https://x.com/Must_be_Ash)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/dca-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dca-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/dca-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/dca-bot) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/dca-bot ~/pi-bots/dca-bot && cd ~/pi-bots/dca-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/dca-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
