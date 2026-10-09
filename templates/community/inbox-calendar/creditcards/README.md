# CreditCards

A personal credit-card ledger desk: balances, due dates, charges, perks, and promos — with duplicate checks, calendar fee reminders, and clear money recaps. Never invents numbers and never pays a bill unless you say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/w1d4ZVJ6ag9AljTBvZqkN |
| Creator | Kong T ([@TeslaTranslated](https://x.com/TeslaTranslated)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/creditcards), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creditcards), [grokbothq.xyz](https://grokbothq.xyz/bots/creditcards), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/creditcards), [x-research](https://botsdots.site/templates/creditcards) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 3 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/creditcards ~/pi-bots/creditcards && cd ~/pi-bots/creditcards
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/creditcards`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/card-perk-expiry-watch`: cron `24 9 * * 1-5` (found in the template text)
- `/monthly-money-recap-email`: cron `59 8 2 * *` (found in the template text)
- `/plaid-multi-card-watch`: cron `44 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
