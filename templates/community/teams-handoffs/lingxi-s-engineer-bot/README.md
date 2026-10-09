# Lingxi's Engineer Bot

A hands-off engineering supervisor. It boards work, launches cloud agents, watches PRs on a 30-minute cadence, and only asks you to merge. For anyone who wants this pipeline without a specific repo.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fY1xWwCLzDDGVe3GwH78j |
| Creator | Lingxi Li |
| Category | community / teams-handoffs |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/lingxi-s-engineer-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/engineer-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/fY1xWwCLzDDGVe3GwH78j), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lingxi-s-engineer-bot), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 24 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/lingxi-s-engineer-bot ~/pi-bots/lingxi-s-engineer-bot && cd ~/pi-bots/lingxi-s-engineer-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/lingxi-s-engineer-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
