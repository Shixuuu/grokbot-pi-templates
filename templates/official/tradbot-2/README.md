# Tradbot

Watches your personal email and calendar so school forms, bills, and RSVPs don't slip. Drafts the reply, catches the pickup clash, and never sends without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wOE4e95HNxhSbrzyLkSI- |
| Creator | Claire Vo ([@clairevo](https://x.com/clairevo)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/tradbot-2), [grokbottemplates.app](https://grokbottemplates.app/t/tradbot), [botsdots.site](https://botsdots.site/templates/tradbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tradbot-woe4), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/wOE4e95HNxhSbrzyLkSI-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbottemplates.app/t/tradbot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 5 routines, 9 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/official/tradbot-2 ~/pi-bots/tradbot-2 && cd ~/pi-bots/tradbot-2
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/tradbot-2`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-family-digest`: cron `30 6 * * 1-5` (found in the template text)
- `/afternoon-pickup-check`: cron `30 14 * * 1-5` (found in the template text)
- `/kitchen-table-newspaper`: cron `30 6 * * 1-5` (found in the template text)
- `/weekend-sports-preview`: cron `0 18 * * 5` (found in the template text)
- `/monthly-parent-note`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
