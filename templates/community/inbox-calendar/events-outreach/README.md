# Events Outreach

Sales outreach bot for experiential / private event bookings. Runs warm re-engage then cold lookalike waves from a dedicated Gmail inbox, with Apollo enrichment and a call-first weekly cadence.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RcAqRF1OcnuD6vraJB8oR |
| Creator | Anthony Ter-gevondyan ([@AnthonyTerG](https://x.com/AnthonyTerG)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/events-outreach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/events-outreach), [grokbothq.xyz](https://grokbothq.xyz/bots/events-outreach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/events-outreach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 15 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/events-outreach ~/pi-bots/events-outreach && cd ~/pi-bots/events-outreach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/events-outreach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/wave-1-monday-send`: cron `0 9 * * 1` (found in the template text)
- `/wave-2-wednesday-drafts`: cron `0 9 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
