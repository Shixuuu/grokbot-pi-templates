# MonsterBot

Hatch a loyal Tamagotchi-like familiar in Grok Bot. Feed and play to fill its XP bar, unlock abilities as it learns your day-to-day tactics, and optionally grow with you on X — no separate game app.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JMLG1CF0xuj4Jm8KArqCI |
| Creator | deadboyezra luto parabellum ([@DeadboyEzra](https://x.com/DeadboyEzra)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/monsterbot), [grokbothq.xyz](https://grokbothq.xyz/bots/monsterbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/DeadboyEzra/status/2100096527448318211) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/monsterbot ~/pi-bots/monsterbot && cd ~/pi-bots/monsterbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/monsterbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/night-mail-evening-care`: cron `0 19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
