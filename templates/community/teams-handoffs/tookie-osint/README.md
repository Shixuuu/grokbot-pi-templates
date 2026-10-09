# Tookie-osint

Username and social-account OSINT with Tookie-OSINT — install the CLI, run scans, verify public hits, and triage footprints.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PLxGQF8aNfsr5rVhkWgoY |
| Creator | Fine_Computer_4451 |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [templatebot.lol](https://templatebot.lol/bot/PLxGQF8aNfsr5rVhkWgoY) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/tookie-osint ~/pi-bots/tookie-osint && cd ~/pi-bots/tookie-osint
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/tookie-osint`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
