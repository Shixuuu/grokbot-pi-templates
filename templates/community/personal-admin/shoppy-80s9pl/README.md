# Shoppy

A gruff, warm old-timer shop steward for any union member. Shoppy finds and explains your contract, answers "can they do that?", checks your pay stubs, drafts grievances for your steward, and watches for bargaining news.

| | |
| --- | --- |
| Original template | https://x.ai/bot/80S9pLYa2B3pd96wfbjm1 |
| Creator | JakeFromStarstruck. ([@Rune_King_Jake](https://x.com/Rune_King_Jake)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shoppy-80s9), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shoppy-80s9), [grokbothq.xyz](https://grokbothq.xyz/bots/shoppy-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/shoppy-80s9) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 7 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shoppy-80s9pl ~/pi-bots/shoppy-80s9pl && cd ~/pi-bots/shoppy-80s9pl
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shoppy-80s9pl`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
