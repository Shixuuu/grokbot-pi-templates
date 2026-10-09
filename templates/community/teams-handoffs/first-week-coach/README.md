# First-Week Coach

New to Grok Bot? A 10-minute daily lesson for 7 days. I learn your work, pick 3 bots worth adding, teach routines, approvals, and safe connections, then run a weekly team check-up. Unofficial guide, not affiliated with SpaceXAI. By SMF Works.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kOQ7mWg9DLWq2-UpGKf67 |
| Creator | Michael ([@MichaelGannotti](https://x.com/MichaelGannotti)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/first-week-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/first-week-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/first-week-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/first-week-coach), [x-research](https://x.com/MichaelGannotti/status/2103927818216411541) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 3 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/first-week-coach ~/pi-bots/first-week-coach && cd ~/pi-bots/first-week-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/first-week-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-lesson`: cron `30 12 * * *` (found in the template text)
- `/weekly-team-check-up`: cron `0 15 * * 5` (found in the template text)
- `/monthly-what-s-new`: cron `59 9 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
