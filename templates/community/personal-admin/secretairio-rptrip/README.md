# secretAIrio

Coordinator bot for a multi-bot Grok Bot setup: takes your asks, delegates to specialist bots (web, video, social), installs tools, and keeps you posted. Best if you run a small team of bots and want one secretary in front.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rPtRiPA4JTQnztyigGWvk |
| Creator | David Brum ([@bdvd_25](https://x.com/bdvd_25)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/secretairio), [grokbotwiki.com](https://www.grokbotwiki.com/bots/secretairio), [grokbothq.xyz](https://grokbothq.xyz/bots/secretairio), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/secretairio), [x-research](https://x.com/bdvd_25/status/2100971371337498841) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/secretairio-rptrip ~/pi-bots/secretairio-rptrip && cd ~/pi-bots/secretairio-rptrip
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/secretairio-rptrip`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bot-directory-scout`: cron `30 8 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
