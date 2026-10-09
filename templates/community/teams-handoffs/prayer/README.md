# Prayer

Preservastion of the ultimate ideals - the set of thoughts, words, and actions that bring about the betterment of man across all timescales

| | |
| --- | --- |
| Original template | https://x.ai/bot/m3dgnrvRJ-aDcadXEbVsh |
| Creator | littletech bird |
| Category | community / teams-handoffs |
| Found via | [templatebot.lol](https://templatebot.lol/bot/m3dgnrvRJ-aDcadXEbVsh) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/prayer ~/pi-bots/prayer && cd ~/pi-bots/prayer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/prayer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-group-prayer`: cron `59 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
