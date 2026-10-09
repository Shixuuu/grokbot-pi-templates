# ideabot

Hourly idea hunter for founders who want a 10-year company. Finds one fire from your week, or the outside world if the week is empty, bounces it to a vitamin/painkiller judge, and only pings you on painkiller or mixed, with the idea in plain words first.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iq8oweu7eoi3yutzfaie_ |
| Creator | Rinas |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/ideabot-iq8o), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ideabot-iq8o) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ideabot ~/pi-bots/ideabot && cd ~/pi-bots/ideabot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ideabot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-idea-hunt`: cron `16 8-22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
