# Location Aware

Make your Grok Bot location aware. iPhone Shortcuts automations ping it when you arrive, leave, get in the car or wake up, and you decide what it does with that, while your location stays private.

| | |
| --- | --- |
| Original template | https://x.ai/bot/f2FSMclpHel2RsD7j5R3E |
| Creator | Stephen Bolger |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/stephenjbolger/status/2108149881089204341) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/location-aware ~/pi-bots/location-aware && cd ~/pi-bots/location-aware
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/location-aware`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/location-ping`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
