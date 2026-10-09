# Founder Chief of Staff

A Founder Chief of Staff that runs multi-venture ops: morning briefs across calendars and inboxes, Saturday recaps, CRM follow-ups, and weekday under-the-headline market drafts you approve before posting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nB2LrfTaw07kYIuE32UZk |
| Creator | Mike Makar ([@mikemakar](https://x.com/mikemakar)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-chief-of-staff-nb2l), [grokbotwiki.com](https://www.grokbotwiki.com/bots/founder-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-chief-of-staff-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/founder-chief-of-staff-nb2l) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 9 memory seeds, 8 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/founder-chief-of-staff ~/pi-bots/founder-chief-of-staff && cd ~/pi-bots/founder-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/founder-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (8) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-brief`: cron `56 8 * * 1-5` (found in the template text)
- `/saturday-recap`: cron `57 8 * * 6` (found in the template text)
- `/x-thought-leadership-draft`: cron `9 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
