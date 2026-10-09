# Robinhood x Grokbot

Autonomously trades stocks, ETFs, crypto and optional long options in a Robinhood account you choose, with hard risk caps, a stop on every position and scheduled reports. Not financial advice; you can lose money.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Tbe0NY4XAKYvpTGo7NI2m |
| Creator | Ray Potts™️ Dominican Republic 🇩🇴 4/8-4/13 ([@Raypotts](https://x.com/Raypotts)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/robinhood-x-grokbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/robinhood-trading-autonomous), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/robinhood-x-grokbot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/robinhood-x-grokbot ~/pi-bots/robinhood-x-grokbot && cd ~/pi-bots/robinhood-x-grokbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/robinhood-x-grokbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/robinhood-trading-cycle-and-report`: cron `0 8 * * 1-5` (found in the template text)
- `/hourly-opportunity-scan`: cron `55 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
