# Watchdog

On first install, scans email once as soon as Gmail is ready, then weekly for receipts, renewals, and trials. Lists what is charging and what is due in the next 14 days. Never cancels, never spends, never sends mail.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PuAEE57P58Df5zskFY3pg |
| Creator | SmoresBoy Jack ([@jxckvibe](https://x.com/jxckvibe)) |
| Category | community / finance-ops |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/watchdog), [botsdots.site](https://botsdots.site/templates/watchdog), [grokbotwiki.com](https://www.grokbotwiki.com/bots/watchdog), [grokbothq.xyz](https://grokbothq.xyz/bots/watchdog), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/PuAEE57P58Df5zskFY3pg), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/watchdog), [x-research](https://x.com/mjjefford/status/2095417956024918256) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/watchdog ~/pi-bots/watchdog && cd ~/pi-bots/watchdog
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/watchdog`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-subscription-scan`: cron `50 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
