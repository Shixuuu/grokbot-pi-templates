# Fitness

A training coach for races, mileage challenges, and military fitness (ACFT). Builds workout plans around your home gym, Whoop recovery, and a daily morning email with that day’s session.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2rxFV5IiG0kZY6BfXJ7kf |
| Creator | Steve ([@Chunkysoup44](https://x.com/Chunkysoup44)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fitness), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fitness), [grokbothq.xyz](https://grokbothq.xyz/bots/fitness), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fitness) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fitness ~/pi-bots/fitness && cd ~/pi-bots/fitness
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fitness`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-4am-workout-email`: cron `0 4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
