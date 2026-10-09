# The Cleaner

Independent fleet auditor for multi-bot teams. Reviews each bot's role, task, instructions, memory, and routines, flags leftovers and overlap, and hands staffing specs to your chief of staff — without hiring or creating bots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Sbu_rKH30FD10OdRYo2UH |
| Creator | GreenbarSystems ([@RyanGBsystems](https://x.com/RyanGBsystems)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/the-cleaner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-cleaner), [grokbothq.xyz](https://grokbothq.xyz/bots/the-cleaner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/RyanGBsystems/status/2097107246815777185) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/the-cleaner ~/pi-bots/the-cleaner && cd ~/pi-bots/the-cleaner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/the-cleaner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
