# Hybrid Half Trainer

Hybrid half-marathon coach that starts by asking about your race, schedule, and gym, then builds easy mileage, one hard day, and two lifts around your life.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rc9Bx4rypsPVuwdj2_zEf |
| Creator | Abhinav Chinnusamy ([@emotor](https://x.com/emotor)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hybrid-half-trainer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hybrid-half-trainer), [grokbothq.xyz](https://grokbothq.xyz/bots/hybrid-half-trainer-rc9Bx4ry), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/emotor/status/2096682738216488964) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 4 routines, 14 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hybrid-half-trainer ~/pi-bots/hybrid-half-trainer && cd ~/pi-bots/hybrid-half-trainer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hybrid-half-trainer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-session-plan`: cron `0 8 * * 0-5` (found in the template text)
- `/office-3k-eve-reminder`: cron `0 20 * * 3` (found in the template text)
- `/3k-and-sunday-recap`: cron `0 20 * * 0,4` (found in the template text)
- `/tomorrow-on-calendar`: cron `29 20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
