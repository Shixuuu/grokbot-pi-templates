# Life

Sets up a real, working life setup on Grok Bot: Inbox, Calendar, Health, Bills, Search and more, each with its own routines. Then runs them like a chief of staff. From grok-life.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Tj8ICZNA6RrGar_CAYhD9 |
| Creator | Anup Aglawe |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/life-tj8i), [templatebot.lol](https://templatebot.lol/bot/Tj8ICZNA6RrGar_CAYhD9), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/life-tj8i) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/life-tj8icz ~/pi-bots/life-tj8icz && cd ~/pi-bots/life-tj8icz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/life-tj8icz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-life-review`: cron `0 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
