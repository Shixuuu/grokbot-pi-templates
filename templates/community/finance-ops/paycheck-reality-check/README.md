# Paycheck Reality Check

Turns a pasted pay stub into line findings, a no-invented-rates worksheet, and a demand draft. You send everything yourself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wuUzQmWkCqaQeDQm_he85 |
| Creator | Alex ([@AlexFCHF](https://x.com/AlexFCHF)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/paycheck-reality-check), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paycheck-reality-check), [grokbothq.xyz](https://grokbothq.xyz/bots/paycheck-reality-check), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/paycheck-reality-check), [x-research](https://x.com/AlexFCHF/status/2104701612262601151) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/paycheck-reality-check ~/pi-bots/paycheck-reality-check && cd ~/pi-bots/paycheck-reality-check
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/paycheck-reality-check`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
