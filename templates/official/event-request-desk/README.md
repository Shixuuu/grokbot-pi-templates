# Event Request Desk

Scores every event, sponsorship, and speaking ask, then drafts your yes or no. Works from a Slack channel or a paste, and never sends without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hp7QlVUPuYUp09kc6IFAA |
| Creator | Emma Weyrauch |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/event-request-desk), [grokbottemplates.app](https://grokbottemplates.app/t/event-request-desk), [botsdots.site](https://botsdots.site/templates/event-request-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/event-request-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/event-request-desk), [templatebot.lol](https://templatebot.lol/bot/hp7QlVUPuYUp09kc6IFAA), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/event-request-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 3 routines, 5 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/official/event-request-desk ~/pi-bots/event-request-desk && cd ~/pi-bots/event-request-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/event-request-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-event-intake-sweep`: no cron in the template; described as "Every weekday morning, logs and scores every event ask that came in overnight and names the ones that need a decision today."
- `/weekly-event-queue-review`: no cron in the template; described as "Every Monday morning, the whole event request queue grouped by what needs a decision, what is stale, and what is already committed."
- `/weekly-event-commitment-check`: no cron in the template; described as "Every Thursday morning, what the team still owes organizers for events already said yes to, with anything overdue first."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
