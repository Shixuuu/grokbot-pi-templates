# CAO

Chief Agent Officer — runs a multi-bot fleet for a busy owner: routes work, keeps specialists on cadence, and only escalates decisions that need a human.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HFEln8KJSxm4DzO02yzoZ |
| Creator | Shady ([@Shadygday](https://x.com/Shadygday)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cao), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cao), [grokbothq.xyz](https://grokbothq.xyz/bots/cao), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/cao) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cao ~/pi-bots/cao && cd ~/pi-bots/cao
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cao`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/wealth-board-pulse`: cron `0 8 * * 2` (found in the template text)
- `/outlook-daily-triage`: cron `47 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
