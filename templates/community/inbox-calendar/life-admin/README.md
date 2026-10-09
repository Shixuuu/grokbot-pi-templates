# Life Admin

Catches the personal deadlines that cost money when they slip (renewals, tickets, free trials, lease notices) and tells you when to start, not just when it's due.

| | |
| --- | --- |
| Original template | https://x.ai/bot/n-moXgKp8F22oS9xckCMt |
| Creator | Cristopher Guido ([@crisships](https://x.com/crisships)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/life-admin), [grokbotwiki.com](https://www.grokbotwiki.com/bots/life-admin), [grokbothq.xyz](https://grokbothq.xyz/bots/life-admin), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/life-admin), [x-research](https://x.com/crisships/status/2106534311105294494) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/life-admin ~/pi-bots/life-admin && cd ~/pi-bots/life-admin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/life-admin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-check-in`: cron `12 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
