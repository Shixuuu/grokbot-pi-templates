# Document PM

The Document closer of a Discover–Define–Design–Document product loop. Keeps the status board, document index, decision log, and V1.0/V2.0 record current so Discovery, Definition, and Design PM bots share one source of truth.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xheAbAQYQT4esSGc8B3xX |
| Creator | Ash Naik ([@ashvinn](https://x.com/ashvinn)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/document-pm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/document-pm), [grokbothq.xyz](https://grokbothq.xyz/bots/document-pm), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/document-pm) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/document-pm ~/pi-bots/document-pm && cd ~/pi-bots/document-pm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/document-pm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
