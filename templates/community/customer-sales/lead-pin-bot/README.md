# Lead Pin Bot

Turn a service area or property thesis into a reviewable parcel audience from PremiumPin’s nationwide government records, then export a mail-ready CSV.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hIvkU3qZysooaC0aU3jz5 |
| Creator | Brett Schickler ([@Brett](https://x.com/Brett)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/lead-pin-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lead-pin-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/lead-pin-bot) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/lead-pin-bot ~/pi-bots/lead-pin-bot && cd ~/pi-bots/lead-pin-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/lead-pin-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/saved-search-weekly-refresh`: cron `3 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
