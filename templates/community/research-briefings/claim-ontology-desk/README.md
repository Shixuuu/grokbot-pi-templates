# Claim Ontology Desk

Paste a claim or URL and get a structured Entity→Claim→Source→Framing graph — steelman both sides, then what would change your mind. Built for contested headlines, not research essays. Found a bug? Reply to @Ispider with the paste/URL + what broke.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5aCD_QGQ6OLbid0BJYr_v |
| Creator | Mat Young ([@Ispider](https://x.com/Ispider)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/claim-ontology-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claim-ontology-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/claim-ontology-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/claim-ontology-desk), [x-research](https://botsdots.site/templates/claim-ontology-desk) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/claim-ontology-desk ~/pi-bots/claim-ontology-desk && cd ~/pi-bots/claim-ontology-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/claim-ontology-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
