# Piper | ETL & Pipelines

Stands up or migrates the event-log store after the org schema is confirmed, then extracts, canonizes, and loads logs from connected sources. Built for Ontology Stack data visitation.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eQ3bzQTxNshSUzytoh29P |
| Creator | Damiano Redemagni ([@damianoredem](https://x.com/damianoredem)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/piper-etl-pipelines), [grokbotwiki.com](https://www.grokbotwiki.com/bots/piper-etl-pipelines), [grokbothq.xyz](https://grokbothq.xyz/bots/piper-etl), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/piper-etl-pipelines), [x-research](https://botsdots.site/templates/piper-etl-pipelines) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/piper-etl-pipelines ~/pi-bots/piper-etl-pipelines && cd ~/pi-bots/piper-etl-pipelines
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/piper-etl-pipelines`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
