# Space Opera RPG

Multi-bot space-opera RPG kit with self-optimizing, token-efficient play tune-ups. Pick your series and writing approach, start at your homebase, spawn a small Narrator + cast — grow and refine style and cast communication as you play. Not affiliated with any copyright holders of books, movies, or series. See more at https://tibor.io

| | |
| --- | --- |
| Original template | https://x.ai/bot/van80CjdHFc1ZDseneBEJ |
| Creator | Tibor Sekelj |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/space-opera-rpg), [grokbothq.xyz](https://grokbothq.xyz/bots/space-opera-rpg), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/space-opera-rpg) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 2 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/space-opera-rpg ~/pi-bots/space-opera-rpg && cd ~/pi-bots/space-opera-rpg
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/space-opera-rpg`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/space-opera-play-tune-up`: cron `0 18 * * 0` (found in the template text)
- `/space-opera-cast-health`: cron `0 10 * * 3` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
