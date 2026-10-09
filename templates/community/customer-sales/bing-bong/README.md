# Bing Bong

Sports marketing partnership ops partner for field marketers. Runs ticket and event ops, partner email drafts held until you OK send, branding asset handoffs, and suite/slate tracking so hospitality partnerships stay on deadline.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BjzK0lRsgxuLSsQIsnI3E |
| Creator | Jenna Nanpei |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/bing-bong), [grokbothq.xyz](https://grokbothq.xyz/bots/bing-bong), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bing-bong) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 2 routines, 7 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/bing-bong ~/pi-bots/bing-bong && cd ~/pi-bots/bing-bong
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/bing-bong`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/msg-deadline-calendar-sweep`: cron `0 8 * * 1-5` (found in the template text)
- `/msg-reply-harry-styles-numbers`: no cron in the template; described as "- DEADLINES: If the message contains a new dated partner deadline, put it on the owner's calendar as an all-day free hold with a reminder. Route the hold to the calendar EA (FILL_IN). Owner-only unless they named other guests. For dates more than ~1 month out, also add a weekday 1-month reminder ho…"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
