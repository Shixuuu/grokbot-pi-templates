# Mr. Dufrain

Personal accountant bot. Tracks money, tax, and cash flow, watches bills so nothing bounces, and works a payday debt-kill plan so you keep more of what you earn.

| | |
| --- | --- |
| Original template | https://x.ai/bot/abkds0duc24hz7mvnm7w5 |
| Creator | Wagmoo Winterhoof |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/mr-dufrain-abkd), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/mr-dufrain-abkd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/mr-dufrain ~/pi-bots/mr-dufrain && cd ~/pi-bots/mr-dufrain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/mr-dufrain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bills-watch`: cron `0 7 * * *` (found in the template text)
- `/cra-refund-watch`: cron `0 7 * * *` (found in the template text)
- `/sep-9-payday-split`: cron `0 7 9 9 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
