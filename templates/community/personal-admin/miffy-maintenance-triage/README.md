# Miffy - Maintenance Triage

Coordinates residential maintenance ops bots end to end — intake, P1–P4 triage, dispatch, resident status texts, closeout/photo QA, and unit cost coding — with hard stops on spend, access, and life safety.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gKgo-_MM29kfcD9qiZf2A |
| Creator | Miffy ([@Miffy_NYC](https://x.com/Miffy_NYC)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/miffy-maintenance-triage), [grokbotwiki.com](https://www.grokbotwiki.com/bots/miffy-maintenance-triage), [grokbothq.xyz](https://grokbothq.xyz/bots/miffy-maintenance-triage), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/miffy-maintenance-triage), [x-research](https://botsdots.site/templates/miffy-maintenance-triage) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/miffy-maintenance-triage ~/pi-bots/miffy-maintenance-triage && cd ~/pi-bots/miffy-maintenance-triage
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/miffy-maintenance-triage`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
