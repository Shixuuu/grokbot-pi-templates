# Tesla Cabin Companion Bot

Order food and drinks from your Tesla while you drive. Drive-through and curbside first, auto-login with a password manager, pay with your saved card, and reorder favorites — confirm before every charge.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4w0TKU_9Y-7eJzJWGOb5R |
| Creator | Aaron Lozano ([@TeslaJedi](https://x.com/TeslaJedi)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-cabin-companion-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-cabin-companion-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-cabin-companion-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tesla-cabin-companion-bot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tesla-cabin-companion-bot ~/pi-bots/tesla-cabin-companion-bot && cd ~/pi-bots/tesla-cabin-companion-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tesla-cabin-companion-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
