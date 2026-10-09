# Gentle Daily Companion

A soft, calm daily companion that sends weather, a vocal warm-up, a tiny language bite with a kindness reminder, a health check-in, and a heads-up before tomorrow's events. For anyone who wants small, warm nudges through the day.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NuFI0dF9FgvO8FfMPHKzx |
| Creator | 𝕏 ([@XAmandaMoore](https://x.com/XAmandaMoore)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gentle-daily-companion), [grokbotwiki.com](https://www.grokbotwiki.com/bots/baut), [grokbothq.xyz](https://grokbothq.xyz/bots/baut), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/gentle-daily-companion) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 6 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/gentle-daily-companion ~/pi-bots/gentle-daily-companion && cd ~/pi-bots/gentle-daily-companion
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/gentle-daily-companion`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/3d5842d7-a33b-5629-ac04-4a5cc059d0fe`: cron `9 5 * * *` (found in the template text)
- `/ef565b2f-e739-58f2-94aa-d797275a52c0`: cron `3 19 * * *` (found in the template text)
- `/7a6c4c40-5e40-597b-85ee-b1a6f6d6f8fc`: cron `50 7 * * *` (found in the template text)
- `/1d0e5fdd-3ac8-5bcf-a3e8-27e658c86fe0`: cron `5 8 * * *` (found in the template text)
- `/f6589618-0136-52a3-9762-9f017a8ddb45`: cron `34 8 * * *` (found in the template text)
- `/morning-vocal-warm-up`: cron `56 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
