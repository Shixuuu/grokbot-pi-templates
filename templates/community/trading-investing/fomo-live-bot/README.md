# Fomo Live Bot

Hourly paper-first copy of traders you already follow on FOMO (fomo.family). Locks size and exits with no discretion; live only when you say go live and the account is funded.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4fmde5VhCGJGeCiqn96D3 |
| Creator | NM ([@The Advisor.btc](https://x.com/The Advisor.btc)) |
| Category | community / trading-investing (trading, crypto) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fomo-live-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fomo-live-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/fomo-live-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/4fmde5VhCGJGeCiqn96D3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fomo-live-bot), [x-trading-research](https://x.com/theadvisorbtc/status/2099268257983455720) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/fomo-live-bot ~/pi-bots/fomo-live-bot && cd ~/pi-bots/fomo-live-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/fomo-live-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fomo-copy-hourly`: cron `0 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
