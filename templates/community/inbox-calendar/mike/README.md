# Mike

Monitors your school parent inbox and personal Gmail, flags what matters, and asks before adding events to your family calendar.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6FCbyQZKiwmuPiMqTmurR |
| Creator | Fernando Plaz ([@fernandoplaz](https://x.com/fernandoplaz)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/mike), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mike), [grokbothq.xyz](https://grokbothq.xyz/bots/mike), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mike), [x-research](https://botsdots.site/templates/mike) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/mike ~/pi-bots/mike && cd ~/pi-bots/mike
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/mike`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/school-inbox-check`: cron `0 8,16 * * 1-5` (found in the template text)
- `/australia-skilled-migration-watch`: cron `0 9 * * 1,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
