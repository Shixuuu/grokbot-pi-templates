# YieldSentinel A2H

Research checker, not a wallet. Policy check on one position. Research only. yieldsentinel.eth / Base 63771.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RFXogCwTbb2mUODW6rfVe |
| Creator | MyEnsNames.eth ([@MyEnsNames](https://x.com/MyEnsNames)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/yieldsentinel-a2h), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yieldsentinel-a2h), [grokbothq.xyz](https://grokbothq.xyz/bots/yieldsentinel-a2h), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/yieldsentinel-a2h), [x-research](https://botdirectory.ai/bots/yieldsentinel-a2h/) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/yieldsentinel-a2h ~/pi-bots/yieldsentinel-a2h && cd ~/pi-bots/yieldsentinel-a2h
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/yieldsentinel-a2h`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
