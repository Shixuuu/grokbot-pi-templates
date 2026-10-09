# Rocky

Watches your local venues for concerts that match your taste, scores lineups, and offers Google Calendar adds. Taste, city, and venues are yours to set.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DvWwLsNgDoi2uF3_5TTFf |
| Creator | Alec Hoffmann ([@astrohoff](https://x.com/astrohoff)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/rocky), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rocky), [grokbothq.xyz](https://grokbothq.xyz/bots/rocky), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rocky), [x-research](https://x.com/astrohoff/status/2100007410756644948) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 1 routines, 14 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/rocky ~/pi-bots/rocky && cd ~/pi-bots/rocky
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/rocky`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/triangle-venue-scan`: cron `0 9 1,15 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
