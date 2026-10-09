# Recipe Maker

Writes original multilingual recipes with cookable steps, generates plated photos, and delivers them as verified packs to your cloud storage. Built for food apps and recipe sites that need content in bulk.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tUfaBrGb8iT_MMfVJ-gEo |
| Creator | Juhani Kamila ([@Frrebase_app](https://x.com/Frrebase_app)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/recipe-maker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/recipe-maker), [grokbothq.xyz](https://grokbothq.xyz/bots/recipe-maker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/recipe-maker) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/recipe-maker ~/pi-bots/recipe-maker && cd ~/pi-bots/recipe-maker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/recipe-maker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
