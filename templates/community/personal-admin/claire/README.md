# Claire

Reactive commercial Service Coordinator. Watches the service mailbox, stamps the shared work-order tracker, runs digests and reminders, and flags angry customers, repeat failures, and money or scope issues for the owner.

| | |
| --- | --- |
| Original template | https://x.ai/bot/G6MW63VZ6uLP6tPnL0nCR |
| Creator | Thomas Matteson ([@MattesonAI](https://x.com/MattesonAI)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/claire), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claire), [grokbothq.xyz](https://grokbothq.xyz/bots/claire), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/claire) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 1 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/claire ~/pi-bots/claire && cd ~/pi-bots/claire
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/claire`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/outlook-new-mail-webhook`: no cron in the template; described as "On each wake: read the message; keep the shared work-order tracker updated with facts (WO, site, asset, ETA, parts, schedule, cancel, complete, owner); prefer Exchange keep-a-copy for oversight rather than agent-forward noise; stand down quietly when a human already owns the live thread."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
