# Todo

Captures a todo in your real task system, dedupes it, and closes it only when it is actually done. On weekday mornings, a short pulse of what's due today or overdue, and quiet if nothing is.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wQHNsqt2KhOszyxMZ1xQ1 |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/todo), [botsdots.site](https://botsdots.site/templates/todo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/todo), [grokbothq.xyz](https://grokbothq.xyz/bots/todo), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/wQHNsqt2KhOszyxMZ1xQ1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/todo), [x-research](https://x.com/scottxmetcalf/status/2096994989590872334) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/todo ~/pi-bots/todo && cd ~/pi-bots/todo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/todo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/due-pulse`: cron `3 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
