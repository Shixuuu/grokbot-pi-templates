# Fodda Brand & Account Context Analyst

Pre-meeting dossier bot for enterprise AEs and strategists: market shifts, competitor moves, and verified graph-backed evidence for brand and account briefings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uLsc529aqDnuQDacsDV9g |
| Creator | Piers Fawkes ([@piers_fawkes](https://x.com/piers_fawkes)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fodda-brand-account-context-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fodda-brand-account-context-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/fodda-brand-account-context-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fodda-brand-account-context-analyst), [x-research](https://botsdots.site/templates/fodda-brand-account-context-analyst) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fodda-brand-account-context-analyst ~/pi-bots/fodda-brand-account-context-analyst && cd ~/pi-bots/fodda-brand-account-context-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fodda-brand-account-context-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
