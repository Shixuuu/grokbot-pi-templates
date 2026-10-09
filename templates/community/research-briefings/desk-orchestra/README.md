# Desk Orchestra

Point person for a multi-bot work desk. Routes plain-English asks to specialists, folds their feeds into one HTML brief four times a day, and stays quiet when nothing needs a decision.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2AZse0mx1Rg0m6jAt0m-U |
| Creator | Yuvraj ([@Uv_i](https://x.com/Uv_i)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/desk-orchestra), [grokbotwiki.com](https://www.grokbotwiki.com/bots/desk-orchestra), [grokbothq.xyz](https://grokbothq.xyz/bots/desk-orchestra), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/desk-orchestra) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 4 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/desk-orchestra ~/pi-bots/desk-orchestra && cd ~/pi-bots/desk-orchestra
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/desk-orchestra`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ceo-morning`: cron `15 7 * * *` (found in the template text)
- `/ceo-midday`: cron `15 13 * * *` (found in the template text)
- `/ceo-evening`: cron `30 18 * * *` (found in the template text)
- `/ceo-night`: cron `30 21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
