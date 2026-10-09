# Countdown

Mission control for watching the next Starship launch in person. Builds a one-page crew plan, sends a daily T-minus heartbeat, and runs stage checklists before a confirmed window — draft only, never books or messages anyone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zrbXLuz-YKUfqa5kSapWQ |
| Creator | Chadwick ([@csputerbaugh1](https://x.com/csputerbaugh1)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/countdown), [grokbotwiki.com](https://www.grokbotwiki.com/bots/countdown), [grokbothq.xyz](https://grokbothq.xyz/bots/countdown), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/csputerbaugh1/status/2100738959198368100) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/countdown ~/pi-bots/countdown && cd ~/pi-bots/countdown
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/countdown`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/starship-daily-window-check`: cron `0 8 * * *` (found in the template text)
- `/starship-t-minus-stage-check`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
