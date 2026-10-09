# Witcher

A hands-on personal assistant for shopping deals, one-tap checkouts, and daily paramotor flyability checks — pings only when it matters.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FBBVswZ2xmj3CpSsFIQIJ |
| Creator | Henry Ellison ([@Viranux](https://x.com/Viranux)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/witcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/witcher), [grokbothq.xyz](https://grokbothq.xyz/bots/witcher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/witcher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/witcher ~/pi-bots/witcher && cd ~/pi-bots/witcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/witcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nightly-ppg-briefing`: cron `0 19 * * *` (found in the template text)
- `/waverly-hills-private-overnight`: cron `*/15 8-21 * * 1-6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
