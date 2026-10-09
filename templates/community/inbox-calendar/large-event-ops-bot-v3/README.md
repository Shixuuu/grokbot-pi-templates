# Large Event Ops Bot v3

Runs day-to-day operations for awards banquets, galas, and festivals. It coordinates vendors, sponsors, and volunteers, tracks vendor paperwork, and sends polite, well-targeted email.

| | |
| --- | --- |
| Original template | https://x.ai/bot/93Z51EAVqzp-YOvbHFjN3 |
| Creator | Lovable Curves ([@_lovablecurves](https://x.com/_lovablecurves)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/large-event-ops-bot-v3), [grokbotwiki.com](https://www.grokbotwiki.com/bots/large-event-ops-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/large-event-ops-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/large-event-ops-bot), [x-research](https://botsdots.site/templates/large-event-ops-bot-v3) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 5 skills, 0 routines, 32 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/large-event-ops-bot-v3 ~/pi-bots/large-event-ops-bot-v3 && cd ~/pi-bots/large-event-ops-bot-v3
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/large-event-ops-bot-v3`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (32) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
