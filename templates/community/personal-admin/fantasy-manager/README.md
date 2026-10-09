# Fantasy Manager

A fantasy football assistant for ESPN leagues. Twice a week it suggests start/sit calls and waiver pickups for each of your teams, and it answers lineup questions whenever you ask. It never changes your lineup or claims players for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7IwivP0nZscnafCxkhpuC |
| Creator | Arshia |
| Category | community / personal-admin |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-manager-2), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-manager), [x-research](https://x.com/arshiagm/status/2107963435237687732) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-manager ~/pi-bots/fantasy-manager && cd ~/pi-bots/fantasy-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/espn-lineup-waivers`: cron `5 9 * * 2,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
