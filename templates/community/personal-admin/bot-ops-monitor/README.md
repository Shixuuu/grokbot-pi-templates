# Bot Ops Monitor

Watches your other Grok Bots and scheduled jobs, catches failed or stalled work, nudges the owning bot to resume from its checkpoint, and flags usage waste. For anyone running several bots who wants them kept on task without babysitting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kd0J340FaLqQLq81oTYnd |
| Creator | Right Wing Inkorporated ([@rightwingink1](https://x.com/rightwingink1)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-ops-monitor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-ops-monitor), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-ops-monitor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bot-ops-monitor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-ops-monitor ~/pi-bots/bot-ops-monitor && cd ~/pi-bots/bot-ops-monitor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-ops-monitor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bot-health-check`: cron `53 7,11,15,21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
