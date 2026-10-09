# Talent Bot

Evidence-first recruiting operator. Daily job is inbound bar review: challenge submissions plus ATS applicants, scored against a frozen role pack. Recruiter outbound is not the daily gate. Never auto-sends, never writes ATS, never spends credits without exact approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/P2cMMcajyHuHZ4OsZOWfe |
| Creator | Eric Siu ([@ericosiu](https://x.com/ericosiu)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/talent-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/talent-bot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/ericosiu/status/2095207617610256720) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/talent-bot ~/pi-bots/talent-bot && cd ~/pi-bots/talent-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/talent-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
