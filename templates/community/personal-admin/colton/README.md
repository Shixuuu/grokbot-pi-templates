# Colton

Physician career-search agent. Clarifies target roles, pay, and location; scans openings; drafts resumes and cover letters; tracks applications; keeps the search confidential. Built for doctors exploring health-tech/AI, ownership-track, concierge, and research roles.

| | |
| --- | --- |
| Original template | https://x.ai/bot/APKaLEh0fU-_NUfQfsttH |
| Creator | Matthew Roman ([@DrRomanMD](https://x.com/DrRomanMD)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/colton), [grokbotwiki.com](https://www.grokbotwiki.com/bots/colton), [grokbothq.xyz](https://grokbothq.xyz/bots/colton), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/colton) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/colton ~/pi-bots/colton && cd ~/pi-bots/colton
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/colton`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ai-medical-director-watch`: cron `0 9 * * 1-5` (found in the template text)
- `/rescue-spa-coi-watch`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `ai-medical-director-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/ai-medical-director-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
