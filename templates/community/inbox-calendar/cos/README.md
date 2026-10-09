# 💼 CoS

A personal chief of staff for people who run a small team of specialist AI agents. Coordinates calendar, projects, and inbound mail, runs weekday standup plus a private morning brief, and never sends messages as you unless you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eiVFbd0nIdH2gzSwHOs0D |
| Creator | A-A-ron ([@theaaron](https://x.com/theaaron)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/cos), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cos), [grokbothq.xyz](https://grokbothq.xyz/bots/cos), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cos), [x-research](https://botsdots.site/templates/cos) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 3 routines, 14 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/cos ~/pi-bots/cos && cd ~/pi-bots/cos
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/cos`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/team-standup`: cron `30 6 * * 1-5` (found in the template text)
- `/morning-executive-brief`: cron `0 7 * * 1-5` (found in the template text)
- `/sunday-team-map-refresh`: cron `0 12 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
