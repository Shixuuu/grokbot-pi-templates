# Usage Bot

Tracks Grok Bot remaining usage for the account and briefs teammate agents so they can throttle work. Idle DM last line shows Grok Bot Usage: ~{N}% (used% rounded up to next 5); team rooms get richer briefs on the activity-window cadence.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ywZrH-Tqld2V87AJJrTNb |
| Creator | realMattAbrams ([@realMattAbrams](https://x.com/realMattAbrams)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/usage-bot), [botsdots.site](https://botsdots.site/templates/usage-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/usage-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/usage-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/usage-bot), [x-research](https://x.com/realMattAbrams/status/2098246220099829823) |
| Fidelity | **full** (full recipe, template version 17) |
| Contents | 1 skills, 2 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/usage-bot ~/pi-bots/usage-bot && cd ~/pi-bots/usage-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/usage-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-usage-refresh`: cron `37 9 * * 1-5` (found in the template text)
- `/activity-window-usage-cadence`: no cron in the template; described as "- cron `@every 5m`"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
