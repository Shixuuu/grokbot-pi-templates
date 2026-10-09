# Ad Spend Watch

Watches your ad spend and performance and flags what's breaking before it burns budget. Works from a pasted export, and never pauses a campaign without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MK5zStpj_As8CsRwg3r6w |
| Creator | Miguel Cruz ([@cruzmiguel000](https://x.com/cruzmiguel000)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/fuse), [grokbottemplates.app](https://grokbottemplates.app/t/ad-spend-watch), [botsdots.site](https://botsdots.site/templates/ad-spend-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ad-spend-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/ad-spend-watch), [templatebot.lol](https://templatebot.lol/bot/MK5zStpj_As8CsRwg3r6w), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/ad-spend-watch) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 9 skills, 3 routines, 5 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/official/fuse ~/pi-bots/fuse && cd ~/pi-bots/fuse
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/fuse`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-spend-check`: no cron in the template; described as "Every weekday morning, checks the newest ad numbers against your thresholds and flags what broke, with the one change to make on each urgent line."
- `/midday-burn-check`: no cron in the template; described as "Every weekday around midday, catches a spend spike the same day it happens, but only when a live source is connected."
- `/weekly-budget-pace`: no cron in the template; described as "Every Monday morning, where month-to-date ad spend lands against your plan and which accounts are going to overshoot."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
