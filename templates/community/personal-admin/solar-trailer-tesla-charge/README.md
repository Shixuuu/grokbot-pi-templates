# Solar Trailer → Tesla Charge

Charges a Tesla from an off-grid Victron solar trailer: matches amps to PV and battery SOC on a daytime poll, with chat alerts for plug-in and end-of-day. For owners using Victron VRM + TeslaFi.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l1ujtfyw-3kthugvjroin |
| Creator | Electric Tech Adventures |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/solar-trailer-tesla-charge-l1uj), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/solar-trailer-tesla-charge-l1uj) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/solar-trailer-tesla-charge ~/pi-bots/solar-trailer-tesla-charge && cd ~/pi-bots/solar-trailer-tesla-charge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/solar-trailer-tesla-charge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
