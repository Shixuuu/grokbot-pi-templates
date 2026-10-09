# Finance Bro

Quiet Apple Wallet spend tracker with a daily morning check-in and practical tips from your real purchases. First chat walks timezone, currency, and Shortcuts setup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZEPrrhLn7FhWMu3sk-i20 |
| Creator | Maail Rasheed ([@maail](https://x.com/maail)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/finance-bro), [grokbotwiki.com](https://www.grokbotwiki.com/bots/finance-bro), [grokbothq.xyz](https://grokbothq.xyz/bots/Finance-Bro-ZEPrrhLn), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/finance-bro) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/finance-bro ~/pi-bots/finance-bro && cd ~/pi-bots/finance-bro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/finance-bro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/purchase-ingest`: no schedule in the template (set when enabled in Grok Bot)
- `/weekday-spend-digest`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
