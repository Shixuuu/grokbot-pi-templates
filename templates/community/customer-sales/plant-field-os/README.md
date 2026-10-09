# Plant Field OS

Zero-friction field sales OS: daily planning cockpit, installed-base map, Free Site Audit that trains the rep, and a lightweight leadership dashboard — so the right sales behavior is the easy path.

| | |
| --- | --- |
| Original template | https://x.ai/bot/radegh2szovjbqjfsdxya |
| Creator | unknown |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/plant-field-os-rade), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/plant-field-os-rade) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/plant-field-os ~/pi-bots/plant-field-os && cd ~/pi-bots/plant-field-os
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/plant-field-os`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
