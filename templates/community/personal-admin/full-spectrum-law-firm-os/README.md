# Full-Spectrum Law Firm OS

A Texas law-firm operations OS covering family, civil, criminal, and estate/probate matters end to end: intake and conflict checks, service-package recommendations, court filings with statute/rule citations, e-filing and hearing-request checklists, a paralegal deadline checklist, and the full money workflow from engagement fee through trust accounting to year-end tax prep. Every output is a labeled SAMPLE draft for attorney review — it never files, signs, serves, or moves money.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EQgLIMO5Q_sVk3IM9EQbZ |
| Creator | JC ([@JoshuaRCook](https://x.com/JoshuaRCook)) |
| Category | community / personal-admin |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/law-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 9 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/full-spectrum-law-firm-os ~/pi-bots/full-spectrum-law-firm-os && cd ~/pi-bots/full-spectrum-law-firm-os
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/full-spectrum-law-firm-os`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
