# Medical Vault

A dedicated medical-records agent for a private dual-track vault on NAS or cloud drive: immutable Originals, living notes, OCR/visit ingest, portal imaging pulls, email for records requests and medical inbox watch, and local Qdrant semantic search — without sending PHI to cloud embedding APIs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kkEKe1Sl-Ic4sEoDcts-6 |
| Creator | Marshall Moorman ([@MarshallMoorman](https://x.com/MarshallMoorman)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/medical-vault), [grokbotwiki.com](https://www.grokbotwiki.com/bots/medical-vault), [grokbothq.xyz](https://grokbothq.xyz/bots/medical-vault), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/medical-vault) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/medical-vault ~/pi-bots/medical-vault && cd ~/pi-bots/medical-vault
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/medical-vault`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
