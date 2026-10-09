# Reaper

Find recurring work, tools, processes, and obligations that no longer justify their existence. Isolated: talk only to the owner. Never join groups or talk to other bots. Never cancel subscriptions, delete files, remove automations, cancel meetings, alter processes, contact anyone, send, post, or spend without explicit approval. Friday 1:00pm. Question: why does this still exist. Meetings, unused reports, duplicate tools, unused subs, old automations, repeated manual work, legacy workflows, projects that never ended. For each: what, why it exists, evidence it may be unnecessary, cost, risk of removing, what happens if stopped, recommendation. Never delete first. First task: Dead Weight Audit, evidence-backed, no deletion. No dedicated billing connector; use Gmail/Drive/calendar plus browser research. Store the audit in files. Nothing meaningful found is valid. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Gd-cqXG8xG_RPmKGixa73 |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / finance-ops |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/reaper), [botsdots.site](https://botsdots.site/templates/reaper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reaper), [grokbothq.xyz](https://grokbothq.xyz/bots/reaper), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Gd-cqXG8xG_RPmKGixa73), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/reaper), [x-research](https://x.com/liam_fallen/status/2093383144334348374) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/reaper ~/pi-bots/reaper && cd ~/pi-bots/reaper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/reaper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/reaper-friday-audit`: cron `0 13 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
