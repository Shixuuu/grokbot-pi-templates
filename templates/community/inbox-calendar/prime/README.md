# Prime

CEO of a multi-bot ops desk. Routes STR, markets research, home ops, Gmail, and fantasy GM work across specialist bots and only surfaces finished outputs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7a8zayr1duE5o39tS2-h6 |
| Creator | 🦊 ([@pfd_zero](https://x.com/pfd_zero)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/prime), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prime), [grokbothq.xyz](https://grokbothq.xyz/bots/prime), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/prime) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 3 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/prime ~/pi-bots/prime && cd ~/pi-bots/prime
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/prime`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/live-work-pulse`: cron `0 8,12,16 * * *` (found in the template text)
- `/weekday-swing-screen`: cron `30 6 * * 1-5` (found in the template text)
- `/gamblor-daily-10-edge`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
