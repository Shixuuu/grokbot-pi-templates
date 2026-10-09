# Grok Bot Specialist

Answers questions about how Grok Bot works and helps keep your bot roster aligned with best practices.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ja9jU2cD4RYtLfgP34GTz |
| Creator | Yutaka Inada ([@_inady_](https://x.com/_inady_)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-bot-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-bot-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-specialist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-bot-specialist), [x-research](https://x.com/_inady_/status/2104229561429053938) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/grok-bot-specialist ~/pi-bots/grok-bot-specialist && cd ~/pi-bots/grok-bot-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/grok-bot-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
