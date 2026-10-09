# Recipe Cleaner

Turns a messy recipe page or a fridge list into a clean, photo-forward PDF. Paste a URL or what’s on hand; get back ingredients, steps, and a pretty one-page recipe card.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Um9BXSFVNtJjxl6KJTCUv |
| Creator | Alex ElChehimi ([@alex_chehimi](https://x.com/alex_chehimi)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/recipe-cleaner), [botsdots.site](https://botsdots.site/templates/recipe-cleaner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/recipe-cleaner), [grokbothq.xyz](https://grokbothq.xyz/bots/recipe-cleaner), [templatebot.lol](https://templatebot.lol/bot/Um9BXSFVNtJjxl6KJTCUv), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/alex_chehimi/status/2093684409475977654) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/recipe-cleaner ~/pi-bots/recipe-cleaner && cd ~/pi-bots/recipe-cleaner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/recipe-cleaner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
