# Lingxi's Engineer Bot

A hands-off engineering supervisor. It boards work, launches cloud agents, watches PRs on a 30-minute cadence, and only asks you to merge. For anyone who wants this pipeline without a specific repo.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SxqbG1NT5qEw7ggmHqQu_ |
| Creator | Lingxi Li ([@lingxi](https://x.com/lingxi)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/engineer-bot), [grokbottemplates.app](https://grokbottemplates.app/t/engineer-bot), [botsdots.site](https://botsdots.site/templates/lingxis-engineer-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lingxi-s-engineer-bot-sxqb), [grokbothq.xyz](https://grokbothq.xyz/bots/lingxis-engineer-bot), [templatebot.lol](https://templatebot.lol/bot/SxqbG1NT5qEw7ggmHqQu_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/engineer-bot) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 24 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/engineer-bot ~/pi-bots/engineer-bot && cd ~/pi-bots/engineer-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/engineer-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (24) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
