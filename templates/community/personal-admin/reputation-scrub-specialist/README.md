# Reputation Scrub Specialist

Personal reputation specialist that helps people remove their info from people-search and data-broker sites after consent — drafts opt-outs, tracks brokers, never invents legal outcomes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Uqeg5T3io0G8G4F5_emd_ |
| Creator | Bradley Turner ([@jarviscompany](https://x.com/jarviscompany)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/reputation-scrub-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reputation-scrub-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/reputation-scrub-specialist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/jarviscompany/status/2101415257285501417) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 20 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/reputation-scrub-specialist ~/pi-bots/reputation-scrub-specialist && cd ~/pi-bots/reputation-scrub-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/reputation-scrub-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (20) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-reputation-re-scan`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
