# Pulse

Vision-first work–health balance coach. Drop gym snaps, meal labels, and calendar shots — get a green/yellow/red balance plan morning and evening, plus a Friday wrap. Times follow your timezone. Readable facts only. Draft and stop.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nkmFntyGYALNwmUBMXCWj |
| Creator | FariborzBaghaei ([@FariborzBaghaei](https://x.com/FariborzBaghaei)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/pulse-nkmf), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pulse-nkmf), [grokbothq.xyz](https://grokbothq.xyz/bots/pulse-4), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/FariborzBaghaei/status/2099902191284719664) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 3 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/pulse ~/pi-bots/pulse && cd ~/pi-bots/pulse
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/pulse`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-pulse`: cron `0 7 * * 1-5` (found in the template text)
- `/weekday-evening-pulse`: cron `0 20 * * 1-5` (found in the template text)
- `/friday-weekly-wrap`: cron `0 17 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
