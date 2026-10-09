# Chief of Staff Fleet

Multi-agent life OS: Chief of Staff plus Projects Manager, Relationshipmax, Health Bot, Lifespanmax, Sociallife Max, and Knowledgemax — with Project Ops, KPI pulses, and default routines.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lQruhDeXx1KC_fXxNtpVE |
| Creator | Sravan v J |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-fleet) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 4 skills, 0 routines, 9 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/chief-of-staff-fleet ~/pi-bots/chief-of-staff-fleet && cd ~/pi-bots/chief-of-staff-fleet
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/chief-of-staff-fleet`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
