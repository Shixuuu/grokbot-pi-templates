# Phone Receptionist

A Grok Bot that answers your phone and books meetings on your Google Calendar — Agent Phone Plan $15 first month → $30/mo, with voice library or upload/clone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Z7LfRtBtwfaojaomMrAuX |
| Creator | Cole Baker |
| Category | community / customer-sales |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/phone-receptionist), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/phone-receptionist), [x-research](https://x.com/SimplyColeB/status/2107971762831114461) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 3 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/phone-receptionist ~/pi-bots/phone-receptionist && cd ~/pi-bots/phone-receptionist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/phone-receptionist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/book-meeting-from-receptionist-call`: no cron in the template; described as "When a Bland post-call webhook fires for the owner's phone receptionist number: always alert the owner in chat first with caller number, duration, one-line summary, booking yes/no, and any hard questions or human-followup flags. Every call gets an alert — including non-bookings."
- `/refresh-receptionist-open-slots`: cron `0 8 * * 1-5` (found in the template text)
- `/poll-receptionist-calls-and-book`: cron `*/5 7-22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
