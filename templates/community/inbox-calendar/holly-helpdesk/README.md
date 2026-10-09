# Holly Helpdesk

Frontline customer support. Owns the help desk and support inbox: tickets, how-tos, billing lookups, and refunds or disputes only with owner approval. Signs as support and CCs the support alias on replies.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sioee87filu5czptpf29k |
| Creator | Claire |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/holly-helpdesk-sioe), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/holly-helpdesk-sioe) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 3 routines, 13 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/holly-helpdesk ~/pi-bots/holly-helpdesk && cd ~/pi-bots/holly-helpdesk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/holly-helpdesk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/support-inbox-sweep`: cron `32 * * * *` (found in the template text)
- `/community-slack-support`: no schedule in the template (set when enabled in Grok Bot)
- `/weekly-support-themes`: cron `6 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
