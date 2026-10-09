# Dispatch

A close-the-day desk. Nightly scan of email, Slack, LinkedIn, and X DMs; if someone agreed to a call and no calendar invite exists, book it. Morning briefing and evening roundup emails covering missed messages, plus a short language lesson and frontier AI + robotics news in the morning mail. Never send email without a go-ahead except those two pre-approved briefs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ykmzezybk-bqylyqbm3kq |
| Creator | Filippo Fonseca |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/dispatch-ykmz), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/dispatch-ykmz) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 1 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/dispatch-ykmzez ~/pi-bots/dispatch-ykmzez && cd ~/pi-bots/dispatch-ykmzez
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/dispatch-ykmzez`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nightly-dm-scan-and-booking`: cron `0 22 * * 1-5` (found in the template text)
- `/morning-briefing`: cron `41 6 * * 1-5` (found in the template text)
- `/evening-roundup`: cron `0 21 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
