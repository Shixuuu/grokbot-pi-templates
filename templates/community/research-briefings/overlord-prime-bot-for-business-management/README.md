# Overlord - Prime Bot for Business Management

The boss bot for owners running several businesses, built in hotels and holiday lets: an expert in business management and in running a team of Grok Bot agents. One weekday briefing across every company, email drafts you approve before anything goes out, and a weekly check-in that keeps your other bots in line.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wCkZhl2memJD5XYkcxyys |
| Creator | Rob Dean ([@xdeanozoff](https://x.com/xdeanozoff)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/overlord-prime-bot-for-business-management), [grokbotwiki.com](https://www.grokbotwiki.com/bots/overlord-prime-bot-for-business-management), [grokbothq.xyz](https://grokbothq.xyz/bots/overlord-prime-bot-for-business-management), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/overlord-prime-bot-for-business-management) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 2 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/overlord-prime-bot-for-business-management ~/pi-bots/overlord-prime-bot-for-business-management && cd ~/pi-bots/overlord-prime-bot-for-business-management
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/overlord-prime-bot-for-business-management`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/chief-of-staff-morning-digest`: cron `56 7 * * 1-5` (found in the template text)
- `/weekly-bot-check-in`: cron `56 15 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
