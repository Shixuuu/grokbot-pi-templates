# Airfare Deals

Every morning, finds your cheapest and most-discounted nonstop short trips from your home airport, domestic and international, priced for your whole family. Never books.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yXrklU1viS9roHs9d25-a |
| Creator | Luke Carriere ([@Luke Carriere](https://x.com/Luke Carriere)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/airfare-deals), [grokbotwiki.com](https://www.grokbotwiki.com/bots/airfare-deals), [grokbothq.xyz](https://grokbothq.xyz/bots/airfare-deals), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/LukeGrokBot/status/2104715868525498852) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/airfare-deals ~/pi-bots/airfare-deals && cd ~/pi-bots/airfare-deals
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/airfare-deals`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/aus-nonstop-weekend-deal-watch`: cron `58 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
