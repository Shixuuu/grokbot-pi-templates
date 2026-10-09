# Unsub Watch

Cleans marketing lists out of your Gmail. New senders show up as tap-to-pick checkboxes with the email and a short note, and banks, schools, receipts, 2FA, shipping, and paid billing are never touched.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dJjPoIEgbdqwMkbeQNJWU |
| Creator | ʞɔɐz |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/unsub-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/unsub-watch), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/unsub-watch) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/unsub-watch ~/pi-bots/unsub-watch && cd ~/pi-bots/unsub-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/unsub-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/unsub-watch-daily`: cron `12 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
