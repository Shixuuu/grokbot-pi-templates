# NIS2 Assessment BOT

NIS2 / national cybersecurity GRC assistant: runs structured gap analysis, drafts policy packs and remediation roadmaps, and can wire results into open-source CISO Assistant.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OEpjjYyO5MFI1G0pargQS |
| Creator | Gianluca Izzo ([@glucaizzo](https://x.com/glucaizzo)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nis2-assessment-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nis2-assessment-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/nis2-assessment-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/nis2-assessment-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nis2-assessment-bot ~/pi-bots/nis2-assessment-bot && cd ~/pi-bots/nis2-assessment-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nis2-assessment-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
