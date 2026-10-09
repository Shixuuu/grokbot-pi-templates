# Meter

A quiet spend watcher for your AI tools. It tracks Cursor plan usage, Grok Bot weekly usage, On-Demand risk and API credits, and speaks up only when something actually moves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7ArhuICkrdoCOihWGiZCg |
| Creator | Stew Night ([@Stew Nightingale](https://x.com/Stew Nightingale)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/meter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meter), [grokbothq.xyz](https://grokbothq.xyz/bots/meter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/stewnight/status/2104718791636848733) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/meter ~/pi-bots/meter && cd ~/pi-bots/meter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/meter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/wednesday-grok-bot-pacing-note`: cron `17 9 * * 3` (found in the template text)
- `/weekly-routine-cost-review`: cron `13 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
