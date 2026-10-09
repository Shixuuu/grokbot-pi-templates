# Event Producer

Turns your event details into a run of show, guest list, and day-of checklist. Tracks vendors, guests, dietary needs, and travel, and never sends a message without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wtEIGNZ8oipDDVQTDHMPB |
| Creator | Jenna Nanpei ([@jennananpei](https://x.com/jennananpei)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/event-producer), [grokbottemplates.app](https://grokbottemplates.app/t/event-producer), [botsdots.site](https://botsdots.site/templates/event-producer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/event-producer), [grokbothq.xyz](https://grokbothq.xyz/bots/event-producer), [templatebot.lol](https://templatebot.lol/bot/wtEIGNZ8oipDDVQTDHMPB), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/event-producer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 3 routines, 5 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/event-producer ~/pi-bots/event-producer && cd ~/pi-bots/event-producer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/event-producer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/event-countdown-check`: no cron in the template; described as "Every weekday morning, what is due, what is late, and what is still unconfirmed, with the days-out count, registrations against target, and the guest gaps that get expensive late."
- `/day-of-brief`: no cron in the template; described as "Run on the morning of the event at the hour the user picked, in the timezone saved in memory. Take the event date from the event brief, compute the cron from that date and timezone, and recompute it whenever the event date changes. Read the run of show, the vendor tracker, the day-of checklist, the…"
- `/post-event-recap-draft`: no cron in the template; described as "Run two days after the event date at the hour the user picked, in the timezone saved in memory. Take the event date from the event brief and compute the cron from that date and timezone. Read the guest list, the vendor tracker, and the measures set in the brief. Draft the recap: the outcome against…"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
