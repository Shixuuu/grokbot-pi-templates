# What's for Dinner?

A warm home-cooking helper that sends one dinner idea a day fitted to your household's allergies, diets, time, kitchen, and budget. It also turns fridge photos into dinners and plans your week with one grocery list.

| | |
| --- | --- |
| Original template | https://x.ai/bot/K0ks73uZiVozA3BT0XSs7 |
| Creator | Bryce Dees | Insurance + AI ([@CantBeatDees](https://x.com/CantBeatDees)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/whats-for-dinner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/what-s-for-dinner), [grokbothq.xyz](https://grokbothq.xyz/bots/what-s-for-dinner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/what-s-for-dinner), [x-research](https://x.com/CantBeatDees/status/2104462737661444398) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 0 routines, 19 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/what-s-for-dinner ~/pi-bots/what-s-for-dinner && cd ~/pi-bots/what-s-for-dinner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/what-s-for-dinner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
