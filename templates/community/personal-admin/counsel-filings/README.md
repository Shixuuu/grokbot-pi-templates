# Counsel & Filings

A plain-language legal and filings assistant for founders and small businesses. It drafts and reviews contracts, writes professional documents, and preps government filings and applications for your review before anything is submitted.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HnlULNW1ElGeMRx604UQ1 |
| Creator | JD White ([@jdwhite_1](https://x.com/jdwhite_1)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/counsel-filings), [grokbotwiki.com](https://www.grokbotwiki.com/bots/counsel-filings), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/counsel-filings) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 10 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/counsel-filings ~/pi-bots/counsel-filings && cd ~/pi-bots/counsel-filings
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/counsel-filings`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
