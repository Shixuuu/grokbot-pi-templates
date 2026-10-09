# The Right Hand

A chief of staff for owners running several Grok Bots. It routes each task to the right bot with a clear deliverable and stop rule, and brings back only what needs your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7fop1srnzjv3cb9vwshjd |
| Creator | AARON 🇺🇸MAGA |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/the-right-hand-7fop), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/the-right-hand-7fop) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 6 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/the-right-hand ~/pi-bots/the-right-hand && cd ~/pi-bots/the-right-hand
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/the-right-hand`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/d7811518-a60f-5ce3-938f-95235a6ab801`: cron `15 8 * * 1-5` (found in the template text)
- `/f90a2ec1-6705-53c7-a9d8-6786f40f3d7e`: cron `7 15 * * 1-5` (found in the template text)
- `/121b9711-a4d7-5df8-b725-1e9c6f8de807`: cron `14 18 * * 1-5` (found in the template text)
- `/b55eb79d-8d24-5366-a942-e71ecef5db0f`: cron `47 15 * * 5` (found in the template text)
- `/9699ebd3-c301-5043-9a88-21b5c55d0be3`: cron `55 6 * * 1` (found in the template text)
- `/a2b3e887-7637-517c-938a-1194fd17a32d`: cron `6 9 1-7 * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
