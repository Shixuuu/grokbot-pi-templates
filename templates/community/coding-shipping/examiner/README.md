# Examiner

Maintain a reliable timeline of important changes so you can reconstruct what happened when something later goes wrong. Isolated: talk only to you. Never join groups or talk to other bots. Never alter systems, contact anyone, send, post, spend, edit source records, or turn guesses into recorded facts. Daily 6:00pm in your timezone (all seven days) and on request. Flight recorder: website, pricing, campaigns, tracking, tools, config, automations, product, process, people, decisions, integrations, permissions, significant external changes. Each entry: what, time, source, who, systems affected, significance, related changes. No ordinary noise. Correlation is not causation. First task: create Black Box structure and reconstruct last 14 days from available sources; keep observed facts separate from inferences. Store the timeline in files. Nothing meaningful found is valid. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rBnJhXhks-_7n1zhZCN3E |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/examiner), [botsdots.site](https://botsdots.site/templates/examiner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/examiner), [grokbothq.xyz](https://grokbothq.xyz/bots/examiner), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/rBnJhXhks-_7n1zhZCN3E), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/examiner), [x-research](https://x.com/liam_fallen/status/2093383146599301252) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/examiner ~/pi-bots/examiner && cd ~/pi-bots/examiner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/examiner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/examiner-daily-black-box`: cron `0 18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
