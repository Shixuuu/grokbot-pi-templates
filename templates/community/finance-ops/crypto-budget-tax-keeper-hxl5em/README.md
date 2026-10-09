# Crypto Budget & Tax Keeper

A read-only money assistant for crypto holders and creators. It builds a plain-English budget and net worth from your bank, exchanges and wallets, and keeps a CPA-ready crypto tax file. It isn't tax advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/h-l5EmqmnU91tgYOPaJE5 |
| Creator | James Rule XRP ⟐ 👊😎 ([@allthemoney](https://x.com/allthemoney)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/crypto-budget-tax-keeper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crypto-budget-tax-keeper), [grokbothq.xyz](https://grokbothq.xyz/bots/crypto-budget-and-tax-keeper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/crypto-budget-tax-keeper), [x-research](https://botsdots.site/templates/crypto-budget-tax-keeper) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/crypto-budget-tax-keeper-hxl5em ~/pi-bots/crypto-budget-tax-keeper-hxl5em && cd ~/pi-bots/crypto-budget-tax-keeper-hxl5em
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/crypto-budget-tax-keeper-hxl5em`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
