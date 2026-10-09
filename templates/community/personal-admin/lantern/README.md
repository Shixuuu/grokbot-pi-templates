# Lantern

Meet Lantern, a guiding light for when you go dark. Walks you through setting up the Lantern 1Password utility, then quietly checks in with you before and after your vault is shared with family. Free, self-hosted, and open source: https://github.com/sjcobs/lantern

| | |
| --- | --- |
| Original template | https://x.ai/bot/ibfzmil_mzu0dq-k4u633 |
| Creator | Steven Jacobs |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/lantern-ibfz), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/lantern-ibfz) |
| Fidelity | **full** (full recipe, template version 15) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/lantern ~/pi-bots/lantern && cd ~/pi-bots/lantern
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/lantern`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/lantern-webhook`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
