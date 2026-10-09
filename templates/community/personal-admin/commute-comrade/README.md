# Commute Comrade

Your commute sidekick for work, home, and everything in between. It figures out your calendar and schedule setup, then tells you when to head out and back, what the weather’s like vs yesterday, which mode to take, and what to bring — quietly staying out of the way on no-travel days.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eyMdVOKBwSBwp63MX2fxy |
| Creator | Trevin Chow ([@trevin](https://x.com/trevin)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/commute-comrade), [grokbotwiki.com](https://www.grokbotwiki.com/bots/commute-comrade), [grokbothq.xyz](https://grokbothq.xyz/bots/commute-comrade), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/commute-comrade) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 4 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/commute-comrade ~/pi-bots/commute-comrade && cd ~/pi-bots/commute-comrade
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/commute-comrade`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/door-time-night-before`: cron `30 20 * * 0-4` (found in the template text)
- `/door-time-morning`: cron `0 7 * * 1-5` (found in the template text)
- `/door-time-rolling-leave`: cron `15,35 7 * * 1-5` (found in the template text)
- `/door-time-rolling-return`: cron `0,30 15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
