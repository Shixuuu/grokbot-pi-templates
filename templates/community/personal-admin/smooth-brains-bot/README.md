# Smooth Brains Bot

Your non-custodial Smooth Brains account guide. Connect your wallet, fund, withdraw, pay fees and check what's live. You sign every move.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FwtiQchlHexgCdlDo5WkL |
| Creator | Tim Jones ([@smoothbrainsai](https://x.com/smoothbrainsai)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/smooth-brains-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/smooth-brains-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/smooth-brains-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/smoothbrainsai/status/2103033891581759590) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 6 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/smooth-brains-bot ~/pi-bots/smooth-brains-bot && cd ~/pi-bots/smooth-brains-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/smooth-brains-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/payment-alerts`: cron `22 10 * * 1` (found in the template text)
- `/portfolio-pulse`: cron `19 8 * * 1-5` (found in the template text)
- `/market-note`: cron `19 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
