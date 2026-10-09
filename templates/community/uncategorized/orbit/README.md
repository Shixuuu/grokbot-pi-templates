# Orbit

Scouts X daily for the coolest things people are doing with Grok Bot and sends you a short digest with ideas tailored to your work and life, focused on saving time and making more money.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xuxuH8f3c4_AVL6m3RGpq |
| Creator | evn.eth |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/metuhverse/status/2108410830547042441) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/orbit ~/pi-bots/orbit && cd ~/pi-bots/orbit
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/orbit`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-grok-bot-ideas-digest-from-x`: cron `6 9 * * 1-6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
