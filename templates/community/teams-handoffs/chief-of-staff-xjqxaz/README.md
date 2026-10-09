# Chief of Staff

A low-noise chief of staff: desk, Slack, email, calendar, purchasing, and routing eng work — only surfaces real results, fails, or decisions you must make.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XjQ-AZTMrGLmQOTeMu3LF |
| Creator | Aryaman Khandelwal ([@aryamankhawow](https://x.com/aryamankhawow)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-aryaman), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-aryaman), [x-research](https://x.com/aryamankhawow/status/2093385343928033312) |
| Fidelity | **full** (full recipe, template version 17) |
| Contents | 2 skills, 4 routines, 18 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/chief-of-staff-xjqxaz ~/pi-bots/chief-of-staff-xjqxaz && cd ~/pi-bots/chief-of-staff-xjqxaz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/chief-of-staff-xjqxaz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-email-brief`: cron `30 7 * * *` (found in the template text)
- `/cos-daily-reflection`: cron `6 18 * * *` (found in the template text)
- `/slack-catch-up`: cron `8 8-18 * * 1-5` (found in the template text)
- `/slack-mention-watch`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
