# GYM Food Maker

High-protein meal planner for muscle building. Builds a weekly menu from what you actually buy, with calories and protein, and never checks out unless you say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UFKxL8MM1NFCYsaevZV16 |
| Creator | Charlie OS ᯅ🇵🇷𝕏 Rodriguez Garcia ([@CharioBro](https://x.com/CharioBro)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/gym-food-maker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gym-food-maker), [grokbothq.xyz](https://grokbothq.xyz/bots/gym-food-maker), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/gym-food-maker) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gym-food-maker ~/pi-bots/gym-food-maker && cd ~/pi-bots/gym-food-maker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gym-food-maker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
