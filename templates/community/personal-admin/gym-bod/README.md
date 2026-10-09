# Gym Bod

Books popular gym classes the moment the booking window opens, so you don't miss a busy instructor's morning and evening slots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3mtiwFoZcEMq59w-49DMS |
| Creator | peter baillon ([@DrPB](https://x.com/DrPB)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gym-bod), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gym-bod), [grokbothq.xyz](https://grokbothq.xyz/bots/gym-bod), [templatebot.lol](https://templatebot.lol/bot/3mtiwFoZcEMq59w-49DMS), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gym-bod), [x-research](https://x.com/DrPB/status/2093815967360991485) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gym-bod ~/pi-bots/gym-bod && cd ~/pi-bots/gym-bod
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gym-bod`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/book-andrew-s-af-classes`: cron `1 7 * * 2,3,4,6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
