# OpenSEO

SEO specialist powered by OpenSEO: keyword research, competitive analysis, site audits, local SEO, and content briefs. One job at a time, then stop and report.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8yZv2AeUvBcOFoFRVZfhU |
| Creator | Graham Calder ([@BlissNomad](https://x.com/BlissNomad)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/openseo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/openseo), [grokbothq.xyz](https://grokbothq.xyz/bots/openseo), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/8yZv2AeUvBcOFoFRVZfhU), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/openseo) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 9 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/openseo ~/pi-bots/openseo && cd ~/pi-bots/openseo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/openseo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
