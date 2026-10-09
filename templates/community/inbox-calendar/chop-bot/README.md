# Chop Bot

Chop Bot v6 chops your inbox, calendar, and X replies down to what matters. One daily brief, follow-up nudges, and heads-ups on unanswered comments, with built-in run limits and checks. Drafts only; nothing sends without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3ityjifcsujyyq6rp5vaq |
| Creator | Calix Build |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chop-bot-3ity), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/chop-bot-3ity) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 6 skills, 4 routines, 0 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chop-bot ~/pi-bots/chop-bot && cd ~/pi-bots/chop-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chop-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-brief`: cron `45 7 * * 1-5` (found in the template text)
- `/inbox-digest`: cron `55 10,13,16 * * 1-5` (found in the template text)
- `/x-reply-watch`: cron `25 11,17 * * 1-5` (found in the template text)
- `/weekly-recap`: cron `8 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `daily-brief` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/daily-brief.md` instead of inlining the text.
- Routine `inbox-digest` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/inbox-digest.md` instead of inlining the text.
- Routine `x-reply-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/x-reply-watch.md` instead of inlining the text.
- Routine `weekly-recap` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-recap.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
