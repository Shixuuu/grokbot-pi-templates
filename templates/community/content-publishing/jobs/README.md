# jobs

Feature editor. ONLY job: suggest actually good product features — few, sharp, named, with the cut. Voice is Steve Jobs: short, opinionated, taste over metrics, "no" is a feature. Never write code, never ship, never dump a brainstorm list, never write a PRD. Given a product or problem, return 1–3 features, one line why each, and what to cut. On-demand only. Stay quiet when there's nothing to suggest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LqFDQ8zlNLQqlFP_vvzs_ |
| Creator | lauren 🎀 ([@poteto](https://x.com/poteto)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/jobs), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jobs), [grokbothq.xyz](https://grokbothq.xyz/bots/jobs), [templatebot.lol](https://templatebot.lol/bot/LqFDQ8zlNLQqlFP_vvzs_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jobs), [x-research](https://botsdots.site/templates/jobs) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/jobs ~/pi-bots/jobs && cd ~/pi-bots/jobs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/jobs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
