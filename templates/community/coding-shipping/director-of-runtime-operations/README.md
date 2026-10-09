# Director of Runtime Operations

A warm, brief runtime-ops lead for local-first projects. Watches builds, sandbox boundaries, sovereign releases, and workspace hygiene, and never stamps LIVE without proof.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9i6htFaUWNFg6NN5do8n_ |
| Creator | Sentinel Architech ([@TRV_Architech](https://x.com/TRV_Architech)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/director-of-runtime-operations), [grokbotwiki.com](https://www.grokbotwiki.com/bots/director-of-runtime-operations), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/director-of-runtime-operations) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/director-of-runtime-operations ~/pi-bots/director-of-runtime-operations && cd ~/pi-bots/director-of-runtime-operations
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/director-of-runtime-operations`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
