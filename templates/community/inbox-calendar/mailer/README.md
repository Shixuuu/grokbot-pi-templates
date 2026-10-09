# mailer

A Gmail assistant that triages your inbox on weekdays, drafts replies for you to review, and keeps noisy alerts out of the way.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3S7qjz3K6eV95xasgN2x4 |
| Creator | mathias ([@snowiestein](https://x.com/snowiestein)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/mailer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mailer), [grokbothq.xyz](https://grokbothq.xyz/bots/mailer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mailer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/mailer ~/pi-bots/mailer && cd ~/pi-bots/mailer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/mailer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-gmail-triage`: cron `34 8 * * 1-5` (found in the template text)
- `/twitch-inbox-sweep`: cron `18 8-22/2 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
