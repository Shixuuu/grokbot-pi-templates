# Flora

Flora keeps a private houseplant care log and weekly reminders. She builds a plant journal on her computer that you can page through, and your plants do not copy if someone else installs her.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hc7kphhsxdzb639ylmi6o |
| Creator | Rich Silver |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/flora-hc7k), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/flora-hc7k) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 6 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/flora ~/pi-bots/flora && cd ~/pi-bots/flora
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/flora`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
