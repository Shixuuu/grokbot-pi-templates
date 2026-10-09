# YieldHunter A2H

Research desk, not a wallet. Risk-adjusted stablecoin ranks. Research only. yieldhunter.eth / Base 61006, not RNWY 12099.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WNM6of7FpZsKARFA2vsT_ |
| Creator | MyEnsNames.eth |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/yieldhunter-a2h), [grokbothq.xyz](https://grokbothq.xyz/bots/yieldhunter-a2h), [templatebot.lol](https://templatebot.lol/bot/WNM6of7FpZsKARFA2vsT_), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/yieldhunter-a2h) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/yieldhunter-a2h ~/pi-bots/yieldhunter-a2h && cd ~/pi-bots/yieldhunter-a2h
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/yieldhunter-a2h`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
