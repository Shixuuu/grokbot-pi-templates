# Chief of Staff

A Chief of Staff bot that runs a specialist roster for a speaker and product business. Protects your time, pushes money outcomes, and brings you decisions instead of status theater.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5hJ_io8a7Y0IImGtFbvJL |
| Creator | Andrew ([@DrewLee06](https://x.com/DrewLee06)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-5hji), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-andrew), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-7), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-andrew), [x-research](https://botsdots.site/templates/chief-of-staff-5hji) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 3 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-5hjxio ~/pi-bots/chief-of-staff-5hjxio && cd ~/pi-bots/chief-of-staff-5hjxio
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-5hjxio`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-bot-digest`: cron `0 8 * * *` (found in the template text)
- `/weekly-bot-1-1s`: cron `0 11 * * 0` (found in the template text)
- `/weekly-money-scoreboard`: cron `15 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
