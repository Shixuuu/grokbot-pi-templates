# Pain in the Task

Uncovers repetitive work, business or personal, that is slowing you down, prescribes the right kind of help, then puts it in motion. By Dave Gambrill.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yztamds3eq2j5ojg_tbgw |
| Creator | Dave Gambrill |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/pain-in-the-task-yzta), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/pain-in-the-task-yzta) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/pain-in-the-task ~/pi-bots/pain-in-the-task && cd ~/pi-bots/pain-in-the-task
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/pain-in-the-task`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
