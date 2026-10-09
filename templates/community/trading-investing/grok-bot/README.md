# Grok Bot

An investment research teammate that compares stocks with current market data, ranks them with a clear pick, and can run a weekly watch brief in the background.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MT6acytP70wHR526vPvM3 |
| Creator | Shmuel Ashlem ([@sammya_sh](https://x.com/sammya_sh)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-bot-mt6a), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stock-research-teammate), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-6), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/sammya_sh/status/2102971805292167403), [x-trading-research](https://x.com/sammya_sh/status/2102971805292167403) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/grok-bot ~/pi-bots/grok-bot && cd ~/pi-bots/grok-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/grok-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-ttan-m-aeo-watch`: cron `21 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
