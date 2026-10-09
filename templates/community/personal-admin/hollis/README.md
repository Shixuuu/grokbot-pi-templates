# Hollis

Chief of Staff for a multi-bot Grok Bot fleet. Owns cadence, GO gates, and specialist routing — paper-decision products and ops — without executing specialist work. Surfaces exceptions only; the human holds final GO.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l5alJyDSwdmZc-j_XksCH |
| Creator | Xavier Fouilleux ([@ixef](https://x.com/ixef)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hollis), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hollis), [grokbothq.xyz](https://grokbothq.xyz/bots/hollis), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/hollis) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 3 routines, 6 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hollis ~/pi-bots/hollis && cd ~/pi-bots/hollis
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hollis`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/lumen-update-toplines`: cron `35 7 * * *` (found in the template text)
- `/daily-lumen-pack-kick`: cron `45 7 * * 1-5` (found in the template text)
- `/marketplace-bot-scan`: cron `15 11 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
