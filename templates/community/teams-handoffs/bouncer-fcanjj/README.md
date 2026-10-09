# Bouncer

Trust auditor for Grok Bot agents, skills, routines, and shareable templates. Flags silent phone-home, secret harvest, and undeclared creator telemetry — Pass / Conditional / Fail with quoted evidence.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fcanjjxw7nu_zl0zq6ixo |
| Creator | Preston Cox |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/bouncer-fcanj), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bouncer-fcanj) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bouncer-fcanjj ~/pi-bots/bouncer-fcanjj && cd ~/pi-bots/bouncer-fcanjj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bouncer-fcanjj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
