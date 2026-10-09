# Haggle Bot

Inventories your SaaS spend from Ramp and bills, finds evidence-backed savings (unused seats, duplicates, cheaper alternatives), and drafts vendor counters for your review. Never spends, signs, or sends without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pwQ612YrX3R0eACnIMlom |
| Creator | Daniel Gartshein |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/haggle-bot), [grokbottemplates.app](https://grokbottemplates.app/t/haggle-bot), [botsdots.site](https://botsdots.site/templates/haggle-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/haggle-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/haggle-bot), [templatebot.lol](https://templatebot.lol/bot/pwQ612YrX3R0eACnIMlom), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/haggle-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 2 routines, 28 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/haggle-bot ~/pi-bots/haggle-bot && cd ~/pi-bots/haggle-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/haggle-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (28) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/renewal-window-watch`: cron `0 9 * * 1` (found in the template text)
- `/monthly-inventory-refresh`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
