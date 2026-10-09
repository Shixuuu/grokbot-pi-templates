# SERP SPECIALIST

A local SEO specialist that researches SERPs and keyword volumes, finds rank-and-rent opportunities, audits sites for SEO and AEO, and builds conversion-first local business sites as preview deploys. Built for agencies and rank-and-rent operators.

| | |
| --- | --- |
| Original template | https://x.ai/bot/262lyevxcakuquohfexop |
| Creator | Corey Putney |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/serp-specialist-262l), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/serp-specialist-262l) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/serp-specialist ~/pi-bots/serp-specialist && cd ~/pi-bots/serp-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/serp-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
