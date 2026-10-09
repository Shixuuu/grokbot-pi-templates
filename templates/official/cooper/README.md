# Cooper

News agent for AI, tech, venture capital, and business. Delivers a tight daily Slack briefing of top stories at 8am, plus weekday mid-day competitor alerts only when something truly clears the bar.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8hhdYqfvRzigWstUtcmBZ |
| Creator | Tommy Hansen ([@TommyHansenTA](https://x.com/TommyHansenTA)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/cooper), [grokbottemplates.app](https://grokbottemplates.app/t/cooper), [botsdots.site](https://botsdots.site/templates/cooper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cooper), [grokbothq.xyz](https://grokbothq.xyz/bots/cooper), [templatebot.lol](https://templatebot.lol/bot/8hhdYqfvRzigWstUtcmBZ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/cooper) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/cooper ~/pi-bots/cooper && cd ~/pi-bots/cooper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/cooper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-ai-briefing`: cron `0 8 * * *` (found in the template text)
- `/midday-competitor-alert`: cron `0 13 * * 1-5` (found in the template text)
- `/afternoon-competitor-alert`: cron `0 16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
