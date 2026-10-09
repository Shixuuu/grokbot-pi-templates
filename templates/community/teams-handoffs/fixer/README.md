# Fixer

Owns Validation Lock end to end: boards the next beat, ships code when boarded, runs cloud and Workbench ops, and issues APPROVE/HOLD/NOT CLEAR after an independent tip review. Quiet when nothing moved.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho |
| Creator | Uzi Obi ([@UziObi](https://x.com/UziObi)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/fixer-uziobi), [botsdots.site](https://botsdots.site/templates/fixer-jifk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fixer), [grokbothq.xyz](https://grokbothq.xyz/bots/fixer-2), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/jiF_km66YLNm5LBVJ5_Ho), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fixer-uzi), [x-research](https://x.com/UziObi/status/2095180617172304378) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/fixer ~/pi-bots/fixer && cd ~/pi-bots/fixer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/fixer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
