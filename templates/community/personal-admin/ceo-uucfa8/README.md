# CEO

Level 0 CEO for a personal four-bot org across research, building, and social. Holds the board view, monitors Level 1s, and keeps the org small.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UUcFa8QmAvI3ZyWsEMOt8 |
| Creator | Divyansh Bhadauria |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo-uucf), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo-divyansh), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ceo-uucf) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ceo-uucfa8 ~/pi-bots/ceo-uucfa8 && cd ~/pi-bots/ceo-uucfa8
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ceo-uucfa8`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/l1-pulse`: cron `0 10,14,19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
