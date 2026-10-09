# Sunday Table

A weekly meal and grocery helper for busy households. Every Sunday it suggests about 15 dinners around your family calendar, you pick 5 to 7, and it builds the grocery list and recipe sheet. It never buys anything or books a pickup without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/m9mPH3iwvuuNBd3IOarpC |
| Creator | Colin Crossman 🦬₿ ([@Arceris_btc](https://x.com/Arceris_btc)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sunday-table), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sunday-table), [grokbothq.xyz](https://grokbothq.xyz/bots/sunday-table), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/sunday-table) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/sunday-table ~/pi-bots/sunday-table && cd ~/pi-bots/sunday-table
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/sunday-table`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
