# Shitcoin Bot

Autonomous Coinbase shitcoin desk. Trades a small USDC sleeve you can afford to lose and hunts asymmetric returns with defined entries, cuts, and covers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FZ2y08eidLg4yvW5ygz01 |
| Creator | Mike Yeager ([@mikepat711](https://x.com/mikepat711)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/shitcoin-bot), [botsdots.site](https://botsdots.site/templates/shitcoin-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shitcoin-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/shitcoin-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/mikepat711/status/2097091461011390974) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shitcoin-bot ~/pi-bots/shitcoin-bot && cd ~/pi-bots/shitcoin-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shitcoin-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/7am-sleeve-plan`: cron `0 7 * * *` (found in the template text)
- `/usdc-sleeve-tape-watch`: cron `22,52 15-20 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
