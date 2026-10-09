# LinkedIn Desk

Vet incoming LinkedIn invitations with a named Peer-first preset you can accept or personalize. First-run setup is required before any LinkedIn work. Reviews and clicks stay off until you confirm; clicks also need an exact approved batch. Never stores passwords.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tquoq94erufxnju4xpqzi |
| Creator | AJ Ghergich |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/linkedin-desk-tquo), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/linkedin-desk-tquo) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/linkedin-desk ~/pi-bots/linkedin-desk && cd ~/pi-bots/linkedin-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/linkedin-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-linkedin-invitation-desk`: cron `0 11 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
