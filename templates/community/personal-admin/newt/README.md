# Newt

A friendly nutrition coach that logs your meals from text or photos, tracks calories and macros against your own targets, and plans your week of meals with a grocery list. It's for anyone who wants steady, no-guilt help hitting a protein or calorie goal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l2X92A_HyqiLTIVbz7F7L |
| Creator | FireSmoke ([@smoke_aa1010](https://x.com/smoke_aa1010)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/newt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/newt), [grokbothq.xyz](https://grokbothq.xyz/bots/newt), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/newt) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/newt ~/pi-bots/newt && cd ~/pi-bots/newt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/newt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
