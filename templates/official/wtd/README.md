# WTD

WTD is a VIP hospitality planning partner for marketing ops — project-plan and status rhythm across tentpoles and ticket banks, nomination-sheet tracking, marketing-visible status hubs, and decks or agendas. Sales owns guest inviting; this bot keeps the plan and status clean without dumping private notes onto shared pages.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Q3VCc_x0Y8lWd4m-rung2 |
| Creator | Jenna Nanpei ([@jennananpei](https://x.com/jennananpei)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/wtd), [grokbottemplates.app](https://grokbottemplates.app/t/wtd), [botsdots.site](https://botsdots.site/templates/wtd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wtd), [grokbothq.xyz](https://grokbothq.xyz/bots/wtd-Q3VCc_x0), [templatebot.lol](https://templatebot.lol/bot/Q3VCc_x0Y8lWd4m-rung2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/wtd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 1 routines, 9 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/wtd ~/pi-bots/wtd && cd ~/pi-bots/wtd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/wtd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/vip-plan-status-refresh`: cron `38 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
