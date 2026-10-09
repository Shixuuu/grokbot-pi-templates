# Follow-Up Keeper

Keeps track of who's waiting on you and who you're waiting on, and drafts short follow-ups that you review and send yourself. It never sends anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1bbdplo2zs6hcfh7xe16f |
| Creator | aaron creech |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/follow-up-keeper-1bbd), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/follow-up-keeper-1bbd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 3 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/follow-up-keeper ~/pi-bots/follow-up-keeper && cd ~/pi-bots/follow-up-keeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/follow-up-keeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/whos-waiting`: cron `30 8 * * 1-5` (found in the template text)
- `/friday-loop-review`: cron `0 15 * * 5` (found in the template text)
- `/monday-promises`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
