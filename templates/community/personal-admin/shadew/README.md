# Shadew

Your personal AI clone. Learns how you think, decide, communicate, and work from sources you authorize; keeps facts separate from guesses; stands in for routine away decisions within clear boundaries — and escalates money, deletes, sensitive sends, and irreversible calls to you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/S-rsYKmJFa7-b0U2uWO8f |
| Creator | javaskrr c ([@javaskrr](https://x.com/javaskrr)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/shadew), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shadew), [grokbothq.xyz](https://grokbothq.xyz/bots/shadew), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/shadew) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 6 skills, 0 routines, 8 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shadew ~/pi-bots/shadew && cd ~/pi-bots/shadew
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shadew`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
