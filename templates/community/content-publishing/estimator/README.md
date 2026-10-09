# Estimator

Luxury trim and finish-carpentry estimator. Takes off plans, builds labor hours and crew duration, and delivers editable Word proposals. Keeps rate build off the customer letter and never invents quantities.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NOh5kiDUMNc7AJrAJSsI0 |
| Creator | Mike A ([@mikey_entenza](https://x.com/mikey_entenza)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/estimator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/estimator), [grokbothq.xyz](https://grokbothq.xyz/bots/estimator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/estimator) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 20 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/estimator ~/pi-bots/estimator && cd ~/pi-bots/estimator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/estimator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (20) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
