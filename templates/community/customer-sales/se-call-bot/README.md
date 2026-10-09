# SE call bot

Win the call — spoken product answers, stories, doc QA, FDE/CE plays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9wmmsO_xoeLPeGEqjWLzE |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/se-call-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/se-call-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/se-call-bot), [templatebot.lol](https://templatebot.lol/bot/9wmmsO_xoeLPeGEqjWLzE), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/se-call-bot), [x-research](https://botsdots.site/templates/se-call-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/se-call-bot ~/pi-bots/se-call-bot && cd ~/pi-bots/se-call-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/se-call-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
